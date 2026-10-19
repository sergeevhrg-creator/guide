import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronRight, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MosaicLogo } from "@/components/MosaicLogo";
import { MadeiraHeroMotion } from "@/components/MadeiraHeroMotion";
import { PhotoCreditsLink } from "@/components/PhotoCreditsLink";
import { SalesInquiryForm } from "@/components/SalesInquiryForm";
import { LanguageSwitcher, useLang } from "@/lib/i18n/lang";
import { CONTACTS, contactUrl, QUICK_INQUIRY } from "@/lib/contacts";
import { pavelImages } from "@/lib/poster-assets";
import { imageCredits } from "@/lib/image-credits";
import { mosaicContent } from "@/lib/mosaic-content";
import { salesTours, salesPosters, type SalesTour } from "@/lib/sales";
import { salesCopy } from "@/lib/sales-copy";
import { pavelIntroductionRu } from "@/lib/sales-editorial";
import { SalesTourCard, TourDetailsDialog, featuredTourIds, helpChooseRoute, tourTitle, transportNote, introduction, introductionTitle } from "@/components/SalesCatalog";
import { QuickContact } from "@/components/QuickContact";
export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): { lang?: "en" | "ru" | "be" | "uk" } => {
    const lang = search["lang"];
    return lang === "en" || lang === "ru" || lang === "be" || lang === "uk" ? { lang } : {};
  },
  head: ({ match }) => {
    const isRussian = match.search.lang === "ru";
    const title = isRussian
      ? "Индивидуальные экскурсии по Мадейре — Madeira Mosaic"
      : "Madeira Mosaic — Private Madeira Tours & Cruise Excursions";
    const description = isRussian
      ? "Индивидуальные экскурсии по Мадейре для небольших групп до 4 гостей: горы, океан, Фуншал, Фанал и северо-запад острова."
      : "Private Madeira tours for small groups of up to 4 guests: mountains, ocean, Funchal, Fanal and the north-west of the island.";
    const canonical = `https://guide.orthodoxmadeira.com/${isRussian ? "?lang=ru" : "?lang=en"}`;
    return {
    meta: [
      { title },
      {
        name: "description",
        content: description,
      },
      { property: "og:title", content: title },
      {
        property: "og:description",
        content: description,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: canonical },
      { rel: "alternate", hrefLang: "en", href: "https://guide.orthodoxmadeira.com/?lang=en" },
      { rel: "alternate", hrefLang: "ru", href: "https://guide.orthodoxmadeira.com/?lang=ru" },
      { rel: "alternate", hrefLang: "be", href: "https://guide.orthodoxmadeira.com/?lang=be" },
      { rel: "alternate", hrefLang: "uk", href: "https://guide.orthodoxmadeira.com/?lang=uk" },
      { rel: "alternate", hrefLang: "x-default", href: "https://guide.orthodoxmadeira.com/?lang=en" },
    ],
  };
  },
  component: HomePage,
});

function HomePage() {
 const { lang, setLang } = useLang(); const t = mosaicContent[lang];
 const search = Route.useSearch();
 useEffect(() => { if (search.lang) setLang(search.lang); }, [search.lang, setLang]);
 const [selectedTour, setSelectedTour] = useState<SalesTour | null>(null);
 const [selection, setSelection] = useState("");
 const featured = featuredTourIds.map(id => salesTours.find(x => x.id === id)).filter((x): x is SalesTour => x !== undefined);
 const programs = [t.products[2], t.products[1]].filter(p => p !== undefined);
 function openOrder(title?: string) { setSelectedTour(null); setSelection(title ?? helpChooseRoute[lang]); window.setTimeout(() => { document.getElementById("contact")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" }); }, 50); }
 return <div className="min-h-screen bg-background">
 <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md"><div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:flex sm:px-6 lg:px-8">
 <a href="#top" className="min-w-0"><MosaicLogo/></a><nav className="ml-auto hidden gap-5 text-sm font-bold lg:flex" aria-label="Main navigation"><a href="#pavel">{t.nav[3]}</a><a href="#tours">{t.nav[0]}</a><a href="#products">{t.nav[1]}</a></nav><LanguageSwitcher/><Button asChild size="sm" className="hidden bg-mosaic-leaf hover:bg-mosaic-deep sm:inline-flex"><a href={CONTACTS.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle/>WhatsApp</a></Button>
 </div></header><main>
        <section
          id="top" data-hero
          className="relative min-h-[min(680px,80svh)] overflow-hidden text-primary-foreground"
        >
          <MadeiraHeroMotion />
          <div className="absolute inset-0 bg-gradient-to-r from-mosaic-deep/90 via-mosaic-deep/45 to-transparent" />
          <div className="relative mx-auto flex min-h-[min(680px,80svh)] max-w-7xl items-end px-4 pb-12 pt-20 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-1 w-12 bg-mosaic-flower" />
                <span className="text-sm font-extrabold uppercase text-primary-foreground/90">
                  {t.heroSub}
                </span>
              </div>
              <h1 className="font-display text-4xl font-extrabold leading-[1.04] sm:text-7xl">
                {t.heroTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-primary-foreground/90 sm:text-xl">
                {t.heroText}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-13 bg-mosaic-flower px-6 font-extrabold text-mosaic-deep hover:bg-primary-foreground"
                >
                  <a href="#tours">
                    {t.toursCta}
                    <ArrowRight />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-13 border-primary-foreground/70 bg-primary-foreground/10 px-6 font-extrabold text-primary-foreground hover:bg-primary-foreground hover:text-mosaic-deep"
                >
                  <a
                    href="#contact"
                    onClick={(event) => {
                      event.preventDefault();
                      openOrder();
                    }}
                  >
                    {t.journeyCta}
                    <ChevronRight />
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-xs font-semibold text-primary-foreground/80">
                {
                  {
                    en: "No payment to inquire. Dates are confirmed personally.",
                    be: "Запыт без аплаты. Даты пацвярджаюцца асабіста.",
                    uk: "Запит без оплати. Дати підтверджуються особисто.",
                    ru: "Заявка без оплаты. Дата подтверждается лично.",
                  }[lang]
                }
              </p>
            </div>
          </div>
        </section>

        <section id="pavel" className="scroll-mt-20 bg-background py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:px-8">
            <div className="overflow-hidden rounded-2xl border border-border bg-mosaic-mist p-3 shadow-sm sm:p-4">
              <img
                src={pavelImages.portrait}
                alt={
                  {
                    en: "Pavel Sergeev, your host in Madeira",
                    be: "Павел Сяргееў, ваш гаспадар на Мадэйры",
                    uk: "Павло Сергєєв, ваш господар на Мадейрі",
                    ru: "Павел Сергеев — ваш проводник по Мадейре",
                  }[lang]
                }
                className="h-auto w-full rounded-xl object-contain"
                loading="lazy"
                width="1280"
                height="960"
              />
            </div>
            <div className="flex min-w-0 flex-col justify-center lg:py-2">
              <SectionHeading label={t.aboutLabel} title={introductionTitle[lang]} />
              <div className="mt-4 space-y-3 text-[0.95rem] leading-6 text-foreground/75">
                {(lang === "ru" ? pavelIntroductionRu : introduction[lang]).split("\n\n").map((paragraph, i) => <p key={i}>{paragraph}</p>)}
              </div>
              <p className="mt-4 border-l-2 border-mosaic-gold pl-3 text-sm leading-6 text-foreground/75">{transportNote[lang]}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                {t.aboutPoints.map((point, index) => (
                  <span
                    key={point}
                    className={`rounded px-4 py-2 text-sm font-extrabold text-primary-foreground ${["bg-mosaic-ocean", "bg-mosaic-leaf", "bg-mosaic-roof"][index] ?? "bg-mosaic-deep"}`}
                  >
                    {point}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-mosaic-leaf font-bold hover:bg-mosaic-deep"
                >
                  <a href={contactUrl("whatsapp", QUICK_INQUIRY[lang])} target="_blank" rel="noopener noreferrer">
                    <MessageCircle />
                    WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-mosaic-deep/25 font-bold text-mosaic-deep hover:bg-mosaic-mist"
                >
                  <a href={contactUrl("telegram", QUICK_INQUIRY[lang])} target="_blank" rel="noopener noreferrer">
                    <Send />
                    Telegram
                  </a>
                </Button>
                <Button onClick={() => openOrder()} variant="secondary" className="font-bold">
                  {t.journeyCta}
                </Button>
              </div>
            </div>
          </div>
        </section>

<section id="tours" className="scroll-mt-40 bg-mosaic-mist py-16 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading label={t.catalogLabel} title={t.catalogTitle}/><p className="mt-5 max-w-3xl leading-7 text-muted-foreground">{t.catalogIntro}</p><div data-sales-grid className="mt-10 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 auto-rows-fr">{featured.map(tour => <SalesTourCard key={tour.id} tour={tour} onDetails={() => setSelectedTour(tour)} onDiscuss={openOrder}/>)}</div><div className="mt-10 flex justify-center"><Button asChild size="lg" className="bg-mosaic-deep font-extrabold hover:bg-mosaic-ocean"><Link to="/tours">{allToursLabel[lang]}<ArrowRight/></Link></Button></div><p className="mt-8 max-w-4xl text-sm leading-7 text-muted-foreground">{salesCopy.extras[lang]}</p></div></section>
 <section id="products" className="scroll-mt-40 bg-background py-16 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading label="7 DAYS" title={salesCopy.programs[lang]}/><div className="mt-10 grid gap-6 md:grid-cols-2">{programs.map((p,i) => <article key={p.title} className="flex min-w-0 flex-col overflow-hidden rounded-md border border-border bg-card"><img src={lang === "ru" ? (i === 0 ? salesPosters.retreat : salesPosters.family) : imageCredits[i === 0 ? "fanal" : "seixal"].src} alt={lang === "ru" ? `${p.title} — рекламная афиша` : p.title} loading="lazy" className={lang === "ru" ? "aspect-[4/5] w-full object-contain" : "aspect-[7/5] w-full object-cover"}/><div className="flex flex-1 flex-col p-6"><h3 className="font-display text-2xl font-extrabold text-mosaic-deep">{p.title}</h3><p className="mt-4 leading-7 text-muted-foreground">{p.body}</p><strong className="mt-5 text-mosaic-deep">{salesCopy.request[lang]}</strong><div className="mt-auto flex flex-wrap gap-3 pt-6"><Button asChild variant="outline"><Link to={i === 0 ? "/week-of-silence" : "/return-to-what-matters"}>{t.details}<ChevronRight/></Link></Button><Button onClick={() => openOrder(p.title)} className="bg-mosaic-deep hover:bg-mosaic-ocean">{salesCopy.discuss[lang]}</Button></div></div></article>)}</div></div></section>
 <section id="contact" className="scroll-mt-40 bg-mosaic-mist px-4 py-16 sm:px-6 sm:py-24"><SalesInquiryForm key={lang} products={[...salesTours.map(t => tourTitle(t, lang)), ...programs.map(p => p.title)]} selected={selection} onSelect={setSelection}/></section>
 </main><footer className="bg-mosaic-deep px-4 pb-24 pt-10 text-primary-foreground sm:pb-10"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row"><MosaicLogo compact onDark/><p className="text-center text-sm leading-6 text-primary-foreground/75 sm:text-right">{t.footer}<br/>{t.footerNote}<br/><PhotoCreditsLink/></p></div></footer>
 <TourDetailsDialog tour={selectedTour} onClose={() => setSelectedTour(null)} onDiscuss={openOrder}/>
 <QuickContact onOpenForm={() => openOrder()}/>
 </div>;
}
function SectionHeading({label,title}: {label:string;title:string}) { return <div><p className="text-xs font-extrabold uppercase text-mosaic-ocean">{label}</p><h2 className="mt-3 max-w-3xl font-display text-3xl font-extrabold leading-tight text-mosaic-deep sm:text-5xl">{title}</h2></div>; }

const allToursLabel = { ru: "Посмотреть все экскурсии", en: "View all tours", be: "Паглядзець усе экскурсіі", uk: "Переглянути всі екскурсії" };
