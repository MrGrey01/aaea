import {
  pgTable,
  text,
  timestamp,
  integer,
  pgEnum,
  uuid,
  primaryKey,
} from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"
import { users } from "./user"

export const imageStatusEnum = pgEnum("image_status", ["active", "deleted"])

// ── Albums ──────────────────────────────────────────────────────────────────
export const albums = pgTable("albums", {
  id:          uuid("id").primaryKey().defaultRandom(),
  name:        text("name").notNull(),
  slug:        text("slug").notNull().unique(),
  description: text("description"),
  coverId:     uuid("cover_id"), // soft ref to media.id — no FK to avoid circular
  createdAt:   timestamp("created_at").defaultNow(),
  updatedAt:   timestamp("updated_at").defaultNow(),
})

// ── Media ────────────────────────────────────────────────────────────────────
export const media = pgTable("media", {
  id:           uuid("id").primaryKey().defaultRandom(),

  // UploadThing
  utKey:        text("ut_key").notNull().unique(),
  utUrl:        text("ut_url").notNull(),
  blurDataUrl:  text("blur_data_url"),

  // Metadata
  filename:     text("filename").notNull(),
  slug:         text("slug").notNull().unique(),
  alt:          text("alt").default(""),
  caption:      text("caption"),
  mimeType:     text("mime_type").notNull(),
  size:         integer("size").notNull(), // bytes
  width:        integer("width"),
  height:       integer("height"),
  status:       imageStatusEnum("status").default("active"),

  // Relations
  uploadedBy:   uuid("uploaded_by").references(() => users.id, { onDelete: "set null" }),

  createdAt:    timestamp("created_at").defaultNow(),
  updatedAt:    timestamp("updated_at").defaultNow(),
})

// ── Media ↔ Albums (junction) ────────────────────────────────────────────────
export const mediaAlbums = pgTable("media_albums", {
  mediaId:  uuid("media_id").notNull().references(() => media.id, { onDelete: "cascade" }),
  albumId:  uuid("album_id").notNull().references(() => albums.id, { onDelete: "cascade" }),
  addedAt:  timestamp("added_at").defaultNow(),
}, (t) => [primaryKey({ columns: [t.mediaId, t.albumId] })])

// ── Media Usage ──────────────────────────────────────────────────────────────
export const mediaUsage = pgTable("media_usage", {
  id:         uuid("id").primaryKey().defaultRandom(),
  mediaId:    uuid("media_id").notNull().references(() => media.id, { onDelete: "cascade" }),
  entityType: text("entity_type").notNull(), // "carousel", "hero", "blog_post"
  entityId:   uuid("entity_id").notNull(),
  field:      text("field").notNull(),        // "coverImage", "src"
  createdAt:  timestamp("created_at").defaultNow(),
})

// ── Relations ────────────────────────────────────────────────────────────────
export const albumsRelations = relations(albums, ({ many }) => ({
  mediaAlbums: many(mediaAlbums),
}))

export const mediaRelations = relations(media, ({ one, many }) => ({
  uploadedBy:  one(users, {
    fields:     [media.uploadedBy],
    references: [users.id],
  }),
  mediaAlbums: many(mediaAlbums),
  usages:      many(mediaUsage),
}))

export const mediaAlbumsRelations = relations(mediaAlbums, ({ one }) => ({
  media: one(media, {
    fields:     [mediaAlbums.mediaId],
    references: [media.id],
  }),
  album: one(albums, {
    fields:     [mediaAlbums.albumId],
    references: [albums.id],
  }),
}))

export const mediaUsageRelations = relations(mediaUsage, ({ one }) => ({
  media: one(media, {
    fields:     [mediaUsage.mediaId],
    references: [media.id],
  }),
}))