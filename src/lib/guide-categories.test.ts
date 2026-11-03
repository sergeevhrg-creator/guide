import assert from "node:assert/strict";
import test from "node:test";

import {
  getIndexableGuideCategory,
  indexableGuideCategoryIds,
  isIndexableGuideCategory,
} from "./guide-categories.ts";

test("only content-ready guide categories are indexable", () => {
  assert.deepEqual(indexableGuideCategoryIds, ["beaches", "levadas", "mountains"]);
  assert.equal(isIndexableGuideCategory("beaches"), true);
  assert.equal(isIndexableGuideCategory("culture"), false);
  assert.equal(getIndexableGuideCategory("unknown"), undefined);
});

test("each indexable guide category contains nine existing cards", () => {
  for (const id of indexableGuideCategoryIds) {
    const category = getIndexableGuideCategory(id);
    assert.ok(category, `missing guide category: ${id}`);
    assert.equal(category.cards.length, 9, `unexpected card count for ${id}`);
  }
});
