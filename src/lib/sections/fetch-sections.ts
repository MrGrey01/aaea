// lib/sections/fetch-sections.ts
import { getSectionSafe } from "./get-section";
import { resolveSection } from "./resolve-section";
import type { SectionWithItems } from "@/lib/db/schema";

export async function fetchSections<T extends string>(
  slugs: T[],
): Promise<Record<T, SectionWithItems>> {
  const results = await Promise.allSettled(
    slugs.map((slug) => getSectionSafe(slug)),
  );

  return Object.fromEntries(
    slugs.map((slug, i) => {
      const result = results[i];
      const data = result.status === "fulfilled" ? result.value.data : null;
      return [slug, resolveSection(data)];
    }),
  ) as Record<T, SectionWithItems>;
}
