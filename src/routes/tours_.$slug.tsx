import { createFileRoute, notFound } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Clock3,
  MapPin,
  MessageCircle,
  Route as RouteIcon,
  Send,
  Users,
} from "lucide-react";

import { MosaicLogo } from "@/components/MosaicLogo";
import { PhotoCreditsLink } from "@/components/PhotoCreditsLink";
import { QuickContact } from "@/components/QuickContact";
import { SalesInquiryForm } from "@/components/SalesInquiryForm";
import { Button } from "@/components/ui/button";
import photoTourCover from "@/assets/sales/31-photo-tour-madeira-textless-v1.webp";
import { contactUrl } from "@/lib/contacts";
import { imageCredits } from "@/lib/image-credits";
import { useLang } from "@/lib/i18n/lang";
import { salesEditorialEn } from "@/lib/sales-editorial-en";
import { salesEditorialRu } from "@/lib/sales-editorial";
import { salesCopy } from "@/lib/sales-copy";
import { salesDescriptions } from "@/lib/sales-descriptions";
import { salesTours } from "@/lib/sales";
import { displayTourPrice } from "@/lib/tour-pricing";
import { getTourPageBySlug, tourPages, type TourPageLang } from "@/lib/tour-pages";
import type { TourPageConfig } from "@/lib/tour-pages";

const photoTourPageAlt: Record<TourPageLang, string> = {
  en: "Illustration of a photographer creating a portrait at a Madeira Atlantic viewpoint",
  be: "Ілюстрацыя фатографа, які стварае партрэт на акіянскай агляднай пляцоўцы Мадэйры",
  uk: "Ілюстрація фотографа, який створює портрет на океанському оглядовому майданчику Мадейри",
  ru: "Иллюстрация фотосессии на океанской смотровой Мадейры",
};

function getTourPageImage(page: TourPageConfig) {
  if (page.tourId === "photo-tour") {
    return { src: photoTourCover, alt: photoTourPageAlt };
  }
  const image = imageCredits[page.imageId];
  return { src: image.src, alt: image.alt };
}

const pageCopy = {
  en: {
    back: "All tours",
    privateDay: "Your private Madeira day",
    cruiseDay: "A private day ashore, planned around your ship",
    photoDay: "A scenic Madeira route for your photographs",
    route: "Route",
    duration: "Duration",
    format: "Format",
    price: "Price",
    guests: "1–4 guests",
    wholeCar: "per whole car",
    details: "What your day can feel like",
    important: "Before we confirm",
    transport: "Travel with Pavel",
    transportText:
      "For a private outing of up to four guests, Pavel welcomes you in his sky-blue Volkswagen T-Cross. If your group needs more space, he can help arrange comfortable professional transport with a licensed partner; every detail is agreed in advance.",
    whatsapp: "Discuss on WhatsApp",
    telegram: "Discuss on Telegram",
    other: "Other private tours",
    viewTour: "View tour",
    notFound: "This tour page could not be found.",
    catalogue: "Return to the tour catalogue",
  },
  ru: {
    back: "Все экскурсии",
    privateDay: "Ваш индивидуальный день на Мадейре",
    cruiseDay: "Индивидуальный день на берегу по расписанию вашего лайнера",
    photoDay: "Живописный маршрут по Мадейре для ваших фотографий",
    route: "Маршрут",
    duration: "Продолжительность",
    format: "Формат",
    price: "Стоимость",
    guests: "1–4 гостя",
    wholeCar: "за всю машину",
    details: "Как пройдёт ваш день",
    important: "Что согласуем заранее",
    transport: "Поездка с Павлом",
    transportText:
      "Для камерной поездки до четырёх гостей Павел приглашает вас в свой небесно-голубой Volkswagen T-Cross. Если вашей компании нужен более просторный формат, он поможет организовать комфортный профессиональный транспорт с лицензированным партнёром — все детали согласуем заранее.",
    whatsapp: "Обсудить в WhatsApp",
    telegram: "Обсудить в Telegram",
    other: "Другие индивидуальные экскурсии",
    viewTour: "Посмотреть экскурсию",
    notFound: "Такая страница экскурсии не найдена.",
    catalogue: "Вернуться в каталог экскурсий",
  },
  be: {
    back: "Усе экскурсіі",
    privateDay: "Ваш індывідуальны дзень на Мадэйры",
    cruiseDay: "Індывідуальны дзень на беразе паводле раскладу вашага лайнера",
    photoDay: "Маляўнічы маршрут па Мадэйры для вашых фатаграфій",
    route: "Маршрут",
    duration: "Працягласць",
    format: "Фармат",
    price: "Кошт",
    guests: "1–4 госці",
    wholeCar: "за ўсю машыну",
    details: "Як пройдзе ваш дзень",
    important: "Што ўзгоднім загадзя",
    transport: "Паездка з Паўлам",
    transportText:
      "Для камернай паездкі да чатырох гасцей Павел запрашае вас у свой нябесна-блакітны Volkswagen T-Cross. Калі вашай кампаніі патрэбны больш прасторны фармат, ён дапаможа арганізаваць камфортны прафесійны транспарт з ліцэнзаваным партнёрам — усе дэталі ўзгоднім загадзя.",
    whatsapp: "Абмеркаваць у WhatsApp",
    telegram: "Абмеркаваць у Telegram",
    other: "Іншыя індывідуальныя экскурсіі",
    viewTour: "Паглядзець экскурсію",
    notFound: "Такая старонка экскурсіі не знойдзена.",
    catalogue: "Вярнуцца ў каталог экскурсій",
  },
  uk: {
    back: "Усі екскурсії",
    privateDay: "Ваш індивідуальний день на Мадейрі",
    cruiseDay: "Індивідуальний день на березі за розкладом вашого лайнера",
    photoDay: "Мальовничий маршрут Мадейрою для ваших фотографій",
    route: "Маршрут",
    duration: "Тривалість",
    format: "Формат",
    price: "Вартість",
    guests: "1–4 гості",
    wholeCar: "за всю машину",
    details: "Як мине ваш день",
    important: "Що погодимо заздалегідь",
    transport: "Поїздка з Павлом",
    transportText:
      "Для камерної поїздки до чотирьох гостей Павло запрошує вас у свій небесно-блакитний Volkswagen T-Cross. Якщо вашій компанії потрібен просторіший формат, він допоможе організувати комфортний професійний транспорт із ліцензованим партнером — усі деталі погодимо заздалегідь.",
    whatsapp: "Обговорити у WhatsApp",
    telegram: "Обговорити у Telegram",
    other: "Інші індивідуальні екскурсії",
    viewTour: "Переглянути екскурсію",
    notFound: "Таку сторінку екскурсії не знайдено.",
    catalogue: "Повернутися до каталогу екскурсій",
  },
} as const;

function getTour(page: TourPageConfig) {
  return salesTours.find((tour) => tour.id === page.tourId);
}

function getPageTitle(page: TourPageConfig, lang: TourPageLang) {
  if (lang === "ru" || lang === "en") return page.h1[lang];
  return getTour(page)?.title[lang] ?? page.h1.en;
}

function getSeoTitle(page: TourPageConfig, lang: TourPageLang) {
  if (lang === "ru" || lang === "en") return page.seoTitle[lang];
  return `${getPageTitle(page, lang)} | Madeira Mosaic`;
}

function getKeywords(page: TourPageConfig, lang: TourPageLang) {
  if (lang === "ru" || lang === "en") return page.keywords[lang];
  return `${getPageTitle(page, lang)}, Madeira, Madeira Mosaic`;
}

function getEditorial(tourId: TourPageConfig["tourId"], lang: TourPageLang) {
  if (lang === "ru" || lang === "en") {
    const editorial = lang === "ru" ? salesEditorialRu[tourId] : salesEditorialEn[tourId];
    if (!editorial) throw new Error(`Missing ${lang} editorial copy for ${tourId}`);
    return editorial;
  }

  const tour = salesTours.find((item) => item.id === tourId);
  if (!tour) throw new Error(`Missing tour data for ${tourId}`);
  const short = salesDescriptions[tourId]?.[lang] ?? tour.route[lang];
  const intro =
    lang === "be"
      ? "Я падрыхтую гэтую паездку паводле вашых інтарэсаў і тэмпу."
      : "Я підготую цю поїздку за вашими інтересами й темпом.";
  return {
    title: tour.title[lang],
    short,
    full: [intro, short, salesCopy.included[lang], salesCopy.checks[lang], salesCopy.extras[lang]].join(
      "\n\n",
    ),
  };
}

function conciseMetaDescription(value: string) {
  if (value.length <= 158) return value;
  const candidate = value.slice(0, 155);
  const boundary = candidate.lastIndexOf(" ");
  const shortened = candidate.slice(0, boundary >= 110 ? boundary : 155);
  return `${shortened.replace(/[,:;.]+$/, "")}…`;
}

const tourPageLanguages = ["en", "be", "uk", "ru"] as const satisfies readonly TourPageLang[];

function isTourPageLang(value: unknown): value is TourPageLang {
  return typeof value === "string" && tourPageLanguages.includes(value as TourPageLang);
}

export const Route = createFileRoute("/tours_/$slug")({
  beforeLoad: ({ params }) => {
    if (!getTourPageBySlug(params.slug)) throw notFound();
  },
  validateSearch: (search: Record<string, unknown>): { lang?: TourPageLang } => {
    const lang = search["lang"];
    return isTourPageLang(lang) ? { lang } : {};
  },
  head: ({ match }) => {
    const page = getTourPageBySlug(match.params.slug);
    const lang: TourPageLang = isTourPageLang(match.search.lang) ? match.search.lang : "en";
    if (!page) {
      return {
        meta: [
          {
            title: `${pageCopy[lang].notFound} | Madeira Mosaic`,
          },
          { name: "robots", content: "noindex, nofollow" },
        ],
      };
    }

    const editorial = getEditorial(page.tourId, lang);
    const description = conciseMetaDescription(editorial.short);
    const canonical = `https://guide.orthodoxmadeira.com/tours/${page.slug}?lang=${lang}`;
    const image = getTourPageImage(page);
    const absoluteImage = `https://guide.orthodoxmadeira.com${image.src}`;
    const title = getSeoTitle(page, lang);
    const ogLocale = { en: "en_GB", be: "be_BY", uk: "uk_UA", ru: "ru_RU" }[lang];
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: getKeywords(page, lang) },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Madeira Mosaic" },
        { property: "og:locale", content: ogLocale },
        { property: "og:url", content: canonical },
        { property: "og:image", content: absoluteImage },
        { property: "og:image:alt", content: image.alt[lang] },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: absoluteImage },
        { name: "twitter:image:alt", content: image.alt[lang] },
      ],
      links: [
        { rel: "canonical", href: canonical },
        ...tourPageLanguages.map((code) => ({
          rel: "alternate",
          hrefLang: code,
          href: `https://guide.orthodoxmadeira.com/tours/${page.slug}?lang=${code}`,
        })),
        {
          rel: "alternate",
          hrefLang: "x-default",
          href: `https://guide.orthodoxmadeira.com/tours/${page.slug}?lang=en`,
        },
      ],
    };
  },
  component: TourPage,
});

function cleanEditorialParagraphs(full: string, lang: TourPageLang) {
  const paragraphs = full.split("\n\n").filter(Boolean);
  if (lang !== "ru") return paragraphs;

  const pricePrefix = /^\d+(?:–\d+)? часов · €35\/час · €[\d–]+ за всю машину · до 4 гостей\.?\s*/;
  return paragraphs.map((paragraph) => paragraph.replace(pricePrefix, "").trim()).filter(Boolean);
}

function TourPage() {
  const { slug } = Route.useParams();
  const search = Route.useSearch();
  const { lang: contextLang, setLang } = useLang();
  const lang: TourPageLang = isTourPageLang(search.lang) ? search.lang : contextLang;
  const t = pageCopy[lang];
  const page = getTourPageBySlug(slug);
  const formTitle = page ? (getEditorial(page.tourId, lang).title ?? getPageTitle(page, lang)) : "";
  const [selection, setSelection] = useState(formTitle);
  const relatedPages = useMemo(() => {
    if (!page) return [];
    const currentCategory = salesTours.find((item) => item.id === page.tourId)?.category;
    return tourPages
      .filter((item) => item.slug !== page.slug)
      .sort((left, right) => {
        const leftCategory = salesTours.find((item) => item.id === left.tourId)?.category;
        const rightCategory = salesTours.find((item) => item.id === right.tourId)?.category;
        return Number(rightCategory === currentCategory) - Number(leftCategory === currentCategory);
      })
      .slice(0, 3);
  }, [page]);

  useEffect(() => {
    if (isTourPageLang(search.lang)) setLang(search.lang);
  }, [search.lang, setLang]);

  useEffect(() => {
    setSelection(formTitle);
  }, [formTitle]);

  if (!page) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-mosaic-mist px-4">
        <div className="max-w-lg rounded-xl bg-background p-8 text-center shadow-sm">
          <h1 className="font-display text-3xl font-extrabold text-mosaic-deep">{t.notFound}</h1>
          <Button asChild className="mt-6 bg-mosaic-deep hover:bg-mosaic-ocean">
            <a href={`/tours?lang=${lang}`}>{t.catalogue}</a>
          </Button>
        </div>
      </main>
    );
  }

  const tour = getTour(page);
  if (!tour) return null;

  const editorial = getEditorial(page.tourId, lang);
  const pageTitle = getPageTitle(page, lang);
  const image = getTourPageImage(page);
  const paragraphs = cleanEditorialParagraphs(editorial.full, lang);
  const canonical = `https://guide.orthodoxmadeira.com/tours/${page.slug}?lang=${lang}`;
  const absoluteImage = `https://guide.orthodoxmadeira.com${image.src}`;
  const eyebrow =
    page.kind === "cruise" ? t.cruiseDay : page.kind === "photo" ? t.photoDay : t.privateDay;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: pageTitle,
        description: editorial.short,
        url: canonical,
        image: absoluteImage,
        inLanguage: lang,
        areaServed: { "@type": "AdministrativeArea", name: "Madeira" },
        provider: {
          "@type": "Organization",
          name: "Madeira Mosaic",
          url: "https://guide.orthodoxmadeira.com/",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: { en: "Home", be: "Галоўная", uk: "Головна", ru: "Главная" }[lang],
            item: `https://guide.orthodoxmadeira.com/?lang=${lang}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: { en: "Tours", be: "Экскурсіі", uk: "Екскурсії", ru: "Экскурсии" }[lang],
            item: `https://guide.orthodoxmadeira.com/tours?lang=${lang}`,
          },
          { "@type": "ListItem", position: 3, name: pageTitle, item: canonical },
        ],
      },
    ],
  };
  const message = {
    en: `Hello Pavel! I would like to discuss the “${pageTitle}”. Could you please let me know which dates are available?`,
    be: `Добры дзень, Павел! Хачу абмеркаваць экскурсію «${pageTitle}». Падкажыце, калі ласка, якія даты даступныя.`,
    uk: `Добрий день, Павле! Хочу обговорити екскурсію «${pageTitle}». Підкажіть, будь ласка, які дати доступні.`,
    ru: `Здравствуйте, Павел! Хочу обсудить экскурсию «${pageTitle}». Подскажите, пожалуйста, какие даты доступны.`,
  }[lang];
  function scrollToForm() {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <a href={`/?lang=${lang}`} className="min-w-0" aria-label="Madeira Mosaic home">
            <MosaicLogo />
          </a>
          <nav className="ml-auto flex flex-wrap items-center justify-end gap-1" aria-label="Language">
            {tourPageLanguages.map((code) => (
              <a
                key={code}
                href={`/tours/${page.slug}?lang=${code}`}
                hrefLang={code}
                aria-current={lang === code ? "page" : undefined}
                className={`rounded-md px-2 py-2 text-xs font-extrabold transition sm:px-3 sm:text-sm ${
                  lang === code
                    ? "bg-mosaic-deep text-primary-foreground"
                    : "text-muted-foreground hover:bg-mosaic-mist hover:text-mosaic-deep"
                }`}
              >
                {code.toUpperCase()}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section data-hero className="bg-mosaic-mist py-8 sm:py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <a
              href={`/tours?lang=${lang}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-mosaic-ocean hover:text-mosaic-deep"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              {t.back}
            </a>
            <div className="mt-6 grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
              <img
                src={image.src}
                alt={image.alt[lang]}
                width={page.tourId === "photo-tour" ? 960 : 1280}
                height={page.tourId === "photo-tour" ? 1200 : 960}
                fetchPriority="high"
                className={
                  page.tourId === "photo-tour"
                    ? "aspect-[4/5] max-h-[42rem] w-full max-w-[33.6rem] justify-self-center rounded-xl object-contain shadow-sm"
                    : "aspect-[4/3] w-full rounded-xl object-cover shadow-sm"
                }
              />
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-mosaic-ocean">
                  {eyebrow}
                </p>
                <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-mosaic-deep sm:text-5xl">
                  {pageTitle}
                </h1>
                <p className="mt-6 text-lg leading-8 text-foreground">{editorial.short}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="h-auto min-h-11 whitespace-normal bg-mosaic-leaf font-bold hover:bg-mosaic-deep"
                  >
                    <a
                      href={contactUrl("whatsapp", message)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle aria-hidden />
                      {t.whatsapp}
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-auto min-h-11 whitespace-normal font-bold"
                  >
                    <a
                      href={contactUrl("telegram", message)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Send aria-hidden />
                      {t.telegram}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-background py-8">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            <Fact icon={MapPin} label={t.route} value={tour.route[lang]} />
            <Fact
              icon={Clock3}
              label={t.duration}
              value={
                page.durationLabel?.[lang] ??
                `${tour.hours} ${{ en: "hours", be: "гадзін", uk: "годин", ru: "часов" }[lang]}`
              }
            />
            <Fact icon={Users} label={t.format} value={t.guests} />
            <Fact icon={RouteIcon} label={t.price} value={displayTourPrice(page.tourId, lang)} />
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:px-8">
            <article>
              <h2 className="font-display text-3xl font-extrabold text-mosaic-deep sm:text-4xl">
                {t.details}
              </h2>
              <div className="mt-7 space-y-5 text-base leading-8 text-foreground sm:text-lg">
                {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </article>
            <aside className="h-fit rounded-xl border border-mosaic-deep/10 bg-mosaic-mist p-6 lg:sticky lg:top-24">
              <h2 className="font-display text-2xl font-extrabold text-mosaic-deep">
                {t.important}
              </h2>
              <p className="mt-4 leading-7 text-foreground">
                {salesDescriptions[page.tourId]?.[lang] ?? editorial.short}
              </p>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {salesCopy.checks[lang]}
              </p>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {salesCopy.extras[lang]}
              </p>
              <Button
                onClick={scrollToForm}
                className="mt-6 h-auto min-h-11 w-full whitespace-normal bg-mosaic-deep font-bold hover:bg-mosaic-ocean"
              >
                {{ en: "Send an inquiry", be: "Адправіць заяўку", uk: "Надіслати заявку", ru: "Отправить заявку" }[lang]}
              </Button>
            </aside>
          </div>
        </section>

        <section className="bg-mosaic-deep py-12 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-extrabold">{t.transport}</h2>
            <p className="mt-4 max-w-4xl leading-8 text-primary-foreground/85">{t.transportText}</p>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-extrabold text-mosaic-deep">{t.other}</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {relatedPages.map((related) => {
                const relatedTour = salesTours.find((item) => item.id === related.tourId);
                const relatedImage = getTourPageImage(related);
                if (!relatedTour) return null;
                return (
                  <article
                    key={related.slug}
                    className="overflow-hidden rounded-xl border border-border bg-card"
                  >
                    <img
                      src={relatedImage.src}
                      alt={relatedImage.alt[lang]}
                      width={768}
                      height={576}
                      loading="lazy"
                      className={`aspect-[4/3] w-full ${related.tourId === "photo-tour" ? "bg-mosaic-mist object-contain" : "object-cover"}`}
                    />
                    <div className="p-5">
                      <h3 className="font-display text-xl font-extrabold leading-snug text-mosaic-deep">
                        {getPageTitle(related, lang)}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {relatedTour.route[lang]}
                      </p>
                      <a
                        href={`/tours/${related.slug}?lang=${lang}`}
                        className="mt-5 inline-flex font-bold text-mosaic-ocean hover:text-mosaic-deep"
                      >
                        {t.viewTour}
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-mosaic-mist px-4 py-14 sm:px-6 sm:py-20">
          <SalesInquiryForm
            key={`${lang}-${page.slug}`}
            products={[formTitle]}
            selected={selection}
            onSelect={setSelection}
            mode={page.tourId === "cruise-two" ? "cruise-two" : (page.kind ?? "standard")}
          />
        </section>
      </main>

      <footer className="bg-mosaic-deep px-4 pb-24 pt-10 text-primary-foreground sm:pb-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <MosaicLogo compact onDark />
          <p className="text-center text-sm leading-6 text-primary-foreground/75 sm:text-right">
            Madeira Mosaic · Private tours in Madeira
            <br />
            <PhotoCreditsLink />
          </p>
        </div>
      </footer>
      <QuickContact onOpenForm={scrollToForm} />
    </div>
  );
}

function Fact({ icon: Icon, label, value }: { icon: typeof Clock3; label: string; value: string }) {
  return (
    <div className="flex min-w-0 items-start gap-3 rounded-xl bg-mosaic-mist/65 p-4">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-mosaic-ocean" aria-hidden />
      <div className="min-w-0">
        <p className="text-xs font-extrabold uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
        <p className="mt-1 break-words font-bold leading-6 text-mosaic-deep">{value}</p>
      </div>
    </div>
  );
}
