import type { Lang } from "@/lib/i18n/lang";
import type { InquiryMode } from "@/components/SalesInquiryForm";
import { salesTours } from "@/lib/sales";
import { customRouteCopy } from "@/lib/custom-route";

export const CUSTOM_ROUTE_ID = "custom-route";

export type RequestSearch = {
  lang?: Lang;
  /** Tour id from the sales catalogue, or "custom-route". */
  tour?: string;
  /** Free product title (programmes such as Week of Silence). */
  product?: string;
  /** Where the visitor clicked, for analytics. */
  from?: string;
};

const LANGS: Lang[] = ["en", "ru", "be", "uk"];
const clean = (value: unknown, max = 120) =>
  typeof value === "string" && value.trim() ? value.trim().slice(0, max) : undefined;

export function validateRequestSearch(search: Record<string, unknown>): RequestSearch {
  const lang = search["lang"];
  const out: RequestSearch = {};
  if (typeof lang === "string" && (LANGS as string[]).includes(lang)) out.lang = lang as Lang;
  const tour = clean(search["tour"], 40);
  if (tour && /^[a-z0-9-]+$/.test(tour)) out.tour = tour;
  const product = clean(search["product"], 250);
  if (product) out.product = product;
  const from = clean(search["from"], 40);
  if (from && /^[a-z0-9_-]+$/.test(from)) out.from = from;
  return out;
}

/** The tour id for a localized title, so CTAs can link by id. */
export function tourIdForTitle(title: string, titleOf: (id: string) => string): string | undefined {
  if (LANGS.some((l) => customRouteCopy[l].title === title)) return CUSTOM_ROUTE_ID;
  return salesTours.find((tour) => titleOf(tour.id) === title)?.id;
}

export function inquiryModeForTour(id: string | undefined): InquiryMode {
  if (id === "cruise-one") return "cruise";
  if (id === "cruise-two") return "cruise-two";
  if (id === "photo-tour") return "photo";
  return "standard";
}

export const requestCopy: Record<
  Lang,
  {
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    title: string;
    intro: string;
    points: [string, string, string];
    back: string;
    thanksSeoTitle: string;
    thanksTitle: string;
    thanksText: (channel: string) => string;
    thanksReminder: string;
    reopen: (channel: string) => string;
    toTours: string;
    noLead: string;
    emailThanksTitle: string;
    emailThanksText: string;
  }
> = {
  ru: {
    seoTitle: "Заявка на экскурсию по Мадейре — Madeira Mosaic",
    seoDescription:
      "Оставьте заявку на индивидуальную экскурсию по Мадейре для 1–4 гостей. Павел ответит лично в WhatsApp или Telegram.",
    eyebrow: "Заявка",
    title: "Расскажите, какую поездку вы хотите",
    intro:
      "Заполните короткую форму — откроется готовое сообщение Павлу. Нажмите «Отправить», и Павел лично ответит и предложит маршрут.",
    points: ["Отвечает лично Павел", "Группа от 1 до 4 гостей", "Маршрут под ваш темп и погоду"],
    back: "К экскурсиям",
    thanksSeoTitle: "Сообщение готово — Madeira Mosaic",
    thanksTitle: "Спасибо! Осталось нажать «Отправить»",
    thanksText: (channel) =>
      `Мы открыли ${channel} с готовым сообщением Павлу. Проверьте его и нажмите «Отправить» — Павел ответит лично.`,
    thanksReminder: "Если окно мессенджера не открылось, нажмите кнопку ниже.",
    reopen: (channel) => `Открыть ${channel} ещё раз`,
    toTours: "Вернуться к экскурсиям",
    noLead: "Чтобы написать Павлу, заполните форму заявки.",
    emailThanksTitle: "Спасибо! Заявка отправлена",
    emailThanksText:
      "Павел получил вашу заявку на почту и ответит лично по указанному контакту — обычно в течение дня.",
  },
  en: {
    seoTitle: "Request a private Madeira tour — Madeira Mosaic",
    seoDescription:
      "Request a private Madeira tour for 1–4 guests. Pavel replies personally on WhatsApp or Telegram.",
    eyebrow: "Request",
    title: "Tell Pavel about the trip you’d like",
    intro:
      "Fill in the short form and a ready-to-send message to Pavel will open. Tap Send, and Pavel will reply personally with a route.",
    points: [
      "Pavel replies personally",
      "1 to 4 guests",
      "Route matched to your pace and the weather",
    ],
    back: "Back to tours",
    thanksSeoTitle: "Your message is ready — Madeira Mosaic",
    thanksTitle: "Thank you! Just tap Send",
    thanksText: (channel) =>
      `We opened ${channel} with a ready message to Pavel. Check it and tap Send — Pavel will reply personally.`,
    thanksReminder: "If the messenger did not open, use the button below.",
    reopen: (channel) => `Open ${channel} again`,
    toTours: "Back to tours",
    noLead: "To message Pavel, please fill in the request form.",
    emailThanksTitle: "Thank you! Your request is sent",
    emailThanksText:
      "Pavel has received your request by email and will reply personally to the contact you gave, usually within a day.",
  },
  be: {
    seoTitle: "Заяўка на экскурсію па Мадэйры — Madeira Mosaic",
    seoDescription:
      "Пакіньце заяўку на індывідуальную экскурсію па Мадэйры для 1–4 гасцей. Павел адкажа асабіста ў WhatsApp ці Telegram.",
    eyebrow: "Заяўка",
    title: "Раскажыце, якую паездку вы хочаце",
    intro:
      "Запоўніце кароткую форму — адкрыецца гатовае паведамленне Паўлу. Націсніце «Адправіць», і Павел асабіста адкажа і прапануе маршрут.",
    points: [
      "Адказвае асабіста Павел",
      "Група ад 1 да 4 гасцей",
      "Маршрут пад ваш тэмп і надвор’е",
    ],
    back: "Да экскурсій",
    thanksSeoTitle: "Паведамленне гатовае — Madeira Mosaic",
    thanksTitle: "Дзякуй! Засталося націснуць «Адправіць»",
    thanksText: (channel) =>
      `Мы адкрылі ${channel} з гатовым паведамленнем Паўлу. Праверце яго і націсніце «Адправіць» — Павел адкажа асабіста.`,
    thanksReminder: "Калі акно мэсенджара не адкрылася, націсніце кнопку ніжэй.",
    reopen: (channel) => `Адкрыць ${channel} яшчэ раз`,
    toTours: "Вярнуцца да экскурсій",
    noLead: "Каб напісаць Паўлу, запоўніце форму заяўкі.",
    emailThanksTitle: "Дзякуй! Заяўка адпраўлена",
    emailThanksText:
      "Павел атрымаў вашу заяўку на пошту і адкажа асабіста па пазначаным кантакце — звычайна на працягу дня.",
  },
  uk: {
    seoTitle: "Заявка на екскурсію Мадейрою — Madeira Mosaic",
    seoDescription:
      "Залиште заявку на індивідуальну екскурсію Мадейрою для 1–4 гостей. Павло відповість особисто в WhatsApp або Telegram.",
    eyebrow: "Заявка",
    title: "Розкажіть, яку поїздку ви хочете",
    intro:
      "Заповніть коротку форму — відкриється готове повідомлення Павлу. Натисніть «Надіслати», і Павло особисто відповість та запропонує маршрут.",
    points: [
      "Відповідає особисто Павло",
      "Група від 1 до 4 гостей",
      "Маршрут під ваш темп і погоду",
    ],
    back: "До екскурсій",
    thanksSeoTitle: "Повідомлення готове — Madeira Mosaic",
    thanksTitle: "Дякуємо! Залишилося натиснути «Надіслати»",
    thanksText: (channel) =>
      `Ми відкрили ${channel} з готовим повідомленням Павлу. Перевірте його й натисніть «Надіслати» — Павло відповість особисто.`,
    thanksReminder: "Якщо вікно месенджера не відкрилося, натисніть кнопку нижче.",
    reopen: (channel) => `Відкрити ${channel} ще раз`,
    toTours: "Повернутися до екскурсій",
    noLead: "Щоб написати Павлу, заповніть форму заявки.",
    emailThanksTitle: "Дякуємо! Заявку надіслано",
    emailThanksText:
      "Павло отримав вашу заявку на пошту й відповість особисто за вказаним контактом — зазвичай протягом дня.",
  },
};
