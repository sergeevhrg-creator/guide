import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { localizedSeoLinks } from "@/lib/seo";

export const Route = createFileRoute("/cookies")({
  validateSearch: (search: Record<string, unknown>) => ({
    lang:
      search.lang === "ru" || search.lang === "be" || search.lang === "uk"
        ? search.lang
        : ("en" as const),
  }),
  head: ({ match }) => {
    const meta = {
      ru: [
        "Файлы cookies и настройки — Madeira Mosaic",
        "Какие cookies и локальные настройки использует сайт Madeira Mosaic, зачем они нужны и как изменить своё согласие на аналитику и рекламу.",
      ],
      en: [
        "Cookies and preferences — Madeira Mosaic",
        "Which cookies and local settings the Madeira Mosaic website uses, why they are needed and how to change your analytics and advertising consent.",
      ],
      be: [
        "Файлы cookies і налады — Madeira Mosaic",
        "Якія cookies і лакальныя налады выкарыстоўвае сайт Madeira Mosaic, навошта яны патрэбныя і як змяніць згоду на аналітыку і рэкламу.",
      ],
      uk: [
        "Файли cookies і налаштування — Madeira Mosaic",
        "Які cookies і локальні налаштування використовує сайт Madeira Mosaic, навіщо вони потрібні та як змінити згоду на аналітику й рекламу.",
      ],
    }[match.search.lang];
    return {
      meta: [{ title: meta[0] }, { name: "description", content: meta[1] }],
      links: localizedSeoLinks("/cookies", match.search.lang),
    };
  },
  component: () => <LegalPage kind="cookies" />,
});
