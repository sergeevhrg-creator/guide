import assert from "node:assert/strict";
import test from "node:test";

import { salesEditorialRu } from "./sales-editorial.ts";
import {
  CUSTOM_ROUTE_HOURLY_RATE_EUR,
  CUSTOM_ROUTE_MAX_GUESTS,
  displayCustomRouteRate,
  displayTourPrice,
  publicTourParagraphs,
  SHOW_DRAFT_PRICES,
  TOUR_HOURS,
  tourPriceEur,
} from "./tour-pricing.ts";

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

test("catalogue tour prices follow the 30 EUR hourly rate", async (t) => {
  await t.test("draft prices stay disabled", () => {
    assert.equal(SHOW_DRAFT_PRICES, false);
  });

  await t.test("every tour has a duration and price = hours x 30", () => {
    for (const id of tourIds) {
      const hours = TOUR_HOURS[id];
      assert.ok(hours, id);
      assert.equal(tourPriceEur(id), hours * 30);
    }
    assert.equal(tourPriceEur("funchal"), 150);
    assert.equal(tourPriceEur("family-west"), 240);
  });

  await t.test("durations match the catalogue in sales.ts", async () => {
    const { readFile } = await import("node:fs/promises");
    const src = await readFile(new URL("./sales.ts", import.meta.url), "utf8");
    for (const m of src.matchAll(/id: "([\w-]+)", title:[\s\S]*?hours: (\d+), price: (\d+)/g)) {
      assert.equal(TOUR_HOURS[m[1] ?? ""], Number(m[2]), `hours for ${m[1]}`);
      assert.equal(Number(m[3]), Number(m[2]) * 30, `price for ${m[1]}`);
    }
  });

  await t.test("price is formatted per car in every language", () => {
    assert.equal(displayTourPrice("funchal", "ru"), "150 € за машину, до 4 человек");
    assert.equal(displayTourPrice("family-west", "en"), "€240 per car, up to 4 guests");
    assert.equal(displayTourPrice("funchal", "be"), "150 € за машыну, да 4 чалавек");
    assert.equal(displayTourPrice("funchal", "uk"), "150 € за авто, до 4 осіб");
    assert.equal(displayTourPrice("unknown", "ru"), requestCopy.ru);
  });

  await t.test("Russian editorial data contains no hard-coded numeric prices", () => {
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

test("Your route offer shows the confirmed hourly car-with-driver rate", async (t) => {
  await t.test("rate is 30 EUR per hour for up to 4 guests", () => {
    assert.equal(CUSTOM_ROUTE_HOURLY_RATE_EUR, 30);
    assert.equal(CUSTOM_ROUTE_MAX_GUESTS, 4);
  });

  await t.test("rate is formatted in every language", () => {
    assert.equal(displayCustomRouteRate("ru"), "30 € / час");
    assert.equal(displayCustomRouteRate("en"), "€30 per hour");
    assert.equal(displayCustomRouteRate("be"), "30 € / гадзіна");
    assert.equal(displayCustomRouteRate("uk"), "30 € / година");
  });
});
