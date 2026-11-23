import { Car, Fuel, MessageCircle, ShieldCheck, Users, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n/lang";
import { customRouteCopy } from "@/lib/custom-route";
import { displayCustomRouteRate } from "@/lib/tour-pricing";

export function CustomRouteOffer({
  onDiscuss,
  className = "",
}: {
  onDiscuss: (title: string) => void;
  className?: string;
}) {
  const { lang } = useLang();
  const c = customRouteCopy[lang];
  const included = [
    { icon: Fuel, text: c.fuel },
    { icon: Wrench, text: c.wear },
    { icon: ShieldCheck, text: c.insurance },
  ];
  return (
    <article
      data-tour="custom-route"
      aria-labelledby="custom-route-title"
      className={`grid min-w-0 gap-6 overflow-hidden rounded-md bg-mosaic-deep p-6 text-primary-foreground sm:p-8 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-10 ${className}`}
    >
      <div className="min-w-0">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-primary-foreground/80">
          <Car className="h-4 w-4" aria-hidden="true" />
          {c.label}
        </p>
        <h3
          id="custom-route-title"
          className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl"
        >
          {c.title}
        </h3>
        <p className="mt-4 max-w-xl leading-7 text-primary-foreground/90">{c.intro}</p>
        <p className="mt-5 flex items-center gap-2 text-sm font-bold">
          <Users className="h-4 w-4" aria-hidden="true" />
          {c.guests}
        </p>
      </div>
      <div className="min-w-0 rounded-md bg-white/10 p-5 sm:p-6">
        <p className="font-display text-4xl font-extrabold leading-none sm:text-5xl">
          {displayCustomRouteRate(lang)}
        </p>
        <p className="mt-2 text-sm text-primary-foreground/85">{c.priceNote}</p>
        <p className="mt-5 text-sm font-bold">{c.includedTitle}:</p>
        <ul className="mt-2 space-y-2 text-sm">
          {included.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-2">
              <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              {text}
            </li>
          ))}
        </ul>
        <Button
          onClick={() => onDiscuss(c.title)}
          className="mt-6 h-auto min-h-11 w-full whitespace-normal bg-white font-extrabold text-mosaic-deep hover:bg-white/90"
        >
          {c.cta}
          <MessageCircle />
        </Button>
      </div>
    </article>
  );
}
