// lib/sections/resolve-section.ts
import { SECTION_DEFAULT } from "./defaults";
import type { SectionWithItems } from "@/lib/db/schema";

export function resolveSection(
  data: SectionWithItems | null,
): SectionWithItems {
  if (!data) return SECTION_DEFAULT;

  return {
    ...SECTION_DEFAULT, // fills any missing fields
    ...data, // DB values win
    statItems: data.statItems?.length
      ? data.statItems
      : SECTION_DEFAULT.statItems,
    featureItems: data.featureItems?.length
      ? data.featureItems
      : SECTION_DEFAULT.featureItems,
  };
}
