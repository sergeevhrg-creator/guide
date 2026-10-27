import type { ImageId } from "@/lib/image-credits";

export type TourPageLang = "en" | "ru";

export type TourPageId =
  | "sunrise"
  | "balcoes"
  | "family-west"
  | "east-north"
  | "funchal"
  | "rum-surf"
  | "screen-free"
  | "wine"
  | "food"
  | "curral"
  | "fanal"
  | "camara"
  | "blandys"
  | "cruise-one"
  | "cruise-two"
  | "photo-tour";

export type TourPageConfig = {
  tourId: TourPageId;
  slug: string;
  imageId: ImageId;
  kind?: "standard" | "cruise" | "photo";
  h1: Record<TourPageLang, string>;
  seoTitle: Record<TourPageLang, string>;
  keywords: Record<TourPageLang, string>;
  durationLabel?: Record<TourPageLang, string>;
};

export const tourPages = [
  {
    tourId: "sunrise",
    slug: "pico-do-areeiro-sunrise",
    imageId: "pico-arieiro",
    h1: {
      en: "Pico do Areeiro Sunrise Private Tour",
      ru: "Рассвет на Пику-ду-Арейру — индивидуальная экскурсия",
    },
    seoTitle: {
      en: "Pico do Areeiro Sunrise Private Tour | Madeira Mosaic",
      ru: "Рассвет на Пику-ду-Арейру — экскурсия | Madeira Mosaic",
    },
    keywords: {
      en: "Pico do Areeiro sunrise tour, private Madeira tour, Madeira mountain tour",
      ru: "рассвет на Пику-ду-Арейру, индивидуальная экскурсия Мадейра, экскурсия в горы Мадейры",
    },
  },
  {
    tourId: "balcoes",
    slug: "ribeiro-frio-balcoes",
    imageId: "balcoes",
    h1: {
      en: "Ribeiro Frio and Balcões Private Tour",
      ru: "Ribeiro Frio и Balcões — индивидуальная экскурсия",
    },
    seoTitle: {
      en: "Ribeiro Frio and Balcões Private Tour | Madeira Mosaic",
      ru: "Ribeiro Frio и Balcões — экскурсия | Madeira Mosaic",
    },
    keywords: {
      en: "Ribeiro Frio tour, Balcoes viewpoint tour, Madeira Laurissilva walk",
      ru: "Ribeiro Frio экскурсия, Balcões Мадейра, лавровый лес Мадейры экскурсия",
    },
  },
  {
    tourId: "family-west",
    slug: "porto-moniz-seixal",
    imageId: "porto-moniz",
    h1: {
      en: "Porto Moniz and Seixal Private Tour",
      ru: "Порту-Мониш и Сейшал — индивидуальная экскурсия",
    },
    seoTitle: {
      en: "Porto Moniz and Seixal Private Tour | Madeira Mosaic",
      ru: "Порту-Мониш и Сейшал — экскурсия | Madeira Mosaic",
    },
    keywords: {
      en: "Porto Moniz Seixal tour, private west Madeira tour, Madeira volcanic pools tour",
      ru: "экскурсия Порту-Мониш и Сейшал, запад Мадейры экскурсия, лавовые бассейны Мадейры",
    },
  },
  {
    tourId: "east-north",
    slug: "east-madeira-sao-lourenco-faial",
    imageId: "sao-lourenco",
    h1: {
      en: "East Madeira: São Lourenço, Machico and Faial",
      ru: "Восток Мадейры: São Lourenço, Машику и Фаял",
    },
    seoTitle: {
      en: "East Madeira Private Tour | Madeira Mosaic",
      ru: "Восток Мадейры — индивидуальная экскурсия | Madeira Mosaic",
    },
    keywords: {
      en: "east Madeira private tour, Sao Lourenco tour, Machico Porto da Cruz tour",
      ru: "восток Мадейры экскурсия, São Lourenço экскурсия, Машику Порту-да-Круш",
    },
  },
  {
    tourId: "funchal",
    slug: "funchal-private-tour",
    imageId: "food",
    h1: {
      en: "Private Funchal Old Town and Viewpoints Tour",
      ru: "Фуншал — индивидуальная экскурсия по старому городу",
    },
    seoTitle: {
      en: "Private Funchal Tour: Old Town and Viewpoints | Madeira Mosaic",
      ru: "Индивидуальная экскурсия по Фуншалу | Madeira Mosaic",
    },
    keywords: {
      en: "private Funchal tour, Funchal old town tour, Funchal viewpoints tour",
      ru: "экскурсия по Фуншалу, индивидуальная экскурсия Фуншал, старый город Фуншала",
    },
  },
  {
    tourId: "rum-surf",
    slug: "porto-da-cruz-engenhos-do-norte",
    imageId: "engenhos",
    h1: {
      en: "Porto da Cruz and Engenhos do Norte Private Tour",
      ru: "Porto da Cruz и Engenhos do Norte — индивидуальная экскурсия",
    },
    seoTitle: {
      en: "Porto da Cruz and Engenhos do Norte Tour | Madeira Mosaic",
      ru: "Porto da Cruz и Engenhos do Norte | Madeira Mosaic",
    },
    keywords: {
      en: "Porto da Cruz tour, Engenhos do Norte tour, Madeira rum tour",
      ru: "Porto da Cruz экскурсия, Engenhos do Norte, ром Мадейры экскурсия",
    },
  },
  {
    tourId: "screen-free",
    slug: "levada-dos-tornos-north-coast",
    imageId: "levada",
    h1: {
      en: "Levada dos Tornos and North Coast Private Tour",
      ru: "Levada dos Tornos и северное побережье Мадейры",
    },
    seoTitle: {
      en: "Levada dos Tornos and North Coast Tour | Madeira Mosaic",
      ru: "Levada dos Tornos и север Мадейры | Madeira Mosaic",
    },
    keywords: {
      en: "Levada dos Tornos tour, Madeira levada walk, north coast Madeira tour",
      ru: "Levada dos Tornos экскурсия, прогулка по леваде Мадейра, север Мадейры",
    },
  },
  {
    tourId: "wine",
    slug: "quinta-do-barbusano-wine-tour",
    imageId: "vineyard",
    h1: {
      en: "São Vicente, Barbusano and Seixal Wine Tour",
      ru: "São Vicente, Barbusano и Сейшал — винный маршрут",
    },
    seoTitle: {
      en: "Madeira Wine Tour: São Vicente and Barbusano | Madeira Mosaic",
      ru: "Винный тур по Мадейре и São Vicente | Madeira Mosaic",
    },
    keywords: {
      en: "Madeira wine tour, Sao Vicente vineyard tour, Barbusano wine tour",
      ru: "винный тур Мадейра, виноградники São Vicente, Barbusano экскурсия",
    },
  },
  {
    tourId: "food",
    slug: "funchal-food-market-tour",
    imageId: "food",
    h1: {
      en: "Funchal Market and Old Town Food Tour",
      ru: "Рынок Фуншала и старый город — гастрономическая экскурсия",
    },
    seoTitle: {
      en: "Funchal Food and Market Private Tour | Madeira Mosaic",
      ru: "Гастрономическая экскурсия по Фуншалу | Madeira Mosaic",
    },
    keywords: {
      en: "Funchal food tour, Mercado dos Lavradores tour, Madeira gastronomy tour",
      ru: "гастрономическая экскурсия Фуншал, Mercado dos Lavradores, еда на Мадейре",
    },
  },
  {
    tourId: "curral",
    slug: "eira-do-serrado-curral-das-freiras",
    imageId: "pico-arieiro",
    h1: {
      en: "Eira do Serrado and Curral das Freiras Private Tour",
      ru: "Eira do Serrado и Curral das Freiras — индивидуальная экскурсия",
    },
    seoTitle: {
      en: "Curral das Freiras Private Tour | Madeira Mosaic",
      ru: "Долина монахинь — экскурсия по Мадейре | Madeira Mosaic",
    },
    keywords: {
      en: "Curral das Freiras tour, Eira do Serrado tour, Nuns Valley Madeira tour",
      ru: "Долина монахинь экскурсия, Curral das Freiras, Eira do Serrado",
    },
  },
  {
    tourId: "fanal",
    slug: "fanal-northwest",
    imageId: "fanal",
    h1: {
      en: "Fanal Forest and Northwest Madeira Private Tour",
      ru: "Фанал и северо-запад Мадейры — индивидуальная экскурсия",
    },
    seoTitle: {
      en: "Fanal Forest and Northwest Madeira Private Tour | Madeira Mosaic",
      ru: "Фанал и северо-запад Мадейры — экскурсия | Madeira Mosaic",
    },
    keywords: {
      en: "Fanal forest tour, northwest Madeira private tour, Madeira laurel forest tour",
      ru: "экскурсия в Фанал, северо-запад Мадейры экскурсия, лавровый лес Мадейры",
    },
  },
  {
    tourId: "camara",
    slug: "camara-de-lobos-cabo-girao",
    imageId: "home-coast",
    h1: {
      en: "Câmara de Lobos and Cabo Girão Private Tour",
      ru: "Câmara de Lobos и Cabo Girão — индивидуальная экскурсия",
    },
    seoTitle: {
      en: "Câmara de Lobos and Cabo Girão Tour | Madeira Mosaic",
      ru: "Câmara de Lobos и Cabo Girão | Madeira Mosaic",
    },
    keywords: {
      en: "Camara de Lobos tour, Cabo Girao tour, private Madeira shore tour",
      ru: "Câmara de Lobos экскурсия, Cabo Girão, индивидуальная экскурсия Мадейра",
    },
  },
  {
    tourId: "blandys",
    slug: "blandys-funchal-wine-tour",
    imageId: "vineyard",
    h1: {
      en: "Historic Funchal and Madeira Wine Private Tour",
      ru: "Исторический Фуншал и вино Мадейры — индивидуальная экскурсия",
    },
    seoTitle: {
      en: "Funchal and Madeira Wine Private Tour | Madeira Mosaic",
      ru: "Фуншал и вино Мадейры — экскурсия | Madeira Mosaic",
    },
    keywords: {
      en: "Funchal wine tour, Madeira wine lodge tour, historic Funchal private tour",
      ru: "винная экскурсия Фуншал, вино Мадейры, исторический Фуншал",
    },
  },
  {
    tourId: "cruise-one",
    slug: "funchal-cruise-shore-excursion",
    imageId: "home-coast",
    kind: "cruise",
    h1: {
      en: "Private Madeira Shore Excursion from Funchal Port",
      ru: "Индивидуальная экскурсия по Мадейре из порта Фуншал",
    },
    seoTitle: {
      en: "Madeira Shore Excursion from Funchal Port | Madeira Mosaic",
      ru: "Экскурсия из порта Фуншал по Мадейре | Madeira Mosaic",
    },
    keywords: {
      en: "Madeira shore excursion, Funchal cruise port tour, private Madeira cruise tour",
      ru: "экскурсия из порта Фуншал, круизная экскурсия Мадейра, экскурсия для пассажиров лайнера",
    },
    durationLabel: { en: "5–8 hours", ru: "5–8 часов" },
  },
  {
    tourId: "cruise-two",
    slug: "madeira-two-day-cruise-tour",
    imageId: "porto-moniz",
    kind: "cruise",
    h1: {
      en: "Two-Day Private Madeira Shore Excursion",
      ru: "Мадейра за два дня — индивидуальная круизная экскурсия",
    },
    seoTitle: {
      en: "Two-Day Madeira Shore Excursion | Madeira Mosaic",
      ru: "Мадейра за два дня для пассажиров круиза | Madeira Mosaic",
    },
    keywords: {
      en: "two day Madeira shore excursion, Madeira cruise tour, private Madeira cruise excursion",
      ru: "Мадейра за два дня, круизная экскурсия Мадейра, экскурсия из порта Фуншал",
    },
    durationLabel: { en: "2 days × 7 hours", ru: "2 дня по 7 часов" },
  },
  {
    tourId: "photo-tour",
    slug: "madeira-photo-session-tour",
    imageId: "sao-lourenco",
    kind: "photo",
    h1: {
      en: "Madeira Photo Tour through Scenic Island Locations",
      ru: "Фотосессия на Мадейре — маршрут по живописным местам",
    },
    seoTitle: {
      en: "Madeira Photo Tour and Scenic Locations | Madeira Mosaic",
      ru: "Фотосессия на Мадейре и красивые места | Madeira Mosaic",
    },
    keywords: {
      en: "Madeira photo tour, Madeira photoshoot locations, private Madeira scenic tour",
      ru: "фотосессия на Мадейре, красивые места Мадейры, фототур Мадейра",
    },
  },
] as const satisfies readonly TourPageConfig[];

export type TourPageSlug = (typeof tourPages)[number]["slug"];

export function getTourPageBySlug(slug: string) {
  return tourPages.find((page) => page.slug === slug);
}

export function getTourPageSlug(tourId: string) {
  return tourPages.find((page) => page.tourId === tourId)?.slug;
}
