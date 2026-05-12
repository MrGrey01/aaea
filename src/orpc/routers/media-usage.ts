// media-usage.router.ts
import { ORPCError } from "@orpc/server";
import { eq, and } from "drizzle-orm";
import { z } from "zod";
import { protectedProcedure } from "@/orpc/base";
import { mediaUsage } from "@/lib/db/schema";

const adminGuard = (role: string) => {
  if (role !== "admin" && role !== "super_admin") {
    throw new ORPCError("FORBIDDEN", { message: "Admins only" });
  }
};

const upsertUsageSchema = z.object({
  mediaId:    z.string().uuid(),
  entityType: z.string(),
  entityId:   z.string().uuid(),
  field:      z.string(),
});

// Track where an image is used — call this when saving any entity
const track = protectedProcedure
  .input(upsertUsageSchema)
  .handler(async ({ input, context }) => {
    const { db } = context;

    await db
      .insert(mediaUsage)
      .values(input)
      .onConflictDoNothing();

    return { success: true };
  });

// Remove a usage record — call this when an entity is deleted or image swapped
const untrack = protectedProcedure
  .input(z.object({
    entityType: z.string(),
    entityId:   z.string().uuid(),
    field:      z.string(),
  }))
  .handler(async ({ input, context }) => {
    const { db } = context;

    await db
      .delete(mediaUsage)
      .where(
        and(
          eq(mediaUsage.entityType, input.entityType),
          eq(mediaUsage.entityId,   input.entityId),
          eq(mediaUsage.field,      input.field),
        )
      );

    return { success: true };
  });

// Get all usages for a given media item — shown before deletion
const getUsages = protectedProcedure
  .input(z.object({ mediaId: z.string().uuid() }))
  .handler(async ({ input, context }) => {
    const { db, user } = context;
    adminGuard(user.role);

    return db.query.mediaUsage.findMany({
      where: eq(mediaUsage.mediaId, input.mediaId),
    });
  });

export const mediaUsageRouter = {
  track,
  untrack,
  getUsages,
};