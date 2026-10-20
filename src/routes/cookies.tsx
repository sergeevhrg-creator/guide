import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/cookies")({
  validateSearch: (search: Record<string, unknown>) => ({ lang: search.lang === "ru" || search.lang === "be" || search.lang === "uk" ? search.lang : "en" as const }),
  head: ({ match }) => {
    const meta = {
      ru: ["Cookies — Madeira Mosaic", "Настройки cookies и локального хранения на сайте Madeira Mosaic."],
      en: ["Cookies — Madeira Mosaic", "Cookie and local-storage choices on the Madeira Mosaic website."],
      be: ["Cookies — Madeira Mosaic", "Налады cookies і лакальнага захоўвання на сайце Madeira Mosaic."],
      uk: ["Cookies — Madeira Mosaic", "Налаштування cookies і локального зберігання на сайті Madeira Mosaic."],
    }[match.search.lang];
    return { meta: [{ title: meta[0] }, { name: "description", content: meta[1] }] };
  },
  component: () => <LegalPage kind="cookies" />,
});
