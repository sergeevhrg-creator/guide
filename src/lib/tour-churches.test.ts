import assert from "node:assert/strict";
import test from "node:test";

import { salesEditorialRu } from "./sales-editorial.ts";
import { churches, churchCopy, tourChurches } from "./tour-churches.ts";

test("every catalogue tour visits at least one local church", () => {
  const ids = Object.keys(salesEditorialRu);
  assert.ok(ids.length >= 16);
  for (const id of ids) assert.ok(tourChurches[id]?.length, `no church for ${id}`);
});

test("Funchal tours visit the Sé and Capela de Santa Catarina", () => {
  for (const id of ["funchal", "food", "blandys"]) {
    assert.deepEqual([...(tourChurches[id] ?? [])].sort(), ["santa-catarina", "se"]);
  }
});

test("church notes exist in every language", () => {
  for (const church of Object.values(churches)) {
    for (const lang of ["ru", "uk", "be", "en"] as const) assert.ok(church.note[lang].length > 20);
  }
  for (const lang of ["ru", "uk", "be", "en"] as const) assert.ok(churchCopy.intro[lang]);
});

test("church names and notes are localized: no Portuguese words in RU/UK/BE", () => {
  for (const church of Object.values(churches)) {
    for (const lang of ["ru", "uk", "be"] as const) {
      for (const text of [church.name[lang], church.note[lang]]) {
        assert.equal(text.replace(/\b[IVXL]+\b/g, "").match(/[A-Za-zÀ-ÿ]/), null, text);
      }
    }
  }
});
