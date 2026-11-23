import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { readConsent, saveConsent } from "@/lib/consent";
import { useLang } from "@/lib/i18n/lang";
import { applyConsent } from "@/lib/tracking";

const copy = {
  ru: {
    title: "Cookies и аналитика",
    text: "Сайт хранит язык и настройки интерфейса. С вашего согласия мы также используем Google Analytics и Google Ads через Google Tag Manager, чтобы понимать, какие страницы и реклама полезны. Вы можете согласиться или отказаться — сайт работает одинаково.",
    acceptAll: "Принять все",
    necessaryOnly: "Только необходимые",
    customise: "Настроить",
    save: "Сохранить выбор",
    hideDetails: "Скрыть настройки",
    necessary: "Необходимые — всегда включены",
    necessaryHelp:
      "Выбранный язык и решение об этом уведомлении; отметки текущей сессии; источник перехода на время сессии, чтобы указать его в вашем сообщении Павлу; закрытые подсказки — до 7 дней.",
    analytics: "Аналитика",
    analyticsHelp:
      "Google Analytics: просмотры страниц, нажатия кнопок и отправка формы, чтобы улучшать сайт. Без согласия cookies аналитики не ставятся.",
    marketing: "Реклама",
    marketingHelp:
      "Google Ads: измерение заявок с рекламы и подбор аудитории. Без согласия рекламные cookies не ставятся и данные для персонализации не передаются.",
  },
  en: {
    title: "Cookies and analytics",
    text: "The site stores your language and interface settings. With your consent we also use Google Analytics and Google Ads via Google Tag Manager to understand which pages and ads are useful. You can accept or decline — the site works the same either way.",
    acceptAll: "Accept all",
    necessaryOnly: "Necessary only",
    customise: "Customise",
    save: "Save choice",
    hideDetails: "Hide settings",
    necessary: "Necessary — always on",
    necessaryHelp:
      "Your selected language and this notice decision; current-session markers; the visit source for this session so it can be added to your message to Pavel; dismissed prompts for up to 7 days.",
    analytics: "Analytics",
    analyticsHelp:
      "Google Analytics: page views, button clicks and form submissions to improve the site. No analytics cookies are set without consent.",
    marketing: "Advertising",
    marketingHelp:
      "Google Ads: measuring enquiries from ads and audience matching. Without consent no advertising cookies are set and no data is shared for personalisation.",
  },
  be: {
    title: "Cookies і аналітыка",
    text: "Сайт захоўвае мову і налады інтэрфейсу. З вашай згоды мы таксама выкарыстоўваем Google Analytics і Google Ads праз Google Tag Manager, каб разумець, якія старонкі і рэклама карысныя. Вы можаце пагадзіцца або адмовіцца — сайт працуе аднолькава.",
    acceptAll: "Прыняць усе",
    necessaryOnly: "Толькі неабходныя",
    customise: "Наладзіць",
    save: "Захаваць выбар",
    hideDetails: "Схаваць налады",
    necessary: "Неабходныя — заўсёды ўключаны",
    necessaryHelp:
      "Выбраная мова і рашэнне пра гэтае паведамленне; адзнакі бягучай сесіі; крыніца пераходу на час сесіі, каб пазначыць яе ў вашым паведамленні Паўлу; закрытыя падказкі — да 7 дзён.",
    analytics: "Аналітыка",
    analyticsHelp:
      "Google Analytics: прагляды старонак, націсканні кнопак і адпраўка формы, каб паляпшаць сайт. Без згоды cookies аналітыкі не ставяцца.",
    marketing: "Рэклама",
    marketingHelp:
      "Google Ads: вымярэнне заявак з рэкламы і падбор аўдыторыі. Без згоды рэкламныя cookies не ставяцца і даныя для персаналізацыі не перадаюцца.",
  },
  uk: {
    title: "Cookies і аналітика",
    text: "Сайт зберігає мову й налаштування інтерфейсу. За вашою згодою ми також використовуємо Google Analytics і Google Ads через Google Tag Manager, щоб розуміти, які сторінки й реклама корисні. Ви можете погодитися або відмовитися — сайт працює однаково.",
    acceptAll: "Прийняти всі",
    necessaryOnly: "Лише необхідні",
    customise: "Налаштувати",
    save: "Зберегти вибір",
    hideDetails: "Сховати налаштування",
    necessary: "Необхідні — завжди ввімкнені",
    necessaryHelp:
      "Вибрана мова й рішення щодо цього повідомлення; позначки поточної сесії; джерело переходу на час сесії, щоб зазначити його у вашому повідомленні Павлу; закриті підказки — до 7 днів.",
    analytics: "Аналітика",
    analyticsHelp:
      "Google Analytics: перегляди сторінок, натискання кнопок і надсилання форми, щоб покращувати сайт. Без згоди cookies аналітики не встановлюються.",
    marketing: "Реклама",
    marketingHelp:
      "Google Ads: вимірювання заявок із реклами та підбір аудиторії. Без згоди рекламні cookies не встановлюються й дані для персоналізації не передаються.",
  },
};

export function CookieConsent() {
  const { lang } = useLang();
  const t = copy[lang];
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const panelRef = useRef<HTMLElement | null>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const current = readConsent();
    if (!current) setOpen(true);
    else {
      setAnalytics(current.analytics);
      setMarketing(current.marketing);
    }

    const reopen = () => {
      const saved = readConsent();
      setAnalytics(saved?.analytics ?? false);
      setMarketing(saved?.marketing ?? false);
      returnFocusRef.current = document.activeElement as HTMLElement | null;
      setDetails(true);
      setOpen(true);
      window.requestAnimationFrame(() => panelRef.current?.focus());
    };
    window.addEventListener("madeira-open-cookie-settings", reopen);
    return () => window.removeEventListener("madeira-open-cookie-settings", reopen);
  }, []);

  function decide(choice: { analytics: boolean; marketing: boolean }) {
    const saved = saveConsent(choice);
    applyConsent(saved);
    setAnalytics(saved.analytics);
    setMarketing(saved.marketing);
    setOpen(false);
    returnFocusRef.current?.focus();
    returnFocusRef.current = null;
  }

  if (!open) return null;

  const toggle = "mt-1 h-5 w-5 shrink-0 cursor-pointer accent-mosaic-deep";

  return (
    <aside
      ref={panelRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-notice-title"
      aria-describedby="cookie-notice-description"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-h-[min(80dvh,42rem)] max-w-xl overflow-y-auto rounded-2xl border border-border bg-background p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom,0px))] shadow-2xl sm:inset-x-6"
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
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                className={toggle}
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
              />
              <span>
                <strong>{t.analytics}</strong>
                <span className="mt-1 block text-sm leading-6 text-muted-foreground">
                  {t.analyticsHelp}
                </span>
              </span>
            </label>
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                className={toggle}
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
              />
              <span>
                <strong>{t.marketing}</strong>
                <span className="mt-1 block text-sm leading-6 text-muted-foreground">
                  {t.marketingHelp}
                </span>
              </span>
            </label>
          </div>
        )}
        <div className="grid gap-2 sm:grid-cols-2">
          <Button
            className="h-auto min-h-11 whitespace-normal py-3 text-center font-bold"
            onClick={() => decide({ analytics: true, marketing: true })}
          >
            {t.acceptAll}
          </Button>
          <Button
            variant="outline"
            className="h-auto min-h-11 whitespace-normal py-3 text-center font-bold"
            onClick={() => decide({ analytics: false, marketing: false })}
          >
            {t.necessaryOnly}
          </Button>
          {details ? (
            <>
              <Button
                variant="outline"
                className="h-auto min-h-11 whitespace-normal py-3 text-center font-bold"
                onClick={() => decide({ analytics, marketing })}
              >
                {t.save}
              </Button>
              <Button
                variant="ghost"
                className="h-auto min-h-11 whitespace-normal py-3 text-center font-bold"
                onClick={() => setDetails(false)}
              >
                {t.hideDetails}
              </Button>
            </>
          ) : (
            <Button
              variant="ghost"
              className="h-auto min-h-11 whitespace-normal py-3 text-center font-bold sm:col-span-2"
              onClick={() => setDetails(true)}
            >
              {t.customise}
            </Button>
          )}
        </div>
      </div>
    </aside>
  );
}
