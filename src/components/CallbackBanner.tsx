import { useEffect, useState, type FormEvent } from "react";
import { useRouterState } from "@tanstack/react-router";
import { PhoneCall, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { readConsent } from "@/lib/consent";
import { useLang } from "@/lib/i18n/lang";
import { leadEmailEnabled, sendLeadEmail } from "@/lib/lead-email";
import {
  CALLBACK_DELAY_MS,
  CALLBACK_DISMISSED_KEY,
  CALLBACK_SENT_KEY,
  callbackAllowedOnPath,
  callbackDismissed,
  normalizePhone,
} from "@/lib/callback";
import { readAttribution, sourceLine, track, trackThen } from "@/lib/tracking";

const copy = {
  ru: {
    title: "Павел перезвонит за 10 минут",
    text: "Оставьте номер с кодом страны — Павел свяжется с вами в течение 10 минут.",
    label: "Ваш номер телефона с кодом страны",
    button: "Жду звонка",
    sending: "Отправляем…",
    invalid: "Введите номер с кодом страны, например +351 912 345 678",
    failed: "Не удалось отправить. Попробуйте ещё раз или напишите в WhatsApp.",
    done: "Спасибо! Павел скоро свяжется с вами.",
    close: "Закрыть",
    note: "Номер нужен только для ответа по экскурсии.",
  },
  en: {
    title: "Pavel will call you back in 10 minutes",
    text: "Leave your number with the country code — Pavel will contact you within 10 minutes.",
    label: "Your phone number with country code",
    button: "Call me back",
    sending: "Sending…",
    invalid: "Enter the number with the country code, e.g. +44 7700 900123",
    failed: "Could not send. Please try again or write on WhatsApp.",
    done: "Thank you! Pavel will contact you shortly.",
    close: "Close",
    note: "Your number is used only to reply about the tour.",
  },
  be: {
    title: "Павел перазвоніць за 10 хвілін",
    text: "Пакіньце нумар з кодам краіны — Павел звяжацца з вамі на працягу 10 хвілін.",
    label: "Ваш нумар тэлефона з кодам краіны",
    button: "Чакаю званка",
    sending: "Адпраўляем…",
    invalid: "Увядзіце нумар з кодам краіны, напрыклад +375 29 123 45 67",
    failed: "Не ўдалося адправіць. Паспрабуйце яшчэ раз або напішыце ў WhatsApp.",
    done: "Дзякуй! Павел хутка звяжацца з вамі.",
    close: "Закрыць",
    note: "Нумар патрэбны толькі для адказу пра экскурсію.",
  },
  uk: {
    title: "Павло передзвонить за 10 хвилин",
    text: "Залиште номер із кодом країни — Павло зв’яжеться з вами протягом 10 хвилин.",
    label: "Ваш номер телефону з кодом країни",
    button: "Чекаю дзвінка",
    sending: "Надсилаємо…",
    invalid: "Введіть номер із кодом країни, наприклад +380 67 123 45 67",
    failed: "Не вдалося надіслати. Спробуйте ще раз або напишіть у WhatsApp.",
    done: "Дякуємо! Павло скоро зв’яжеться з вами.",
    close: "Закрити",
    note: "Номер потрібен лише для відповіді щодо екскурсії.",
  },
} as const;

const QUICK_PANEL_SEEN_KEY = "mosaic-contact-auto-seen";

function demoMode() {
  return new URLSearchParams(window.location.search).get("callback") === "demo";
}

function readNumber(storage: Storage, key: string): number | null {
  try {
    const v = Number(storage.getItem(key));
    return Number.isFinite(v) && v > 0 ? v : null;
  } catch {
    return null;
  }
}

export function CallbackBanner() {
  const { lang } = useLang();
  const t = copy[lang];
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [shown, setShown] = useState(false);
  const [phone, setPhone] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "invalid" | "failed" | "done">("idle");

  useEffect(() => {
    if (shown || !callbackAllowedOnPath(pathname)) return;
    const demo = demoMode();
    if (!demo && !leadEmailEnabled()) return;
    if (!demo) {
      if (readNumber(window.localStorage, CALLBACK_SENT_KEY)) return;
      if (callbackDismissed(readNumber(window.localStorage, CALLBACK_DISMISSED_KEY), Date.now()))
        return;
    }
    let timer: number;
    const tryShow = () => {
      // Wait for the cookie choice and for any open dialog to close.
      const busy =
        readConsent() === null ||
        document.visibilityState !== "visible" ||
        Boolean(document.querySelector('[role="dialog"]'));
      if (busy) {
        timer = window.setTimeout(tryShow, 2_000);
        return;
      }
      setShown(true);
      // The quick-contact panel no longer opens by itself in this visit.
      try {
        window.sessionStorage.setItem(QUICK_PANEL_SEEN_KEY, "1");
      } catch {
        /* storage unavailable */
      }
      track("callback_banner_show", { page: window.location.pathname, lang });
    };
    timer = window.setTimeout(tryShow, CALLBACK_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [pathname, shown, lang]);

  function close() {
    setShown(false);
    try {
      window.localStorage.setItem(CALLBACK_DISMISSED_KEY, String(Date.now()));
    } catch {
      /* storage unavailable */
    }
    track("callback_banner_close", { page: window.location.pathname, sent: state === "done" });
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;
    const number = normalizePhone(phone);
    if (!number) {
      setState("invalid");
      return;
    }
    setState("sending");
    const source = sourceLine(lang, readAttribution());
    const ok = demoMode()
      ? true
      : await sendLeadEmail({
          name: "Обратный звонок",
          contact: number,
          channel: "Перезвонить",
          product: "Перезвонить за 10 минут",
          message: [
            `Перезвонить: ${number}`,
            `Страница: ${window.location.href.split("?")[0]}`,
            `Язык: ${lang.toUpperCase()}`,
            source,
          ]
            .filter(Boolean)
            .join("\n"),
          lang,
        });
    if (!ok) {
      setState("failed");
      return;
    }
    setState("done");
    try {
      window.localStorage.setItem(CALLBACK_SENT_KEY, String(Date.now()));
    } catch {
      /* storage unavailable */
    }
    trackThen(
      "generate_lead",
      { form_location: "callback_banner", channel: "callback", lang },
      () => window.setTimeout(() => setShown(false), 5_000),
    );
  }

  if (!shown) return null;

  return (
    <section
      role="region"
      aria-label={t.title}
      data-track-location="callback_banner"
      className="fixed inset-x-0 bottom-0 z-50 animate-in slide-in-from-bottom duration-500 border-t border-mosaic-ocean/30 bg-mosaic-deep text-primary-foreground shadow-[0_-8px_24px_rgba(0,0,0,0.18)]"
    >
      <div className="relative mx-auto flex max-w-7xl flex-col gap-3 px-4 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] pt-4 sm:px-6 lg:flex-row lg:items-center lg:gap-6">
        <button
          type="button"
          onClick={close}
          aria-label={t.close}
          className="absolute right-2 top-2 rounded-full p-2 text-primary-foreground/80 hover:bg-white/10 hover:text-primary-foreground"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="min-w-0 pr-10 lg:flex-1">
          <p className="flex items-center gap-2 font-display text-lg font-extrabold leading-tight">
            <PhoneCall className="h-5 w-5 shrink-0" aria-hidden="true" />
            {t.title}
          </p>
          <p className="mt-1 text-sm leading-5 text-primary-foreground/80">{t.text}</p>
        </div>
        {state === "done" ? (
          <p role="status" className="text-base font-bold lg:flex-1">
            {t.done}
          </p>
        ) : (
          <form onSubmit={submit} className="flex flex-col gap-2 lg:w-[30rem]" noValidate>
            <div className="flex gap-2">
              <label className="sr-only" htmlFor="callback-phone">
                {t.label}
              </label>
              <input
                id="callback-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+351 912 345 678"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (state === "invalid" || state === "failed") setState("idle");
                }}
                className="h-12 min-w-0 flex-1 rounded-md border border-white/30 bg-white px-3 text-base text-foreground"
              />
              <Button
                type="submit"
                disabled={state === "sending"}
                className="h-12 shrink-0 bg-mosaic-leaf px-4 font-extrabold hover:bg-mosaic-ocean"
              >
                {state === "sending" ? t.sending : t.button}
              </Button>
            </div>
            {state === "invalid" && (
              <p role="alert" className="text-sm font-bold text-amber-200">
                {t.invalid}
              </p>
            )}
            {state === "failed" && (
              <p role="alert" className="text-sm font-bold text-amber-200">
                {t.failed}
              </p>
            )}
            <p className="text-xs text-primary-foreground/70">{t.note}</p>
          </form>
        )}
      </div>
    </section>
  );
}
