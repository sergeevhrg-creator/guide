import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { salesCopy, salesDescriptions } from "./sales-copy.ts";
import { salesEditorialEn } from "./sales-editorial-en.ts";
import { salesEditorialRu } from "./sales-editorial.ts";

const tourIds = [
  "sunrise",
  "balcoes",
  "family-west",
  "east-north",
  "funchal",
  "rum-surf",
  "screen-free",
  "wine",
  "food",
  "curral",
  "fanal",
  "camara",
  "blandys",
  "cruise-one",
  "cruise-two",
  "photo-tour",
] as const;

const languages = ["en", "be", "uk", "ru"] as const;

const blockingCopy =
  /paid separately|not included|not promised|not guaranteed|not a booking|send it yourself|оплач\S*\s+отдельно|не\s+включ\S*|не\s+обещ\S*|не\s+гарант\S*|окремо\s+оплач\S*|сплач\S*\s+асобна|€35/i;

test("tour sales copy stays complete and conversion-friendly", async (t) => {
  await t.test("all 16 tours have Russian and English editorial copy", () => {
    assert.deepEqual(Object.keys(salesEditorialRu).sort(), [...tourIds].sort());
    assert.deepEqual(Object.keys(salesEditorialEn).sort(), [...tourIds].sort());
  });

  await t.test("every language offers a free child seat", () => {
    for (const lang of languages) {
      assert.ok(salesCopy.childSeat[lang].trim());
      assert.match(
        salesCopy.childSeat[lang],
        lang === "en"
          ? /child seat.*free/i
          : lang === "be"
            ? /крэсла.*бясплат/i
            : lang === "uk"
              ? /крісло.*безплат/i
              : /кресло.*бесплат/i,
      );
    }
  });

  await t.test("public tour data contains no deterrent cost or booking disclaimers", () => {
    const editorial = [
      ...Object.values(salesEditorialRu).flatMap((tour) => [tour.title, tour.short, tour.full]),
      ...Object.values(salesEditorialEn).flatMap((tour) => [tour.title, tour.short, tour.full]),
      ...tourIds.flatMap((id) => languages.map((lang) => salesDescriptions[id][lang])),
      ...Object.values(salesCopy).flatMap((copy) => languages.map((lang) => copy[lang])),
    ].join("\n");

    assert.doesNotMatch(editorial, blockingCopy);
  });

  await t.test("active inquiry and catalogue surfaces do not reintroduce deterrent phrases", () => {
    const sourceFiles = [
      "../components/SalesCatalog.tsx",
      "../components/SalesInquiryForm.tsx",
      "../components/TourInquiryDialog.tsx",
      "../routes/tours_.$slug.tsx",
    ];
    const source = sourceFiles
      .map((relativePath) => readFileSync(new URL(relativePath, import.meta.url), "utf8"))
      .join("\n");

    assert.doesNotMatch(source, blockingCopy);
  });
});
