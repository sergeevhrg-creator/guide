import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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
  head: () => ({
    meta: [
      { title: "All Private Madeira Tours — Madeira Mosaic" },
      { name: "description", content: "Full catalogue of 16 private Madeira day tours and cruise excursions. Up to 4 guests; prices per whole car." },
      { property: "og:title", content: "All Private Madeira Tours — Madeira Mosaic" },
      { property: "og:description", content: "Browse every Madeira route: mountains, levadas, ocean, Funchal, wine and cruise shore excursions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ToursPage,
});

const heading = { ru: "Все экскурсии по Мадейре", en: "All Madeira tours", be: "Усе экскурсіі па Мадэйры", uk: "Усі екскурсії Мадейрою" };
const back = { ru: "На главную", en: "Home", be: "На галоўную", uk: "На головну" };

function ToursPage() {
  const { lang } = useLang();
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
          <Link to="/" className="min-w-0"><MosaicLogo /></Link>
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
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-mosaic-ocean"><ArrowLeft className="h-4 w-4" />{back[lang]}</Link>
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
