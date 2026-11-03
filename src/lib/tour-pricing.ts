import type { Lang } from "@/lib/i18n/lang";

// No tour price is confirmed for publication. Numeric working figures are kept out of the client bundle.
export const SHOW_DRAFT_PRICES = false;

const request: Record<Lang, string> = {
  en: "Price on request",
  be: "Кошт па запыце",
  uk: "Вартість за запитом",
  ru: "Стоимость по запросу",
};
export function displayTourPrice(_id: string, lang: Lang) {
  return request[lang];
}

export function publicTourParagraphs(full: string, _lang: Lang) {
  return full.split("\n\n").filter(Boolean);
}
