import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { LanguageSwitcher, useLang } from "@/lib/i18n/lang";
import { imageCredits } from "@/lib/image-credits";
import { MosaicLogo } from "@/components/MosaicLogo";

export const Route = createFileRoute("/photo-credits")({
  head: () => ({
    meta: [
      { title: "Photo credits — Madeira Mosaic" },
      { name: "description", content: "Sources, authors and licenses for photographs in the Madeira Mosaic guide." },
      { property: "og:title", content: "Photo credits — Madeira Mosaic" },
      { property: "og:description", content: "Photograph authors, source links and licenses for Madeira Mosaic." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PhotoCreditsPage,
});

const copy = {
  en: {
    title: "Photo credits",
    intro:
      "The photographs used in this prototype are stored locally and credited to their original creators.",
    back: "Back to home",
    source: "Source",
    license: "License",
    file: "Local file",
  },
  be: {
    title: "Аўтары фотаздымкаў",
    intro:
      "Фотаздымкі ў гэтым прататыпе захоўваюцца лакальна і маюць указанне іх арыгінальных аўтараў.",
    back: "На галоўную",
    source: "Крыніца",
    license: "Ліцэнзія",
    file: "Лакальны файл",
  },
  uk: {
    title: "Автори фотографій",
    intro:
      "Фотографії в цьому прототипі зберігаються локально та мають посилання на їхніх оригінальних авторів.",
    back: "На головну",
    source: "Джерело",
    license: "Ліцензія",
    file: "Локальний файл",
  },
  ru: {
    title: "Фотографии",
    intro:
      "Фотографии в этом прототипе хранятся локально и сопровождаются указанием их оригинальных авторов.",
    back: "На главную",
    source: "Источник",
    license: "Лицензия",
    file: "Локальный файл",
  },
} as const;

function PhotoCreditsPage() {
  const { lang } = useLang();
  const t = copy[lang];
  return (
    <div className="min-h-screen bg-mosaic-mist">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="text-mosaic-deep">
            <MosaicLogo />
          </Link>
          <LanguageSwitcher />
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-mosaic-ocean">
          <ArrowLeft className="h-4 w-4" />
          {t.back}
        </Link>
        <h1 className="mt-7 font-display text-4xl font-extrabold text-mosaic-deep sm:text-6xl">
          {t.title}
        </h1>
        <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{t.intro}</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {Object.values(imageCredits).map((credit) => (
            <article
              key={credit.id}
              className="overflow-hidden rounded-md bg-card shadow-[0_12px_34px_-24px_var(--shadow-color)]"
            >
              <img
                src={credit.src}
                alt={credit.alt[lang]}
                className="aspect-[16/9] w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h2 className="font-display text-lg font-extrabold text-mosaic-deep">
                  {credit.slot[lang]}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">© {credit.author}</p>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-mosaic-ocean">
                  <a
                    href={credit.sourceUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 underline underline-offset-4"
                  >
                    {t.source}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={credit.licenseUrl || credit.sourceUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline underline-offset-4"
                  >
                    {t.license}: {credit.license}
                  </a>
                </div>
                <p className="mt-3 break-all text-xs text-muted-foreground">
                  {t.file}: {credit.localPath}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
