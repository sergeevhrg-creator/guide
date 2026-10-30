export const CONTACTS = {
  phoneNumber: "+351 963 450 111",
  phoneUrl: "tel:+351963450111",
  whatsappNumber: "+351 963 450 111",
  whatsappUrl: "https://wa.me/351963450111",
  telegramHandle: "+351 963 450 111",
  telegramUrl: "https://t.me/+351963450111",
} as const;

export const QUICK_INQUIRY = {
  ru: "Здравствуйте, Павел! Хочу подобрать экскурсию по Мадейре. Подскажите, пожалуйста, с чего начать.",
  en: "Hello Pavel! I would like help choosing a private tour in Madeira. Could you please suggest where to start?",
  be: "Вітаю, Павел! Хачу выбраць экскурсію па Мадэйры. Падкажыце, калі ласка, з чаго пачаць.",
  uk: "Вітаю, Павле! Хочу обрати екскурсію Мадейрою. Підкажіть, будь ласка, з чого почати.",
} as const;

export function contactUrl(channel: "whatsapp" | "telegram", message: string) {
  const encoded = encodeURIComponent(message);
  return channel === "whatsapp"
    ? `${CONTACTS.whatsappUrl}?text=${encoded}`
    : `${CONTACTS.telegramUrl}?text=${encoded}`;
}
