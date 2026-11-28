import { test } from "node:test";
import assert from "node:assert/strict";
import { callbackAllowedOnPath, callbackDismissed, normalizePhone } from "./callback.ts";

test("phone needs a country code and 8–15 digits", () => {
  assert.equal(normalizePhone("+351 912 345 678"), "+351912345678");
  assert.equal(normalizePhone(" +7 (916) 123-45-67 "), "+79161234567");
  assert.equal(normalizePhone("912345678"), null);
  assert.equal(normalizePhone("+12345"), null);
  assert.equal(normalizePhone("+351 abc"), null);
  assert.equal(normalizePhone("+1234567890123456"), null);
});

test("banner stays off request and legal pages", () => {
  assert.equal(callbackAllowedOnPath("/"), true);
  assert.equal(callbackAllowedOnPath("/tours/funchal-cruise-shore-excursion"), true);
  assert.equal(callbackAllowedOnPath("/request"), false);
  assert.equal(callbackAllowedOnPath("/request/thanks"), false);
  assert.equal(callbackAllowedOnPath("/privacy"), false);
});

test("a dismissal hides the banner for three days", () => {
  const day = 24 * 60 * 60 * 1000;
  assert.equal(callbackDismissed(null, 10 * day), false);
  assert.equal(callbackDismissed(10 * day, 12 * day), true);
  assert.equal(callbackDismissed(10 * day, 13 * day + 1), false);
});
