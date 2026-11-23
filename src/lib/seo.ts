import type { Lang } from "@/lib/i18n/lang";

export function validateLangSearch(search: Record<string, unknown>): { lang?: Lang } {
  const lang = search["lang"];
  return lang === "en" || lang === "ru" || lang === "be" || lang === "uk" ? { lang } : {};
}

export function localizedSeoLinks(path: string, lang: Lang) {
  const base = `https://guide.orthodoxmadeira.com${path}`;
  return [
    { rel: "canonical", href: `${base}?lang=${lang}` },
    { rel: "alternate", hrefLang: "en", href: `${base}?lang=en` },
    { rel: "alternate", hrefLang: "ru", href: `${base}?lang=ru` },
    { rel: "alternate", hrefLang: "uk", href: `${base}?lang=uk` },
    { rel: "alternate", hrefLang: "be", href: `${base}?lang=be` },
    { rel: "alternate", hrefLang: "x-default", href: `${base}?lang=en` },
  ];
}

export const BRAND = "Madeira Mosaic";
export const SITE_URL = "https://guide.orthodoxmadeira.com";

/** Google shows roughly 60–65 characters of a title; add the brand only when the whole title still fits. */
export function titleWithBrand(title: string, max = 65) {
  const branded = `${title} | ${BRAND}`;
  return branded.length <= max ? branded : title;
}

/** Trim a meta description to ~158 characters on a word boundary. */
export function conciseMetaDescription(value: string, max = 158) {
  const clean = value.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const candidate = clean.slice(0, max - 3);
  const boundary = candidate.lastIndexOf(" ");
  const shortened = candidate.slice(0, boundary >= 100 ? boundary : max - 3);
  return `${shortened.replace(/[,:;.—–-]+$/, "").trim()}…`;
}

const tourFactsLead: Record<Lang, (duration: string) => string> = {
  ru: (d) => `Индивидуальная экскурсия на русском с гидом Павлом: ${d}, 1–4 гостя, на автомобиле.`,
  en: (d) => `Private tour with local guide Pavel: ${d}, 1–4 guests, by car.`,
  be: (d) => `Індывідуальная экскурсія па-беларуску з Паўлам: ${d}, 1–4 госці, на аўтамабілі.`,
  uk: (d) => `Індивідуальна екскурсія з гідом Павлом: ${d}, 1–4 гості, на автомобілі.`,
};

/** Search snippet for a tour: concrete facts first (format, length, group size), then the route story. */
export function tourMetaDescription(lang: Lang, duration: string, story: string) {
  return conciseMetaDescription(`${tourFactsLead[lang](duration)} ${story}`);
}
