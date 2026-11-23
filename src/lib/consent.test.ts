import assert from "node:assert/strict";
import test from "node:test";

import { CONSENT_STORAGE_KEY, readConsent, saveConsent } from "./consent.ts";

function withWindow(run: () => void) {
  const values = new Map<string, string>();
  const originalWindow = globalThis.window;
  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: {
      localStorage: {
        getItem: (key: string) => values.get(key) ?? null,
        setItem: (key: string, value: string) => values.set(key, value),
      },
      dispatchEvent: () => true,
    },
  });
  try {
    run();
  } finally {
    Object.defineProperty(globalThis, "window", { configurable: true, value: originalWindow });
  }
}

test("consent defaults to necessary only", () => {
  withWindow(() => {
    assert.equal(readConsent(), null);
    const saved = saveConsent();
    assert.deepEqual(
      { analytics: saved.analytics, marketing: saved.marketing, decision: saved.decision },
      { analytics: false, marketing: false, decision: "necessary" },
    );
    assert.equal(CONSENT_STORAGE_KEY, "madeira-mosaic-consent-v3");
    assert.deepEqual(readConsent(), saved);
  });
});

test("consent records analytics and marketing choices separately", () => {
  withWindow(() => {
    assert.equal(saveConsent({ analytics: true, marketing: true }).decision, "all");
    assert.equal(saveConsent({ analytics: true, marketing: false }).decision, "custom");
    assert.deepEqual(
      { analytics: readConsent()?.analytics, marketing: readConsent()?.marketing },
      { analytics: true, marketing: false },
    );
  });
});
