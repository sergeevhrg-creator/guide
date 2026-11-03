import assert from "node:assert/strict";
import test from "node:test";

import { salesEditorialRu } from "./sales-editorial.ts";
import { displayTourPrice, publicTourParagraphs, SHOW_DRAFT_PRICES } from "./tour-pricing.ts";

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
];

const requestCopy = {
  ru: "Стоимость по запросу",
  en: "Price on request",
  be: "Кошт па запыце",
  uk: "Вартість за запитом",
} as const;

test("unconfirmed tour prices stay out of public tour content", async (t) => {
  await t.test("draft prices are disabled", () => {
    assert.equal(SHOW_DRAFT_PRICES, false);
  });

  await t.test("all 16 current tours show price on request in every language", () => {
    for (const id of tourIds) {
      for (const [lang, expected] of Object.entries(requestCopy)) {
        assert.equal(displayTourPrice(id, lang as keyof typeof requestCopy), expected);
      }
    }
  });

  await t.test("Russian editorial data contains no numeric tour prices", () => {
    assert.equal(Object.keys(salesEditorialRu).length, 16);
    for (const tour of Object.values(salesEditorialRu)) {
      assert.doesNotMatch(`${tour.title}\n${tour.short}\n${tour.full}`, /€|€35\/час/);
    }
  });

  await t.test("paragraph rendering preserves the approved non-price disclosure", () => {
    assert.deepEqual(
      publicTourParagraphs(
        "Описание маршрута.\n\nДоступно только при подходящем расписании судна.",
        "ru",
      ),
      ["Описание маршрута.", "Доступно только при подходящем расписании судна."],
    );
  });
});
