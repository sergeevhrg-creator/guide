import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";

export type Lang = "en" | "be" | "uk" | "ru";

export const langOrder: Lang[] = ["en", "be", "uk", "ru"];

export const langLabels: Record<Lang, string> = {
  en: "English",
  be: "Беларуская",
  uk: "Українська",
  ru: "Русский",
};

export const langShort: Record<Lang, string> = { en: "EN", be: "BE", uk: "UK", ru: "RU" };

const STORAGE_KEY = "mosaic-lang";

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextValue>({ lang: "en", setLang: () => {} });

export function langFromSearch(search: string): Lang {
  const queryLang = new URLSearchParams(search).get("lang");
  return queryLang && langOrder.includes(queryLang as Lang) ? (queryLang as Lang) : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const search = useRouterState({ select: (state) => state.location.searchStr });
  const routeLang = langFromSearch(search);
  const [lang, setLangState] = useState<Lang>(routeLang);

  useEffect(() => {
    const queryLang = new URLSearchParams(search).get("lang");
    if (queryLang && langOrder.includes(queryLang as Lang)) {
      setLangState(queryLang as Lang);
      return;
    }
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && langOrder.includes(stored as Lang)) setLangState(stored as Lang);
  }, [search]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState(window.history.state, "", url);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

export function LanguageSwitcher({ className = "", tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  const { lang, setLang } = useLang();
  const dark = tone === "dark";
  return (
    <div className={`flex shrink-0 flex-wrap gap-0.5 rounded-md border p-0.5 ${dark ? "border-primary-foreground/30" : "border-mosaic-deep/20"} ${className}`} role="group" aria-label="Language">
      {langOrder.map((code) => {
        const active = lang === code;
        const activeClass = dark ? "bg-primary-foreground text-mosaic-deep" : "bg-mosaic-deep text-primary-foreground";
        const idleClass = dark ? "text-primary-foreground/70 hover:text-primary-foreground" : "text-muted-foreground hover:bg-mosaic-mist hover:text-mosaic-deep";
        return (
          <button
            key={code}
            type="button"
            aria-pressed={active}
            title={langLabels[code]}
            onClick={() => setLang(code)}
            className={`rounded px-1.5 py-1.5 text-xs font-extrabold transition sm:px-2.5 sm:text-sm ${active ? activeClass : idleClass}`}
          >
            {langShort[code]}
          </button>
        );
      })}
    </div>
  );
}
