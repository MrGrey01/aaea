import {
  pgTable,
  text,
  timestamp,
  integer,
  pgEnum,
  uuid,
} from "drizzle-orm/pg-core";
import { users } from "./user";

export const imageStatusEnum = pgEnum("image_status", ["active", "deleted"]);

// ── Media ────────────────────────────────────────────────────────────────────
export const media = pgTable("media", {
  id: uuid("id").primaryKey().defaultRandom(),

  // UploadThing
  utKey: text("ut_key").notNull().unique(),
  utUrl: text("ut_url").notNull(),
  blurDataUrl: text("blur_data_url"),

  // Metadata
  filename: text("filename").notNull(),
  slug: text("slug").notNull().unique(),
  alt: text("alt").default(""),
  caption: text("caption"),
  mimeType: text("mime_type").notNull(),
  size: integer("size").notNull(), // bytes
  width: integer("width"),
  height: integer("height"),
  status: imageStatusEnum("status").default("active"),

  // Relations
  uploadedBy: uuid("uploaded_by").references(() => users.id, {
    onDelete: "set null",
  }),

  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
