import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronRight, Menu, MessageCircle, Phone, Send, X } from "lucide-react";
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
    const lang = match.search.lang ?? "en";
    const seo = {
      en: {
        title: "Madeira Mosaic — Private Madeira Tours & Cruise Excursions",
        description: "Private Madeira tours for small groups of up to 4 guests: mountains, ocean, Funchal, Fanal and the north-west of the island.",
        keywords: "Madeira private tours, private guided tours Madeira, Madeira day tours, Funchal private tours, Funchal shore excursions, Pico do Areeiro sunrise tour",
      },
      ru: {
        title: "Индивидуальные экскурсии по Мадейре — Madeira Mosaic",
        description: "Индивидуальные экскурсии по Мадейре на русском языке для 1–4 гостей: Пику-ду-Арейру, Фуншал, Фанал, Сейшал и Порту-Мониш.",
        keywords: "индивидуальные экскурсии на Мадейре, экскурсии на Мадейре на русском языке, частные экскурсии по Мадейре, экскурсия из порта Фуншал",
      },
      be: {
        title: "Індывідуальныя экскурсіі па Мадэйры — Madeira Mosaic",
        description: "Індывідуальныя экскурсіі па Мадэйры для невялікіх груп да 4 гасцей: горы, акіян, Фуншал, Фанал і паўночны захад вострава.",
        keywords: "індывідуальныя экскурсіі па Мадэйры, экскурсіі па Мадэйры, беларускамоўны гід на Мадэйры, прыватныя туры па Мадэйры",
      },
      uk: {
        title: "Індивідуальні екскурсії Мадейрою — Madeira Mosaic",
        description: "Індивідуальні екскурсії Мадейрою для невеликих груп до 4 гостей: гори, океан, Фуншал, Фанал і північний захід острова.",
        keywords: "індивідуальні екскурсії на Мадейрі, екскурсії на Мадейрі, приватні тури Мадейрою, екскурсія з порту Фуншал",
      },
    }[lang];
    const canonical = `https://guide.orthodoxmadeira.com/?lang=${lang}`;
    return {
      meta: [
        { title: seo.title },
        {
          name: "description",
          content: seo.description,
        },
        { name: "keywords", content: seo.keywords },
        { property: "og:title", content: seo.title },
        {
          property: "og:description",
          content: seo.description,
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
 const [mobileNavOpen, setMobileNavOpen] = useState(false);
 const mobileNavButtonRef = useRef<HTMLButtonElement>(null);
 const mobileNavContainerRef = useRef<HTMLDivElement>(null);
 useEffect(() => {
   if (!mobileNavOpen) return;
   const closeOnEscape = (event: KeyboardEvent) => {
     if (event.key === "Escape") {
       setMobileNavOpen(false);
       mobileNavButtonRef.current?.focus();
     }
   };
   const closeOnPointerDown = (event: PointerEvent) => {
     if (!mobileNavContainerRef.current?.contains(event.target as Node)) setMobileNavOpen(false);
   };
   document.addEventListener("keydown", closeOnEscape);
   document.addEventListener("pointerdown", closeOnPointerDown);
   return () => {
     document.removeEventListener("keydown", closeOnEscape);
     document.removeEventListener("pointerdown", closeOnPointerDown);
   };
 }, [mobileNavOpen]);
 const featured = featuredTourIds.map(id => salesTours.find(x => x.id === id)).filter((x): x is SalesTour => x !== undefined);
 const programs = [t.products[2], t.products[1]].filter(p => p !== undefined);
 function openOrder(title?: string) { setSelectedTour(null); setSelection(title ?? helpChooseRoute[lang]); window.setTimeout(() => { document.getElementById("contact")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" }); }, 50); }
 const pavelParagraphs = (lang === "ru" ? pavelIntroductionRu : introduction[lang]).split("\n\n");
 const pavelCta = { ru: "Подобрать экскурсию с Павлом", en: "Plan a tour with Pavel", be: "Падабраць экскурсію з Паўлам", uk: "Підібрати екскурсію з Павлом" }[lang];
 const pavelCall = { ru: "Позвонить", en: "Call", be: "Патэлефанаваць", uk: "Зателефонувати" }[lang];
 const pavelMore = { ru: "Подробнее о Павле", en: "More about Pavel", be: "Больш пра Паўла", uk: "Докладніше про Павла" }[lang];
 const mobileMenuLabel = { ru: "Меню", en: "Menu", be: "Меню", uk: "Меню" }[lang];
 const mobileMenuCloseLabel = { ru: "Закрыть меню", en: "Close menu", be: "Закрыць меню", uk: "Закрити меню" }[lang];
 return <div className="min-h-screen bg-background">
 <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md"><div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:flex sm:px-6 lg:px-8">
 <a href="#top" className="min-w-0"><MosaicLogo/></a><nav className="ml-auto hidden gap-5 text-sm font-bold lg:flex" aria-label="Main navigation"><a href="#pavel">{t.nav[3]}</a><a href="#tours">{t.nav[0]}</a><a href="#products">{t.nav[1]}</a><Link to="/madeira-guide" search={{ lang }}>{t.nav[2]}</Link></nav><div ref={mobileNavContainerRef} className="relative ml-auto flex items-center gap-2 lg:ml-0"><LanguageSwitcher/><Button ref={mobileNavButtonRef} type="button" size="icon" variant="outline" className="shrink-0 lg:hidden" aria-label={mobileNavOpen ? mobileMenuCloseLabel : mobileMenuLabel} aria-expanded={mobileNavOpen} aria-controls="mobile-main-navigation" onClick={() => setMobileNavOpen(open => !open)}>{mobileNavOpen ? <X aria-hidden/> : <Menu aria-hidden/>}</Button><Button asChild size="sm" className="hidden bg-mosaic-leaf hover:bg-mosaic-deep sm:inline-flex"><a href={CONTACTS.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle/>WhatsApp</a></Button>{mobileNavOpen && <nav id="mobile-main-navigation" aria-label={mobileMenuLabel} className="absolute right-0 top-[calc(100%+0.75rem)] z-50 grid w-[min(20rem,calc(100vw-2rem))] gap-1 rounded-xl border border-border bg-background p-2 text-sm font-bold shadow-xl lg:hidden"><a href="#pavel" onClick={() => setMobileNavOpen(false)} className="rounded-lg px-4 py-3 hover:bg-mosaic-mist focus-visible:bg-mosaic-mist">{t.nav[3]}</a><a href="#tours" onClick={() => setMobileNavOpen(false)} className="rounded-lg px-4 py-3 hover:bg-mosaic-mist focus-visible:bg-mosaic-mist">{t.nav[0]}</a><a href="#products" onClick={() => setMobileNavOpen(false)} className="rounded-lg px-4 py-3 hover:bg-mosaic-mist focus-visible:bg-mosaic-mist">{t.nav[1]}</a><Link to="/madeira-guide" search={{ lang }} onClick={() => setMobileNavOpen(false)} className="rounded-lg px-4 py-3 hover:bg-mosaic-mist focus-visible:bg-mosaic-mist">{t.nav[2]}</Link></nav>}</div>
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
          <div className="mx-auto grid max-w-6xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
            <div className="grid gap-3 lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-border bg-mosaic-mist p-3 shadow-sm sm:p-4">
                <img
                  src={pavelImages.portrait}
                  alt={{ en: "Pavel Sergeev in Madeira", be: "Павел Сяргееў на Мадэйры", uk: "Павло Сергєєв на Мадейрі", ru: "Павел Сергеев на Мадейре" }[lang]}
                  className="block h-auto w-full rounded-xl object-contain"
                  loading="lazy"
                  width="1280"
                  height="960"
                />
              </div>
              <div className="grid grid-cols-2 gap-3" aria-label={lang === "ru" ? "Мадейра глазами Павла" : "Madeira through Pavel's eyes"}>
                <img src={imageCredits["pico-arieiro"].src} alt={lang === "ru" ? "Горы Мадейры" : "Madeira mountains"} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />
                <img src={imageCredits["home-coast"].src} alt={lang === "ru" ? "Побережье Мадейры" : "Madeira coast"} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />
              </div>
            </div>
            <div className="flex min-w-0 flex-col justify-center lg:col-span-7 lg:py-2">
              <SectionHeading label={t.aboutLabel} title={introductionTitle[lang]} />
              <div className="mt-4 space-y-3 text-[0.95rem] leading-6 text-foreground/75">
                {pavelParagraphs.slice(0, 2).map((paragraph, i) => <p key={i}>{paragraph}</p>)}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {t.aboutPoints.map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-mosaic-ocean/20 bg-mosaic-mist px-4 py-2 text-sm font-extrabold text-mosaic-deep"
                  >
                    {point}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Button onClick={() => openOrder()} className="h-auto min-h-11 whitespace-normal bg-mosaic-deep py-3 text-center font-bold hover:bg-mosaic-ocean">
                  {pavelCta}<ArrowRight />
                </Button>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="outline" className="h-auto min-h-11 whitespace-normal border-mosaic-deep/25 py-3 text-center font-bold text-mosaic-deep hover:bg-mosaic-mist"><a href={contactUrl("whatsapp", QUICK_INQUIRY[lang])} target="_blank" rel="noopener noreferrer"><MessageCircle />WhatsApp</a></Button>
                  <Button asChild variant="ghost" className="h-auto min-h-11 whitespace-normal py-3 text-center font-bold text-mosaic-deep hover:bg-mosaic-mist"><a href={contactUrl("telegram", QUICK_INQUIRY[lang])} target="_blank" rel="noopener noreferrer"><Send />Telegram</a></Button>
                  <Button asChild variant="ghost" className="h-auto min-h-11 whitespace-normal py-3 text-center font-bold text-mosaic-deep hover:bg-mosaic-mist"><a href={CONTACTS.phoneUrl} aria-label={`${pavelCall}: ${CONTACTS.phoneNumber}`}><Phone />{pavelCall}</a></Button>
                </div>
              </div>
              {pavelParagraphs.length > 2 && <details className="group mt-6 rounded-xl border border-border bg-card p-4">
                <summary className="cursor-pointer list-none font-bold text-mosaic-deep marker:hidden">{pavelMore}<ChevronRight className="ml-1 inline h-4 w-4 transition-transform group-open:rotate-90" /></summary>
                <div className="mt-4 space-y-3 text-[0.95rem] leading-6 text-foreground/75">{pavelParagraphs.slice(2).map((paragraph, i) => <p key={i}>{paragraph}</p>)}</div>
              </details>}
              <p className="mt-4 border-l-2 border-mosaic-gold pl-3 text-sm leading-6 text-foreground/75">{transportNote[lang]}</p>
            </div>
          </div>
        </section>

<section id="tours" className="scroll-mt-40 bg-mosaic-mist py-16 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading label={t.catalogLabel} title={t.catalogTitle}/><p className="mt-5 max-w-3xl leading-7 text-muted-foreground">{t.catalogIntro}</p><div data-sales-grid className="mt-10 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 auto-rows-fr">{featured.map(tour => <SalesTourCard key={tour.id} tour={tour} onDetails={() => setSelectedTour(tour)} onDiscuss={openOrder}/>)}</div><div className="mt-10 flex justify-center"><Button asChild size="lg" className="bg-mosaic-deep font-extrabold hover:bg-mosaic-ocean"><Link to="/tours" search={{ lang }}>{allToursLabel[lang]}<ArrowRight/></Link></Button></div><p className="mt-8 max-w-4xl text-sm leading-7 text-muted-foreground">{salesCopy.extras[lang]}</p></div></section>
 <section id="guide" className="scroll-mt-24 bg-background py-16 sm:py-24">
   <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
     <div className="lg:col-span-5">
       <SectionHeading label={t.guideLabel} title={t.guideTitle}/>
       <p className="mt-5 max-w-xl leading-7 text-muted-foreground">{t.guideText}</p>
       <Button asChild size="lg" className="mt-7 bg-mosaic-deep font-extrabold hover:bg-mosaic-ocean">
         <Link to="/madeira-guide" search={{ lang }}>{t.guideLink}<ArrowRight/></Link>
       </Button>
     </div>
     <div className="grid grid-cols-2 gap-3 lg:col-span-7" aria-label={t.guideTitle}>
       <img src={imageCredits["seixal"].src} alt={imageCredits["seixal"].alt[lang]} loading="lazy" className="col-span-2 aspect-[16/7] w-full rounded-2xl object-cover" />
       <img src={imageCredits["food"].src} alt={imageCredits["food"].alt[lang]} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
       <img src={imageCredits["fireworks"].src} alt={imageCredits["fireworks"].alt[lang]} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
     </div>
   </div>
 </section>
 <section id="products" className="scroll-mt-40 bg-background py-16 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading label="7 DAYS" title={salesCopy.programs[lang]}/><div className="mt-10 grid gap-6 md:grid-cols-2">{programs.map((p,i) => <article key={p.title} className="flex min-w-0 flex-col overflow-hidden rounded-md border border-border bg-card"><img src={lang === "ru" ? (i === 0 ? salesPosters.retreat : salesPosters.family) : imageCredits[i === 0 ? "fanal" : "seixal"].src} alt={lang === "ru" ? `${p.title} — рекламная афиша` : p.title} loading="lazy" className={lang === "ru" ? "aspect-[4/5] w-full object-contain" : "aspect-[7/5] w-full object-cover"}/><div className="flex flex-1 flex-col p-6"><h3 className="font-display text-2xl font-extrabold text-mosaic-deep">{p.title}</h3><p className="mt-4 leading-7 text-muted-foreground">{p.body}</p><strong className="mt-5 text-mosaic-deep">{salesCopy.request[lang]}</strong><div className="mt-auto flex flex-wrap gap-3 pt-6"><Button asChild variant="outline"><Link to={i === 0 ? "/week-of-silence" : "/return-to-what-matters"} search={{ lang }}>{t.details}<ChevronRight/></Link></Button><Button onClick={() => openOrder(p.title)} className="bg-mosaic-deep hover:bg-mosaic-ocean">{salesCopy.discuss[lang]}</Button></div></div></article>)}</div></div></section>
 <section id="contact" className="scroll-mt-40 bg-mosaic-mist px-4 py-16 sm:px-6 sm:py-24"><SalesInquiryForm key={lang} products={[...salesTours.map(t => tourTitle(t, lang)), ...programs.map(p => p.title)]} selected={selection} onSelect={setSelection}/></section>
 </main><footer className="bg-mosaic-deep px-4 pb-24 pt-10 text-primary-foreground sm:pb-10"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row"><MosaicLogo compact onDark/><p className="text-center text-sm leading-6 text-primary-foreground/75 sm:text-right">{t.footer}<br/>{t.footerNote}<br/><PhotoCreditsLink/></p></div></footer>
 <TourDetailsDialog tour={selectedTour} onClose={() => setSelectedTour(null)} onDiscuss={openOrder}/>
 <QuickContact onOpenForm={() => openOrder()}/>
 </div>;
}
function SectionHeading({label,title}: {label:string;title:string}) { return <div><p className="text-xs font-extrabold uppercase text-mosaic-ocean">{label}</p><h2 className="mt-3 max-w-3xl font-display text-3xl font-extrabold leading-tight text-mosaic-deep sm:text-5xl">{title}</h2></div>; }

const allToursLabel = { ru: "Посмотреть все экскурсии", en: "View all tours", be: "Паглядзець усе экскурсіі", uk: "Переглянути всі екскурсії" };
