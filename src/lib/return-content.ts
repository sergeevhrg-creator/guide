import type { Lang } from "@/lib/i18n/lang";

export type ReturnContent = (typeof returnContent)[Lang];

export const returnContent = {
  en: {
    nav: {
      home: "Madeira Mosaic",
      tours: "Tours",
      guide: "Guide",
      pavel: "About Pavel",
      week: "The week",
      activities: "Activities",
      formats: "For whom",
      inquiry: "Ask about dates",
    },
    languages: "Russian · English · Belarusian",
    hero: {
      eyebrow: "A joyful seven-day family adventure on Madeira",
      title: "Madeira. A Return to What Matters",
      subtitle: "Seven days of joy, ocean, games and discoveries for the whole family",
      cta: "Ask about dates and the programme",
    },
    facts: [
      "Vivid impressions for children",
      "Adventures the whole family shares",
      "Swimming and the ocean every few days",
      "A comfortable pace for any age",
      "Real time for parents to rest",
      "A backup plan for rainy days, so no day is lost",
    ],
    host: {
      label: "Author and host",
      title: "Pavel Sergeev",
      paragraphs: [
        "Pavel lives on Madeira and leads the journey in Russian, English or Belarusian. He adapts each day to the family, the children’s energy and the island’s weather.",
        "The week is built for families with one or two children, including younger kids: swimming, games, gentle hikes and plenty of unhurried time.",
        "Age limits and any restrictions depend on the specific activity chosen and are always confirmed with the licensed partner before booking.",
      ],
    },
    week: {
      label: "The route",
      title: "Seven distinct days. One island story.",
      intro: "Open each day for its route, the family fun and a rainy-day alternative.",
    },
    days: [
      {
        title: "Meet the island",
        place: "Machico · the ocean · old town",
        body: "We walk through the old town and bay, share our first table, meet the group and start a family quest map with the first sticker.",
        joy: "Children paddle at the bay, chase the first sticker for the quest map, and everyone shares ice cream on the promenade.",
        weather:
          "If it rains, we swap the walk for the covered market in Funchal and a cosy welcome lunch.",
      },
      {
        title: "Feel the living ocean",
        place: "Machico or Caniçal · Atlantic",
        body: "A boat trip with a licensed partner to look for dolphins, whales, turtles and seabirds. Wild encounters are never guaranteed and depend entirely on the ocean.",
        joy: "The thrill of scanning the waves for dolphins, wind in your hair on deck, and a new stamp for the quest map.",
        weather:
          "In rough seas, the partner reschedules the trip and we visit the aquarium-style tide pools at Porto Moniz instead.",
      },
      {
        title: "Hear the ancient forest",
        place: "Ribeiro Frio · Laurissilva · Balcões",
        body: "We follow an easy levada path through the laurel forest, reach the Balcões viewpoint and visit the trout farm. Kids can lead the way and spot lizards, streams and hidden bridges.",
        joy: "Feeding the trout, spotting the best hiding places along the levada, and racing to the viewpoint first.",
        weather:
          "In heavy rain we shorten the walk and add extra time at the covered trout farm and a games café stop.",
      },
      {
        title: "Touch craftsmanship",
        place: "North coast · village workshop",
        body: "We visit a north-coast village, meet a local maker and try a hands-on craft together. The specific artisan and workshop are confirmed in advance by the partner.",
        joy: "Making something with your own hands to take home, plus a snack stop at a village café with an ocean view.",
        weather:
          "The workshop is indoors, so this day works well whatever the weather — we simply add a cosy board-game break.",
      },
      {
        title: "Choose your own adventure",
        place: "Madeira’s mountain paths and toboggan run",
        body: "We pick a family-friendly walk, a viewpoint picnic, or the famous wicker toboggan ride down from Monte, depending on the weather, official trail status and the group’s energy that morning.",
        joy: "Whooshing down the hill on the wicker toboggan and a picnic with a view over Funchal.",
        weather:
          "In poor weather we swap the toboggan and viewpoints for the Monte Palace Tropical Garden, which is largely sheltered.",
      },
      {
        title: "Taste the island’s history",
        place: "Porto da Cruz · Engenhos do Norte",
        body: "We trace sugar-cane history at the old mill. Partner permitting, adults taste Madeira rum or poncha while children enjoy citrus with honey. Then it’s beach time, optional surfing and a café stop.",
        joy: "Splashing in the waves at Porto da Cruz beach and trying a first surf lesson with soft boards for kids.",
        weather:
          "If the sea is too rough for the beach, we linger longer at the mill and finish the day at a heated pool.",
      },
      {
        title: "Gather the week’s harvest",
        place: "Vineyards above the Atlantic",
        body: "We learn how grapes are grown and Madeira wine is made. Vineyard and cellar visits require advance confirmation. Adults taste wine; children get grape juice and finish their sticker book together.",
        joy: "Picking grapes if the season allows, sipping grape juice like a toast, and completing the last page of the quest map with a final gold sticker.",
        weather:
          "If the vineyard is closed by weather, we do a wine-tasting-for-grown-ups and juice-tasting-for-kids at a covered cellar in Funchal.",
      },
    ],
    activities: {
      label: "Optional activities",
      title: "Pick your own family adventures",
      intro:
        "Beyond the daily programme, families can add age-appropriate activities. Age and safety requirements always depend on the specific activity and are confirmed with the licensed partner beforehand.",
      items: [
        {
          title: "Aquaparque Madeira",
          body: "Water slides and pools for a full day of family fun, suitable for most ages with lifeguards on site.",
        },
        {
          title: "Introduction to yachting",
          body: "A gentle sail with an experienced captain, a lovely way to see the coastline together as a family.",
        },
        {
          title: "Surfing",
          body: "Beginner lessons with soft boards and instructors used to teaching children and parents alike.",
        },
        {
          title: "SUP and paddleboarding",
          body: "Calm-water paddling sessions, a relaxed way for kids and adults to get out on the ocean.",
        },
        {
          title: "Golf at Santo da Serra",
          body: "A scenic course above the clouds, with options for a taster session for older children and parents.",
        },
        {
          title: "Canyoning",
          body: "An exciting descent through waterfalls and pools — offered strictly only once age, height and skill level are confirmed by the licensed partner.",
        },
      ],
    },
    parentsCorner: {
      label: "Time for parents",
      title: "Places to swim, breathe and simply sit down",
      body: "Parents remain responsible for their children at all times, and calm pauses are simply built into the natural rhythm of the family day — a swim together at Porto da Cruz or Ponta Delgada, a slow lunch by the ocean in Machico, a quiet coffee on a village terrace with a view. Parents remain responsible for their children throughout the journey. Pavel curates and coordinates a comfortable family itinerary, while specialized activities are conducted by licensed partners according to their safety protocols.",
    },
    formats: {
      label: "Family variations",
      title: "The same island, tailored to your family",
      items: [
        {
          title: "A family with a small child",
          body: "Shorter walks, more beach and pool time, and a pace that leaves room for naps and unplanned discoveries.",
        },
        {
          title: "A family with two children of different ages",
          body: "Activities that flex between them — an older child can try surfing while a younger one paddles nearby, and everyone regroups for meals and the quest map.",
        },
        {
          title: "Parents who need a proper rest",
          body: "Unhurried stretches of the day — beach time, a long lunch, a short easy walk — planned so parents can swim, read or do nothing while staying with their children.",
        },
      ],
    },
    keepsakes: {
      label: "After the journey",
      title: "What you take home",
      body: "A playful family memory map fills up with photos, stickers and stamps collected each day — a children’s quest as much as a keepsake. On the final day, everyone adds their last sticker and picks a favourite memory to keep.",
    },
    boundaries: {
      label: "Care",
      title: "Your pace and your comfort",
      body: "Choose a calmer pace on any day, skip an activity, or ask for a longer rest stop — the programme flexes to the family. Photos and video are made only with consent. Family time and downtime are always respected.",
    },
    notice: {
      title: "Important before you inquire",
      body: "This is a preliminary description of an author-led programme, not an automatic booking. Accommodation, flights, meals, tastings, tickets, sea trips and third-party services are not included unless explicitly stated. Every activity depends on weather, official trail access and partner confirmation. Age limits and safety restrictions for specific activities are set and confirmed by the licensed partner before booking.",
    },
    form: {
      label: "Inquiry only",
      title: "Ask about dates and the programme",
      intro:
        "Tell Pavel who is travelling and when. This form does not take payment or confirm a booking.",
      fields: {
        name: "Name",
        contact: "Email, WhatsApp or Telegram",
        dates: "Preferred dates",
        guests: "Who is travelling?",
        note: "What matters to you on this journey?",
      },
      placeholders: {
        name: "Your name",
        contact: "How Pavel can reach you",
        dates: "For example, 12–19 October",
        guests: "Family; children’s ages",
        note: "A few sentences are enough",
      },
      submit: "Send an inquiry",
      successTitle: "Your inquiry is noted",
      successBody:
        "This is a visual prototype, so nothing has been sent. The final site will let Pavel reply personally.",
      reset: "Write another inquiry",
    },
    footer: "Madeira Mosaic · Private tours and journeys across Madeira",
  },
  ru: {
    nav: {
      home: "Мозаика Мадейры",
      tours: "Экскурсии",
      guide: "Гид",
      pavel: "О Павле",
      week: "Семь дней",
      activities: "Активности",
      formats: "Для кого",
      inquiry: "Узнать даты",
    },
    languages: "Русский · English · Беларуская",
    hero: {
      eyebrow: "Радостное семейное приключение на Мадейре на семь дней",
      title: "Мадейра. Вернуться к главному",
      subtitle: "Семь дней радости, океана, игр и открытий для всей семьи",
      cta: "Узнать даты и программу",
    },
    facts: [
      "Яркие впечатления для детей",
      "Приключения, которые семья переживает вместе",
      "Купание и океан почти каждый день",
      "Комфортный темп для любого возраста",
      "Настоящее время для отдыха родителей",
      "Запасной план на случай дождя — ни один день не пропадёт",
    ],
    host: {
      label: "Автор и ведущий",
      title: "Павел Сергеев",
      paragraphs: [
        "Павел живёт на Мадейре и проводит путешествие на русском, английском или белорусском. Каждый день он адаптирует под семью, силы детей и погоду на острове.",
        "Неделя создана для семей с одним или двумя детьми, включая совсем маленьких: купание, игры, лёгкие прогулки и много неспешного времени.",
        "Возрастные ограничения и требования зависят от конкретной активности и всегда подтверждаются лицензированным партнёром до бронирования.",
      ],
    },
    week: {
      label: "Маршрут",
      title: "Семь разных дней. Одна история острова.",
      intro:
        "Откройте день, чтобы увидеть маршрут, семейную радость дня и запасной план на случай дождя.",
    },
    days: [
      {
        title: "Встретиться с островом",
        place: "Машику · океан · старый город",
        body: "Гуляем по старинному городу и бухте, собираемся за первым общим столом, знакомимся с группой и начинаем семейную карту квеста с первым стикером.",
        joy: "Дети плещутся у бухты, ловят первый стикер для карты квеста, а вечером всей семьёй едим мороженое на набережной.",
        weather:
          "Если пойдёт дождь, гуляем по крытому рынку в Фуншале и устраиваем уютный приветственный обед.",
      },
      {
        title: "Почувствовать живой океан",
        place: "Машику или Канисал · Атлантика",
        body: "Выходим в море с лицензированным партнёром и наблюдаем за дельфинами, китами, черепахами и морскими птицами. Встреча с дикими животными не гарантируется и полностью зависит от океана.",
        joy: "Азарт высматривать дельфинов среди волн, ветер на палубе и новый штамп для карты квеста.",
        weather:
          "Если море неспокойно, партнёр переносит выход, а мы едем к природным бассейнам Порту-Мониш.",
      },
      {
        title: "Услышать древний лес",
        place: "Рибейру-Фриу · лаурисильва · Балкойш",
        body: "Идём по несложной леваде через лавровый лес, выходим к смотровой Балкойш и заходим на форелевое хозяйство. Дети сами могут вести маршрут и искать ящериц, ручьи и спрятанные мостики.",
        joy: "Кормить форель, искать лучшие укрытия вдоль левады и наперегонки бежать к смотровой площадке.",
        weather:
          "В сильный дождь сокращаем прогулку и добавляем время на крытом форелевом хозяйстве и в кафе с настольными играми.",
      },
      {
        title: "Прикоснуться к мастерству",
        place: "Север острова · деревенская мастерская",
        body: "Заезжаем в деревню на севере острова, встречаемся с местным мастером и вместе пробуем ремесло своими руками. Конкретный мастер и формат мастер-класса заранее подтверждаются партнёром.",
        joy: "Сделать своими руками что-то на память и перекусить в деревенском кафе с видом на океан.",
        weather:
          "Мастерская находится в помещении, поэтому день проходит в любую погоду — просто добавляем уютную паузу с настольными играми.",
      },
      {
        title: "Выбрать своё приключение",
        place: "Горные тропы Мадейры и знаменитые санки-корзины",
        body: "Выбираем семейную прогулку, пикник со смотровой площадки или спуск на плетёных санках от Монте — в зависимости от погоды, официального статуса троп и сил группы этим утром.",
        joy: "Прокатиться с ветерком на плетёных санках и устроить пикник с видом на Фуншал.",
        weather:
          "В плохую погоду заменяем санки и смотровые на тропический сад Монте Палас, который в основном защищён от дождя.",
      },
      {
        title: "Попробовать историю острова",
        place: "Порту-да-Круш · Engenhos do Norte",
        body: "Знакомимся с историей сахарного тростника на старой фабрике. При подтверждении партнёром взрослые пробуют мадейрский ром или поншу, дети — цитрус с мёдом. Затем пляж, серфинг по желанию и время в кафе.",
        joy: "Плескаться в волнах на пляже Порту-да-Круш и попробовать первый урок сёрфинга на мягкой доске для детей.",
        weather:
          "Если море слишком неспокойно для пляжа, дольше остаёмся на фабрике и завершаем день в бассейне с подогревом.",
      },
      {
        title: "Собрать урожай недели",
        place: "Виноградники над Атлантикой",
        body: "Узнаём, как выращивают виноград и производят мадеру. Посещение виноградника и погреба требует предварительного подтверждения. Взрослым — дегустация, детям — виноградный сок, и вместе заполняем последнюю страницу карты квеста.",
        joy: "Собрать гроздь винограда, если позволит сезон, чокнуться виноградным соком как взрослые и наклеить финальный золотой стикер на карту квеста.",
        weather:
          "Если виноградник закрыт из-за погоды, устраиваем дегустацию вина для взрослых и сока для детей в крытом погребе в Фуншале.",
      },
    ],
    activities: {
      label: "Дополнительные активности",
      title: "Выберите свои семейные приключения",
      intro:
        "Помимо ежедневной программы, семьи могут добавить активности по возрасту. Возрастные и требования безопасности всегда зависят от конкретной активности и подтверждаются лицензированным партнёром заранее.",
      items: [
        {
          title: "Аквапарк Мадейры",
          body: "Горки и бассейны для целого дня семейного веселья, подходит большинству возрастов, на месте есть спасатели.",
        },
        {
          title: "Знакомство с яхтингом",
          body: "Спокойный выход под парусом с опытным капитаном — приятный способ вместе увидеть побережье.",
        },
        {
          title: "Сёрфинг",
          body: "Уроки для начинающих на мягких досках с инструкторами, привыкшими работать и с детьми, и со взрослыми.",
        },
        {
          title: "SUP и гребля на доске",
          body: "Спокойное катание на воде — расслабленный способ для детей и взрослых выйти в океан.",
        },
        {
          title: "Гольф в Санту-да-Серра",
          body: "Живописное поле над облаками, с пробным занятием для детей постарше и родителей.",
        },
        {
          title: "Каньонинг",
          body: "Захватывающий спуск через водопады и природные бассейны — только после подтверждения возраста, роста и уровня подготовки лицензированным партнёром.",
        },
      ],
    },
    parentsCorner: {
      label: "Время для родителей",
      title: "Места, где можно поплавать, выдохнуть и просто присесть",
      body: "Родители несут постоянную ответственность за своих детей, а паузы и спокойный отдых встроены в естественный ритм семейного дня — совместное купание в Порту-да-Круш или Понта-Делгада, неспешный обед у океана в Машику, тихий кофе на террасе деревенского кафе с видом. Родители остаются ответственными за детей на протяжении всей поездки. Павел продумывает и координирует комфортный семейный маршрут, а специализированные занятия проводят лицензированные партнёры по своим протоколам безопасности.",
    },
    formats: {
      label: "Семейные варианты",
      title: "Один остров — под вашу семью",
      items: [
        {
          title: "Семья с маленьким ребёнком",
          body: "Более короткие прогулки, больше времени у пляжа и бассейна, темп, оставляющий место для сна и незапланированных открытий.",
        },
        {
          title: "Семья с двумя детьми разного возраста",
          body: "Активности гибко подстраиваются: старший ребёнок пробует сёрфинг, младший плещется рядом, а на обедах и в карте квеста снова собираются все вместе.",
        },
        {
          title: "Родителям, которым нужен настоящий отдых",
          body: "Неспешные отрезки дня — пляж, долгий обед, лёгкая прогулка — спланированы так, чтобы родители могли поплавать, почитать или ничего не делать, оставаясь рядом с детьми.",
        },
      ],
    },
    keepsakes: {
      label: "После путешествия",
      title: "Что останется с вами",
      body: "Игровая семейная карта памяти заполняется фотографиями, стикерами и штампами каждый день — это детский квест не меньше, чем сувенир. В последний день каждый добавляет финальный стикер и выбирает любимое воспоминание недели.",
    },
    boundaries: {
      label: "Забота",
      title: "Ваш темп и ваш комфорт",
      body: "В любой день можно выбрать более спокойный темп, пропустить активность или попросить более долгую остановку на отдых — программа подстраивается под семью. Фото и видео — только с согласия. Семейное время и паузы всегда уважаются.",
    },
    notice: {
      title: "Важно до отправки запроса",
      body: "Это предварительное описание авторской программы, а не автоматическое бронирование. Проживание, перелёты, питание, дегустации, билеты, морские прогулки и услуги сторонних партнёров не входят в стоимость, если не указано иное. Все активности зависят от погоды, открытости троп и подтверждения партнёров. Возрастные ограничения и требования безопасности для конкретных активностей устанавливает и подтверждает лицензированный партнёр до бронирования.",
    },
    form: {
      label: "Только запрос",
      title: "Узнать даты и программу",
      intro:
        "Расскажите Павлу, кто едет и когда. Форма не принимает оплату и не подтверждает бронирование.",
      fields: {
        name: "Имя",
        contact: "Email, WhatsApp или Telegram",
        dates: "Желаемые даты",
        guests: "Кто путешествует?",
        note: "Что для вас важно в этом путешествии?",
      },
      placeholders: {
        name: "Ваше имя",
        contact: "Как Павлу с вами связаться",
        dates: "Например, 12–19 октября",
        guests: "Семья; возраст детей",
        note: "Достаточно нескольких предложений",
      },
      submit: "Отправить запрос",
      successTitle: "Ваш запрос принят",
      successBody:
        "Это визуальный прототип, поэтому ничего не отправлено. На готовом сайте Павел ответит лично.",
      reset: "Написать ещё один запрос",
    },
    footer: "Madeira Mosaic · Приватные экскурсии и путешествия по Мадейре",
  },
  be: {
    nav: {
      home: "Мазаіка Мадэйры",
      tours: "Экскурсіі",
      guide: "Гід",
      pavel: "Пра Паўла",
      week: "Сем дзён",
      activities: "Актыўнасці",
      formats: "Для каго",
      inquiry: "Даведацца даты",
    },
    languages: "Беларуская · English · Руская",
    hero: {
      eyebrow: "Радасная сямідзённая сямейная прыгода на Мадэйры",
      title: "Мадэйра. Вярнуцца да галоўнага",
      subtitle: "Сем дзён радасці, акіяна, гульняў і адкрыццяў для ўсёй сям'і",
      cta: "Даведацца даты і праграму",
    },
    facts: [
      "Яркія ўражанні для дзяцей",
      "Прыгоды, якія сям'я перажывае разам",
      "Купанне і акіян амаль кожны дзень",
      "Камфортны тэмп для любога ўзросту",
      "Сапраўдны час на адпачынак для бацькоў",
      "Запасны план на выпадак дажджу — ніводны дзень не прападзе",
    ],
    host: {
      label: "Аўтар і вядучы",
      title: "Павел Сергееў",
      paragraphs: [
        "Павел жыве на Мадэйры і вядзе падарожжа па-руску, па-англійску ці па-беларуску. Кожны дзень ён падладжвае пад сям’ю, сілы дзяцей і надвор’е.",
        "Тыдзень створаны для сем'яў з адным ці двума дзецьмі, у тым ліку зусім маленькімі: купанне, гульні, лёгкія прагулкі і шмат нетаропкага часу.",
        "Узроставыя абмежаванні і патрабаванні залежаць ад канкрэтнай актыўнасці і заўсёды пацвярджаюцца ліцэнзаваным партнёрам да браніравання.",
      ],
    },
    week: {
      label: "Маршрут",
      title: "Сем розных дзён. Адна гісторыя выспы.",
      intro:
        "Адкрыйце дзень, каб убачыць маршрут, сямейную радасць дня і запасны план на выпадак дажджу.",
    },
    days: [
      {
        title: "Сустрэцца з выспай",
        place: "Машыку · акіян · стары горад",
        body: "Гуляем па старым горадзе і бухце, збіраемся за першым агульным сталом, знаёмімся з групай і пачынаем сямейную карту квэсту з першым стыкерам.",
        joy: "Дзеці плёскаюцца ля бухты, лоўяць першы стыкер для карты квэсту, а ўвечары ўсёй сям'ёй ямо марозіва на набярэжнай.",
        weather:
          "Калі пойдзе дождж, гуляем па крытым рынку ў Фуншале і ладзім утульны прывітальны абед.",
      },
      {
        title: "Адчуць жывы акіян",
        place: "Машыку ці Канісал · Атлантыка",
        body: "Выходзім у мора з ліцэнзаваным партнёрам і назіраем за дэльфінамі, кітамі, чарапахамі і марскімі птушкамі. Сустрэча з дзікімі жывёламі не гарантуецца і цалкам залежыць ад акіяна.",
        joy: "Азарт шукаць дэльфінаў сярод хваль, вецер на палубе і новы штамп для карты квэсту.",
        weather:
          "Калі мора неспакойнае, партнёр пераносіць выхад, а мы едзем да прыродных басейнаў Порту-Моніш.",
      },
      {
        title: "Пачуць старажытны лес",
        place: "Рыбейру-Фрыу · лаўрысільва · Балкойш",
        body: "Ідзем па нескладанай леваде праз лаўровы лес, выходзім да пункта агляду Балкойш і заходзім на фарэлевую гаспадарку. Дзеці самі могуць весці маршрут і шукаць яшчарак, ручаі і схаваныя масткі.",
        joy: "Карміць фарэль, шукаць лепшыя схованкі ўздоўж левады і наперагонкі бегчы да пункта агляду.",
        weather:
          "У моцны дождж скарачаем прагулку і дадаём час на крытай фарэлевай гаспадарцы і ў кавярні з настольнымі гульнямі.",
      },
      {
        title: "Дакрануцца да майстэрства",
        place: "Поўнач выспы · вясковая майстэрня",
        body: "Заязджаем у вёску на поўначы, сустракаемся з мясцовым майстрам і разам пробуем рамяство сваімі рукамі. Канкрэтны майстар і фармат майстар-класа загадзя пацвярджаюцца партнёрам.",
        joy: "Зрабіць сваімі рукамі нешта на памяць і перакусіць у вясковай кавярні з відам на акіян.",
        weather:
          "Майстэрня знаходзіцца ў памяшканні, таму дзень праходзіць у любое надвор'е — проста дадаём утульную паўзу з настольнымі гульнямі.",
      },
      {
        title: "Выбраць сваю прыгоду",
        place: "Горныя сцежкі Мадэйры і слынныя плеценыя санкі",
        body: "Выбіраем сямейную прагулку, пікнік з пункта агляду ці спуск на плеценых санках ад Монтэ — у залежнасці ад надвор'я, афіцыйнага статусу сцежак і сіл групы гэтай раніцай.",
        joy: "Пракаціцца з ветрыкам на плеценых санках і ўладзіць пікнік з відам на Фуншал.",
        weather:
          "У дрэннае надвор'е замяняем санкі і пункты агляду на трапічны сад Монтэ Паласа, які ў асноўным абаронены ад дажджу.",
      },
      {
        title: "Паспрабаваць гісторыю выспы",
        place: "Порту-да-Круш · Engenhos do Norte",
        body: "Знаёмімся з гісторыяй цукровага трыснягу на старой фабрыцы. Пры пацвярджэнні партнёрам дарослыя каштуюць мадэйрскі ром ці пончу, дзеці — цытрус з мёдам. Потым пляж, сёрфінг па жаданні і час у кавярні.",
        joy: "Плёскацца ў хвалях на пляжы Порту-да-Круш і паспрабаваць першы ўрок сёрфінгу на мяккай дошцы для дзяцей.",
        weather:
          "Калі мора занадта неспакойнае для пляжу, даўжэй застаемся на фабрыцы і завяршаем дзень у падагрэтым басейне.",
      },
      {
        title: "Сабраць ураджай тыдня",
        place: "Вінаграднікі над Атлантыкай",
        body: "Даведваемся, як вырошчваюць вінаград і робяць мадэру. Наведванне вінаградніка і склепа патрабуе папярэдняга пацвярджэння. Дарослым — дэгустацыя, дзецям — вінаградны сок, і разам запаўняем апошнюю старонку карты квэсту.",
        joy: "Сарваць гронку вінаграду, калі дазволіць сезон, чокнуцца вінаградным сокам, як дарослыя, і наклеіць фінальны залаты стыкер на карту квэсту.",
        weather:
          "Калі вінаграднік зачынены праз надвор'е, ладзім дэгустацыю віна для дарослых і соку для дзяцей у крытым склепе ў Фуншале.",
      },
    ],
    activities: {
      label: "Дадатковыя актыўнасці",
      title: "Выберыце свае сямейныя прыгоды",
      intro:
        "Акрамя штодзённай праграмы, сем'і могуць дадаць актыўнасці па ўзросце. Узроставыя і патрабаванні бяспекі заўсёды залежаць ад канкрэтнай актыўнасці і пацвярджаюцца ліцэнзаваным партнёрам загадзя.",
      items: [
        {
          title: "Аквапарк Мадэйры",
          body: "Горкі і басейны для цэлага дня сямейнага весялосці, падыходзіць большасці ўзростаў, на месцы ёсць ратавальнікі.",
        },
        {
          title: "Знаёмства з яхтынгам",
          body: "Спакойны выхад пад ветразем з дасведчаным капітанам — прыемны спосаб разам убачыць узбярэжжа.",
        },
        {
          title: "Сёрфінг",
          body: "Урокі для пачаткоўцаў на мяккіх дошках з інструктарамі, якія прызвычаіліся працаваць і з дзецьмі, і з дарослымі.",
        },
        {
          title: "SUP і веславанне на дошцы",
          body: "Спакойнае катанне на вадзе — расслаблены спосаб для дзяцей і дарослых выйсці ў акіян.",
        },
        {
          title: "Гольф у Санту-да-Серра",
          body: "Маляўнічае поле над воблакамі, з пробным заняткам для дзяцей старэйшага ўзросту і бацькоў.",
        },
        {
          title: "Каньянінг",
          body: "Захапляльны спуск праз вадаспады і прыродныя басейны — толькі пасля пацвярджэння ўзросту, росту і ўзроўню падрыхтоўкі ліцэнзаваным партнёрам.",
        },
      ],
    },
    parentsCorner: {
      label: "Час для бацькоў",
      title: "Месцы, дзе можна паплаваць, выдыхнуць і проста прысесці",
      body: "Бацькі нясуць пастаянную адказнасць за сваіх дзяцей, а паўзы і спакойны адпачынак убудаваны ў натуральны рытм сямейнага дня — сумеснае купанне ў Порту-да-Круш ці Понта-Дэлгада, нетаропкі абед ля акіяна ў Машыку, ціхая кава на тэрасе вясковай кавярні з відам. Бацькі застаюцца адказнымі за дзяцей на працягу ўсёй вандроўкі. Павел прадумвае і каардынуе камфортны сямейны маршрут, а спецыялізаваныя заняткі праводзяць ліцэнзаваныя партнёры па сваіх правілах бяспекі.",
    },
    formats: {
      label: "Сямейныя варыянты",
      title: "Адна выспа — пад вашу сям'ю",
      items: [
        {
          title: "Сям'я з маленькім дзіцем",
          body: "Больш кароткія прагулкі, больш часу ля пляжу і басейна, тэмп, які пакідае месца для сну і незапланаваных адкрыццяў.",
        },
        {
          title: "Сям'я з двума дзецьмі рознага ўзросту",
          body: "Актыўнасці гнутка падладжваюцца: старэйшае дзіця пробуе сёрфінг, малодшае плёскаецца побач, а на абедах і ў карце квэсту зноў збіраюцца ўсе разам.",
        },
        {
          title: "Бацькам, якім патрэбны сапраўдны адпачынак",
          body: "Нетаропкія адрэзкі дня — пляж, доўгі абед, лёгкая прагулка — спланаваныя так, каб бацькі маглі паплаваць, пачытаць ці нічога не рабіць, застаючыся побач з дзецьмі.",
        },
      ],
    },
    keepsakes: {
      label: "Пасля падарожжа",
      title: "Што застанецца з вамі",
      body: "Гульнявая сямейная карта памяці запаўняецца фотаздымкамі, стыкерамі і штампамі кожны дзень — гэта дзіцячы квэст не менш, чым сувенір. У апошні дзень кожны дадае фінальны стыкер і выбірае любімы ўспамін тыдня.",
    },
    boundaries: {
      label: "Клопат",
      title: "Ваш тэмп і ваш камфорт",
      body: "У любы дзень можна выбраць больш спакойны тэмп, прапусціць актыўнасць ці папрасіць больш доўгую спыненне на адпачынак — праграма падладжваецца пад сям'ю. Фота і відэа — толькі са згоды. Сямейны час і паўзы заўсёды паважаюцца.",
    },
    notice: {
      title: "Важна да адпраўкі запыту",
      body: "Гэта папярэдняе апісанне аўтарскай праграмы, а не аўтаматычнае браніраванне. Жыллё, пералёты, харчаванне, дэгустацыі, білеты, марскія прагулкі і паслугі партнёраў не ўваходзяць у кошт, калі не пазначана іншае. Усе актыўнасці залежаць ад надвор'я, адкрытасці сцежак і пацвярджэння партнёраў. Узроставыя абмежаванні і патрабаванні бяспекі для канкрэтных актыўнасцей вызначае і пацвярджае ліцэнзаваны партнёр да браніравання.",
    },
    form: {
      label: "Толькі запыт",
      title: "Даведацца даты і праграму",
      intro:
        "Раскажыце Паўлу, хто едзе і калі. Форма не прымае аплату і не пацвярджае браніраванне.",
      fields: {
        name: "Імя",
        contact: "Email, WhatsApp ці Telegram",
        dates: "Пажаданыя даты",
        guests: "Хто падарожнічае?",
        note: "Што для вас важна ў гэтым падарожжы?",
      },
      placeholders: {
        name: "Ваша імя",
        contact: "Як Паўлу з вамі звязацца",
        dates: "Напрыклад, 12–19 кастрычніка",
        guests: "Сям'я; узрост дзяцей",
        note: "Дастаткова некалькіх сказаў",
      },
      submit: "Адправіць запыт",
      successTitle: "Ваш запыт прыняты",
      successBody:
        "Гэта візуальны прататып, таму нічога не адпраўлена. На гатовым сайце Павел адкажа асабіста.",
      reset: "Напісаць яшчэ адзін запыт",
    },
    footer: "Madeira Mosaic · Прыватныя экскурсіі і падарожжы па Мадэйры",
  },
  uk: {
    nav: {
      home: "Мозаїка Мадейри",
      tours: "Екскурсії",
      guide: "Гід",
      pavel: "Про Павла",
      week: "Сім днів",
      activities: "Активності",
      formats: "Для кого",
      inquiry: "Дізнатися дати",
    },
    languages: "Українська · English · Русская",
    hero: {
      eyebrow: "Радісна семиденна сімейна пригода на Мадейрі",
      title: "Мадейра. Повернутися до головного",
      subtitle: "Сім днів радості, океану, ігор і відкриттів для всієї родини",
      cta: "Дізнатися дати і програму",
    },
    facts: [
      "Яскраві враження для дітей",
      "Пригоди, які родина переживає разом",
      "Купання і океан майже щодня",
      "Комфортний темп для будь-якого віку",
      "Справжній час на відпочинок для батьків",
      "Запасний план на випадок дощу — жоден день не пропаде",
    ],
    host: {
      label: "Автор і ведучий",
      title: "Павло Сергеєв",
      paragraphs: [
        "Павло живе на Мадейрі й веде подорож російською, англійською або білоруською. Кожен день він підлаштовує під родину, сили дітей і погоду.",
        "Тиждень створений для родин з однією або двома дітьми, зокрема зовсім маленькими: купання, ігри, легкі прогулянки і багато неквапливого часу.",
        "Вікові обмеження та вимоги залежать від конкретної активності і завжди підтверджуються ліцензованим партнером до бронювання.",
      ],
    },
    week: {
      label: "Маршрут",
      title: "Сім різних днів. Одна історія острова.",
      intro:
        "Відкрийте день, щоб побачити маршрут, сімейну радість дня і запасний план на випадок дощу.",
    },
    days: [
      {
        title: "Зустрітися з островом",
        place: "Машику · океан · старе місто",
        body: "Гуляємо старим містом і бухтою, збираємось за першим спільним столом, знайомимось із групою і починаємо сімейну карту квесту з першою наліпкою.",
        joy: "Діти хлюпаються біля бухти, ловлять першу наліпку для карти квесту, а ввечері всією родиною їдять морозиво на набережній.",
        weather:
          "Якщо піде дощ, гуляємо критим ринком у Фуншалі та влаштовуємо затишний вітальний обід.",
      },
      {
        title: "Відчути живий океан",
        place: "Машику або Канісал · Атлантика",
        body: "Виходимо в море з ліцензованим партнером і спостерігаємо за дельфінами, китами, черепахами і морськими птахами. Зустріч із дикими тваринами не гарантується і цілком залежить від океану.",
        joy: "Азарт шукати дельфінів серед хвиль, вітер на палубі та новий штамп для карти квесту.",
        weather:
          "Якщо море неспокійне, партнер переносить вихід, а ми їдемо до природних басейнів Порту-Моніш.",
      },
      {
        title: "Почути давній ліс",
        place: "Рібейру-Фріу · лаурисильва · Балкойш",
        body: "Ідемо неважкою левадою крізь лавровий ліс, виходимо до оглядового майданчика Балкойш і заходимо на форелеве господарство. Діти можуть самі вести маршрут і шукати ящірок, струмки й приховані містки.",
        joy: "Годувати форель, шукати найкращі схованки вздовж левади й наввипередки бігти до оглядового майданчика.",
        weather:
          "У сильний дощ скорочуємо прогулянку і додаємо час на критому форелевому господарстві та в кав'ярні з настільними іграми.",
      },
      {
        title: "Доторкнутися до майстерності",
        place: "Північ острова · сільська майстерня",
        body: "Заїжджаємо в село на півночі, зустрічаємось із місцевим майстром і разом пробуємо ремесло власними руками. Конкретний майстер і формат майстер-класу заздалегідь підтверджуються партнером.",
        joy: "Зробити власними руками щось на пам'ять і перекусити в сільській кав'ярні з видом на океан.",
        weather:
          "Майстерня в приміщенні, тож день проходить за будь-якої погоди — просто додаємо затишну паузу з настільними іграми.",
      },
      {
        title: "Обрати свою пригоду",
        place: "Гірські стежки Мадейри і знамениті кошикові санчата",
        body: "Обираємо родинну прогулянку, пікнік з оглядового майданчика або спуск на плетених санчатах від Монте — залежно від погоди, офіційного статусу стежок і сил групи цього ранку.",
        joy: "Прокотитися з вітерцем на плетених санчатах і влаштувати пікнік з видом на Фуншал.",
        weather:
          "У погану погоду замінюємо санчата й оглядові майданчики на тропічний сад Монте Палас, здебільшого захищений від дощу.",
      },
      {
        title: "Скуштувати історію острова",
        place: "Порту-да-Круш · Engenhos do Norte",
        body: "Знайомимось з історією цукрової тростини на старій фабриці. За підтвердження партнера дорослі куштують мадейрський ром або пончу, діти — цитрус із медом. Потім пляж, серфінг за бажанням і час у кав'ярні.",
        joy: "Хлюпатися в хвилях на пляжі Порту-да-Круш і спробувати перший урок серфінгу на м'якій дошці для дітей.",
        weather:
          "Якщо море надто неспокійне для пляжу, довше залишаємось на фабриці і завершуємо день у підігрітому басейні.",
      },
      {
        title: "Зібрати врожай тижня",
        place: "Виноградники над Атлантикою",
        body: "Дізнаємось, як вирощують виноград і роблять мадеру. Відвідування виноградника і льоху потребує попереднього підтвердження. Дорослим — дегустація, дітям — виноградний сік, і разом заповнюємо останню сторінку карти квесту.",
        joy: "Зірвати грона винограду, якщо дозволить сезон, цокнутися виноградним соком, як дорослі, і наклеїти фінальну золоту наліпку на карту квесту.",
        weather:
          "Якщо виноградник зачинений через погоду, влаштовуємо дегустацію вина для дорослих і соку для дітей у критому льоху у Фуншалі.",
      },
    ],
    activities: {
      label: "Додаткові активності",
      title: "Оберіть свої родинні пригоди",
      intro:
        "Окрім щоденної програми, родини можуть додати активності за віком. Вікові вимоги та вимоги безпеки завжди залежать від конкретної активності і підтверджуються ліцензованим партнером заздалегідь.",
      items: [
        {
          title: "Аквапарк Мадейри",
          body: "Гірки й басейни для цілого дня родинного веселощів, підходить більшості віків, на місці є рятувальники.",
        },
        {
          title: "Знайомство з яхтингом",
          body: "Спокійний вихід під вітрилом з досвідченим капітаном — приємний спосіб разом побачити узбережжя.",
        },
        {
          title: "Серфінг",
          body: "Уроки для початківців на м'яких дошках з інструкторами, які звикли працювати і з дітьми, і з дорослими.",
        },
        {
          title: "SUP і веслування на дошці",
          body: "Спокійне катання на воді — розслаблений спосіб для дітей і дорослих вийти в океан.",
        },
        {
          title: "Гольф у Санту-да-Серра",
          body: "Мальовниче поле над хмарами, з пробним заняттям для старших дітей і батьків.",
        },
        {
          title: "Каньйонінг",
          body: "Захопливий спуск через водоспади і природні басейни — тільки після підтвердження віку, зросту і рівня підготовки ліцензованим партнером.",
        },
      ],
    },
    parentsCorner: {
      label: "Час для батьків",
      title: "Місця, де можна поплавати, видихнути і просто присісти",
      body: "Батьки несуть постійну відповідальність за своїх дітей, а паузи та спокійний відпочинок вбудовані в природний ритм родинного дня — спільне купання у Порту-да-Круш чи Понта-Делгада, неквапливий обід біля океану в Машику, тиха кава на терасі сільської кав'ярні з видом. Батьки залишаються відповідальними за дітей протягом усієї подорожі. Павло продумує та координує комфортний сімейний маршрут, а спеціалізовані заняття проводять ліцензовані партнери за своїми правилами безпеки.",
    },
    formats: {
      label: "Родинні варіанти",
      title: "Один острів — під вашу родину",
      items: [
        {
          title: "Родина з маленькою дитиною",
          body: "Коротші прогулянки, більше часу біля пляжу й басейну, темп, що залишає місце для сну й незапланованих відкриттів.",
        },
        {
          title: "Родина з двома дітьми різного віку",
          body: "Активності гнучко підлаштовуються: старша дитина пробує серфінг, молодша хлюпається поруч, а на обідах і в карті квесту знову збираються всі разом.",
        },
        {
          title: "Батькам, яким потрібен справжній відпочинок",
          body: "Неквапливі відрізки дня — пляж, довгий обід, легка прогулянка — сплановані так, щоб батьки могли поплавати, почитати чи нічого не робити, залишаючись поруч із дітьми.",
        },
      ],
    },
    keepsakes: {
      label: "Після подорожі",
      title: "Що залишиться з вами",
      body: "Ігрова родинна карта пам'яті заповнюється фотографіями, наліпками і штампами щодня — це дитячий квест не менше, ніж сувенір. Останнього дня кожен додає фінальну наліпку і обирає улюблений спогад тижня.",
    },
    boundaries: {
      label: "Турбота",
      title: "Ваш темп і ваш комфорт",
      body: "Будь-якого дня можна обрати спокійніший темп, пропустити активність або попросити довшу зупинку на відпочинок — програма підлаштовується під родину. Фото і відео — лише за згодою. Родинний час і паузи завжди поважаються.",
    },
    notice: {
      title: "Важливо до надсилання запиту",
      body: "Це попередній опис авторської програми, а не автоматичне бронювання. Житло, переліт, харчування, дегустації, квитки, морські прогулянки і послуги партнерів не входять у вартість, якщо не вказано інше. Усі активності залежать від погоди, відкритості стежок і підтвердження партнерів. Вікові обмеження та вимоги безпеки для конкретних активностей встановлює і підтверджує ліцензований партнер до бронювання.",
    },
    form: {
      label: "Тільки запит",
      title: "Дізнатися дати і програму",
      intro:
        "Розкажіть Павлу, хто їде і коли. Форма не приймає оплату і не підтверджує бронювання.",
      fields: {
        name: "Ім'я",
        contact: "Email, WhatsApp або Telegram",
        dates: "Бажані дати",
        guests: "Хто подорожує?",
        note: "Що для вас важливо в цій подорожі?",
      },
      placeholders: {
        name: "Ваше ім'я",
        contact: "Як Павлу з вами зв'язатися",
        dates: "Наприклад, 12–19 жовтня",
        guests: "Родина; вік дітей",
        note: "Достатньо кількох речень",
      },
      submit: "Надіслати запит",
      successTitle: "Ваш запит прийнято",
      successBody:
        "Це візуальний прототип, тому нічого не надіслано. На готовому сайті Павло відповість особисто.",
      reset: "Написати ще один запит",
    },
    footer: "Madeira Mosaic · Приватні екскурсії та подорожі Мадейрою",
  },
} as const;
