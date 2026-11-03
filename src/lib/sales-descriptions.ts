import type { Lang } from "@/lib/i18n/lang";
import { salesDescriptions as sourceDescriptions } from "@/lib/sales-copy";

const localized = (id: string, overrides: Partial<Record<Lang, string>>): Record<Lang, string> => {
  const source = sourceDescriptions[id];
  if (!source) throw new Error(`Missing sales description for ${id}`);
  return { ...source, ...overrides };
};

export const salesDescriptions: Record<string, Record<Lang, string>> = {
  ...sourceDescriptions,
  balcoes: localized("balcoes", {
    be: "Прагулка з Ribeiro Frio праз лаўрысільву да агляднай пляцоўкі Vereda dos Balcões. Перад паездкай Павел праверыць актуальны доступ да PR11.",
  }),
  "family-west": localized("family-west", {
    be: "Вулканічнае ўзбярэжжа Porto Moniz і бераг Seixal: аглядныя пляцоўкі, прагулка ля Атлантыкі і час для купання пры добрых умовах.",
  }),
  funchal: localized("funchal", {
    be: "Прагулка па старым Фуншале, набярэжная і гарадскія аглядныя пляцоўкі. Суадносіны прагулкі і паездкі падладжваюцца пад ваш тэмп.",
    uk: "Прогулянка старим Фуншалом, набережна та міські оглядові майданчики. Співвідношення ходьби й поїздки підлаштовується під ваш темп.",
  }),
  curral: localized("curral", {
    be: "Від на даліну з Eira do Serrado і наведванне Curral das Freiras. Прагулкі па агляднай пляцоўцы і вёсцы ўзгадняюцца паводле вашай рухомасці і надвор’я.",
  }),
  camara: localized("camara", {
    be: "Каляровая гавань Câmara de Lobos і панарама паўднёвага ўзбярэжжа з агляднай пляцоўкі Cabo Girão.",
    uk: "Барвиста гавань Câmara de Lobos і панорама південного узбережжя з оглядового майданчика Cabo Girão.",
  }),
};
