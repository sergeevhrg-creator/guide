import assert from "node:assert/strict";
import test from "node:test";

import { CONSENT_STORAGE_KEY, readConsent, saveConsent } from "./consent.ts";

test("necessary-only consent", () => {
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
    const saved = saveConsent();
    assert.deepEqual(
      {
        analytics: saved.analytics,
        marketing: saved.marketing,
        decision: saved.decision,
        version: saved.version,
      },
      { analytics: false, marketing: false, decision: "necessary", version: 2 },
    );
    assert.equal(CONSENT_STORAGE_KEY, "madeira-mosaic-consent-v2");
    assert.deepEqual(readConsent(), saved);
  } finally {
    Object.defineProperty(globalThis, "window", { configurable: true, value: originalWindow });
  }
});
