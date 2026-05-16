// lib/sections/seed.ts
import { client } from "@/lib/orpc";
import { SECTION_DEFAULT } from "./defaults";

const REQUIRED_SECTIONS = [
  {
    slug: "home-hero",
    pageSlug: "home",
    sectionType: "hero",
    sectionName: "Home Hero",
  },
  {
    slug: "home-carousel",
    pageSlug: "home",
    sectionType: "features",
    sectionName: "Home Carousel",
  },
  // ...
] as const;

export async function ensureSectionsExist() {
  await Promise.allSettled(
    REQUIRED_SECTIONS.map(async (meta) => {
      const existing = await client.sections.getBySlug({ slug: meta.slug });
      if (!existing) {
        await client.sections.create({
          ...meta,
          ...SECTION_DEFAULT,
          isActive: true,
          sortOrder: 0,
        });
        console.warn(`[sections] Auto-created missing section: ${meta.slug}`);
      }
    }),
  );
}
