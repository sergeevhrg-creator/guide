import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowLeft, Check, ExternalLink, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MosaicLogo } from "@/components/MosaicLogo";
import { MosaicCta } from "@/components/MosaicCta";
import { LocationPhotoSlot } from "@/components/LocationPhotoSlot";
import { PhotoCreditsLink } from "@/components/PhotoCreditsLink";
import { LanguageSwitcher, useLang } from "@/lib/i18n/lang";
import { pageImageIds } from "@/lib/image-credits";
import { mosaicContent } from "@/lib/mosaic-content";
import { pageContent } from "@/lib/page-content";
import { pavelImages } from "@/lib/poster-assets";
import { contactUrl } from "@/lib/contacts";
import { buildInquiryMessage, openWhatsAppLabel } from "@/lib/inquiry-message";

const heroColors = {
  silence: "bg-mosaic-leaf",
  remote: "bg-mosaic-ocean",
  guide: "bg-mosaic-hydrangea",
};
const accents = ["bg-mosaic-ocean", "bg-mosaic-leaf", "bg-mosaic-roof", "bg-mosaic-hydrangea"];
const retreatSiteLabel = {
  en: "Open the full programme website",
  be: "Адкрыць сайт поўнай праграмы",
  uk: "Відкрити сайт повної програми",
  ru: "Открыть сайт полной программы",
};

export function MosaicPage({
  pageKey,
}: {
  pageKey: "silence" | "remote" | "guide";
  image?: string;
}) {
  const { lang } = useLang();
  const t = mosaicContent[lang];
  const page = pageContent[pageKey][lang];
  const retreatMessage = {
    en: "Week of Silence: please confirm dates, price, accommodation and what is included.",
    be: "Тыдзень цішыні: удакладніце даты, кошт, жыллё і склад паслуг.",
    uk: "Тиждень тиші: уточніть дати, вартість, житло та склад послуг.",
    ru: "Неделя тишины: уточните даты, цену, проживание и состав услуг.",
  }[lang];
  const [formActive, setFormActive] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  function toggleOption(option: string) {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option],
    );
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = buildInquiryMessage({
      topic: page.ctaTitle,
      lang,
      name: String(data.get("name") ?? ""),
      contact: String(data.get("contact") ?? ""),
      details: [
        ["Options / Варианты", selectedOptions.join(", ")],
        ["Question / Вопрос", String(data.get("note") ?? "")],
      ],
    });
    window.open(contactUrl("whatsapp", message), "_blank", "noopener,noreferrer");
    console.info("[cta]", "messenger_opened", "whatsapp");
  }

  function focusForm() {
    setFormActive(true);
    document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6 lg:flex lg:px-8">
          <Link to="/" search={{ lang }} className="min-w-0 text-mosaic-deep">
            <MosaicLogo />
          </Link>
          <nav className="ml-auto hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            <a
              href={`/?lang=${lang}#tours`}
              className="text-sm font-bold text-foreground/70 transition hover:text-mosaic-ocean"
            >
              {t.nav[0]}
            </a>
            <a
              href={`/?lang=${lang}#products`}
              className="text-sm font-bold text-foreground/70 transition hover:text-mosaic-ocean"
            >
              {t.nav[1]}
            </a>
            <Link
              to="/madeira-guide"
              search={{ lang }}
              className="text-sm font-bold text-foreground/70 transition hover:text-mosaic-ocean"
            >
              {t.nav[2]}
            </Link>
            <a
              href={`/?lang=${lang}#pavel`}
              className="text-sm font-bold text-foreground/70 transition hover:text-mosaic-ocean"
            >
              {t.nav[3]}
            </a>
          </nav>
          <LanguageSwitcher className="lg:ml-4" />
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden text-primary-foreground">
          <div className="absolute inset-0">
            <LocationPhotoSlot imageId={pageImageIds[pageKey]} className="h-full" />
          </div>
          <div className={`absolute inset-0 ${heroColors[pageKey]} opacity-85`} />
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <span className="inline-flex rounded bg-primary-foreground/20 px-3 py-1 text-xs font-extrabold uppercase">
              {page.badge}
            </span>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-tight sm:text-6xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-primary-foreground/90">
              {page.intro}
            </p>
            <Button
              onClick={focusForm}
              size="lg"
              className="mt-8 bg-mosaic-flower font-extrabold text-mosaic-deep hover:bg-primary-foreground"
            >
              {page.ctaButton}
              <Send />
            </Button>
          </div>
        </section>

        <section className="bg-background py-16 sm:py-24">
          <div className={`mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8 ${pageKey === "silence" ? "lg:grid-cols-3" : ""}`}>
            {page.sections.map((section, index) => (
              <article
                key={section.title}
                className="flex flex-col rounded-md bg-card p-6 shadow-[0_12px_34px_-24px_var(--shadow-color)] sm:p-8"
              >
                <span className={`h-1.5 w-14 rounded ${accents[index % accents.length]}`} />
                {pageKey === "silence" && index === 0 && (
                  <img src={pavelImages.portrait} alt={{ en: "Portrait of retreat host Pavel Sergeev", be: "Партрэт вядучага рэтрыту Паўла Сяргеева", uk: "Портрет ведучого ретриту Павла Сергеєва", ru: "Портрет ведущего ретрита Павла Сергеева" }[lang]} className="mt-5 aspect-[4/3] w-full rounded-md object-cover object-top" />
                )}
                <h2 className="mt-5 font-display text-2xl font-extrabold leading-snug text-mosaic-deep">
                  {section.title}
                </h2>
                <p className="mt-3 leading-7 text-muted-foreground">{section.body}</p>
                <ul className="mt-5 grid gap-2.5">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm font-semibold leading-6 text-foreground/80"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-mosaic-leaf" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="inquiry" className="scroll-mt-20 bg-mosaic-mist py-16 sm:py-24">
          <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <span className="inline-flex rounded bg-mosaic-flower px-3 py-1 text-xs font-extrabold uppercase text-mosaic-deep">
                {t.formBadge}
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-mosaic-deep sm:text-4xl">
                {page.ctaTitle}
              </h2>
              <p className="mt-4 leading-7 text-foreground/75">{page.ctaText}</p>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{t.formText}</p>
              <Button
                asChild
                variant="outline"
                className="mt-6 border-mosaic-deep/25 font-bold text-mosaic-deep"
              >
                <Link to="/" search={{ lang }}>
                  <ArrowLeft />
                  {page.back}
                </Link>
              </Button>
            </div>
            <div className="rounded-md bg-card p-6 shadow-lg sm:p-8">
              {pageKey === "silence" ? (
                <div className="grid gap-4">
                  <h3 className="font-display text-xl font-extrabold text-mosaic-deep">{page.ctaTitle}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{page.ctaText}</p>
                  <Button asChild className="bg-mosaic-leaf font-extrabold hover:bg-mosaic-deep">
                    <a href="https://retreat.orthodoxmadeira.com" target="_blank" rel="noopener noreferrer">
                      {retreatSiteLabel[lang]} <ExternalLink aria-hidden />
                    </a>
                  </Button>
                  <Button asChild className="bg-mosaic-deep font-extrabold hover:bg-mosaic-ocean">
                    <a href={contactUrl("whatsapp", retreatMessage)} target="_blank" rel="noopener noreferrer">WhatsApp <Send aria-hidden /></a>
                  </Button>
                  <Button asChild variant="outline" className="border-mosaic-ocean font-extrabold text-mosaic-ocean">
                    <a href={contactUrl("telegram", retreatMessage)} target="_blank" rel="noopener noreferrer">Telegram <Send aria-hidden /></a>
                  </Button>
                </div>
              ) : (
                <form onSubmit={submit} onFocus={() => setFormActive(true)} className="grid gap-4">
                  <input
                    name="name"
                    required
                    aria-label={t.name}
                    placeholder={t.name}
                    className="h-12 rounded-md border border-input bg-background px-4 outline-none focus:border-mosaic-ocean focus:ring-2 focus:ring-mosaic-ocean/15"
                  />
                  <input
                    name="contact"
                    required
                    aria-label={t.contact}
                    placeholder={t.contact}
                    className="h-12 rounded-md border border-input bg-background px-4 outline-none focus:border-mosaic-ocean focus:ring-2 focus:ring-mosaic-ocean/15"
                  />
                  {page.formOptions && (
                    <fieldset className="grid gap-2 rounded-md border border-input p-4">
                      <legend className="px-1 text-sm font-bold text-mosaic-deep">
                        {page.ctaTitle}
                      </legend>
                      {page.formOptions.map((option) => (
                        <label
                          key={option}
                          className="flex items-center gap-2.5 text-sm font-semibold text-foreground/80"
                        >
                          <input
                            type="checkbox"
                            checked={selectedOptions.includes(option)}
                            onChange={() => toggleOption(option)}
                            className="h-4 w-4 rounded border-input accent-mosaic-ocean"
                          />
                          {option}
                        </label>
                      ))}
                      {page.formNote && (
                        <p className="mt-1 text-xs leading-5 text-muted-foreground">
                          {page.formNote}
                        </p>
                      )}
                    </fieldset>
                  )}
                  <textarea
                    name="note"
                    aria-label={page.formQuestion}
                    placeholder={page.formQuestion}
                    rows={4}
                    className="rounded-md border border-input bg-background p-4 outline-none focus:border-mosaic-ocean focus:ring-2 focus:ring-mosaic-ocean/15"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-mosaic-deep font-extrabold hover:bg-mosaic-ocean"
                  >
                    {openWhatsAppLabel[lang]}
                    <Send />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-mosaic-deep px-4 py-10 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <MosaicLogo compact onDark />
          <p className="text-center text-sm text-primary-foreground/65 sm:text-right">
            {t.footer}
            <br />
            {t.footerNote}
            <br />
            <PhotoCreditsLink />
          </p>
        </div>
      </footer>

      <MosaicCta
        lang={lang}
        page={pageKey === "silence" ? "retreat" : "home"}
        formOpen={formActive}
        onOpenForm={focusForm}
        onRetreatAction={focusForm}
      />
    </div>
  );
}
