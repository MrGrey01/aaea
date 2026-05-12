// media.router.ts
import { ORPCError } from "@orpc/server";
import { eq, and, inArray } from "drizzle-orm";
import { z } from "zod";
import { protectedProcedure, publicProcedure } from "@/orpc/base";
import { media, albums, mediaAlbums, mediaUsage } from "@/lib/db/schema";
import { utapi } from "@/lib/uploadthing";

const isAdmin = (role: string) => role === "admin" || role === "super_admin";

const adminGuard = (role: string) => {
  if (!isAdmin(role)) {
    throw new ORPCError("FORBIDDEN", { message: "Admins only" });
  }
};

// ── Shared Zod schemas ────────────────────────────────────────────────────────

const insertMediaSchema = z.object({
  utKey:       z.string(),
  utUrl:       z.string().url(),
  blurDataUrl: z.string().optional(),
  filename:    z.string(),
  slug:        z.string(),
  alt:         z.string().optional(),
  caption:     z.string().optional(),
  mimeType:    z.string(),
  size:        z.number().int(),
  width:       z.number().int().optional(),
  height:      z.number().int().optional(),
  albumId:     z.string().uuid().optional(),
})

const updateMediaSchema = insertMediaSchema
  .partial()
  .extend({ id: z.string().uuid() })

// ── Media ─────────────────────────────────────────────────────────────────────

// Public — list active media (optionally filter by album)
const list = publicProcedure
  .input(z.object({ albumId: z.string().uuid().optional() }).optional())
  .handler(async ({ input, context }) => {
    const { db } = context;

    return db.query.media.findMany({
      where: (m, { eq, and }) =>
        input?.albumId
          ? and(eq(m.status, "active"))
          : eq(m.status, "active"),
      with: {
        mediaAlbums: { with: { album: true } },
      },
      orderBy: (m, { desc }) => [desc(m.createdAt)],
    });
  });

// Public — single media by id
const getById = publicProcedure
  .input(z.object({ id: z.string().uuid() }))
  .handler(async ({ input, context }) => {
    const { db } = context;

    const item = await db.query.media.findFirst({
      where: (m, { eq, and }) =>
        and(eq(m.id, input.id), eq(m.status, "active")),
      with: {
        mediaAlbums: { with: { album: true } },
        usages: true,
      },
    });

    if (!item) throw new ORPCError("NOT_FOUND", { message: "Media not found" });
    return item;
  });

// Admin — create (called in UploadThing onUploadComplete)
const create = protectedProcedure
  .input(insertMediaSchema)
  .handler(async ({ input, context }) => {
    const { db, user } = context;
    adminGuard(user.role);

    const [created] = await db.insert(media).values(input).returning();
    return created;
  });

// Admin — update metadata
const update = protectedProcedure
  .input(updateMediaSchema)
  .handler(async ({ input, context }) => {
    const { db, user } = context;
    adminGuard(user.role);

    const { id, ...data } = input;

    const existing = await db.query.media.findFirst({
      where: eq(media.id, id),
    });
    if (!existing) throw new ORPCError("NOT_FOUND", { message: "Media not found" });

    // If UT key changed, delete the old file from UploadThing
    if (data.utKey && data.utKey !== existing.utKey) {
      await utapi.deleteFiles(existing.utKey);
    }

    const [updated] = await db
      .update(media)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(media.id, id))
      .returning();

    return updated;
  });

// Admin — soft delete single
const remove = protectedProcedure
  .input(z.object({ id: z.string().uuid() }))
  .handler(async ({ input, context }) => {
    const { db, user } = context;
    adminGuard(user.role);

    const existing = await db.query.media.findFirst({
      where: eq(media.id, input.id),
      with: { usages: true },
    });
    if (!existing) throw new ORPCError("NOT_FOUND", { message: "Media not found" });

    // Warn if image is still in use
    if (existing.usages.length > 0) {
      throw new ORPCError("CONFLICT", {
        message: `Image is still used in ${existing.usages.length} place(s). Remove those references first.`,
      });
    }

    // Soft delete in DB
    await db
      .update(media)
      .set({ status: "deleted", updatedAt: new Date() })
      .where(eq(media.id, input.id));

    // Hard delete from UploadThing
    await utapi.deleteFiles(existing.utKey);

    return { success: true };
  });

// Admin — bulk delete
const removeBulk = protectedProcedure
  .input(z.object({ ids: z.array(z.string().uuid()).min(1) }))
  .handler(async ({ input, context }) => {
    const { db, user } = context;
    adminGuard(user.role);

    const items = await db.query.media.findMany({
      where: (m, { inArray }) => inArray(m.id, input.ids),
      with: { usages: true },
    });

    const inUse = items.filter((m) => m.usages.length > 0);
    if (inUse.length > 0) {
      throw new ORPCError("CONFLICT", {
        message: `${inUse.length} image(s) are still in use and cannot be deleted.`,
      });
    }

    // Soft delete in DB
    await db
      .update(media)
      .set({ status: "deleted", updatedAt: new Date() })
      .where(inArray(media.id, input.ids));

    // Hard delete from UploadThing in one call
    const utKeys = items.map((m) => m.utKey);
    await utapi.deleteFiles(utKeys);

    return { success: true, deleted: items.length };
  });

// Admin — assign media to album
const assignToAlbum = protectedProcedure
  .input(z.object({ mediaId: z.string().uuid(), albumId: z.string().uuid() }))
  .handler(async ({ input, context }) => {
    const { db, user } = context;
    adminGuard(user.role);

    await db
      .insert(mediaAlbums)
      .values(input)
      .onConflictDoNothing();

    return { success: true };
  });

// Admin — remove media from album
const removeFromAlbum = protectedProcedure
  .input(z.object({ mediaId: z.string().uuid(), albumId: z.string().uuid() }))
  .handler(async ({ input, context }) => {
    const { db, user } = context;
    adminGuard(user.role);

    await db
      .delete(mediaAlbums)
      .where(
        and(
          eq(mediaAlbums.mediaId, input.mediaId),
          eq(mediaAlbums.albumId, input.albumId),
        )
      );

    return { success: true };
  });

export const mediaRouter = {
  list,
  getById,
  create,
  update,
  remove,
  removeBulk,
  assignToAlbum,
  removeFromAlbum,
};