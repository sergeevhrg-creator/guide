import type { Lang } from "@/lib/i18n/lang";

export const openWhatsAppLabel: Record<Lang, string> = {
  en: "Open WhatsApp",
  be: "Адкрыць WhatsApp",
  uk: "Відкрити WhatsApp",
  ru: "Открыть WhatsApp",
};

export function buildInquiryMessage({
  topic,
  lang,
  name,
  contact,
  details,
}: {
  topic: string;
  lang: Lang;
  name: string;
  contact: string;
  details?: Array<[string, string]>;
}) {
  return [
    "Madeira Mosaic",
    `Topic / Тема: ${topic}`,
    `Name / Имя: ${name.trim()}`,
    `Contact / Контакт: ${contact.trim()}`,
    ...(details ?? [])
      .filter(([, value]) => value.trim().length > 0)
      .map(([label, value]) => `${label}: ${value.trim()}`),
    `Language / Язык: ${lang.toUpperCase()}`,
  ].join("\n");
}
