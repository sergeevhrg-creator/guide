import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { readConsent, saveConsent } from "@/lib/consent";
import { useLang } from "@/lib/i18n/lang";

const copy = {
  ru: {
    title: "Cookies и локальное хранение",
    text: "Сейчас сайт использует только необходимое локальное хранение для языка и работы интерфейса. Аналитика и маркетинговые трекеры не подключены.",
    continue: "Продолжить",
    details: "Что сохраняется",
    hideDetails: "Скрыть подробности",
    necessary: "Необходимое локальное хранение",
    necessaryHelp:
      "Выбранный язык и решение об этом уведомлении; отметки текущей сессии; закрытые продающие подсказки — до 7 дней.",
    optional: "Аналитика и маркетинг",
    unused:
      "Не используются и не получают согласие заранее. Если такие инструменты появятся, сайт запросит новое отдельное согласие.",
  },
  en: {
    title: "Cookies and local storage",
    text: "The site currently uses only necessary local storage for language and interface functions. Analytics and marketing trackers are not connected.",
    continue: "Continue",
    details: "What is stored",
    hideDetails: "Hide details",
    necessary: "Necessary local storage",
    necessaryHelp:
      "Your selected language and this notice decision; current-session markers; dismissed sales prompts for up to 7 days.",
    optional: "Analytics and marketing",
    unused:
      "Not used and not pre-authorised. If such tools are added, the site will request new, separate consent.",
  },
  be: {
    title: "Cookies і лакальнае захоўванне",
    text: "Цяпер сайт выкарыстоўвае толькі неабходнае лакальнае захоўванне для мовы і працы інтэрфейсу. Аналітыка і маркетынгавыя трэкеры не падключаны.",
    continue: "Працягнуць",
    details: "Што захоўваецца",
    hideDetails: "Схаваць падрабязнасці",
    necessary: "Неабходнае лакальнае захоўванне",
    necessaryHelp:
      "Выбраная мова і рашэнне пра гэтае паведамленне; адзнакі бягучай сесіі; закрытыя падказкі продажу — да 7 дзён.",
    optional: "Аналітыка і маркетынг",
    unused:
      "Не выкарыстоўваюцца і не атрымліваюць згоду загадзя. Калі такія інструменты з’явяцца, сайт асобна запытае новую згоду.",
  },
  uk: {
    title: "Cookies і локальне зберігання",
    text: "Зараз сайт використовує лише необхідне локальне зберігання для мови й роботи інтерфейсу. Аналітика та маркетингові трекери не підключені.",
    continue: "Продовжити",
    details: "Що зберігається",
    hideDetails: "Сховати подробиці",
    necessary: "Необхідне локальне зберігання",
    necessaryHelp:
      "Вибрана мова й рішення щодо цього повідомлення; позначки поточної сесії; закриті підказки продажу — до 7 днів.",
    optional: "Аналітика й маркетинг",
    unused:
      "Не використовуються й не отримують згоду наперед. Якщо такі інструменти з’являться, сайт окремо запросить нову згоду.",
  },
};

export function CookieConsent() {
  const { lang } = useLang();
  const t = copy[lang];
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const panelRef = useRef<HTMLElement | null>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!readConsent()) setOpen(true);

    const reopen = () => {
      returnFocusRef.current = document.activeElement as HTMLElement | null;
      setDetails(true);
      setOpen(true);
      window.requestAnimationFrame(() => panelRef.current?.focus());
    };
    window.addEventListener("madeira-open-cookie-settings", reopen);
    return () => window.removeEventListener("madeira-open-cookie-settings", reopen);
  }, []);

  function continueWithNecessaryStorage() {
    saveConsent();
    setOpen(false);
    returnFocusRef.current?.focus();
    returnFocusRef.current = null;
  }

  if (!open) return null;

  return (
    <aside
      ref={panelRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-notice-title"
      aria-describedby="cookie-notice-description"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-h-[min(70dvh,38rem)] max-w-xl overflow-y-auto rounded-2xl border border-border bg-background p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom,0px))] shadow-2xl sm:inset-x-6"
    >
      <h2 id="cookie-notice-title" className="font-display text-xl font-extrabold text-mosaic-deep">
        {t.title}
      </h2>
      <p id="cookie-notice-description" className="mt-2 text-sm leading-6 text-muted-foreground">
        {t.text}
      </p>
      <div className="mt-4 space-y-4">
        {details && (
          <div className="space-y-4 rounded-xl bg-mosaic-mist p-4">
            <div>
              <strong>{t.necessary}</strong>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{t.necessaryHelp}</p>
            </div>
            <div>
              <strong>{t.optional}</strong>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{t.unused}</p>
            </div>
          </div>
        )}
        <div className="grid gap-2 sm:grid-cols-2">
          <Button
            className="h-auto min-h-11 whitespace-normal py-3 text-center font-bold"
            onClick={continueWithNecessaryStorage}
          >
            {t.continue}
          </Button>
          <Button
            variant="outline"
            className="h-auto min-h-11 whitespace-normal py-3 text-center font-bold"
            onClick={() => setDetails((current) => !current)}
          >
            {details ? t.hideDetails : t.details}
          </Button>
        </div>
      </div>
    </aside>
  );
}
