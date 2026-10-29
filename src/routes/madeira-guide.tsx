import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  ExternalLink,
  Image,
  MapPin,
  PhoneCall,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MosaicLogo } from "@/components/MosaicLogo";
import { MosaicCta } from "@/components/MosaicCta";
import { LocationPhotoSlot } from "@/components/LocationPhotoSlot";
import { PhotoCreditsLink } from "@/components/PhotoCreditsLink";
import { LanguageSwitcher, useLang } from "@/lib/i18n/lang";
import { mosaicContent } from "@/lib/mosaic-content";
import { guideTabs, type GuideCard } from "@/lib/guide-content";
import { contactUrl } from "@/lib/contacts";
import { buildInquiryMessage, openWhatsAppLabel } from "@/lib/inquiry-message";
import { localizedSeoLinks, validateLangSearch } from "@/lib/seo";

const pageStrings = {
  en: {
    badge: "Reference guide",
    title: "The Madeira guide: a full reference catalog",
    intro:
      "Beaches, mountains, levadas, food, festivals, practical logistics and emergency information — organised into browsable tabs so you can find what matters to you right now.",
    formTitle: "Ask about the guide",
    formQuestion: "Which guide section or island question matters to you right now?",
    back: "Back to home",
    healthTitle: "112 — Emergency",
    healthBody:
      "For any life-threatening or urgent situation in Madeira, call 112 immediately. This number connects to ambulance, fire and police services.",
    scheduledNote:
      "The contacts below are for scheduled, non-emergency care only — never use them instead of 112 in an emergency.",
    more: "Details",
    expect: "What to expect",
    fit: "Who it suits",
    practical: "Practical notes",
    source: "Official source",
    checked: "Checked",
  },
  be: {
    badge: "Даведнік",
    title: "Гід па Мадэйры: поўны даведачны каталог",
    intro:
      "Пляжы, горы, левады, ежа, фестывалі, практычная лагістыка і надзвычайная інфармацыя — арганізавана ва ўкладкі, каб вы маглі знайсці тое, што важна менавіта зараз.",
    formTitle: "Спытаць пра гід",
    formQuestion: "Які раздзел гіда ці пытанне па востраве для вас зараз актуальны?",
    back: "Вярнуцца на галоўную",
    healthTitle: "112 — Экстранная дапамога",
    healthBody:
      "У любой сітуацыі, якая пагражае жыццю, або тэрміновай сітуацыі на Мадэйры неадкладна тэлефануйце 112. Гэты нумар звязвае з хуткай дапамогай, пажарнай і паліцыяй.",
    scheduledNote:
      "Кантакты ніжэй прызначаны толькі для запланаванай, неэкстранай дапамогі — ніколі не выкарыстоўвайце іх замест 112 у надзвычайнай сітуацыі.",
    more: "Падрабязна",
    expect: "Што вы атрымаеце",
    fit: "Каму падыходзіць",
    practical: "Практычныя звесткі",
    source: "Афіцыйная крыніца",
    checked: "Праверана",
  },
  uk: {
    badge: "Довідник",
    title: "Гід по Мадейрі: повний довідковий каталог",
    intro:
      "Пляжі, гори, левади, їжа, фестивалі, практична логістика та екстрена інформація — організовано у вкладки, щоб ви могли знайти те, що важливо саме зараз.",
    formTitle: "Запитати про гід",
    formQuestion: "Який розділ гіда чи питання про острів для вас зараз актуальне?",
    back: "Повернутися на головну",
    healthTitle: "112 — Екстрена допомога",
    healthBody:
      "У будь-якій ситуації, що загрожує життю, або терміновій ситуації на Мадейрі негайно телефонуйте 112. Цей номер з'єднує зі швидкою допомогою, пожежною та поліцією.",
    scheduledNote:
      "Контакти нижче призначені лише для запланованої, неекстреної допомоги — ніколи не використовуйте їх замість 112 в екстреній ситуації.",
    more: "Докладніше",
    expect: "Що ви отримаєте",
    fit: "Кому підходить",
    practical: "Практичні відомості",
    source: "Офіційне джерело",
    checked: "Перевірено",
  },
  ru: {
    badge: "Справочник",
    title: "Гид по Мадейре: полный справочный каталог",
    intro:
      "Пляжи, горы, левады, еда, фестивали, практическая логистика и экстренная информация — организовано во вкладки, чтобы вы могли найти то, что важно именно сейчас.",
    formTitle: "Спросить о гиде",
    formQuestion: "Какой раздел гида или вопрос по острову для вас сейчас актуален?",
    back: "Вернуться на главную",
    healthTitle: "112 — Экстренная помощь",
    healthBody:
      "В любой опасной для жизни или срочной ситуации на Мадейре немедленно звоните 112. Этот номер связывает со скорой помощью, пожарной службой и полицией.",
    scheduledNote:
      "Контакты ниже предназначены только для плановой, неэкстренной помощи — никогда не используйте их вместо 112 в экстренной ситуации.",
    more: "Подробнее",
    expect: "Что вы получите",
    fit: "Кому подходит",
    practical: "Практические сведения",
    source: "Официальный источник",
    checked: "Проверено",
  },
} as const;

function GuideCardView({
  card,
  lang,
  onOpen,
}: {
  card: GuideCard;
  lang: keyof typeof pageStrings;
  onOpen: () => void;
}) {
  const page = pageStrings[lang];
  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-md bg-card shadow-[0_12px_34px_-24px_var(--shadow-color)]">
      {card.imageId ? (
        <LocationPhotoSlot imageId={card.imageId} className="aspect-[16/7]" />
      ) : (
        <div className="grid aspect-[16/7] place-items-center bg-mosaic-mist" aria-hidden>
          <span className="grid h-12 w-12 place-items-center rounded-full bg-mosaic-ocean/10 text-mosaic-ocean">
            <Image className="h-5 w-5" />
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-lg font-extrabold leading-snug text-mosaic-deep">
          {typeof card.name === "string" ? card.name : card.name[lang]}
        </h3>
        <p className="mt-2 flex items-center gap-1.5 text-xs font-bold uppercase text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-mosaic-roof" />
          {card.area[lang]}
        </p>
        <p className="mt-3 flex-1 text-sm leading-6 text-foreground/80">{card.description[lang]}</p>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
          <a
            href={card.source.url}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1 text-xs font-bold text-mosaic-ocean underline underline-offset-2"
          >
            {page.source} · {card.source.checkedOn}
            <ExternalLink className="h-3 w-3" />
          </a>
          <Button
            size="sm"
            variant="outline"
            onClick={onOpen}
            className="border-mosaic-deep/20 font-bold text-mosaic-deep"
          >
            {page.more}
          </Button>
        </div>
      </div>
    </article>
  );
}

export const Route = createFileRoute("/madeira-guide")({
  validateSearch: validateLangSearch,
  head: ({ match }) => {
    const lang = match.search.lang ?? "en";
    const page = pageStrings[lang];
    const descriptions = {
      en: "A practical Madeira guide to beaches, mountains, levadas, food, festivals, transport and useful island information.",
      ru: "Практический гид по Мадейре: пляжи, горы, левады, рестораны, фестивали, транспорт и полезная информация об острове.",
      uk: "Практичний гід по Мадейрі: пляжі, гори, левади, їжа, фестивалі, транспорт і корисна інформація про острів.",
      be: "Практычны гід па Мадэйры: пляжы, горы, левады, ежа, фестывалі, транспарт і карысная інфармацыя пра востраў.",
    };
    const canonical = `https://guide.orthodoxmadeira.com/madeira-guide?lang=${lang}`;
    return {
      meta: [
        { title: `${page.title} — Madeira Mosaic` },
        { name: "description", content: descriptions[lang] },
        { property: "og:title", content: page.title },
        { property: "og:description", content: descriptions[lang] },
        { property: "og:type", content: "website" },
        { property: "og:url", content: canonical },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: localizedSeoLinks("/madeira-guide", lang),
    };
  },
  component: MadeiraGuidePage,
});

function MadeiraGuidePage() {
  const { lang } = useLang();
  const t = mosaicContent[lang];
  const page = pageStrings[lang];
  const [formActive, setFormActive] = useState(false);
  const [activeTab, setActiveTab] = useState<string>(guideTabs[0]?.id ?? "beaches");
  const [selectedCard, setSelectedCard] = useState<GuideCard | null>(null);

  const healthTab = useMemo(() => guideTabs.find((tab) => tab.id === "health"), []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = buildInquiryMessage({
      topic: page.formTitle,
      lang,
      name: String(data.get("name") ?? ""),
      contact: String(data.get("contact") ?? ""),
      details: [["Question / Вопрос", String(data.get("question") ?? "")]],
    });
    window.open(contactUrl("whatsapp", message), "_blank", "noopener,noreferrer");
    console.info("[cta]", "messenger_opened", "whatsapp");
  }

  function focusForm() {
    setFormActive(true);
    document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
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
            <LocationPhotoSlot imageId="food" className="h-full" />
          </div>
          <div className="absolute inset-0 bg-mosaic-hydrangea opacity-85" />
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
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
              {page.formTitle}
              <Send />
            </Button>
          </div>
        </section>

        {healthTab ? (
          <section className="bg-mosaic-deep px-4 py-6 text-primary-foreground sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-7xl flex-col items-start gap-3 rounded-md border-2 border-mosaic-flower bg-mosaic-deep p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-mosaic-flower text-mosaic-deep">
                  <PhoneCall className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-xl font-extrabold leading-tight">
                    {page.healthTitle}
                  </p>
                  <p className="mt-1 max-w-2xl text-sm leading-6 text-primary-foreground/85">
                    {page.healthBody}
                  </p>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="bg-background py-12 sm:py-16">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
                <TabsList className="flex h-auto w-max flex-nowrap gap-1 sm:w-full sm:flex-wrap">
                  {guideTabs.map((tab) => (
                    <TabsTrigger key={tab.id} value={tab.id} className="whitespace-nowrap">
                      {tab.title[lang]}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {guideTabs.map((tab) => (
                <TabsContent key={tab.id} value={tab.id} className="mt-6">
                  <div className="mb-6 max-w-3xl">
                    <h2 className="font-display text-2xl font-extrabold leading-snug text-mosaic-deep sm:text-3xl">
                      {tab.title[lang]}
                    </h2>
                    <p className="mt-3 leading-7 text-muted-foreground">{tab.intro[lang]}</p>
                    {tab.disclaimer ? (
                      <div className="mt-4 flex items-start gap-2.5 rounded-md bg-mosaic-mist p-4 text-sm leading-6 text-foreground/80">
                        <AlertTriangle
                          className="mt-0.5 h-4 w-4 shrink-0 text-mosaic-roof"
                          aria-hidden
                        />
                        <span>{tab.disclaimer[lang]}</span>
                      </div>
                    ) : null}
                    {tab.id === "health" ? (
                      <div className="mt-4 flex items-start gap-2.5 rounded-md border border-mosaic-deep/15 bg-card p-4 text-sm leading-6 text-foreground/80">
                        <AlertTriangle
                          className="mt-0.5 h-4 w-4 shrink-0 text-mosaic-roof"
                          aria-hidden
                        />
                        <span>{page.scheduledNote}</span>
                      </div>
                    ) : null}
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {tab.cards.map((card) => (
                      <GuideCardView
                        key={card.id}
                        card={card}
                        lang={lang}
                        onOpen={() => setSelectedCard(card)}
                      />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <section id="inquiry" className="scroll-mt-20 bg-mosaic-mist py-16 sm:py-24">
          <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <span className="inline-flex rounded bg-mosaic-flower px-3 py-1 text-xs font-extrabold uppercase text-mosaic-deep">
                {t.formBadge}
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-mosaic-deep sm:text-4xl">
                {page.formTitle}
              </h2>
              <p className="mt-4 leading-7 text-foreground/75">{page.formQuestion}</p>
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
                  <textarea
                    name="question"
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

      <Dialog
        open={selectedCard !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedCard(null);
        }}
      >
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
          <DialogTitle className="pr-8 font-display text-2xl font-extrabold text-mosaic-deep">
            {selectedCard && (typeof selectedCard.name === "string" ? selectedCard.name : selectedCard.name[lang])}
          </DialogTitle>
          <DialogDescription className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {selectedCard?.area[lang]}
          </DialogDescription>
          {selectedCard ? (
            <div className="grid gap-5 pt-2">
              {[
                [page.expect, selectedCard.benefit[lang]],
                [page.fit, selectedCard.fit[lang]],
                [page.practical, selectedCard.practical[lang]],
              ].map(([label, value]) => (
                <section key={label} className="border-l-4 border-mosaic-ocean pl-4">
                  <h3 className="font-display text-sm font-extrabold text-mosaic-deep">{label}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{value}</p>
                </section>
              ))}
              <a
                href={selectedCard.source.url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm font-bold text-mosaic-ocean underline underline-offset-4"
              >
                {page.source} · {page.checked} {selectedCard.source.checkedOn}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>

      <MosaicCta
        lang={lang}
        page="home"
        formOpen={formActive}
        onOpenForm={focusForm}
        onRetreatAction={focusForm}
      />
    </div>
  );
}
