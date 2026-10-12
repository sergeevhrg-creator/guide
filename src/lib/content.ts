export type Lang = "en" | "ru";

export const content = {
  en: {
    nav: {
      experiences: "Experiences",
      about: "About Pavel",
      quiet: "Quiet Madeira",
      contact: "Contact",
    },
    brand: "Madeira Mosaic",
    hero: {
      eyebrow: "Madeira, Portugal — by inquiry only",
      title: "Private Madeira journeys",
      subtitle:
        "Madeira at your pace. Nature without the rush. Conversations that matter.",
      ctaPrimary: "Explore private experiences",
      ctaSecondary: "Ask Pavel",
    },
    intro: {
      label: "Introduction",
      title: "Journeys for three or four people, not for a crowd",
      body: [
        "These are personal Madeira journeys for a maximum of three to four guests. Each day is shaped around your rhythm, your mood and the weather on the island that morning — not around a checklist of viewpoints to be ticked off before lunch.",
        "We drive a little, walk a little, stop where the light is good, and leave room for the conversation that usually begins somewhere on the second hour of the road.",
      ],
      stats: [
        { value: "3–4", label: "guests maximum" },
        { value: "3", label: "languages spoken" },
        { value: "1", label: "route, rewritten by the weather" },
      ],
    },
    experiences: {
      label: "Four experiences",
      title: "Choose the shape of your days",
      from: "From",
      details: "Explore the 7-day journey",
      items: [
        {
          title: "Madeira’s Wild Heart",
          duration: "Full day",
          price: "€330 / group",
          body: "A full day through eastern and northern Madeira: the ancient Laurissilva forest, Ribeiro Frio and Balcões, then down to Porto da Cruz, Machico and Caniçal, ending on the volcanic shores where the Atlantic does the talking.",
        },
        {
          title: "Family Madeira",
          duration: "Full day",
          price: "€350 / family",
          body: "Shared experiences for parents and children: a balanced pace, small missions along the way for younger travellers, and unhurried space where a real conversation between generations can actually happen.",
        },
        {
          title: "First Hours in Madeira",
          duration: "2.5–3 hours",
          price: "€135 / group",
          body: "A private introduction to the island on your first day. Orientation, a handpicked spot away from the tour buses, and honest local tips on where to eat, where to walk and what to skip.",
        },
        {
          title: "Madeira. A Return to What Matters",
          duration: "7-day author-led journey",
          price: "€850 / participant (programme only)",
          body: "Seven days from Machico and the open Atlantic to Ribeiro Frio’s ancient laurel forest, mountain trails, Porto da Cruz and vineyards above the ocean. Each day combines a real island route with a question recorded in a personal or family journey book.",
        },
      ],
    },
    why: {
      label: "Why Pavel",
      title: "A discreet host who knows when not to speak",
      body: [
        "Pavel is a thoughtful, discreet host, an experienced interviewer, and an Orthodox priest living on Madeira. Years of asking questions for a living taught him the more useful skill: listening, and knowing when a silence is better than a fact.",
        "The tone is inclusive, personal and conversational. This is not preaching and it is not therapy — it is a good day on a beautiful island, in company that leaves room for you.",
      ],
      points: [
        "Lives on Madeira year-round, drives the routes himself",
        "Conversation in English, Russian or Belarusian",
        "No sermons, no pressure, no scripted narration",
        "Small groups only — three or four guests",
      ],
    },
    quiet: {
      label: "Quiet Madeira",
      title: "Madeira without the crowds",
      body: "The island most visitors photograph is not the island most visitors experience. These are the places we return to, usually early, usually alone.",
      places: [
        { name: "Machico", note: "The first landing, and still the calmest bay in the east." },
        { name: "Porto da Cruz", note: "Black sand, old sugar mill, the north Atlantic at full volume." },
        { name: "Faial", note: "Eagle Rock from the side nobody stops at." },
        { name: "Ribeiro Frio", note: "Cold water, laurel shade, trout and steam." },
        { name: "Laurissilva", note: "A forest older than the country it belongs to." },
        { name: "Caniçal", note: "Wind, whale history, and the road to the island’s edge." },
      ],
      weather:
        "Madeira has several climates in a single afternoon. Every route has weather-safe alternatives prepared in advance — if the north is closed in cloud, the day moves, and nothing of value is lost.",
    },
    form: {
      label: "Contact",
      title: "Send an inquiry",
      intro:
        "Tell Pavel a little about who is travelling and what you are hoping for. He replies personally.",
      fields: {
        name: "Name",
        language: "Preferred language",
        dates: "Travel dates",
        adults: "Number of adults",
        children: "Number & ages of children",
        experience: "Experience of interest",
        meaningful: "What would make this Madeira journey meaningful for you?",
        contact: "Preferred contact method",
      },
      placeholders: {
        name: "Your name",
        dates: "e.g. 12–19 October",
        adults: "2",
        children: "e.g. 2 children, 7 and 11",
        meaningful: "A few sentences are enough.",
      },
      languages: ["English", "Russian", "Belarusian"],
      experienceOptions: [
        "Madeira’s Wild Heart",
        "Family Madeira",
        "First Hours in Madeira",
        "A Return to What Matters",
        "Not sure yet",
      ],
      contactOptions: ["Email", "WhatsApp", "Telegram", "Phone call"],
      submit: "Send an inquiry",
      note: "This is an inquiry, not an automatic booking. Nothing is confirmed until Pavel replies and the details are agreed. Accommodation, flights, meals and entrance tickets are not included unless explicitly stated.",
      successTitle: "Thank you — your inquiry is noted",
      successBody:
        "This is a visual prototype, so nothing has been sent. In the finished site, Pavel would reply personally within a day or two.",
      successReset: "Write another inquiry",
    },
    footer: {
      brand: "Madeira Mosaic",
      place: "Madeira, Portugal",
      languagesLabel: "Languages",
      languages: "English · Russian · Belarusian",
      byInquiry: "By inquiry only",
      rights: "Prototype site. All imagery is illustrative.",
    },
  },
  ru: {
    nav: {
      experiences: "Путешествия",
      about: "О Павле",
      quiet: "Тихая Мадейра",
      contact: "Контакт",
    },
    brand: "Madeira Mosaic",
    hero: {
      eyebrow: "Мадейра, Португалия — только по запросу",
      title: "Частные путешествия по Мадейре",
      subtitle:
        "Мадейра в вашем ритме. Природа без суеты. Разговоры о важном.",
      ctaPrimary: "Выбрать путешествие",
      ctaSecondary: "Написать Павлу",
    },
    intro: {
      label: "Вступление",
      title: "Путешествия для трёх-четырёх человек, а не для толпы",
      body: [
        "Это личные путешествия по Мадейре максимум для трёх-четырёх гостей. Каждый день выстраивается вокруг вашего ритма, вашего настроения и погоды на острове в это утро — а не вокруг списка смотровых площадок, которые надо успеть до обеда.",
        "Немного едем, немного идём пешком, останавливаемся там, где хороший свет, и оставляем место для разговора, который обычно начинается где-то на втором часу дороги.",
      ],
      stats: [
        { value: "3–4", label: "гостя максимум" },
        { value: "3", label: "языка общения" },
        { value: "1", label: "маршрут, который переписывает погода" },
      ],
    },
    experiences: {
      label: "Четыре путешествия",
      title: "Выберите форму своих дней",
      from: "От",
      details: "Открыть маршрут на 7 дней",
      items: [
        {
          title: "Дикое сердце Мадейры",
          duration: "Целый день",
          price: "€330 / группа",
          body: "Полный день по востоку и северу Мадейры: древний лес Лаурисилва, Рибейру Фриу и Балкойнш, затем спуск к Порту-да-Круш, Машику и Канисалу и финал на вулканических берегах, где говорит уже Атлантика.",
        },
        {
          title: "Семейная Мадейра",
          duration: "Целый день",
          price: "€350 / семья",
          body: "Общие впечатления для родителей и детей: спокойный темп, маленькие задания в пути для младших путешественников и неспешное пространство, в котором настоящий разговор между поколениями действительно случается.",
        },
        {
          title: "Первые часы на Мадейре",
          duration: "2,5–3 часа",
          price: "€135 / группа",
          body: "Частное знакомство с островом в первый день. Ориентация, одно тщательно выбранное место в стороне от туристических автобусов и честные местные советы: где есть, где гулять и что можно пропустить.",
        },
        {
          title: "Мадейра. Вернуться к главному",
          duration: "7-дневное авторское путешествие",
          price: "€850 / участник (только программа)",
          body: "Семь дней от Машику и открытого Атлантического океана до древней лаурисильвы Рибейру-Фриу, горных троп, Порту-да-Круш и виноградников над водой. Каждый день соединяет конкретный маршрут по острову и вопрос для личной или семейной книги пути.",
        },
      ],
    },
    why: {
      label: "Почему Павел",
      title: "Деликатный спутник, который знает, когда лучше помолчать",
      body: [
        "Павел — внимательный и деликатный хозяин дня, опытный интервьюер и православный священник, живущий на Мадейре. Годы профессиональных вопросов научили его более полезному умению: слушать и понимать, когда пауза лучше факта.",
        "Тон — открытый, личный, разговорный. Это не проповедь и не терапия: это хороший день на красивом острове в компании, которая оставляет место для вас.",
      ],
      points: [
        "Живёт на Мадейре круглый год и сам ведёт машину по маршрутам",
        "Разговор на английском, русском или белорусском",
        "Никаких проповедей, давления и заученного экскурсионного текста",
        "Только маленькие группы — три-четыре гостя",
      ],
    },
    quiet: {
      label: "Тихая Мадейра",
      title: "Мадейра без толпы",
      body: "Остров, который фотографируют, и остров, который проживают, — это не одно и то же. Вот места, куда мы возвращаемся: обычно рано утром и обычно в одиночестве.",
      places: [
        { name: "Машику", note: "Первая высадка на острове и до сих пор самая спокойная бухта востока." },
        { name: "Порту-да-Круш", note: "Чёрный песок, старая сахарная фабрика и Атлантика на полной громкости." },
        { name: "Фаял", note: "Орлиная скала с той стороны, где никто не останавливается." },
        { name: "Рибейру Фриу", note: "Холодная вода, лавровая тень, форель и пар над ущельем." },
        { name: "Лаурисилва", note: "Лес, который старше страны, которой принадлежит." },
        { name: "Канисал", note: "Ветер, китобойная история и дорога на самый край острова." },
      ],
      weather:
        "На Мадейре несколько климатов умещаются в один день. Для каждого маршрута заранее готовы погодные альтернативы: если север затянут облаками, день просто меняет направление, и ничего важного не теряется.",
    },
    form: {
      label: "Контакт",
      title: "Отправить запрос",
      intro:
        "Расскажите Павлу немного о том, кто едет и чего вам хочется. Он отвечает лично.",
      fields: {
        name: "Имя",
        language: "Предпочитаемый язык",
        dates: "Даты поездки",
        adults: "Количество взрослых",
        children: "Количество и возраст детей",
        experience: "Интересующее путешествие",
        meaningful: "Что сделало бы это путешествие по Мадейре важным для вас?",
        contact: "Предпочитаемый способ связи",
      },
      placeholders: {
        name: "Ваше имя",
        dates: "например, 12–19 октября",
        adults: "2",
        children: "например, двое детей, 7 и 11 лет",
        meaningful: "Достаточно нескольких предложений.",
      },
      languages: ["Английский", "Русский", "Белорусский"],
      experienceOptions: [
        "Дикое сердце Мадейры",
        "Семейная Мадейра",
        "Первые часы на Мадейре",
        "Возвращение к важному",
        "Пока не решили",
      ],
      contactOptions: ["Электронная почта", "WhatsApp", "Telegram", "Телефонный звонок"],
      submit: "Отправить запрос",
      note: "Это запрос, а не автоматическое бронирование. Ничего не подтверждено, пока Павел не ответит и детали не согласованы. Проживание, перелёты, питание и входные билеты не включены, если не указано иное.",
      successTitle: "Спасибо — ваш запрос принят",
      successBody:
        "Это визуальный прототип, поэтому ничего не отправлено. В готовом сайте Павел ответил бы лично в течение одного-двух дней.",
      successReset: "Написать ещё один запрос",
    },
    footer: {
      brand: "Madeira Mosaic",
      place: "Мадейра, Португалия",
      languagesLabel: "Языки",
      languages: "английский · русский · белорусский",
      byInquiry: "Только по запросу",
      rights: "Прототип сайта. Все изображения иллюстративные.",
    },
  },
} as const;
