import type { Lang } from "@/lib/i18n/lang";

// Confirmed by Pavel on 27 Nov 2026:
// - no prepayment, payment on the day of the tour, free cancellation;
// - pick-up from the guest's hotel anywhere on Madeira (cruise guests: Funchal port);
// - airport transfers (one way, per car, any number of passengers): Santa Cruz/Caniçal/Machico €15, Funchal €30, Calheta/Ponta do Sol/north €50;
// - cruise guests are back at the port at least 60 minutes before all aboard.
// "Car, driver, fuel and insurance included" comes from the confirmed hourly rate in tour-pricing.ts.

type Text = Record<Lang, string>;

export const heroPriceLine: Text = {
  en: "From €150 per car for up to 4 guests · €30/hour · no prepayment",
  be: "Ад 150 € за машыну да 4 чалавек · 30 €/гадзіна · без перадаплаты",
  uk: "Від 150 € за авто до 4 осіб · 30 €/година · без передоплати",
  ru: "От 150 € за машину до 4 человек · 30 €/час · без предоплаты",
};

export const bookingTitle: Text = {
  en: "How booking works",
  be: "Як праходзіць браніраванне",
  uk: "Як проходить бронювання",
  ru: "Как проходит бронирование",
};

export const bookingSteps: Array<{ title: Text; body: Text }> = [
  {
    title: {
      en: "Message Pavel",
      be: "Напішыце Паўлу",
      uk: "Напишіть Павлу",
      ru: "Напишите Павлу",
    },
    body: {
      en: "Send your dates, the number of guests and what you would like to see — on WhatsApp or Telegram.",
      be: "Пазначце даты, колькасць гасцей і што хочаце ўбачыць — у WhatsApp або Telegram.",
      uk: "Вкажіть дати, кількість гостей і що хочете побачити — у WhatsApp або Telegram.",
      ru: "Укажите даты, сколько вас и что хочется увидеть — в WhatsApp или Telegram.",
    },
  },
  {
    title: {
      en: "Agree the route",
      be: "Узгадняем маршрут",
      uk: "Узгоджуємо маршрут",
      ru: "Согласуем маршрут",
    },
    body: {
      en: "Pavel replies personally and suggests a route and timing that suit your group and the weather.",
      be: "Павел асабіста адкажа і прапануе маршрут і час пад вашу групу і надвор'е.",
      uk: "Павло особисто відповість і запропонує маршрут і час під вашу групу та погоду.",
      ru: "Павел лично ответит и предложит маршрут и время под вашу компанию и погоду.",
    },
  },
  {
    title: {
      en: "Pick-up at your hotel",
      be: "Сустрэча ля гатэля",
      uk: "Зустріч біля готелю",
      ru: "Встреча у отеля",
    },
    body: {
      en: "We collect you from your hotel or apartment anywhere on Madeira. Cruise guests are met at Funchal port.",
      be: "Забіраем ад вашага гатэля або апартаментаў у любым месцы Мадэйры. Круізных гасцей сустракаем у порце Фуншала.",
      uk: "Забираємо від вашого готелю чи апартаментів у будь-якій точці Мадейри. Круїзних гостей зустрічаємо в порту Фуншала.",
      ru: "Забираем от вашего отеля или апартаментов в любой точке Мадейры. Круизных гостей встречаем в порту Фуншала.",
    },
  },
  {
    title: {
      en: "Pay on the day",
      be: "Аплата ў дзень экскурсіі",
      uk: "Оплата в день екскурсії",
      ru: "Оплата в день экскурсии",
    },
    body: {
      en: "No prepayment. You pay on the day of the tour, and cancellation is free.",
      be: "Без перадаплаты. Вы плаціце ў дзень экскурсіі, адмена бясплатная.",
      uk: "Без передоплати. Ви платите в день екскурсії, скасування безкоштовне.",
      ru: "Без предоплаты. Вы платите в день экскурсии, отмена бесплатная.",
    },
  },
];

export const cruiseGuarantee: { title: Text; points: Text[] } = {
  title: {
    en: "Back-to-ship guarantee",
    be: "Гарантыя вяртання на лайнер",
    uk: "Гарантія повернення на лайнер",
    ru: "Гарантия возвращения на лайнер",
  },
  points: [
    {
      en: "When booking, send us your ship's name, the time you go ashore and the all-aboard time.",
      be: "Пры браніраванні паведаміце назву судна, час выхаду на бераг і час all aboard.",
      uk: "Під час бронювання повідомте назву судна, час виходу на берег і час all aboard.",
      ru: "При бронировании сообщите название судна, время выхода на берег и время all aboard.",
    },
    {
      en: "We bring you back to Funchal port at least 60 minutes before all aboard.",
      be: "Мы вяртаем вас у порт Фуншала не пазней чым за 60 хвілін да all aboard.",
      uk: "Ми повертаємо вас у порт Фуншала не пізніше ніж за 60 хвилин до all aboard.",
      ru: "Мы возвращаем вас в порт Фуншала не позже чем за 60 минут до all aboard.",
    },
    {
      en: "During the day we watch traffic and the weather and shorten the route if needed — the ship comes first.",
      be: "На працягу дня сочым за коркамі і надвор'ем і пры неабходнасці скарачаем маршрут — лайнер важнейшы.",
      uk: "Протягом дня стежимо за заторами й погодою і за потреби скорочуємо маршрут — лайнер важливіший.",
      ru: "В течение дня следим за пробками и погодой и при необходимости сокращаем маршрут — лайнер важнее.",
    },
  ],
};

export const faqTitle: Text = {
  en: "Frequently asked questions",
  be: "Частыя пытанні",
  uk: "Часті запитання",
  ru: "Частые вопросы",
};

export const faqItems: Array<{ q: Text; a: Text }> = [
  {
    q: {
      en: "How much does a tour cost?",
      be: "Колькі каштуе экскурсія?",
      uk: "Скільки коштує екскурсія?",
      ru: "Сколько стоит экскурсия?",
    },
    a: {
      en: "€30 per hour per car for up to 4 guests: 5 hours — €150, 8 hours — €240. Entrance tickets, tastings, museums and meals are paid separately.",
      be: "30 € у гадзіну за машыну да 4 чалавек: 5 гадзін — 150 €, 8 гадзін — 240 €. Уваходныя квіткі, дэгустацыі, музеі і харчаванне аплачваюцца асобна.",
      uk: "30 € на годину за авто до 4 осіб: 5 годин — 150 €, 8 годин — 240 €. Вхідні квитки, дегустації, музеї та харчування оплачуються окремо.",
      ru: "30 € в час за машину до 4 человек: 5 часов — 150 €, 8 часов — 240 €. Входные билеты, дегустации, музеи и питание оплачиваются отдельно.",
    },
  },
  {
    q: {
      en: "What is included?",
      be: "Што ўваходзіць у кошт?",
      uk: "Що входить у вартість?",
      ru: "Что входит в стоимость?",
    },
    a: {
      en: "The car, Pavel as your driver and guide, fuel and insurance.",
      be: "Аўтамабіль, Павел як вадзіцель і гід, паліва і страхоўка.",
      uk: "Автомобіль, Павло як водій і гід, пальне та страхування.",
      ru: "Автомобиль, Павел как водитель и гид, топливо и страховка.",
    },
  },
  {
    q: {
      en: "Do I need to pay in advance?",
      be: "Ці трэба перадаплата?",
      uk: "Чи потрібна передоплата?",
      ru: "Нужна ли предоплата?",
    },
    a: {
      en: "No. You pay on the day of the tour, and you can cancel free of charge.",
      be: "Не. Аплата ў дзень экскурсіі, адмяніць можна бясплатна.",
      uk: "Ні. Оплата в день екскурсії, скасувати можна безкоштовно.",
      ru: "Нет. Оплата в день экскурсии, отменить можно бесплатно.",
    },
  },
  {
    q: {
      en: "Where do you pick us up?",
      be: "Адкуль вы нас забіраеце?",
      uk: "Звідки ви нас забираєте?",
      ru: "Откуда вы нас забираете?",
    },
    a: {
      en: "From your hotel or apartment anywhere on Madeira. Cruise guests are met at Funchal port.",
      be: "Ад вашага гатэля або апартаментаў у любым месцы Мадэйры. Круізных гасцей сустракаем у порце Фуншала.",
      uk: "Від вашого готелю чи апартаментів у будь-якій точці Мадейри. Круїзних гостей зустрічаємо в порту Фуншала.",
      ru: "От вашего отеля или апартаментов в любой точке Мадейры. Круизных гостей встречаем в порту Фуншала.",
    },
  },
  {
    q: {
      en: "What if the weather is bad?",
      be: "А калі дрэннае надвор'е?",
      uk: "А якщо погана погода?",
      ru: "А если плохая погода?",
    },
    a: {
      en: "Weather in the mountains and on the coast often differs. Pavel suggests a route where it is clear or proposes another day.",
      be: "Надвор'е ў гарах і на ўзбярэжжы часта розніцца. Павел прапануе маршрут туды, дзе ясна, або іншы дзень.",
      uk: "Погода в горах і на узбережжі часто різна. Павло запропонує маршрут туди, де ясно, або інший день.",
      ru: "Погода в горах и на побережье часто разная. Павел предложит маршрут туда, где ясно, или другой день.",
    },
  },
  {
    q: {
      en: "Can we come with children?",
      be: "Ці можна з дзецьмі?",
      uk: "Чи можна з дітьми?",
      ru: "Можно ли с детьми?",
    },
    a: {
      en: "Yes. A child seat is free — please include your child's age in the enquiry.",
      be: "Так. Дзіцячае крэсла бясплатна — пазначце ўзрост дзіцяці ў заяўцы.",
      uk: "Так. Дитяче крісло безкоштовно — вкажіть вік дитини в заявці.",
      ru: "Да. Детское кресло бесплатно — укажите возраст ребёнка в заявке.",
    },
  },
  {
    q: {
      en: "Do you offer airport transfers?",
      be: "Ці ёсць трансфер з аэрапорта?",
      uk: "Чи є трансфер з аеропорту?",
      ru: "Есть ли трансфер из аэропорта?",
    },
    a: {
      en: "Yes, one way to or from Madeira airport, price per car regardless of the number of passengers: Santa Cruz, Caniçal and Machico — €15; Funchal — €30; Calheta, Ponta do Sol and the north of the island — €50. Send your flight details to book.",
      be: "Так, у адзін бок у аэрапорт Мадэйры або з яго, кошт за машыну незалежна ад колькасці пасажыраў: Санта-Круш, Канісал і Машыку — 15 €; Фуншал — 30 €; Калета, Понта-ду-Сол і поўнач выспы — 50 €. Для браніравання напішыце дэталі рэйса.",
      uk: "Так, в один бік до аеропорту Мадейри або з нього, ціна за авто незалежно від кількості пасажирів: Санта-Круш, Канісал і Машику — 15 €; Фуншал — 30 €; Калета, Понта-ду-Сол і північ острова — 50 €. Для бронювання напишіть деталі рейсу.",
      ru: "Да, в одну сторону в аэропорт Мадейры или из него, цена за машину независимо от числа пассажиров: Санта-Круш, Канисал и Машику — 15 €; Фуншал — 30 €; Калета, Понта-ду-Сол и север острова — 50 €. Для бронирования напишите детали рейса.",
    },
  },
  {
    q: {
      en: "Which languages does Pavel speak?",
      be: "На якіх мовах размаўляе Павел?",
      uk: "Якими мовами говорить Павло?",
      ru: "На каких языках говорит Павел?",
    },
    a: {
      en: "English, Russian and Belarusian.",
      be: "Па-беларуску, па-руску і па-англійску.",
      uk: "Російською, англійською та білоруською.",
      ru: "По-русски, по-английски и по-белорусски.",
    },
  },
];

export function faqJsonLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q[lang],
      acceptedAnswer: { "@type": "Answer", text: item.a[lang] },
    })),
  };
}
