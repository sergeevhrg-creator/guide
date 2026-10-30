import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Instagram, MessageCircle, Phone, Sparkles, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CONTACTS, contactUrl, QUICK_INQUIRY } from "@/lib/contacts";
import { socialLinks, type MosaicLang } from "@/lib/mosaic-content";

export type CtaScenario = "route" | "tour" | "instagram" | "retreat" | "family";

const DISMISS_DAYS = 7;
const MIN_GAP_MS = 30_000;
const MAX_PER_SESSION = 2;

const copy = {
  ru: {
    route: {
      text: "Хотите подобрать маршрут по погоде и вашим интересам?",
      action: "Оставить заявку",
    },
    tour: {
      text: "Есть вопросы? Обсудите поездку напрямую.",
      whatsapp: "WhatsApp",
      call: "Позвонить",
      note: "Контакт для связи Павел подтверждает после запроса.",
    },
    instagram: { text: "Откройте новые грани Мадейры", action: "Открыть Instagram" },
    retreat: {
      text: "Готовы обсудить даты?",
      dates: "Узнать ближайшие даты Недели тишины",
      family: "Получить программу семейного путешествия",
    },
    family: {
      text: "Получить программу семейного путешествия?",
      action: "Обсудить семейную неделю",
    },
    float: "Подобрать поездку",
    close: "Закрыть",
  },
  en: {
    route: {
      text: "Shall we match a route to the weather and your interests?",
      action: "Send a request",
    },
    tour: {
      text: "Questions? Talk the trip through directly.",
      whatsapp: "WhatsApp",
      call: "Call",
      note: "Pavel confirms the contact channel after your request.",
    },
    instagram: { text: "Discover another side of Madeira", action: "Open Instagram" },
    retreat: {
      text: "Ready to talk about dates?",
      dates: "Ask about the next Week of Silence dates",
      family: "Get the family journey programme",
    },
    family: {
      text: "Would you like the family journey programme?",
      action: "Discuss the family week",
    },
    float: "Plan my trip",
    close: "Close",
  },
  be: {
    route: { text: "Падабраць маршрут пад надвор'е і вашы інтарэсы?", action: "Пакінуць заяўку" },
    tour: {
      text: "Ёсць пытанні? Абмяркуйце паездку напрамую.",
      whatsapp: "WhatsApp",
      call: "Патэлефанаваць",
      note: "Кантакт для сувязі Павел пацвярджае пасля запыту.",
    },
    instagram: { text: "Адкрыйце новыя грані Мадэйры", action: "Адкрыць Instagram" },
    retreat: {
      text: "Гатовыя абмеркаваць даты?",
      dates: "Даведацца бліжэйшыя даты Тыдня цішыні",
      family: "Атрымаць праграму сямейнага падарожжа",
    },
    family: {
      text: "Атрымаць праграму сямейнага падарожжа?",
      action: "Абмеркаваць сямейны тыдзень",
    },
    float: "Падабраць паездку",
    close: "Закрыць",
  },
  uk: {
    route: { text: "Підібрати маршрут під погоду і ваші інтереси?", action: "Залишити заявку" },
    tour: {
      text: "Є питання? Обговоріть поїздку напряму.",
      whatsapp: "WhatsApp",
      call: "Зателефонувати",
      note: "Контакт для зв'язку Павло підтверджує після запиту.",
    },
    instagram: { text: "Відкрийте нові грані Мадейри", action: "Відкрити Instagram" },
    retreat: {
      text: "Готові обговорити дати?",
      dates: "Дізнатися найближчі дати Тижня тиші",
      family: "Отримати програму сімейної подорожі",
    },
    family: { text: "Отримати програму сімейної подорожі?", action: "Обговорити сімейний тиждень" },
    float: "Підібрати поїздку",
    close: "Закрити",
  },
} as const;

function log(event: string, scenario: CtaScenario | "form") {
  console.info("[cta]", event, scenario);
}

function isDismissed(scenario: CtaScenario) {
  if (typeof window === "undefined") return true;
  const raw = window.localStorage.getItem(`mosaic-cta-dismissed-${scenario}`);
  if (!raw) return false;
  return Date.now() - Number(raw) < DISMISS_DAYS * 86_400_000;
}

export function useVisitTracking() {
  const [repeatVisitor, setRepeatVisitor] = useState(false);
  useEffect(() => {
    const views = Number(window.sessionStorage.getItem("mosaic-views") ?? "0") + 1;
    window.sessionStorage.setItem("mosaic-views", String(views));
    const seenBefore = window.localStorage.getItem("mosaic-visited");
    window.localStorage.setItem("mosaic-visited", "1");
    setRepeatVisitor(views >= 2 || seenBefore === "1");
  }, []);
  return repeatVisitor;
}

interface Props {
  lang: MosaicLang;
  formOpen: boolean;
  onOpenForm: () => void;
  page: "home" | "retreat" | "family";
  tourViewed?: boolean;
  onRetreatAction?: () => void;
}

export function MosaicCta({
  lang,
  formOpen,
  onOpenForm,
  page,
  tourViewed = false,
  onRetreatAction,
}: Props) {
  const t = copy[lang];
  const [active, setActive] = useState<CtaScenario | null>(null);
  const [shown, setShown] = useState(0);
  const lastShownAt = useRef(0);
  const usedScenarios = useRef<Set<CtaScenario>>(new Set());
  const repeatVisitor = useVisitTracking();

  const canShow = useCallback(
    (scenario: CtaScenario) =>
      !formOpen &&
      active === null &&
      shown < MAX_PER_SESSION &&
      !usedScenarios.current.has(scenario) &&
      !isDismissed(scenario) &&
      Date.now() - lastShownAt.current > MIN_GAP_MS,
    [active, formOpen, shown],
  );

  const show = useCallback((scenario: CtaScenario) => {
    usedScenarios.current.add(scenario);
    lastShownAt.current = Date.now();
    setShown((count) => count + 1);
    setActive(scenario);
    log("cta_view", scenario);
  }, []);

  // (a) 10 seconds or 35% scroll, (d) retreat page
  useEffect(() => {
    const primary: CtaScenario =
      page === "retreat" ? "retreat" : page === "family" ? "family" : "route";
    const timer = window.setTimeout(() => {
      if (canShow(primary)) show(primary);
    }, 10_000);
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max >= 0.35 && canShow(primary)) show(primary);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [canShow, page, show]);

  // (b) after viewing a tour card
  useEffect(() => {
    if (!tourViewed) return;
    const timer = window.setTimeout(() => {
      if (canShow("tour")) show("tour");
    }, 1_200);
    return () => window.clearTimeout(timer);
  }, [canShow, show, tourViewed]);

  // (c) repeat visit or 2+ page views
  useEffect(() => {
    if (!repeatVisitor) return;
    const timer = window.setTimeout(() => {
      if (canShow("instagram")) show("instagram");
    }, 45_000);
    return () => window.clearTimeout(timer);
  }, [canShow, repeatVisitor, show]);

  useEffect(() => {
    if (formOpen) setActive(null);
  }, [formOpen]);

  const dismiss = () => {
    if (!active) return;
    window.localStorage.setItem(`mosaic-cta-dismissed-${active}`, String(Date.now()));
    log("cta_close", active);
    setActive(null);
  };

  const openForm = (scenario: CtaScenario, event: string) => {
    log(event, scenario);
    setActive(null);
    onOpenForm();
  };

  const body = useMemo(() => {
    if (active === "route") {
      return (
        <>
          <p className="text-sm font-bold leading-6">{t.route.text}</p>
          <Button
            onClick={() => openForm("route", "cta_form_open")}
            className="mt-4 w-full bg-mosaic-flower font-extrabold text-mosaic-deep hover:bg-mosaic-leaf hover:text-primary-foreground"
          >
            {t.route.action}
          </Button>
        </>
      );
    }
    if (active === "tour") {
      return (
        <>
          <p className="text-sm font-bold leading-6">{t.tour.text}</p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Button
              asChild
              className="h-auto min-h-11 whitespace-normal bg-mosaic-leaf font-bold hover:bg-mosaic-flower hover:text-mosaic-deep"
            >
              <a
                href={contactUrl("whatsapp", QUICK_INQUIRY[lang])}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle />
                {t.tour.whatsapp}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-auto min-h-11 whitespace-normal border-primary-foreground/60 bg-transparent font-bold text-primary-foreground hover:bg-primary-foreground hover:text-mosaic-deep"
            >
              <a href={CONTACTS.phoneUrl} aria-label={`${t.tour.call}: ${CONTACTS.phoneNumber}`}>
                <Phone />
                {t.tour.call}
              </a>
            </Button>
          </div>
          <p className="mt-3 text-xs leading-5 text-primary-foreground/75">{t.tour.note}</p>
        </>
      );
    }
    if (active === "instagram") {
      return (
        <>
          <p className="text-sm font-bold leading-6">{t.instagram.text}</p>
          <Button
            asChild
            className="mt-4 w-full bg-mosaic-flower font-extrabold text-mosaic-deep hover:bg-mosaic-leaf hover:text-primary-foreground"
          >
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => log("cta_instagram", "instagram")}
            >
              <Instagram />
              {t.instagram.action}
            </a>
          </Button>
        </>
      );
    }
    if (active === "retreat") {
      return (
        <>
          <p className="text-sm font-bold leading-6">{t.retreat.text}</p>
          <div className="mt-4 grid gap-2">
            <Button
              onClick={() => {
                log("cta_form_open", "retreat");
                setActive(null);
                onRetreatAction?.();
              }}
              className="bg-mosaic-flower text-left font-extrabold text-mosaic-deep hover:bg-mosaic-leaf hover:text-primary-foreground"
            >
              {t.retreat.dates}
            </Button>
            <Button
              onClick={() => {
                log("cta_form_open", "retreat");
                setActive(null);
                onRetreatAction?.();
              }}
              variant="outline"
              className="border-primary-foreground/60 bg-transparent text-left font-bold text-primary-foreground hover:bg-primary-foreground hover:text-mosaic-deep"
            >
              {t.retreat.family}
            </Button>
          </div>
        </>
      );
    }
    if (active === "family") {
      return (
        <>
          <p className="text-sm font-bold leading-6">{t.family.text}</p>
          <Button
            onClick={() => openForm("family", "cta_form_open")}
            className="mt-4 w-full bg-mosaic-flower font-extrabold text-mosaic-deep hover:bg-mosaic-leaf hover:text-primary-foreground"
          >
            {t.family.action}
          </Button>
        </>
      );
    }
    return null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, lang, t]);

  if (formOpen) return null;

  if (!active) {
    return (
      <button
        type="button"
        data-cta="float"
        onClick={() => {
          log("cta_form_open", "route");
          onOpenForm();
        }}
        className="fixed bottom-4 left-1/2 z-30 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-mosaic-deep px-5 py-3 text-sm font-extrabold text-primary-foreground shadow-lg sm:hidden"
      >
        <Sparkles className="h-4 w-4" aria-hidden />
        {t.float}
      </button>
    );
  }

  return (
    <div
      role="dialog"
      data-cta={active}
      aria-live="polite"
      className="fixed inset-x-3 bottom-4 z-30 rounded-lg bg-mosaic-deep p-5 text-primary-foreground shadow-2xl sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-80"
    >
      <button
        type="button"
        onClick={dismiss}
        aria-label={t.close}
        className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full text-primary-foreground/80 transition hover:bg-primary-foreground/15 hover:text-primary-foreground"
      >
        <X className="h-4 w-4" aria-hidden />
      </button>
      <div className="pr-6">{body}</div>
    </div>
  );
}
