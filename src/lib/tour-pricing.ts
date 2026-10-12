import type { Lang } from "@/lib/i18n/lang";

// No tour price is confirmed for publication. Keep working figures internal.
export const SHOW_DRAFT_PRICES = false;

export const tourPricing: Record<string, { price: number | null; unit: "group" | "family" | "request"; draftPrice: boolean }> = {
  sunrise: { price: 175, unit: "group", draftPrice: true },
  balcoes: { price: 145, unit: "group", draftPrice: true },
  "family-west": { price: 195, unit: "family", draftPrice: true },
  "east-north": { price: 195, unit: "group", draftPrice: true },
  lights: { price: 110, unit: "group", draftPrice: true },
  "rum-surf": { price: 155, unit: "group", draftPrice: true },
  whales: { price: null, unit: "request", draftPrice: false },
  "yacht-sunset": { price: null, unit: "request", draftPrice: false },
  "screen-free": { price: 175, unit: "group", draftPrice: true },
  wine: { price: 175, unit: "group", draftPrice: true },
  food: { price: 155, unit: "group", draftPrice: true },
};

const request: Record<Lang, string> = {
  en: "Price on request", be: "Кошт па запыце", uk: "Вартість за запитом", ru: "Стоимость по запросу",
};
const draft: Record<Lang, string> = {
  en: "Working price · confirm before booking", be: "Папярэдняя цана · удакладніць перад браніраваннем",
  uk: "Попередня ціна · уточнити перед бронюванням", ru: "Рабочая цена · уточнить перед бронированием",
};
const group: Record<Lang, string> = { en: "group", be: "група", uk: "група", ru: "группа" };
const family: Record<Lang, string> = { en: "family", be: "сям'я", uk: "родина", ru: "семья" };

export function displayTourPrice(id: string, lang: Lang) {
  const info = tourPricing[id];
  if (!info || info.price === null || (info.draftPrice && !SHOW_DRAFT_PRICES)) return request[lang];
  return `€${info.price} / ${info.unit === "family" ? family[lang] : group[lang]} · ${draft[lang]}`;
}