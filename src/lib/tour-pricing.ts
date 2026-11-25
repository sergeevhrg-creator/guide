import type { Lang } from "@/lib/i18n/lang";

// No fixed tour price is confirmed for publication. Numeric working figures are kept out of the client bundle.
export const SHOW_DRAFT_PRICES = false;

// Confirmed public rate for the "Your route" offer: car with driver, fuel, wear and insurance included.
export const CUSTOM_ROUTE_HOURLY_RATE_EUR = 30;
export const CUSTOM_ROUTE_MAX_GUESTS = 4;

const perHour: Record<Lang, string> = {
  en: "per hour",
  be: "/ гадзіна",
  uk: "/ година",
  ru: "/ час",
};
export function displayCustomRouteRate(lang: Lang) {
  return lang === "en"
    ? `€${CUSTOM_ROUTE_HOURLY_RATE_EUR} ${perHour.en}`
    : `${CUSTOM_ROUTE_HOURLY_RATE_EUR} € ${perHour[lang]}`;
}

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
