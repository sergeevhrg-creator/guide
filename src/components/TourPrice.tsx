import type { Lang } from "@/lib/i18n/lang";
import {
  displayTourPrice,
  formatEur,
  tourDiscountPercent,
  tourPerCarLabel,
  tourPriceEur,
  tourPriceMaxEur,
  tourRegularPriceEur,
} from "@/lib/tour-pricing";

/** Tour price with an optional crossed-out regular price and discount badge. */
export function TourPrice({
  id,
  lang,
  className = "",
}: {
  id: string;
  lang: Lang;
  className?: string;
}) {
  const price = tourPriceEur(id);
  const regular = tourRegularPriceEur(id);
  const discount = tourDiscountPercent(id);
  if (!price) return <span className={className}>{displayTourPrice(id, lang)}</span>;
  return (
    <span
      className={`inline-flex flex-wrap items-baseline gap-x-2 gap-y-1 ${className}`}
      data-tour-price
    >
      {discount && regular ? (
        <s className="font-semibold text-muted-foreground" data-tour-price-regular>
          {formatEur(regular, lang)}
        </s>
      ) : null}
      <span>
        {tourPriceMaxEur(id)
          ? lang === "en"
            ? `€${price}–${tourPriceMaxEur(id)}`
            : `${price}–${tourPriceMaxEur(id)} €`
          : formatEur(price, lang)}
      </span>
      {discount ? (
        <span className="rounded-full bg-mosaic-flower/20 px-2 py-0.5 text-xs font-extrabold text-mosaic-deep">
          −{discount}%
        </span>
      ) : null}
      <span className="text-sm font-semibold text-muted-foreground">{tourPerCarLabel(lang)}</span>
    </span>
  );
}
