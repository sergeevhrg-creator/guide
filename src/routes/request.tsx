import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { MosaicLogo } from "@/components/MosaicLogo";
import { PhotoCreditsLink } from "@/components/PhotoCreditsLink";
import { SalesInquiryForm } from "@/components/SalesInquiryForm";
import { helpChooseRoute, tourTitle } from "@/components/SalesCatalog";
import { LanguageSwitcher, useLang } from "@/lib/i18n/lang";
import { mosaicContent } from "@/lib/mosaic-content";
import { salesTours } from "@/lib/sales";
import { customRouteTitle } from "@/lib/custom-route";
import {
  CUSTOM_ROUTE_ID,
  inquiryModeForTour,
  requestCopy,
  tourIdForTitle,
  validateRequestSearch,
} from "@/lib/request-content";

const SITE = "https://guide.orthodoxmadeira.com";

export const Route = createFileRoute("/request")({
  validateSearch: validateRequestSearch,
  head: ({ match }) => {
    const lang = match.search.lang ?? "en";
    const c = requestCopy[lang];
    const canonical = `${SITE}/request?lang=${lang}`;
    return {
      meta: [
        { title: c.seoTitle },
        { name: "description", content: c.seoDescription },
        // A form, not a search landing page: keep it out of the index but let links pass.
        { name: "robots", content: "noindex, follow" },
        { property: "og:title", content: c.seoTitle },
        { property: "og:description", content: c.seoDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: canonical },
      ],
      links: [
        { rel: "canonical", href: canonical },
        ...(["en", "ru", "be", "uk"] as const).map((l) => ({
          rel: "alternate",
          hrefLang: l,
          href: `${SITE}/request?lang=${l}`,
        })),
        { rel: "alternate", hrefLang: "x-default", href: `${SITE}/request?lang=en` },
      ],
    };
  },
  component: RequestPage,
});

function RequestPage() {
  const { lang, setLang } = useLang();
  const search = Route.useSearch();
  useEffect(() => {
    if (search.lang) setLang(search.lang);
  }, [search.lang, setLang]);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  const c = requestCopy[lang];
  const t = mosaicContent[lang];
  const programs = [t.products[2], t.products[1]].filter((p) => p !== undefined);

  const titleOf = useMemo(
    () => (id: string) => {
      const tour = salesTours.find((x) => x.id === id);
      return tour ? tourTitle(tour, lang) : "";
    },
    [lang],
  );
  const products = [
    ...salesTours.map((x) => tourTitle(x, lang)),
    customRouteTitle(lang),
    ...programs.map((p) => p.title),
  ];

  const initial = (() => {
    if (search.tour === CUSTOM_ROUTE_ID) return customRouteTitle(lang);
    if (search.tour) return titleOf(search.tour) || helpChooseRoute[lang];
    if (search.product && products.includes(search.product)) return search.product;
    return helpChooseRoute[lang];
  })();
  const [selection, setSelection] = useState(initial);
  useEffect(() => setSelection(initial), [initial]);

  const mode = inquiryModeForTour(tourIdForTitle(selection, titleOf));

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" search={{ lang }} className="min-w-0">
            <MosaicLogo />
          </Link>
          <div className="ml-auto flex items-center gap-3">
            <LanguageSwitcher />
          </div>
        </div>
      </header>
      <main>
        <section
          id="request"
          data-track-location="request_page"
          className="bg-mosaic-mist px-4 py-12 sm:px-6 sm:py-16"
        >
          <div className="mx-auto max-w-3xl">
            <Link
              to="/tours"
              search={{ lang }}
              className="inline-flex items-center gap-2 text-sm font-bold text-mosaic-ocean"
            >
              <ArrowLeft className="h-4 w-4" />
              {c.back}
            </Link>
            <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.14em] text-mosaic-leaf">
              {c.eyebrow}
            </p>
            <h1 className="mt-2 font-display text-3xl font-extrabold leading-tight text-mosaic-deep sm:text-5xl">
              {c.title}
            </h1>
            <p className="mt-4 leading-7 text-muted-foreground">{c.intro}</p>
            <ul className="mt-5 grid gap-2 text-sm font-bold sm:grid-cols-3">
              {c.points.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-mosaic-leaf" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-2">
            <SalesInquiryForm
              key={lang}
              products={products}
              selected={selection}
              onSelect={setSelection}
              mode={mode}
              location={search.from ? `request_page_${search.from}` : "request_page"}
              hideIntro
            />
          </div>
        </section>
      </main>
      <footer className="bg-mosaic-deep px-4 pb-24 pt-10 text-primary-foreground sm:pb-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <MosaicLogo compact onDark />
          <p className="text-center text-sm leading-6 text-primary-foreground/75 sm:text-right">
            {t.footer}
            <br />
            <PhotoCreditsLink />
          </p>
        </div>
      </footer>
    </div>
  );
}
