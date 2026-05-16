import {
  pgTable,
  text,
  timestamp,
  uuid,
  primaryKey,
} from "drizzle-orm/pg-core";
import { media } from "./media";

// ── Albums ──────────────────────────────────────────────────────────────────
export const albums = pgTable("albums", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  coverId: uuid("cover_id"), // soft ref to media.id — no FK to avoid circular
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// ── Media ↔ Albums (junction) ────────────────────────────────────────────────
export const mediaAlbums = pgTable(
  "media_albums",
  {
    mediaId: uuid("media_id")
      .notNull()
      .references(() => media.id, { onDelete: "cascade" }),
    albumId: uuid("album_id")
      .notNull()
      .references(() => albums.id, { onDelete: "cascade" }),
    addedAt: timestamp("added_at").defaultNow(),
  },
  (t) => [primaryKey({ columns: [t.mediaId, t.albumId] })],
);

// ── Media Usage ──────────────────────────────────────────────────────────────
export const mediaUsage = pgTable("media_usage", {
  id: uuid("id").primaryKey().defaultRandom(),
  mediaId: uuid("media_id")
    .notNull()
    .references(() => media.id, { onDelete: "cascade" }),
  entityType: text("entity_type").notNull(), // "carousel", "hero", "blog_post"
  entityId: uuid("entity_id").notNull(),
  field: text("field").notNull(), // "coverImage", "src"
  createdAt: timestamp("created_at").defaultNow(),
});
