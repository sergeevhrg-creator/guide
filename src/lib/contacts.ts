export const CONTACTS = {
  phoneNumber: "+351 963 450 111",
  whatsappNumber: "+351 963 450 111",
  whatsappUrl: "https://wa.me/351963450111",
  telegramHandle: "+351 963 450 111",
  telegramUrl: "https://t.me/+351963450111",
  responseTime: "TODO_CONFIRM_REAL_RESPONSE_TIME",
} as const;

export function contactUrl(channel: "whatsapp" | "telegram", message: string) {
  const encoded = encodeURIComponent(message);
  return channel === "whatsapp"
    ? `${CONTACTS.whatsappUrl}?text=${encoded}`
    : `${CONTACTS.telegramUrl}?text=${encoded}`;
}
