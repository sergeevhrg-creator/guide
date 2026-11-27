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

// Extra fee on top of the hourly rate (photographer's work for the photo tour).
export const TOUR_EXTRA_EUR: Record<string, number> = { "photo-tour": 150 };
// Discounted package prices. The crossed-out price is the regular hourly-rate price.
export const TOUR_SALE_EUR: Record<string, number> = { "cruise-two": 380 };

/** Regular price: hours x hourly rate + any extra fee. */
export function tourRegularPriceEur(id: string): number | undefined {
  const hours = TOUR_HOURS[id];
  return hours ? hours * CUSTOM_ROUTE_HOURLY_RATE_EUR + (TOUR_EXTRA_EUR[id] ?? 0) : undefined;
}

// Tours whose length depends on the ship's port stay: the price is shown as a range.
export const TOUR_HOURS_MAX: Record<string, number> = { "cruise-one": 8 };

/** Upper bound of a price range, when the tour length varies. */
export function tourPriceMaxEur(id: string): number | undefined {
  const max = TOUR_HOURS_MAX[id];
  return max ? max * CUSTOM_ROUTE_HOURLY_RATE_EUR + (TOUR_EXTRA_EUR[id] ?? 0) : undefined;
}

/** Price the guest pays (sale price if any). */
export function tourPriceEur(id: string): number | undefined {
  return TOUR_SALE_EUR[id] ?? tourRegularPriceEur(id);
}

/** Discount in whole percent, rounded down so it is never overstated. */
export function tourDiscountPercent(id: string): number | undefined {
  const regular = tourRegularPriceEur(id);
  const sale = TOUR_SALE_EUR[id];
  if (!regular || !sale || sale >= regular) return undefined;
  return Math.floor(((regular - sale) / regular) * 100);
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
const insteadOf: Record<Lang, string> = {
  en: "instead of",
  be: "замест",
  uk: "замість",
  ru: "вместо",
};
export function formatEur(eur: number, lang: Lang) {
  return lang === "en" ? `€${eur}` : `${eur} €`;
}
export function tourPerCarLabel(lang: Lang) {
  return perCar[lang];
}

export function displayTourPrice(id: string, lang: Lang) {
  const eur = tourPriceEur(id);
  if (!eur) return request[lang];
  const max = tourPriceMaxEur(id);
  if (max) {
    const range = lang === "en" ? `€${eur}–${max}` : `${eur}–${max} €`;
    return `${range} ${perCar[lang]}`;
  }
  const regular = tourRegularPriceEur(id);
  const was = regular && regular > eur ? ` (${insteadOf[lang]} ${formatEur(regular, lang)})` : "";
  return `${formatEur(eur, lang)}${was} ${perCar[lang]}`;
}

export const tourExtrasNote: Record<Lang, string> = {
  en: "Entrance tickets, tastings, museums and meals are paid by guests separately.",
  be: "Уваходныя квіткі, дэгустацыі, музеі і харчаванне госці аплачваюць асобна.",
  uk: "Вхідні квитки, дегустації, музеї та харчування гості оплачують окремо.",
  ru: "Входные билеты, дегустации, музеи и питание гости оплачивают отдельно.",
};

export function publicTourParagraphs(full: string, _lang: Lang) {
  return full.split("\n\n").filter(Boolean);
}
