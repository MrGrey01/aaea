// sections/get-section.ts

import { client } from "@/lib/orpc";

// export async function getSectionSafe(slug: string) {
//   try {
//     const section = await client.sections.getBySlug({ slug });

//     return {
//       data: section,
//       error: null,
//     };
//   } catch (error) {
//     console.error(`Missing section: ${slug}`, error);

//     return {
//       data: null,
//       error,
//     };
//   }
// }

// lib/sections/get-section.ts
export async function getSectionSafe(slug: string) {
  try {
    const section = await client.sections.getBySlug({ slug });
    if (!section) {
      // Not a thrown error — just missing. Track it.
      console.warn(`[sections] Section not found: "${slug}"`);
      // In production: Sentry.captureMessage(...) or your logger
    }
    return { data: section, error: null };
  } catch (error) {
    console.error(`[sections] Failed to fetch section: "${slug}"`, error);
    return { data: null, error };
  }
}

export const defaultSection = {
  title: "Welcome",
  subtitle: "",
  description: "",
  image: "/fallback.jpg",
  badge: "",
  bgImage: "",
  statItems: [],
  featureItems: [],
};
