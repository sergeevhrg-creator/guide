import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n/lang";

const copy = {
  ru: { privacy: "Конфиденциальность", cookies: "Cookies", settings: "Настройки cookies" },
  en: { privacy: "Privacy", cookies: "Cookies", settings: "Cookie settings" },
  be: { privacy: "Канфідэнцыяльнасць", cookies: "Cookies", settings: "Налады cookies" },
  uk: { privacy: "Конфіденційність", cookies: "Cookies", settings: "Налаштування cookies" },
};

export function LegalFooter() {
  const { lang } = useLang();
  const t = copy[lang];
  return <div className="border-t border-border bg-background px-4 py-4 text-sm text-muted-foreground"><nav aria-label="Legal" className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-5 gap-y-2"><Link to="/privacy" search={{ lang }}>{t.privacy}</Link><Link to="/cookies" search={{ lang }}>{t.cookies}</Link><button type="button" className="underline-offset-4 hover:underline" onClick={() => window.dispatchEvent(new Event("madeira-open-cookie-settings"))}>{t.settings}</button></nav></div>;
}
