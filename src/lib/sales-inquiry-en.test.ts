import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import { englishSalesInquiryMessage } from "./sales-inquiry-en.ts";
import { contactUrl } from "./contacts.ts";

const enquiry = {
  name: "Test Guest",
  contact: "test@example.com",
  channel: "WhatsApp",
  dates: "12–14 November",
  guests: 4,
  product: "Two-Day Madeira Tour for Cruise Ship Passengers",
  comment: "Coastal views",
};
describe("English sales handoff", () => {
  it("preserves the selected excursion and guest details in the WhatsApp draft", () => {
    const url = new URL(contactUrl("whatsapp", englishSalesInquiryMessage(enquiry)));
    assert.equal(url.origin + url.pathname, "https://wa.me/351963450111");
    const message = url.searchParams.get("text") ?? "";
    assert.ok(message.includes(`Tour or programme: ${enquiry.product}`));
    assert.ok(message.includes("Number of guests: 4"));
    assert.ok(message.includes(`Dates or date range: ${enquiry.dates}`));
  });
  it("keeps help choosing a route meaningful rather than sending an internal option value", () => {
    const message = englishSalesInquiryMessage({ ...enquiry, product: "choose" });
    assert.ok(message.includes("Tour or programme: Please help me choose a route"));
    assert.ok(!message.includes("Tour or programme: choose"));
  });
  it("includes cruise and photo-specific details when they are supplied", () => {
    const message = englishSalesInquiryMessage({
      ...enquiry,
      details: [
        ["Cruise ship name", "Atlantic Star"],
        ["All aboard time", "17:30"],
        ["Photographer", "I only need the route and Pavel’s accompaniment"],
      ],
    });
    assert.ok(message.includes("Cruise ship name: Atlantic Star"));
    assert.ok(message.includes("All aboard time: 17:30"));
    assert.ok(message.includes("Photographer: I only need the route and Pavel’s accompaniment"));
  });
});
