import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowLeft,
  BookOpen,
  ChevronDown,
  Compass,
  Heart,
  Languages,
  MapPin,
  Mountain,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  Waves,
} from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { MosaicLogo } from "@/components/MosaicLogo";
import { MosaicCta } from "@/components/MosaicCta";
import { LocationPhotoSlot } from "@/components/LocationPhotoSlot";
import { PhotoCreditsLink } from "@/components/PhotoCreditsLink";
import { returnImageIds } from "@/lib/image-credits";
import { returnContent } from "@/lib/return-content";
import { LanguageSwitcher, useLang } from "@/lib/i18n/lang";
import { contactUrl } from "@/lib/contacts";
import { buildInquiryMessage, openWhatsAppLabel } from "@/lib/inquiry-message";

const dayWord = { en: "Day", be: "Дзень", uk: "День", ru: "День" } as const;

export const Route = createFileRoute("/return-to-what-matters")({
  head: () => ({
    meta: [
      { title: "Madeira: A Return to What Matters — 7 Days" },
      {
        name: "description",
        content:
          "A seven-day journey through Madeira’s ocean, mountains, Laurissilva forest, villages and vineyards.",
      },
      { property: "og:title", content: "Madeira. A Return to What Matters" },
      {
        property: "og:description",
        content: "Seven days among the ocean, mountains and ancient forest of Madeira.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReturnJourneyPage,
});

const dayIcons = [MapPin, Waves, Compass, Sparkles, Mountain, Heart, BookOpen];
const inputClass =
  "mt-2 w-full rounded-md border border-mosaic-deep/15 bg-background px-4 py-3.5 text-sm text-foreground outline-none transition focus:border-mosaic-ocean focus:ring-2 focus:ring-mosaic-ocean/15 placeholder:text-muted-foreground";

function ReturnJourneyPage() {
  const { lang } = useLang();
  const [openDay, setOpenDay] = useState(0);
  const t = returnContent[lang];

  const [formActive, setFormActive] = useState(false);

  const scrollToInquiry = () => {
    setFormActive(true);
    document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = buildInquiryMessage({
      topic: t.form.title,
      lang,
      name: String(data.get("name") ?? ""),
      contact: String(data.get("contact") ?? ""),
      details: [
        ["Dates / Даты", String(data.get("dates") ?? "")],
        ["Guests / Гости", String(data.get("guests") ?? "")],
        ["Comment / Комментарий", String(data.get("note") ?? "")],
      ],
    });
    window.open(contactUrl("whatsapp", message), "_blank", "noopener,noreferrer");
    console.info("[cta]", "messenger_opened", "whatsapp");
  };

  return (
    <div className="min-h-screen bg-mosaic-mist text-foreground" lang={lang}>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-background/20 bg-mosaic-deep/90 text-primary-foreground backdrop-blur-lg">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:flex sm:px-6 lg:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
            <MosaicLogo compact onDark />
            <span className="sr-only">{t.nav.home}</span>
          </Link>
          <nav
            className="ml-auto hidden items-center gap-5 md:flex"
            aria-label="Journey navigation"
          >
            <a
              href="/#tours"
              className="text-sm text-primary-foreground/75 transition hover:text-primary-foreground"
            >
              {t.nav.tours}
            </a>
            <a
              href="/#guide"
              className="text-sm text-primary-foreground/75 transition hover:text-primary-foreground"
            >
              {t.nav.guide}
            </a>
            <a
              href="/#pavel"
              className="text-sm text-primary-foreground/75 transition hover:text-primary-foreground"
            >
              {t.nav.pavel}
            </a>
            <a
              href="#week"
              className="text-sm text-primary-foreground/75 transition hover:text-primary-foreground"
            >
              {t.nav.week}
            </a>
            <a
              href="#activities"
              className="text-sm text-primary-foreground/75 transition hover:text-primary-foreground"
            >
              {t.nav.activities}
            </a>
            <a
              href="#formats"
              className="text-sm text-primary-foreground/75 transition hover:text-primary-foreground"
            >
              {t.nav.formats}
            </a>
            <a
              href="#inquiry"
              className="text-sm text-primary-foreground/75 transition hover:text-primary-foreground"
            >
              {t.nav.inquiry}
            </a>
          </nav>
          <LanguageSwitcher tone="dark" className="sm:ml-5" />
        </div>
      </header>

      <main>
        <section className="relative min-h-[760px] overflow-hidden pt-16 text-primary-foreground sm:min-h-[800px]">
          <div className="absolute inset-0">
            <LocationPhotoSlot imageId="machico" className="h-full" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-mosaic-deep/95 via-mosaic-deep/70 to-mosaic-deep/10" />
          <div className="relative mx-auto flex min-h-[744px] max-w-7xl flex-col justify-end px-4 pb-10 pt-20 sm:px-6 sm:pb-14 lg:px-8">
            <p className="max-w-2xl text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/80 sm:text-sm">
              {t.hero.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
              {t.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/90 sm:text-2xl">
              {t.hero.subtitle}
            </p>
            <a
              href="#inquiry"
              className="mt-8 inline-flex w-fit items-center gap-3 rounded-md bg-mosaic-flower px-6 py-4 text-sm font-bold text-mosaic-deep transition hover:bg-primary-foreground"
            >
              {t.hero.cta}
              <ArrowDown className="h-4 w-4" aria-hidden />
            </a>

            <ul className="mt-10 grid gap-px overflow-hidden rounded-md bg-primary-foreground/20 sm:grid-cols-2 lg:grid-cols-3">
              {t.facts.map((fact, index) => (
                <li
                  key={fact}
                  className="flex min-h-20 items-center gap-3 bg-mosaic-deep/70 px-4 py-4 text-sm leading-snug backdrop-blur-sm"
                >
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold ${index % 3 === 0 ? "bg-mosaic-flower text-mosaic-deep" : index % 3 === 1 ? "bg-mosaic-leaf text-primary-foreground" : "bg-mosaic-hydrangea text-primary-foreground"}`}
                  >
                    {index + 1}
                  </span>
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-background py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
            <div>
              <Eyebrow>{t.host.label}</Eyebrow>
              <h2 className="mt-4 text-4xl font-semibold text-mosaic-deep sm:text-5xl">
                {t.host.title}
              </h2>
              <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-mosaic-ocean">
                <Languages className="h-5 w-5" />
                {t.languages}
              </div>
            </div>
            <div className="space-y-5 text-base leading-8 text-foreground/80 sm:text-lg">
              {t.host.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section
          id="week"
          className="scroll-mt-16 bg-mosaic-deep py-20 text-primary-foreground sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Eyebrow light>{t.week.label}</Eyebrow>
            <div className="mt-4 grid gap-5 lg:grid-cols-[1fr_0.7fr] lg:items-end">
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
                {t.week.title}
              </h2>
              <p className="max-w-xl text-base leading-7 text-primary-foreground/70">
                {t.week.intro}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-7 gap-1" aria-label={t.week.title}>
              {t.days.map((day, index) => (
                <button
                  key={day.title}
                  type="button"
                  onClick={() => setOpenDay(index)}
                  className={`min-w-0 border-t-4 px-1 py-3 text-center transition sm:px-3 ${openDay === index ? "border-mosaic-flower bg-primary-foreground/10" : "border-primary-foreground/20 hover:border-mosaic-hydrangea"}`}
                >
                  <span className="block text-xl font-bold sm:text-3xl">{index + 1}</span>
                  <span className="mt-1 hidden truncate text-xs text-primary-foreground/65 lg:block">
                    {day.title}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {t.days.map((day, index) => {
                const Icon = dayIcons[index] ?? MapPin;
                const expanded = openDay === index;
                return (
                  <article
                    key={day.title}
                    className={`overflow-hidden rounded-md border transition ${expanded ? "border-mosaic-flower bg-primary-foreground text-mosaic-deep lg:col-span-2" : "border-primary-foreground/20 bg-primary-foreground/5"}`}
                  >
                    <button
                      type="button"
                      aria-expanded={expanded}
                      onClick={() => setOpenDay(expanded ? -1 : index)}
                      className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 p-5 text-left sm:p-6"
                    >
                      <span
                        className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${expanded ? "bg-mosaic-flower" : "bg-primary-foreground/10"}`}
                      >
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span
                          className={`block text-xs font-bold uppercase tracking-[0.16em] ${expanded ? "text-mosaic-ocean" : "text-mosaic-flower"}`}
                        >{`${dayWord[lang]} ${index + 1}`}</span>
                        <span className="mt-1 block text-xl font-semibold sm:text-2xl">
                          {day.title}
                        </span>
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`}
                        aria-hidden
                      />
                    </button>
                    {expanded ? (
                      <div className="grid border-t border-mosaic-deep/10 lg:grid-cols-[0.85fr_1.15fr]">
                        <LocationPhotoSlot
                          imageId={returnImageIds[index] ?? "home-coast"}
                          className="h-full min-h-64"
                        />
                        <div className="p-6 sm:p-9">
                          <p className="flex items-center gap-2 text-sm font-bold text-mosaic-roof">
                            <MapPin className="h-4 w-4" aria-hidden />
                            {day.place}
                          </p>
                          <p className="mt-5 text-base leading-8 text-foreground/80 sm:text-lg">
                            {day.body}
                          </p>
                          <div className="mt-7 space-y-4">
                            <blockquote className="border-l-4 border-mosaic-hydrangea pl-5 text-lg font-semibold leading-relaxed text-mosaic-deep sm:text-xl">
                              {day.joy}
                            </blockquote>
                            <p className="border-l-4 border-mosaic-ocean/60 pl-5 text-sm leading-relaxed text-foreground/70">
                              {day.weather}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="activities" className="scroll-mt-16 bg-mosaic-mist py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Eyebrow>{t.activities.label}</Eyebrow>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-mosaic-deep sm:text-5xl">
              {t.activities.title}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-foreground/75">
              {t.activities.intro}
            </p>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {t.activities.items.map((item) => (
                <article key={item.title} className="bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-mosaic-deep">{item.title}</h3>
                  <p className="mt-3 leading-7 text-foreground/75">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-mosaic-ocean py-16 text-primary-foreground sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Eyebrow light>{t.parentsCorner.label}</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              {t.parentsCorner.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-foreground/85">
              {t.parentsCorner.body}
            </p>
          </div>
        </section>

        <section id="formats" className="scroll-mt-16 bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Eyebrow>{t.formats.label}</Eyebrow>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-mosaic-deep sm:text-5xl">
              {t.formats.title}
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {t.formats.items.map((item, index) => (
                <article
                  key={item.title}
                  className={`border-t-8 p-6 shadow-sm ${index === 0 ? "border-mosaic-ocean bg-mosaic-mist" : index === 1 ? "border-mosaic-hydrangea bg-mosaic-mist" : "border-mosaic-flower bg-mosaic-mist"}`}
                >
                  <Users className="h-7 w-7 text-mosaic-deep" aria-hidden />
                  <h3 className="mt-7 text-2xl font-semibold text-mosaic-deep">{item.title}</h3>
                  <p className="mt-4 leading-7 text-foreground/75">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-2">
          <div className="bg-mosaic-leaf p-8 text-primary-foreground sm:p-14 lg:p-20">
            <BookOpen className="h-9 w-9" aria-hidden />
            <Eyebrow light>{t.keepsakes.label}</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{t.keepsakes.title}</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-primary-foreground/85">
              {t.keepsakes.body}
            </p>
          </div>
          <div className="bg-mosaic-hydrangea p-8 text-primary-foreground sm:p-14 lg:p-20">
            <ShieldCheck className="h-9 w-9" aria-hidden />
            <Eyebrow light>{t.boundaries.label}</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{t.boundaries.title}</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-primary-foreground/90">
              {t.boundaries.body}
            </p>
          </div>
        </section>

        <section className="bg-mosaic-flower py-12">
          <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-[auto_1fr] lg:px-8">
            <ShieldCheck className="h-9 w-9 text-mosaic-deep" aria-hidden />
            <div>
              <h2 className="text-2xl font-bold text-mosaic-deep">{t.notice.title}</h2>
              <p className="mt-3 max-w-5xl leading-7 text-mosaic-deep/85">{t.notice.body}</p>
            </div>
          </div>
        </section>

        <section id="inquiry" className="scroll-mt-16 bg-mosaic-mist py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
            <div>
              <Eyebrow>{t.form.label}</Eyebrow>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-mosaic-deep sm:text-5xl">
                {t.form.title}
              </h2>
              <p className="mt-6 max-w-md text-lg leading-8 text-foreground/75">{t.form.intro}</p>
            </div>
            <div className="rounded-md bg-background p-6 shadow-lg shadow-mosaic-deep/10 sm:p-10">
              <form
                  onSubmit={submit}
                  onFocus={() => setFormActive(true)}
                  className="grid gap-5 sm:grid-cols-2"
                >
                  <Field label={t.form.fields.name}>
                    <input name="name" required className={inputClass} placeholder={t.form.placeholders.name} />
                  </Field>
                  <Field label={t.form.fields.contact}>
                    <input
                      name="contact"
                      required
                      className={inputClass}
                      placeholder={t.form.placeholders.contact}
                    />
                  </Field>
                  <Field label={t.form.fields.dates}>
                    <input name="dates" className={inputClass} placeholder={t.form.placeholders.dates} />
                  </Field>
                  <Field label={t.form.fields.guests}>
                    <input name="guests" className={inputClass} placeholder={t.form.placeholders.guests} />
                  </Field>
                  <Field label={t.form.fields.note} wide>
                    <textarea
                      name="note"
                      rows={5}
                      className={`${inputClass} resize-none`}
                      placeholder={t.form.placeholders.note}
                    />
                  </Field>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-3 rounded-md bg-mosaic-deep px-6 py-4 text-sm font-bold text-primary-foreground transition hover:bg-mosaic-ocean sm:col-span-2"
                  >
                    {openWhatsAppLabel[lang]}
                    <Send className="h-4 w-4" aria-hidden />
                  </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <MosaicCta
        lang={lang}
        page="family"
        formOpen={formActive}
        onOpenForm={scrollToInquiry}
        onRetreatAction={scrollToInquiry}
      />

      <footer className="bg-mosaic-deep px-4 py-8 text-center text-sm text-primary-foreground/65">
        {t.footer} · <PhotoCreditsLink />
      </footer>
    </div>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`mt-4 text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-primary-foreground/70" : "text-mosaic-ocean"}`}
    >
      {children}
    </p>
  );
}

function Field({
  label,
  wide = false,
  children,
}: {
  label: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label
      className={`block text-xs font-bold uppercase tracking-[0.12em] text-mosaic-deep ${wide ? "sm:col-span-2" : ""}`}
    >
      {label}
      {children}
    </label>
  );
}
