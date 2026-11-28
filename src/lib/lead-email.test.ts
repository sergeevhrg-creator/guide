import { test } from "node:test";
import assert from "node:assert/strict";
import {
  leadEmailEnabled,
  leadEmailPayload,
  sendLeadEmail,
  LEAD_EMAIL_ENDPOINT,
} from "./lead-email.ts";

const lead = {
  name: "Anna",
  contact: "anna@example.com",
  channel: "Email",
  product: "Pico do Arieiro",
  message: "Hello Pavel",
  lang: "en",
};

test("email delivery is off without an access key", async () => {
  assert.equal(leadEmailEnabled(""), false);
  assert.equal(leadEmailEnabled("  "), false);
  assert.equal(leadEmailEnabled("abc"), true);
  let called = false;
  const ok = await sendLeadEmail(lead, "", (async () => {
    called = true;
    return new Response("{}");
  }) as typeof fetch);
  assert.equal(ok, false);
  assert.equal(called, false);
});

test("payload carries the request and a reply-to only for email contacts", () => {
  const p = leadEmailPayload(lead, "key");
  assert.equal(p["access_key"], "key");
  assert.equal(p["replyto"], "anna@example.com");
  assert.match(String(p["subject"]), /Pico do Arieiro — Anna/);
  assert.equal(p["message"], "Hello Pavel");
  const phone = leadEmailPayload({ ...lead, contact: "+351 900 000 000" }, "key");
  assert.equal(phone["replyto"], undefined);
});

test("sends JSON to Web3Forms and reports success or failure", async () => {
  let url = "";
  let init: RequestInit | undefined;
  const ok = await sendLeadEmail(lead, "key", (async (u: string, i: RequestInit) => {
    url = u;
    init = i;
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }) as unknown as typeof fetch);
  assert.equal(ok, true);
  assert.equal(url, LEAD_EMAIL_ENDPOINT);
  assert.equal(init?.keepalive, true);
  assert.equal(JSON.parse(String(init?.body)).name, "Anna");

  const failed = await sendLeadEmail(
    lead,
    "key",
    (async () =>
      new Response(JSON.stringify({ success: false }), { status: 200 })) as unknown as typeof fetch,
  );
  assert.equal(failed, false);
  const thrown = await sendLeadEmail(lead, "key", (async () => {
    throw new Error("offline");
  }) as unknown as typeof fetch);
  assert.equal(thrown, false);
});
