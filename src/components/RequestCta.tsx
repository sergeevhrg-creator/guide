import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n/lang";
import { requestCopy } from "@/lib/request-content";

const buttonLabel = {
  ru: "Оставить заявку",
  en: "Send a request",
  be: "Пакінуць заяўку",
  uk: "Залишити заявку",
} as const;

/** Compact block that replaces the inline form and leads to the /request page. */
export function RequestCta({ onOpen }: { onOpen: () => void }) {
  const { lang } = useLang();
  const c = requestCopy[lang];
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="font-display text-3xl font-extrabold text-mosaic-deep sm:text-4xl">
        {c.title}
      </h2>
      <p className="mt-4 leading-7 text-muted-foreground">{c.intro}</p>
      <Button
        size="lg"
        onClick={onOpen}
        className="mt-8 h-auto min-h-11 whitespace-normal bg-mosaic-leaf px-8 py-3 font-extrabold hover:bg-mosaic-deep"
      >
        {buttonLabel[lang]}
        <ArrowRight />
      </Button>
    </div>
  );
}
