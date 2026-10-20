import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MosaicLogo } from "@/components/MosaicLogo";
import { PhotoCreditsLink } from "@/components/PhotoCreditsLink";
import { SalesInquiryForm } from "@/components/SalesInquiryForm";
import { QuickContact } from "@/components/QuickContact";
import { SalesTourCard, TourDetailsDialog, helpChooseRoute, tourTitle } from "@/components/SalesCatalog";
import { LanguageSwitcher, useLang } from "@/lib/i18n/lang";
import { CONTACTS } from "@/lib/contacts";
import { mosaicContent } from "@/lib/mosaic-content";
import { salesTours, type SalesTour } from "@/lib/sales";
import { salesCopy } from "@/lib/sales-copy";

export const Route = createFileRoute("/tours")({
  validateSearch: (search: Record<string, unknown>): { lang?: "en" | "ru" | "be" | "uk" } => {
    const lang = search["lang"];
    return lang === "en" || lang === "ru" || lang === "be" || lang === "uk" ? { lang } : {};
  },
  head: ({ match }) => {
    const lang = match.search.lang ?? "en";
    const seo = {
      en: {
        title: "All Private Madeira Tours — Madeira Mosaic",
        description: "Explore private Madeira day tours and cruise excursions for up to 4 guests: mountains, ocean, Funchal, Fanal and more.",
      },
      ru: {
        title: "Все индивидуальные экскурсии по Мадейре — Madeira Mosaic",
        description: "Выберите индивидуальную экскурсию по Мадейре для группы до 4 гостей: горы, океан, Фуншал, Фанал и другие маршруты.",
      },
      be: {
        title: "Усе індывідуальныя экскурсіі па Мадэйры — Madeira Mosaic",
        description: "Выберыце індывідуальную экскурсію па Мадэйры для групы да 4 гасцей: горы, акіян, Фуншал, Фанал і іншыя маршруты.",
      },
      uk: {
        title: "Усі індивідуальні екскурсії Мадейрою — Madeira Mosaic",
        description: "Оберіть індивідуальну екскурсію Мадейрою для групи до 4 гостей: гори, океан, Фуншал, Фанал та інші маршрути.",
      },
    }[lang];
    const canonical = `https://guide.orthodoxmadeira.com/tours?lang=${lang}`;
    return {
      meta: [
        { title: seo.title },
        { name: "description", content: seo.description },
        { property: "og:title", content: seo.title },
        { property: "og:description", content: seo.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: canonical },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        { rel: "canonical", href: canonical },
        { rel: "alternate", hrefLang: "en", href: "https://guide.orthodoxmadeira.com/tours?lang=en" },
        { rel: "alternate", hrefLang: "ru", href: "https://guide.orthodoxmadeira.com/tours?lang=ru" },
        { rel: "alternate", hrefLang: "be", href: "https://guide.orthodoxmadeira.com/tours?lang=be" },
        { rel: "alternate", hrefLang: "uk", href: "https://guide.orthodoxmadeira.com/tours?lang=uk" },
        { rel: "alternate", hrefLang: "x-default", href: "https://guide.orthodoxmadeira.com/tours?lang=en" },
      ],
    };
  },
  component: ToursPage,
});

const heading = { ru: "Все экскурсии по Мадейре", en: "All Madeira tours", be: "Усе экскурсіі па Мадэйры", uk: "Усі екскурсії Мадейрою" };
const back = { ru: "На главную", en: "Home", be: "На галоўную", uk: "На головну" };

function ToursPage() {
  const { lang, setLang } = useLang();
  const search = Route.useSearch();
  useEffect(() => { if (search.lang) setLang(search.lang); }, [search.lang, setLang]);
  const t = mosaicContent[lang];
  const [selectedTour, setSelectedTour] = useState<SalesTour | null>(null);
  const [selection, setSelection] = useState("");
  const programs = [t.products[2], t.products[1]].filter((p) => p !== undefined);
  function openOrder(title?: string) {
    setSelectedTour(null);
    setSelection(title ?? helpChooseRoute[lang]);
    window.setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  }
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" search={{ lang }} className="min-w-0"><MosaicLogo /></Link>
          <div className="ml-auto flex items-center gap-3">
            <LanguageSwitcher />
            <Button asChild size="sm" className="hidden bg-mosaic-leaf hover:bg-mosaic-deep sm:inline-flex">
              <a href={CONTACTS.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle />WhatsApp</a>
            </Button>
          </div>
        </div>
      </header>
      <main>
        <section className="bg-mosaic-mist py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link to="/" search={{ lang }} className="inline-flex items-center gap-2 text-sm font-bold text-mosaic-ocean"><ArrowLeft className="h-4 w-4" />{back[lang]}</Link>
            <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-mosaic-deep sm:text-5xl">{heading[lang]}</h1>
            <p className="mt-5 max-w-3xl leading-7 text-muted-foreground">{t.catalogIntro}</p>
            <div data-sales-grid className="mt-10 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
              {salesTours.map((tour) => <SalesTourCard key={tour.id} tour={tour} onDetails={() => setSelectedTour(tour)} onDiscuss={openOrder} />)}
            </div>
            <p className="mt-8 max-w-4xl text-sm leading-7 text-muted-foreground">{salesCopy.extras[lang]}</p>
          </div>
        </section>
        <section id="contact" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24">
          <SalesInquiryForm key={lang} products={[...salesTours.map((x) => tourTitle(x, lang)), ...programs.map((p) => p.title)]} selected={selection} onSelect={setSelection} />
        </section>
      </main>
      <footer className="bg-mosaic-deep px-4 pb-24 pt-10 text-primary-foreground sm:pb-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <MosaicLogo compact onDark />
          <p className="text-center text-sm leading-6 text-primary-foreground/75 sm:text-right">{t.footer}<br />{t.footerNote}<br /><PhotoCreditsLink /></p>
        </div>
      </footer>
      <TourDetailsDialog tour={selectedTour} onClose={() => setSelectedTour(null)} onDiscuss={openOrder} />
      <QuickContact onOpenForm={() => openOrder()} />
    </div>
  );
}
