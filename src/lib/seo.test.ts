import { strict as assert } from "node:assert";
import { test } from "node:test";

import { conciseMetaDescription, titleWithBrand, tourMetaDescription } from "./seo.ts";

test("titleWithBrand adds the brand only when the title still fits", () => {
  assert.equal(titleWithBrand("Экскурсии на Мадейре"), "Экскурсии на Мадейре | Madeira Mosaic");
  const long = "Лес Фанал и северо-запад Мадейры — экскурсия на русском";
  assert.equal(titleWithBrand(long), long);
});

test("conciseMetaDescription keeps short text and trims long text on a word boundary", () => {
  assert.equal(conciseMetaDescription("  Коротко  и ясно. "), "Коротко и ясно.");
  const out = conciseMetaDescription("слово ".repeat(60));
  assert.ok(out.length <= 158, `too long: ${out.length}`);
  assert.ok(out.endsWith("…"));
  assert.ok(!out.includes("  "));
});

test("tour descriptions lead with format, length and group size", () => {
  const ru = tourMetaDescription("ru", "6 часов", "Вы встретите рассвет над облаками.");
  assert.match(ru, /^Индивидуальная экскурсия на русском с гидом Павлом: 6 часов, 1–4 гостя/);
  assert.ok(ru.length <= 158);
  const en = tourMetaDescription("en", "6 hours", "Sunrise above the clouds.");
  assert.match(en, /^Private tour with local guide Pavel: 6 hours, 1–4 guests/);
});
