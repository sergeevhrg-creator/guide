import { guideTabs, type GuideTab } from "./guide-content.ts";

export const indexableGuideCategoryIds = ["beaches", "levadas", "mountains"] as const;

export type IndexableGuideCategoryId = (typeof indexableGuideCategoryIds)[number];

export function isIndexableGuideCategory(value: unknown): value is IndexableGuideCategoryId {
  return (
    typeof value === "string" &&
    indexableGuideCategoryIds.includes(value as IndexableGuideCategoryId)
  );
}

export function getIndexableGuideCategory(value: unknown): GuideTab | undefined {
  if (!isIndexableGuideCategory(value)) return undefined;
  return guideTabs.find((tab) => tab.id === value);
}
