import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/privacy")({
  validateSearch: (search: Record<string, unknown>) => ({ lang: search.lang === "ru" || search.lang === "be" || search.lang === "uk" ? search.lang : "en" as const }),
  head: ({ match }) => {
    const meta = {
      ru: ["Конфиденциальность — Madeira Mosaic", "Как Madeira Mosaic обрабатывает обращения, ссылки на мессенджеры и локально сохранённые настройки."],
      en: ["Privacy — Madeira Mosaic", "How Madeira Mosaic handles inquiries, messenger links and locally stored preferences."],
      be: ["Канфідэнцыяльнасць — Madeira Mosaic", "Як Madeira Mosaic апрацоўвае запыты, спасылкі на мэсенджары і лакальна захаваныя налады."],
      uk: ["Конфіденційність — Madeira Mosaic", "Як Madeira Mosaic обробляє звернення, посилання на месенджери та локально збережені налаштування."],
    }[match.search.lang];
    return { meta: [{ title: meta[0] }, { name: "description", content: meta[1] }] };
  },
  component: () => <LegalPage kind="privacy" />,
});
