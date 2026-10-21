import { createFileRoute } from "@tanstack/react-router";

import { MosaicPage } from "@/components/MosaicPage";
import { localizedSeoLinks, validateLangSearch } from "@/lib/seo";

export const Route = createFileRoute("/week-of-silence")({
  validateSearch: validateLangSearch,
  head: ({ match }) => {
    const lang = match.search.lang ?? "en";
    const seo = {
      en: ["Week of Silence — Spiritual Retreat in Madeira", "A seven-day adult spiritual retreat in Madeira with quiet periods, gentle walks and private reflection. Dates and conditions are confirmed personally."],
      ru: ["Неделя тишины — духовный ретрит на Мадейре", "Семидневный духовный ретрит для взрослых на Мадейре: периоды тишины, неспешные прогулки и личное размышление. Даты и условия подтверждаются лично."],
      uk: ["Тиждень тиші — духовний ретрит на Мадейрі", "Семиденний духовний ретрит для дорослих на Мадейрі: періоди тиші, неквапні прогулянки та особисті роздуми. Дати й умови підтверджуються особисто."],
      be: ["Тыдзень цішыні — духоўны рэтрыт на Мадэйры", "Сямідзённы духоўны рэтрыт для дарослых на Мадэйры: перыяды цішыні, няспешныя прагулкі і асабістыя развагі. Даты і ўмовы пацвярджаюцца асабіста."],
    }[lang];
    return {
      meta: [
        { title: seo[0] },
        { name: "description", content: seo[1] },
        { property: "og:title", content: seo[0] },
        { property: "og:description", content: seo[1] },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `https://guide.orthodoxmadeira.com/week-of-silence?lang=${lang}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: localizedSeoLinks("/week-of-silence", lang),
    };
  },
  component: () => <MosaicPage pageKey="silence" />,
});
