import assert from "node:assert/strict";
import test from "node:test";

import { CONTACTS, contactUrl, QUICK_INQUIRY } from "./contacts.ts";

test("contact links", async (t) => {
  await t.test("uses one confirmed phone number for calls and WhatsApp", () => {
    assert.equal(CONTACTS.phoneNumber, "+351 963 450 111");
    assert.equal(CONTACTS.whatsappNumber, CONTACTS.phoneNumber);
    assert.equal(CONTACTS.phoneUrl, "tel:+351963450111");
    assert.equal(CONTACTS.whatsappUrl, "https://wa.me/351963450111");
  });

  await t.test("keeps the selected language in prepared messenger text", () => {
    const whatsapp = new URL(contactUrl("whatsapp", QUICK_INQUIRY.ru));
    const telegram = new URL(contactUrl("telegram", QUICK_INQUIRY.en));

    assert.equal(whatsapp.searchParams.get("text"), QUICK_INQUIRY.ru);
    assert.equal(telegram.searchParams.get("text"), QUICK_INQUIRY.en);
  });
});
