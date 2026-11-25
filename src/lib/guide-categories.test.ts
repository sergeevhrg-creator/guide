import assert from "node:assert/strict";
import test from "node:test";

import {
  getIndexableGuideCategory,
  indexableGuideCategoryIds,
  isIndexableGuideCategory,
} from "./guide-categories.ts";

test("only content-ready guide categories are indexable", () => {
  assert.deepEqual(indexableGuideCategoryIds, ["beaches", "levadas", "mountains", "churches"]);
  assert.equal(isIndexableGuideCategory("beaches"), true);
  assert.equal(isIndexableGuideCategory("culture"), false);
  assert.equal(getIndexableGuideCategory("unknown"), undefined);
});

test("each indexable guide category has its expected written cards", () => {
  const expected = { beaches: 9, levadas: 9, mountains: 9, churches: 12 } as const;
  for (const id of indexableGuideCategoryIds) {
    const category = getIndexableGuideCategory(id);
    assert.ok(category, `missing guide category: ${id}`);
    assert.equal(category.cards.length, expected[id], `unexpected card count for ${id}`);
  }
});

test("churches guide opens with Santa Catarina and every card is written in all four languages", () => {
  const churches = getIndexableGuideCategory("churches");
  assert.ok(churches);
  assert.equal(churches.cards[0]?.id, "churches-santa-catarina");
  for (const card of churches.cards) {
    for (const lang of ["en", "be", "uk", "ru"] as const) {
      for (const field of [card.description, card.benefit, card.fit, card.practical, card.area]) {
        assert.ok(field[lang].length > 20 || field === card.area, `${card.id} ${lang} too short`);
      }
      assert.ok(!/Official guide entry/.test(card.description.en), `${card.id} is still a stub`);
    }
  }
});
