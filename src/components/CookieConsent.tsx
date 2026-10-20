import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n/lang";
import { readConsent, saveConsent } from "@/lib/consent";

const copy = {
  ru: { title: "Cookies и локальное хранение", text: "Мы сохраняем выбранный язык и ваше решение о cookies. Аналитика и маркетинг сейчас не используются и остаются выключенными без вашего согласия.", accept: "Принять все", reject: "Отклонить необязательные", settings: "Настроить", save: "Сохранить настройки", necessary: "Необходимые", necessaryHelp: "Всегда включены: язык, решение о cookies и состояние интерфейса.", analytics: "Аналитика", marketing: "Маркетинг", unused: "Сейчас не используется." },
  en: { title: "Cookies and local storage", text: "We store your language and cookie decision. Analytics and marketing are not currently used and remain off without your consent.", accept: "Accept all", reject: "Reject optional", settings: "Settings", save: "Save settings", necessary: "Necessary", necessaryHelp: "Always on: language, cookie decision and interface state.", analytics: "Analytics", marketing: "Marketing", unused: "Not currently used." },
  be: { title: "Cookies і лакальнае захоўванне", text: "Мы захоўваем выбраную мову і ваша рашэнне пра cookies. Аналітыка і маркетынг цяпер не выкарыстоўваюцца і застаюцца выключанымі без вашай згоды.", accept: "Прыняць усё", reject: "Адхіліць неабавязковыя", settings: "Наладзіць", save: "Захаваць налады", necessary: "Неабходныя", necessaryHelp: "Заўсёды ўключаны: мова, рашэнне пра cookies і стан інтэрфейсу.", analytics: "Аналітыка", marketing: "Маркетынг", unused: "Цяпер не выкарыстоўваецца." },
  uk: { title: "Cookies і локальне зберігання", text: "Ми зберігаємо вибрану мову та ваше рішення щодо cookies. Аналітика й маркетинг зараз не використовуються та залишаються вимкненими без вашої згоди.", accept: "Прийняти все", reject: "Відхилити необов’язкові", settings: "Налаштувати", save: "Зберегти налаштування", necessary: "Необхідні", necessaryHelp: "Завжди ввімкнені: мова, рішення щодо cookies і стан інтерфейсу.", analytics: "Аналітика", marketing: "Маркетинг", unused: "Зараз не використовується." },
};

export function CookieConsent() {
  const { lang } = useLang();
  const t = copy[lang];
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

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
      setDetails(true);
      setOpen(true);
    };
    window.addEventListener("madeira-open-cookie-settings", reopen);
    return () => window.removeEventListener("madeira-open-cookie-settings", reopen);
  }, []);

  function choose(nextAnalytics: boolean, nextMarketing: boolean, decision: "accepted" | "rejected" | "custom") {
    saveConsent({ analytics: nextAnalytics, marketing: nextMarketing, decision });
    setAnalytics(nextAnalytics);
    setMarketing(nextMarketing);
    setOpen(false);
  }

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-mosaic-deep/45 p-3 sm:items-center sm:p-6" role="presentation">
      <section role="dialog" aria-modal="true" aria-labelledby="cookie-title" className="max-h-[90dvh] w-full max-w-xl overflow-y-auto rounded-2xl border border-border bg-background p-5 shadow-2xl sm:p-6">
        <h2 id="cookie-title" className="font-display text-xl font-extrabold text-mosaic-deep">{t.title}</h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{t.text}</p>
        {details && <div className="mt-5 space-y-3 rounded-xl bg-mosaic-mist p-4">
          <div><strong>{t.necessary}</strong><p className="text-sm text-muted-foreground">{t.necessaryHelp}</p></div>
          <label className="flex items-start justify-between gap-4"><span><strong>{t.analytics}</strong><span className="block text-sm text-muted-foreground">{t.unused}</span></span><input type="checkbox" checked={analytics} onChange={e => setAnalytics(e.target.checked)} className="mt-1 h-5 w-5" /></label>
          <label className="flex items-start justify-between gap-4"><span><strong>{t.marketing}</strong><span className="block text-sm text-muted-foreground">{t.unused}</span></span><input type="checkbox" checked={marketing} onChange={e => setMarketing(e.target.checked)} className="mt-1 h-5 w-5" /></label>
        </div>}
        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          <Button onClick={() => choose(true, true, "accepted")} className="bg-mosaic-deep font-bold">{t.accept}</Button>
          <Button onClick={() => choose(false, false, "rejected")} variant="outline" className="font-bold">{t.reject}</Button>
          {details ? <Button onClick={() => choose(analytics, marketing, "custom")} variant="secondary" className="font-bold sm:col-span-2">{t.save}</Button> : <Button onClick={() => setDetails(true)} variant="ghost" className="font-bold sm:col-span-2">{t.settings}</Button>}
        </div>
      </section>
    </div>
  );
}
