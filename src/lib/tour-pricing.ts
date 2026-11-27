import type { Lang } from "@/lib/i18n/lang";

// Confirmed 27 Nov 2026: every catalogue tour is priced at the hourly car-with-driver rate.
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

// Tour durations in hours. Keep in sync with `hours` in src/lib/sales.ts (checked by tests).
export const TOUR_HOURS: Record<string, number> = {
  sunrise: 6,
  balcoes: 5,
  "family-west": 8,
  "east-north": 8,
  funchal: 5,
  "rum-surf": 6,
  "screen-free": 6,
  wine: 7,
  food: 5,
  curral: 6,
  fanal: 8,
  camara: 5,
  blandys: 5,
  "cruise-one": 5,
  "cruise-two": 14,
  "photo-tour": 6,
};

export function tourPriceEur(id: string): number | undefined {
  const hours = TOUR_HOURS[id];
  return hours ? hours * CUSTOM_ROUTE_HOURLY_RATE_EUR : undefined;
}

const request: Record<Lang, string> = {
  en: "Price on request",
  be: "Кошт па запыце",
  uk: "Вартість за запитом",
  ru: "Стоимость по запросу",
};
const perCar: Record<Lang, string> = {
  en: `per car, up to ${CUSTOM_ROUTE_MAX_GUESTS} guests`,
  be: `за машыну, да ${CUSTOM_ROUTE_MAX_GUESTS} чалавек`,
  uk: `за авто, до ${CUSTOM_ROUTE_MAX_GUESTS} осіб`,
  ru: `за машину, до ${CUSTOM_ROUTE_MAX_GUESTS} человек`,
};
export function displayTourPrice(id: string, lang: Lang) {
  const eur = tourPriceEur(id);
  if (!eur) return request[lang];
  return lang === "en" ? `€${eur} ${perCar.en}` : `${eur} € ${perCar[lang]}`;
}

export function publicTourParagraphs(full: string, _lang: Lang) {
  return full.split("\n\n").filter(Boolean);
}
