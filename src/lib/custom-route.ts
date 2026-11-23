import type { Lang } from "@/lib/i18n/lang";
import { CUSTOM_ROUTE_MAX_GUESTS } from "@/lib/tour-pricing";

export type CustomRouteCopy = {
  label: string;
  title: string;
  intro: string;
  priceNote: string;
  includedTitle: string;
  fuel: string;
  wear: string;
  insurance: string;
  guests: string;
  cta: string;
};

export const customRouteCopy: Record<Lang, CustomRouteCopy> = {
  ru: {
    label: "Свободный формат",
    title: "Ваш маршрут",
    intro:
      "Вы сами выбираете места, время и темп поездки. Я за рулём и рядом, если нужна подсказка.",
    priceNote: "Цена за аренду машины с водителем",
    includedTitle: "В стоимость входят",
    fuel: "Топливо",
    wear: "Амортизация автомобиля",
    insurance: "Страховка",
    guests: `От 1 до ${CUSTOM_ROUTE_MAX_GUESTS} участников`,
    cta: "Обсудить маршрут",
  },
  en: {
    label: "Flexible format",
    title: "Your route",
    intro:
      "You choose the places, the timing and the pace. I drive and I’m on hand whenever you’d like a suggestion.",
    priceNote: "Price for the car with a driver",
    includedTitle: "Included in the price",
    fuel: "Fuel",
    wear: "Vehicle wear and tear",
    insurance: "Insurance",
    guests: `1 to ${CUSTOM_ROUTE_MAX_GUESTS} guests`,
    cta: "Discuss your route",
  },
  be: {
    label: "Свабодны фармат",
    title: "Ваш маршрут",
    intro:
      "Вы самі выбіраеце месцы, час і тэмп паездкі. Я за рулём і побач, калі патрэбна падказка.",
    priceNote: "Кошт арэнды машыны з вадзіцелем",
    includedTitle: "У кошт уваходзяць",
    fuel: "Паліва",
    wear: "Амартызацыя аўтамабіля",
    insurance: "Страхоўка",
    guests: `Ад 1 да ${CUSTOM_ROUTE_MAX_GUESTS} удзельнікаў`,
    cta: "Абмеркаваць маршрут",
  },
  uk: {
    label: "Вільний формат",
    title: "Ваш маршрут",
    intro: "Ви самі обираєте місця, час і темп поїздки. Я за кермом і поруч, якщо потрібна порада.",
    priceNote: "Вартість оренди авто з водієм",
    includedTitle: "У вартість входять",
    fuel: "Пальне",
    wear: "Амортизація автомобіля",
    insurance: "Страховка",
    guests: `Від 1 до ${CUSTOM_ROUTE_MAX_GUESTS} учасників`,
    cta: "Обговорити маршрут",
  },
};

export function customRouteTitle(lang: Lang) {
  return customRouteCopy[lang].title;
}
