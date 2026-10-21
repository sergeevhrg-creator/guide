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
