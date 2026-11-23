import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, CheckCircle2, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MosaicLogo } from "@/components/MosaicLogo";
import { LanguageSwitcher, useLang, type Lang } from "@/lib/i18n/lang";
import { requestCopy } from "@/lib/request-content";
import { readLastLead, type LastLead } from "@/lib/tracking";

export const Route = createFileRoute("/request_/thanks")({
  validateSearch: (search: Record<string, unknown>): { lang?: Lang } => {
    const lang = search["lang"];
    return lang === "en" || lang === "ru" || lang === "be" || lang === "uk" ? { lang } : {};
  },
  head: ({ match }) => ({
    meta: [
      { title: requestCopy[match.search.lang ?? "en"].thanksSeoTitle },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ThanksPage,
});

function ThanksPage() {
  const { lang, setLang } = useLang();
  const search = Route.useSearch();
  useEffect(() => {
    if (search.lang) setLang(search.lang);
  }, [search.lang, setLang]);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  const c = requestCopy[lang];
  const [lead, setLead] = useState<LastLead | null>(null);
  useEffect(() => setLead(readLastLead()), []);
  const channel = lead?.channel === "telegram" ? "Telegram" : "WhatsApp";

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" search={{ lang }} className="min-w-0">
            <MosaicLogo />
          </Link>
          <div className="ml-auto">
            <LanguageSwitcher />
          </div>
        </div>
      </header>
      <main
        id="thanks"
        data-track-location="thanks_page"
        className="bg-mosaic-mist px-4 py-16 sm:px-6 sm:py-24"
      >
        <div className="mx-auto max-w-2xl text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-mosaic-leaf" aria-hidden="true" />
          {lead ? (
            <>
              <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight text-mosaic-deep sm:text-4xl">
                {c.thanksTitle}
              </h1>
              <p className="mt-4 leading-7 text-foreground">{c.thanksText(channel)}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{c.thanksReminder}</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-auto min-h-11 whitespace-normal bg-mosaic-leaf py-3 font-bold hover:bg-mosaic-deep"
                >
                  <a href={lead.url} target="_blank" rel="noopener noreferrer">
                    {lead.channel === "telegram" ? <Send /> : <MessageCircle />}
                    {c.reopen(channel)}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-auto min-h-11 py-3">
                  <Link to="/tours" search={{ lang }}>
                    <ArrowLeft />
                    {c.toTours}
                  </Link>
                </Button>
              </div>
            </>
          ) : (
            <>
              <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight text-mosaic-deep">
                {c.noLead}
              </h1>
              <Button
                asChild
                size="lg"
                className="mt-8 h-auto min-h-11 bg-mosaic-deep py-3 font-bold hover:bg-mosaic-ocean"
              >
                <Link to="/request" search={{ lang }}>
                  {c.eyebrow}
                </Link>
              </Button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
