import type { Lang } from "@/lib/i18n/lang";
export type PartnerVisual =
  "water" | "speed" | "sail" | "balance" | "golf" | "air" | "depth" | "canyon" | "kayak" | "surf";
export interface PartnerActivity {
  id: string;
  visual: PartnerVisual;
  name: string;
  emotion: string;
  duration: string;
  weather: string;
  licensed: string;
  price: string;
  details: string;
  inquiry: string;
  sourceUrl: string;
}
// Source and reference figures are kept separately from the visitor-facing price. No resale
// agreement has been confirmed: every public figure therefore stays "on request".
export const partnerReferences = [
  {
    id: "cristal-sea",
    visual: "water",
    name: "Cristal Sea Madeira",
    sourceUrl: "https://www.cristalseamadeira.com/booking-online",
    checkedAt: "2026-09-28",
    referenceEuro: 300,
    commercialConsent: false,
  },
  {
    id: "seaya",
    visual: "sail",
    name: "SeaYa! Madeira",
    sourceUrl: "https://www.seayamadeira.pt/en/tours",
    checkedAt: "2026-09-28",
    referenceEuro: 390,
    commercialConsent: false,
  },
  {
    id: "h2o",
    visual: "water",
    name: "H2O Madeira",
    sourceUrl: "https://www.whalewatchingmadeira.com/",
    checkedAt: "2026-09-28",
    referenceEuro: 60,
    commercialConsent: false,
  },
  {
    id: "go-kart",
    visual: "speed",
    name: "Go Kart Madeira",
    sourceUrl: "https://www.gokartmadeira.com/en",
    checkedAt: "2026-09-28",
    referenceEuro: 13,
    commercialConsent: false,
  },
  {
    id: "surf-camp",
    visual: "surf",
    name: "Madeira Surf Camp",
    sourceUrl: "https://madeirasurfcamp.com/surf-school.html",
    checkedAt: "2026-09-28",
    referenceEuro: 50,
    commercialConsent: false,
  },
  {
    id: "canyoning",
    visual: "canyon",
    name: "Go Canyoning Madeira",
    sourceUrl: "https://www.gocanyoningmadeira.com/canyoning-tours",
    checkedAt: "2026-09-28",
    referenceEuro: 80,
    commercialConsent: false,
  },
  {
    id: "skybound",
    visual: "air",
    name: "Skybound Madeira",
    sourceUrl: "https://madeira.dompedro.com/en/experiences-in-madeira-island/tandem-paragliding/",
    checkedAt: "2026-09-28",
    referenceEuro: 100,
    commercialConsent: false,
  },
  {
    id: "outdoor",
    visual: "depth",
    name: "Madeira Outdoor",
    sourceUrl: "https://www.madeiraoutdoor.com/pt/5/diving-and-snorkeling",
    checkedAt: "2026-09-28",
    referenceEuro: 89,
    commercialConsent: false,
  },
  {
    id: "tee-times",
    visual: "golf",
    name: "Madeira Package / Tee Times",
    sourceUrl: "https://www.madeirapackage.net/green-fees/",
    checkedAt: "2026-09-28",
    referenceEuro: 95,
    commercialConsent: false,
  },
  {
    id: "theme-park",
    visual: "balance",
    name: "Parque Temático da Madeira",
    sourceUrl: "https://www.parquetematicodamadeira.pt/en/book/reservar-bilhetes.php",
    checkedAt: "2026-09-28",
    referenceEuro: 13,
    commercialConsent: false,
  },
] as const;
const notes: Record<Lang, Record<string, [string, string, string]>> = {
  en: {
    "cristal-sea": [
      "Private boat or yacht on the Atlantic",
      "Duration and vessel depend on the chosen trip.",
      "Sea state and skipper decision determine the route.",
    ],
    seaya: [
      "Sailing along Madeira's coast",
      "Select a sailing format with the operator.",
      "Wind and sea conditions shape departure.",
    ],
    h2o: [
      "Whale and dolphin watching from Calheta",
      "Trip length confirmed with the operator.",
      "Wildlife sightings cannot be guaranteed.",
    ],
    "go-kart": [
      "Karting in Machico",
      "Session and participant rules confirmed before booking.",
      "Track availability and eligibility require checking.",
    ],
    "surf-camp": [
      "Surf lessons with a specialist instructor",
      "Lesson format confirmed with the operator.",
      "Swell, wind and skill level determine the spot.",
    ],
    canyoning: [
      "Canyoning with a specialist operator",
      "Level and route selected after a safety assessment.",
      "Rain and water flow may change the plan.",
    ],
    skybound: [
      "Tandem paragliding with a specialist pilot",
      "Flight plan confirmed with the operator.",
      "Only suitable wind and pilot approval permit flight.",
    ],
    outdoor: [
      "Diving and introductory scuba",
      "Dive format and suitability confirmed with the operator.",
      "Sea state and health checks apply.",
    ],
    "tee-times": [
      "Golf on Madeira or Porto Santo",
      "Course and tee time confirmed individually.",
      "Availability and course conditions require checking.",
    ],
    "theme-park": [
      "Family day at Madeira's theme park",
      "Admission conditions confirmed with the venue.",
      "Check opening and age-specific ticket rules.",
    ],
  },
  ru: {
    "cristal-sea": [
      "Частная лодка или яхта в Атлантике",
      "Длительность и судно зависят от выбранной программы.",
      "Маршрут определяют море и решение капитана.",
    ],
    seaya: [
      "Парусная прогулка вдоль Мадейры",
      "Формат прогулки согласовывается с оператором.",
      "Ветер и море влияют на выход.",
    ],
    h2o: [
      "Наблюдение за китами и дельфинами из Кальеты",
      "Длительность уточняется у оператора.",
      "Встречу с животными гарантировать нельзя.",
    ],
    "go-kart": [
      "Картинг в Машику",
      "Сеанс и требования к участникам уточняются заранее.",
      "Доступность трассы и допуск нужно проверить.",
    ],
    "surf-camp": [
      "Урок сёрфинга с профильным инструктором",
      "Формат урока согласовывается с оператором.",
      "Место зависит от волн, ветра и уровня подготовки.",
    ],
    canyoning: [
      "Каньонинг с профильным оператором",
      "Уровень и маршрут определяют после оценки безопасности.",
      "Дождь и уровень воды могут изменить программу.",
    ],
    skybound: [
      "Тандемный полёт с профильным пилотом",
      "План полёта подтверждает оператор.",
      "Нужны подходящий ветер и разрешение пилота.",
    ],
    outdoor: [
      "Дайвинг и первое погружение",
      "Формат и допуск подтверждает оператор.",
      "Важны состояние моря и ограничения по здоровью.",
    ],
    "tee-times": [
      "Гольф на Мадейре или Порту-Санту",
      "Поле и время игры согласовываются отдельно.",
      "Наличие слота и состояние поля требуют проверки.",
    ],
    "theme-park": [
      "Семейный день в тематическом парке",
      "Условия посещения подтверждает площадка.",
      "Проверьте часы и возрастные правила билетов.",
    ],
  },
  be: {
    "cristal-sea": [
      "Прыватная лодка або яхта ў Атлантыцы",
      "Час і судна залежаць ад праграмы.",
      "Маршрут залежыць ад мора і рашэння капітана.",
    ],
    seaya: [
      "Парусная прагулка ўздоўж Мадэйры",
      "Фармат узгадняецца з аператарам.",
      "Вецер і мора ўплываюць на выхад.",
    ],
    h2o: [
      "Назіранне за кітамі і дэльфінамі з Кальеты",
      "Час удакладняецца ў аператара.",
      "Сустрэчу з жывёламі гарантаваць нельга.",
    ],
    "go-kart": [
      "Картынг у Машыку",
      "Сеанс і правілы ўдзелу ўдакладняюцца.",
      "Даступнасць трасы патрабуе праверкі.",
    ],
    "surf-camp": [
      "Урок сёрфінгу з профільным інструктарам",
      "Фармат узгадняецца з аператарам.",
      "Месца залежыць ад хваль, ветру і ўзроўню.",
    ],
    canyoning: [
      "Каньёнінг з профільным аператарам",
      "Узровень і маршрут вызначаюць пасля ацэнкі бяспекі.",
      "Дождж і вада могуць змяніць праграму.",
    ],
    skybound: [
      "Тандэмны палёт з профільным пілотам",
      "План палёту пацвярджае аператар.",
      "Патрэбны прыдатны вецер і дазвол пілота.",
    ],
    outdoor: [
      "Дайвінг і першае апусканне",
      "Фармат і допуск пацвярджае аператар.",
      "Важныя стан мора і здароўе.",
    ],
    "tee-times": [
      "Гольф на Мадэйры або Порту-Санту",
      "Поле і час узгадняюцца асобна.",
      "Слот і стан поля трэба праверыць.",
    ],
    "theme-park": [
      "Сямейны дзень у тэматычным парку",
      "Умовы пацвярджае пляцоўка.",
      "Праверце час працы і правілы квіткоў.",
    ],
  },
  uk: {
    "cristal-sea": [
      "Приватний човен або яхта в Атлантиці",
      "Тривалість і судно залежать від програми.",
      "Маршрут визначають море й рішення капітана.",
    ],
    seaya: [
      "Вітрильна прогулянка уздовж Мадейри",
      "Формат узгоджується з оператором.",
      "Вітер і море впливають на вихід.",
    ],
    h2o: [
      "Спостереження за китами й дельфінами з Кальєти",
      "Тривалість уточнюється в оператора.",
      "Зустріч із тваринами не гарантована.",
    ],
    "go-kart": [
      "Картинг у Машіку",
      "Сеанс і правила участі уточнюються.",
      "Доступність траси потребує перевірки.",
    ],
    "surf-camp": [
      "Урок серфінгу з профільним інструктором",
      "Формат узгоджується з оператором.",
      "Місце залежить від хвиль, вітру й рівня.",
    ],
    canyoning: [
      "Каньйонінг із профільним оператором",
      "Рівень і маршрут визначають після оцінки безпеки.",
      "Дощ і вода можуть змінити програму.",
    ],
    skybound: [
      "Тандемний політ із профільним пілотом",
      "План польоту підтверджує оператор.",
      "Потрібні належний вітер і дозвіл пілота.",
    ],
    outdoor: [
      "Дайвінг і перше занурення",
      "Формат і допуск підтверджує оператор.",
      "Важливі стан моря та здоров’я.",
    ],
    "tee-times": [
      "Гольф на Мадейрі або Порту-Санту",
      "Поле й час узгоджуються окремо.",
      "Слот і стан поля треба перевірити.",
    ],
    "theme-park": [
      "Сімейний день у тематичному парку",
      "Умови підтверджує майданчик.",
      "Перевірте години й правила квитків.",
    ],
  },
};
const labels: Record<Lang, [string, string, string, string]> = {
  en: [
    "Activity operated by a specialist partner · licence and terms to confirm",
    "Price on request · subject to partner confirmation",
    "Details",
    "Ask about this activity",
  ],
  be: [
    "Актыўнасць праводзіць профільны партнёр · ліцэнзію і ўмовы трэба пацвердзіць",
    "Кошт па запыце · пасля пацверджання партнёра",
    "Падрабязна",
    "Спытаць пра актыўнасць",
  ],
  uk: [
    "Активність проводить профільний партнер · ліцензію й умови треба підтвердити",
    "Вартість за запитом · після підтвердження партнера",
    "Докладніше",
    "Запитати про активність",
  ],
  ru: [
    "Активность проводит профильный партнёр · лицензию и условия нужно подтвердить",
    "Стоимость по запросу · после подтверждения партнёра",
    "Подробнее",
    "Спросить об активности",
  ],
};
export function getPartnerActivities(lang: Lang): PartnerActivity[] {
  return partnerReferences.map((ref) => {
    const [emotion, duration, weather] = notes[lang][ref.id] ?? notes.en[ref.id]!;
    const [licensed, price, details, inquiry] = labels[lang];
    return {
      id: ref.id,
      visual: ref.visual,
      name: ref.name,
      emotion,
      duration,
      weather,
      licensed,
      price,
      details,
      inquiry,
      sourceUrl: ref.sourceUrl,
    };
  });
}
