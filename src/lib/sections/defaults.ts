// lib/sections/defaults.ts
import type { SectionWithItems } from "@/lib/db/schema";

// type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] };

export const SECTION_DEFAULT: SectionWithItems = {
  id: "",
  pageSlug: "",
  sectionType: "hero",
  sectionName: "",
  slug: "",
  badge: "Badge",
  title: "Section Title",
  subtitle: "Section Subtitle",
  description: "Section Description",
  image: "/images/fallback.jpg",
  imageUtKey: null,
  imageAlt: "Section Image",
  bgImage: "/images/fallback-bg.jpg",
  bgImageUtKey: null,
  ctaText: "Learn More",
  ctaLink: "#",
  ctaSecondaryText: null,
  ctaSecondaryLink: null,
  isActive: true,
  sortOrder: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
  statItems: [],
  featureItems: [],
};
