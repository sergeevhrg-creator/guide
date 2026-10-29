import type { Lang } from "@/lib/i18n/lang";
import { salesDescriptions as sourceDescriptions } from "@/lib/sales-copy";

const localized = (id: string, overrides: Partial<Record<Lang, string>>) => ({
  ...sourceDescriptions[id],
  ...overrides,
});

export const salesDescriptions: Record<string, Record<Lang, string>> = {
  ...sourceDescriptions,
  balcoes: localized("balcoes", {
    be: "Ribeiro Frio і прагулка праз лаўрысільву да агляднай пляцоўкі Vereda dos Balcões. Статус PR11 і патрэбная бронь правяраюцца перад пацвярджэннем.",
  }),
  "family-west": localized("family-west", {
    be: "Вулканічнае ўзбярэжжа Porto Moniz і бераг Seixal. Аглядныя пляцоўкі і прагулка ля мора; купанне залежыць ад стану акіяна і доступу да басейнаў.",
  }),
  funchal: localized("funchal", {
    be: "Прагулка па старым Фуншале, набярэжная і гарадскія аглядныя пляцоўкі. Суадносіны прагулкі і паездкі падладжваюцца пад ваш тэмп.",
    uk: "Прогулянка старим Фуншалом, набережна та міські оглядові майданчики. Співвідношення ходьби й поїздки підлаштовується під ваш темп.",
  }),
  curral: localized("curral", {
    be: "Від на даліну з Eira do Serrado і наведванне Curral das Freiras. Прагулкі па агляднай пляцоўцы і вёсцы ўзгадняюцца паводле вашай рухомасці і надвор’я.",
  }),
  camara: localized("camara", {
    be: "Гавань Câmara de Lobos і аглядная пляцоўка Cabo Girão. Доступ да skywalk і ўваходны білет правяраюцца асобна перад пацвярджэннем.",
    uk: "Гавань Câmara de Lobos та оглядовий майданчик Cabo Girão. Доступ до skywalk і вхідний квиток перевіряються окремо до підтвердження.",
  }),
};
