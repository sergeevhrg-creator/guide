import { useNavigate } from "@tanstack/react-router";
import { useCallback } from "react";
import { tourTitle } from "@/components/SalesCatalog";
import { useLang } from "@/lib/i18n/lang";
import { salesTours } from "@/lib/sales";
import { tourIdForTitle } from "@/lib/request-content";
import { track } from "@/lib/tracking";

/**
 * Sends every "discuss / choose a route" CTA to the dedicated /request page,
 * with the tour preselected and a cta_click event for analytics.
 */
export function useOpenRequest(defaultFrom: string) {
  const { lang } = useLang();
  const navigate = useNavigate();
  return useCallback(
    (title?: string, from: string = defaultFrom) => {
      const titleOf = (id: string) => {
        const tour = salesTours.find((x) => x.id === id);
        return tour ? tourTitle(tour, lang) : "";
      };
      const tour = title ? tourIdForTitle(title, titleOf) : undefined;
      track("cta_click", {
        cta_location: from,
        tour: tour ?? title ?? "help_choose",
        lang,
      });
      void navigate({
        to: "/request",
        search: {
          lang,
          ...(tour ? { tour } : title ? { product: title } : {}),
          from,
        },
      });
    },
    [defaultFrom, lang, navigate],
  );
}
