// @/types/router-types.ts
import type { Outputs, Inputs } from "@/orpc/routers";

// ── Blog ─────────────────────────────────────────────────────────────────────
export type BlogPostWithRelations = Outputs["blog"]["listAll"][number];
export type BlogPostFull = Outputs["blog"]["getBySlug"];
export type BlogPostFeatured = Outputs["blog"]["listFeatured"][number];
export type BlogCategory = Outputs["blog"]["listCategories"][number];
export type BlogTag = Outputs["blog"]["listTags"][number];

// ── Media ─────────────────────────────────────────────────────────────────────
export type MediaItem              = Outputs["media"]["list"][number];
export type MediaItemFull          = Outputs["media"]["getById"];
export type MediaCreateInput       = Inputs["media"]["create"];
export type MediaUpdateInput       = Inputs["media"]["update"];

// ── Albums ────────────────────────────────────────────────────────────────────
export type Album                  = Outputs["albums"]["list"][number];
export type AlbumFull              = Outputs["albums"]["getBySlug"];

// ── Media Usage ───────────────────────────────────────────────────────────────
export type MediaUsage             = Outputs["mediaUsage"]["getUsages"][number];

// ── Convenience — image shape used across UI components ───────────────────────
export type MediaInAlbum           = AlbumFull["mediaAlbums"][number]["media"];
export type AlbumOnMedia           = MediaItemFull["mediaAlbums"][number]["album"];