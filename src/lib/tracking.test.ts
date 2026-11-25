import assert from "node:assert/strict";
import test from "node:test";

import { CONSENT_STORAGE_KEY } from "./consent.ts";
import {
  attributionFromUrl,
  CONSENT_KEY_FOR_BOOTSTRAP,
  contactChannelForHref,
  GTM_IDS,
  sourceLine,
  sourceSummary,
  trackingBootstrapScript,
} from "./tracking.ts";

test("ad attribution is read from campaign URLs", () => {
  const a = attributionFromUrl(
    "?utm_source=google&utm_medium=cpc&utm_campaign=shrines-ru&gclid=abc",
    "https://www.google.com/",
    "/request",
  );
  assert.equal(sourceSummary(a), "google / cpc / shrines-ru");
  assert.equal(sourceLine("ru", a), "Источник: google / cpc / shrines-ru");
  assert.equal(sourceLine("en", a), "Source: google / cpc / shrines-ru");
});

test("auto-tagged Google Ads clicks without UTM are labelled", () => {
  assert.equal(sourceSummary(attributionFromUrl("?gclid=xyz", "", "/")), "Google Ads");
});

test("internal and direct visits add no source line", () => {
  assert.equal(attributionFromUrl("", "", "/"), null);
  assert.equal(attributionFromUrl("", "https://guide.orthodoxmadeira.com/tours", "/request"), null);
  assert.equal(sourceLine("ru", null), "");
});

test("contact links are classified by channel", () => {
  assert.equal(contactChannelForHref("https://wa.me/351963450111?text=hi"), "whatsapp");
  assert.equal(contactChannelForHref("https://t.me/pavel"), "telegram");
  assert.equal(contactChannelForHref("tel:+351963450111"), "phone");
  assert.equal(contactChannelForHref("/tours"), null);
});

test("tag bootstrap denies consent by default and loads the GTM container", () => {
  assert.equal(CONSENT_KEY_FOR_BOOTSTRAP, CONSENT_STORAGE_KEY);
  assert.match(trackingBootstrapScript, /gtag\('consent','default',\{ad_storage:'denied'/);
  assert.ok(
    trackingBootstrapScript.indexOf("consent','default'") <
      trackingBootstrapScript.indexOf("gtm.js?id="),
  );
  for (const id of GTM_IDS) assert.ok(trackingBootstrapScript.includes(id));
  assert.deepEqual([...GTM_IDS], ["GTM-TFQC4VTX"]);
});

test("messengers open in the same tab only on touch-only devices", async () => {
  const { sameTabForMessengers } = await import("./tracking.ts");
  const media = (coarse: boolean, hover: boolean) => (q: string) => ({
    matches: q === "(pointer: coarse)" ? coarse : q === "(hover: hover)" ? hover : false,
  });
  assert.equal(sameTabForMessengers(media(true, false)), true); // phone / tablet
  assert.equal(sameTabForMessengers(media(false, true)), false); // computer
  assert.equal(sameTabForMessengers(media(true, true)), false); // touch laptop with trackpad
  assert.equal(sameTabForMessengers(undefined), false); // server render
});
