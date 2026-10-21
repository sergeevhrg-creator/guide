import { createFileRoute } from "@tanstack/react-router";

import { MosaicPage } from "@/components/MosaicPage";
import { localizedSeoLinks, validateLangSearch } from "@/lib/seo";

export const Route = createFileRoute("/remote-work-madeira")({
  validateSearch: validateLangSearch,
  head: ({ match }) => {
    const lang = match.search.lang ?? "en";
    const seo = {
      en: ["Madeira Concierge — Practical Help for Island Life", "Personal help with Madeira districts, housing options, appointments and practical steps for families planning island life."],
      ru: ["Консьерж на Мадейре — помощь с организацией жизни на острове", "Персональная помощь с районами Мадейры, вариантами жилья, записями и практическими шагами для семьи на острове."],
      uk: ["Консьєрж на Мадейрі — допомога з організацією життя на острові", "Персональна допомога з районами Мадейри, варіантами житла, записами та практичними кроками для родини на острові."],
      be: ["Кансьерж на Мадэйры — дапамога з арганізацыяй жыцця на востраве", "Персанальная дапамога з раёнамі Мадэйры, варыянтамі жылля, запісамі і практычнымі крокамі для сям’і на востраве."],
    }[lang];
    return {
      meta: [
        { title: seo[0] },
        { name: "description", content: seo[1] },
        { property: "og:title", content: seo[0] },
        { property: "og:description", content: seo[1] },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `https://guide.orthodoxmadeira.com/remote-work-madeira?lang=${lang}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: localizedSeoLinks("/remote-work-madeira", lang),
    };
  },
  component: () => <MosaicPage pageKey="remote" />,
});
