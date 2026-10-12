export interface EnglishSalesInquiry {
  name: string;
  contact: string;
  channel: string;
  dates: string;
  guests: number;
  product: string;
  comment: string;
}

export function englishSalesInquiryMessage(data: EnglishSalesInquiry): string {
  return [
    "Hi Pavel, I’d like to discuss a Madeira Mosaic trip.",
    `Name: ${data.name}`,
    `Preferred contact method: ${data.channel}`,
    `Contact: ${data.contact}`,
    `Dates or date range: ${data.dates}`,
    `Number of guests: ${data.guests}`,
    `Tour or programme: ${data.product === "choose" ? "Please help me choose a route" : data.product}`,
    `What I’d especially like to see: ${data.comment || "—"}`,
    "Please confirm the date, meeting point and transport arrangements with me.",
    "Language: EN",
  ].join("\n");
}