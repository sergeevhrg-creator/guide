import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Image, MapPin } from "lucide-react";

import { LocationPhotoSlot } from "@/components/LocationPhotoSlot";
import { MosaicLogo } from "@/components/MosaicLogo";
import { PhotoCreditsLink } from "@/components/PhotoCreditsLink";
import { Button } from "@/components/ui/button";
import { getIndexableGuideCategory, indexableGuideCategoryIds } from "@/lib/guide-categories";
import { LanguageSwitcher, useLang, type Lang } from "@/lib/i18n/lang";
import { localizedSeoLinks, validateLangSearch } from "@/lib/seo";

const pageCopy = {
  en: {
    guide: "Madeira guide",
    back: "All guide sections",
    area: "Area",
    expect: "What to expect",
    fit: "Who it suits",
    practical: "Practical notes",
    source: "Official source",
    checked: "Checked",
    more: "Explore another guide section",
  },
  be: {
    guide: "Гід па Мадэйры",
    back: "Усе раздзелы гіда",
    area: "Раён",
    expect: "Што чакаць",
    fit: "Каму падыходзіць",
    practical: "Практычныя звесткі",
    source: "Афіцыйная крыніца",
    checked: "Праверана",
    more: "Іншы раздзел гіда",
  },
  uk: {
    guide: "Гід по Мадейрі",
    back: "Усі розділи гіда",
    area: "Район",
    expect: "Чого очікувати",
    fit: "Кому підходить",
    practical: "Практичні відомості",
    source: "Офіційне джерело",
    checked: "Перевірено",
    more: "Інший розділ гіда",
  },
  ru: {
    guide: "Гид по Мадейре",
    back: "Все разделы гида",
    area: "Район",
    expect: "Что ожидать",
    fit: "Кому подходит",
    practical: "Практические сведения",
    source: "Официальный источник",
    checked: "Проверено",
    more: "Другой раздел гида",
  },
} as const;

function conciseDescription(value: string) {
  if (value.length <= 158) return value;
  const candidate = value.slice(0, 155);
  const boundary = candidate.lastIndexOf(" ");
  return `${candidate.slice(0, boundary >= 110 ? boundary : 155).replace(/[,:;.]+$/, "")}…`;
}

export const Route = createFileRoute("/madeira-guide_/$category")({
  beforeLoad: ({ params }) => {
    if (!getIndexableGuideCategory(params.category)) throw notFound();
  },
  validateSearch: validateLangSearch,
  head: ({ match }) => {
    const lang: Lang = match.search.lang ?? "en";
    const category = getIndexableGuideCategory(match.params.category);
    if (!category) {
      return {
        meta: [
          { title: `Madeira guide — Madeira Mosaic` },
          { name: "robots", content: "noindex, nofollow" },
        ],
      };
    }

    const title = `${category.title[lang]} — Madeira Mosaic`;
    const description = conciseDescription(category.intro[lang]);
    const path = `/madeira-guide/${category.id}`;
    const canonical = `https://guide.orthodoxmadeira.com${path}?lang=${lang}`;
    const ogLocale = { en: "en_GB", be: "be_BY", uk: "uk_UA", ru: "ru_RU" }[lang];

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Madeira Mosaic" },
        { property: "og:locale", content: ogLocale },
        { property: "og:url", content: canonical },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: localizedSeoLinks(path, lang),
    };
  },
  component: GuideCategoryPage,
});

function GuideCategoryPage() {
  const { category: categoryId } = Route.useParams();
  const search = Route.useSearch();
  const { lang: contextLang } = useLang();
  const lang: Lang = search.lang ?? contextLang;
  const category = getIndexableGuideCategory(categoryId);

  if (!category) return null;

  const copy = pageCopy[lang];
  const canonical = `https://guide.orthodoxmadeira.com/madeira-guide/${category.id}?lang=${lang}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
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
            name: copy.guide,
            item: `https://guide.orthodoxmadeira.com/madeira-guide?lang=${lang}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: category.title[lang],
            item: canonical,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: category.title[lang],
        numberOfItems: category.cards.length,
        itemListElement: category.cards.map((card, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: typeof card.name === "string" ? card.name : card.name[lang],
          url: `${canonical}#${card.id}`,
        })),
      },
    ],
  };

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
          <LanguageSwitcher className="ml-auto" />
        </div>
      </header>

      <main>
        <section className="bg-mosaic-deep px-4 py-14 text-primary-foreground sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <a
              href={`/madeira-guide?lang=${lang}`}
              className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-primary-foreground/85 underline-offset-4 hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              {copy.back}
            </a>
            <p className="mt-5 text-sm font-extrabold uppercase tracking-wide text-mosaic-flower">
              {copy.guide}
            </p>
            <h1 className="mt-3 max-w-4xl font-display text-4xl font-extrabold leading-tight sm:text-6xl">
              {category.title[lang]}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-primary-foreground/85">
              {category.intro[lang]}
            </p>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
            {category.cards.map((card) => {
              const name = typeof card.name === "string" ? card.name : card.name[lang];
              return (
                <article
                  key={card.id}
                  id={card.id}
                  className="scroll-mt-24 overflow-hidden rounded-xl border border-border bg-card shadow-[0_16px_40px_-32px_var(--shadow-color)]"
                >
                  {card.imageId ? (
                    <LocationPhotoSlot imageId={card.imageId} className="aspect-[16/8]" />
                  ) : (
                    <div
                      className="grid aspect-[16/8] place-items-center bg-mosaic-mist"
                      aria-hidden
                    >
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-mosaic-ocean/10 text-mosaic-ocean">
                        <Image className="h-5 w-5" />
                      </span>
                    </div>
                  )}
                  <div className="p-5 sm:p-7">
                    <h2 className="font-display text-2xl font-extrabold leading-snug text-mosaic-deep">
                      {name}
                    </h2>
                    <p className="mt-2 flex items-center gap-2 text-sm font-bold text-muted-foreground">
                      <MapPin className="h-4 w-4 shrink-0 text-mosaic-roof" />
                      <span>
                        <span className="sr-only">{copy.area}: </span>
                        {card.area[lang]}
                      </span>
                    </p>
                    <p className="mt-5 leading-7 text-foreground/80">{card.description[lang]}</p>
                    <div className="mt-6 grid gap-4">
                      {[
                        [copy.expect, card.benefit[lang]],
                        [copy.fit, card.fit[lang]],
                        [copy.practical, card.practical[lang]],
                      ].map(([label, value]) => (
                        <section key={label} className="border-l-4 border-mosaic-ocean pl-4">
                          <h3 className="text-sm font-extrabold text-mosaic-deep">{label}</h3>
                          <p className="mt-1 text-sm leading-6 text-foreground/75">{value}</p>
                        </section>
                      ))}
                    </div>
                    <a
                      href={card.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-mosaic-ocean underline underline-offset-4"
                    >
                      {copy.source} · {copy.checked} {card.source.checkedOn}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <nav aria-label={copy.more} className="bg-mosaic-mist px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-2xl font-extrabold text-mosaic-deep">{copy.more}</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {indexableGuideCategoryIds
                .filter((id) => id !== category.id)
                .map((id) => {
                  const other = getIndexableGuideCategory(id);
                  if (!other) return null;
                  return (
                    <Button
                      key={id}
                      asChild
                      variant="outline"
                      className="h-auto min-h-11 whitespace-normal py-3"
                    >
                      <a href={`/madeira-guide/${id}?lang=${lang}`}>{other.title[lang]}</a>
                    </Button>
                  );
                })}
            </div>
          </div>
        </nav>
      </main>

      <footer className="bg-mosaic-deep px-4 py-10 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <MosaicLogo compact onDark />
          <p className="text-center text-sm text-primary-foreground/65 sm:text-right">
            Madeira Mosaic
            <br />
            <PhotoCreditsLink />
          </p>
        </div>
      </footer>
    </div>
  );
}
