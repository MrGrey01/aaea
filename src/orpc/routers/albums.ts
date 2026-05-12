// albums.router.ts
import { ORPCError } from "@orpc/server";
import { eq, inArray } from "drizzle-orm";
import { z } from "zod";
import { protectedProcedure, publicProcedure } from "@/orpc/base";
import { albums, media } from "@/lib/db/schema";
import { utapi } from "@/lib/uploadthing";

const adminGuard = (role: string) => {
  if (role !== "admin" && role !== "super_admin") {
    throw new ORPCError("FORBIDDEN", { message: "Admins only" });
  }
};

const insertAlbumSchema = z.object({
  name:        z.string().min(1),
  slug:        z.string().min(1),
  description: z.string().optional(),
  coverId:     z.string().uuid().optional(),
});

// Public — list all albums with cover image
const list = publicProcedure.handler(async ({ context }) => {
  const { db } = context;

  return db.query.albums.findMany({
    with: {
      mediaAlbums: {
        with: {
          media: {
            columns: {
              id: true,
              utUrl: true,
              blurDataUrl: true,
              alt: true,
            },
          },
        },
      },
    },
    orderBy: (a, { asc }) => [asc(a.name)],
  });
});

// Public — single album with all its media
const getBySlug = publicProcedure
  .input(z.object({ slug: z.string() }))
  .handler(async ({ input, context }) => {
    const { db } = context;

    const album = await db.query.albums.findFirst({
      where: (a, { eq }) => eq(a.slug, input.slug),
      with: {
        mediaAlbums: {
          with: { media: true },
          orderBy: (ma, { desc }) => [desc(ma.addedAt)],
        },
      },
    });

    if (!album) throw new ORPCError("NOT_FOUND", { message: "Album not found" });
    return album;
  });

// Admin — create
const create = protectedProcedure
  .input(insertAlbumSchema)
  .handler(async ({ input, context }) => {
    const { db, user } = context;
    adminGuard(user.role);

    const existing = await db.query.albums.findFirst({
      where: (a, { eq }) => eq(a.slug, input.slug),
    });
    if (existing) {
      throw new ORPCError("CONFLICT", { message: "Album slug already exists" });
    }

    const [created] = await db.insert(albums).values(input).returning();
    return created;
  });

// Admin — update
const update = protectedProcedure
  .input(insertAlbumSchema.partial().extend({ id: z.string().uuid() }))
  .handler(async ({ input, context }) => {
    const { db, user } = context;
    adminGuard(user.role);

    const { id, ...data } = input;

    const existing = await db.query.albums.findFirst({
      where: eq(albums.id, id),
    });
    if (!existing) throw new ORPCError("NOT_FOUND", { message: "Album not found" });

    const [updated] = await db
      .update(albums)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(albums.id, id))
      .returning();

    return updated;
  });

// Admin — delete album (does NOT delete media inside, just unlinks)
const remove = protectedProcedure
  .input(z.object({ id: z.string().uuid() }))
  .handler(async ({ input, context }) => {
    const { db, user } = context;
    adminGuard(user.role);

    const existing = await db.query.albums.findFirst({
      where: eq(albums.id, input.id),
    });
    if (!existing) throw new ORPCError("NOT_FOUND", { message: "Album not found" });

    // mediaAlbums rows cascade delete automatically via FK
    await db.delete(albums).where(eq(albums.id, input.id));

    return { success: true };
  });

// Admin — delete album AND all its media from DB + UploadThing
const removeWithMedia = protectedProcedure
  .input(z.object({ id: z.string().uuid() }))
  .handler(async ({ input, context }) => {
    const { db, user } = context;
    adminGuard(user.role);

    const album = await db.query.albums.findFirst({
      where: eq(albums.id, input.id),
      with: {
        mediaAlbums: { with: { media: true } },
      },
    });
    if (!album) throw new ORPCError("NOT_FOUND", { message: "Album not found" });

    const mediaItems = album.mediaAlbums.map((ma) => ma.media);

    if (mediaItems.length > 0) {
      // Soft delete all media in DB
      await db
        .update(media)
        .set({ status: "deleted", updatedAt: new Date() })
        .where(inArray(media.id, mediaItems.map((m) => m.id)));

      // Delete all from UploadThing in one call
      await utapi.deleteFiles(mediaItems.map((m) => m.utKey));
    }

    await db.delete(albums).where(eq(albums.id, input.id));

    return { success: true, deletedMedia: mediaItems.length };
  });

export const albumsRouter = {
  list,
  getBySlug,
  create,
  update,
  remove,
  removeWithMedia,
};