/* eslint-disable @typescript-eslint/no-explicit-any */
import { getPlaiceholder } from "plaiceholder";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { media } from "@/lib/db/schema";
import { requireMinRoleUploadThing } from "@/lib/auth/adapters";
import slugify from "slugify";

const f = createUploadthing();

async function requireAdmin() {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
  if (session.user.role !== "admin" && session.user.role !== "super_admin") {
    throw new Error("Forbidden");
  }

  return session.user;
}

export const ourFileRouter = {
  // manager avatar uploader
  userAvatar: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
  })
    .middleware(async () => {
      const user = await requireAdmin();
      return { userId: user.id };
    })
    .onUploadComplete(async ({ file }) => {
      return { url: file.ufsUrl };
    }),

  // image gallery uploader
  galleryUploader: f({ image: { maxFileSize: "8MB", maxFileCount: 10 } })
    .middleware(async () => {
      const user = await requireAdmin();
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      return { url: file.ufsUrl, key: file.key, name: file.name };
    }),

  // simple image upload route
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async ({ req }) => {
      const user = await requireMinRoleUploadThing("photographer");

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.ufsUrl);
      return { uploadedBy: metadata.userId };
    }),

  // ── Media library uploader ────────────────────────────────────────────────
  mediaUploader: f({ image: { maxFileSize: "8MB", maxFileCount: 20 } })
    .middleware(async () => {
      const user = await requireAdmin();
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // ── Blur placeholder ────────────────────────────────────────────────
      let blurDataUrl: string | null = null;
      try {
        // fetch the uploaded image as a buffer for plaiceholder
        const res = await fetch(file.ufsUrl);
        const buffer = Buffer.from(await res.arrayBuffer());
        const { base64 } = await getPlaiceholder(buffer);
        blurDataUrl = base64;
      } catch (err) {
        // non-critical — Next.js Image will just skip the blur
        console.warn("plaiceholder failed for", file.name, err);
      }

      // ── Image dimensions ────────────────────────────────────────────────
      // UploadThing provides these via appUrl metadata on some plans;
      // fall back to null if unavailable — update via media.update later
      const width = (file as any).width ?? null;
      const height = (file as any).height ?? null;

      // ── Unique slug ─────────────────────────────────────────────────────
      const baseSlug = slugify(file.name.replace(/\.[^/.]+$/, ""), {
        lower: true,
        strict: true,
      });
      // Append short suffix to guarantee uniqueness
      const slug = `${baseSlug}-${file.key.slice(-6)}`;

      // ── Save to DB ──────────────────────────────────────────────────────
      const [created] = await db
        .insert(media)
        .values({
          utKey: file.key,
          utUrl: file.ufsUrl,
          blurDataUrl,
          filename: file.name,
          slug,
          alt: "",
          mimeType: file.type ?? "image/jpeg",
          size: file.size,
          width,
          height,
          uploadedBy: metadata.userId,
        })
        .returning();

      // Return to client so onClientUploadComplete has the full DB record
      return {
        id: created.id,
        utKey: created.utKey,
        utUrl: created.utUrl,
        blurDataUrl: created.blurDataUrl,
        slug: created.slug,
        width: created.width,
        height: created.height,
      };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
