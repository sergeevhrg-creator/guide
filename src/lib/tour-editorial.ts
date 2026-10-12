import type { Lang } from "@/lib/i18n/lang";

export type TourEditorial = {
  card: string;
  memories: [string, string, string];
  day: string;
  fit: string;
  included: string;
  excluded: string;
  safety: string;
  cta: string;
};

type TourId =
  | "sunrise"
  | "whales"
  | "balcoes"
  | "rum-surf"
  | "wine"
  | "food"
  | "yacht-sunset"
  | "lights"
  | "family-west"
  | "east-north"
  | "screen-free";

export const tourEditorial: Record<TourId, Record<Lang, TourEditorial>> = {
  sunrise: {
    en: {
      card: "At Pico do Arieiro, watch the changing light over the central massif, then stop at accessible viewpoints. Clouds and the sunrise view depend on the morning weather.",
      memories: [
        "The scale of Madeira’s central massif",
        "Views across valleys, peaks and the Atlantic",
        "A dawn you will remember for years",
      ],
      day: "We leave before dawn for Pico do Arieiro. After sunrise, choose a gentle viewpoint route or a short walk; no difficult mountain crossing is required.",
      fit: "For early risers and guests comfortable with cold, wind and short walks. A low-effort viewpoint option is always available.",
      included: "Private route planning, transport and Pavel’s hosting.",
      excluded: "Breakfast, hot drinks and any paid access.",
      safety:
        "Cloud, strong wind or official closures may change the viewpoint or move the route. Sunrise and a sea of clouds cannot be guaranteed.",
      cta: "Catch the sunrise",
    },
    be: {
      card: "На Pico do Arieiro назірайце за святлом над цэнтральным масівам і спыніцеся на даступных аглядных. Від на ўсход залежыць ад надвор’я.",
      memories: [
        "Маштаб цэнтральнага горнага масіву",
        "Віды на даліны, вяршыні і Атлантыку",
        "Раніца, якую будзеце памятаць гадамі",
      ],
      day: "Выязджаем да світання на Піку-ду-Арыейру. Пасля ўсходу можна выбраць спакойныя аглядныя пляцоўкі або кароткую прагулку без складанага горнага пераходу.",
      fit: "Для тых, хто гатовы да ранняга старту, холаду, ветру і кароткай хады. Ёсць варыянт амаль без нагрузкі.",
      included: "Падрыхтоўка прыватнага маршруту, транспарт і суправаджэнне Паўла.",
      excluded: "Сняданак, гарачыя напоі і платны ўваход, калі спатрэбіцца.",
      safety:
        "Аблокі, моцны вецер ці афіцыйнае закрыццё могуць змяніць пункт агляду або маршрут. Усход і мора аблокаў не гарантуюцца.",
      cta: "Сустрэць усход",
    },
    uk: {
      card: "На Pico do Arieiro спостерігайте за світлом над центральним масивом і зупиніться на доступних оглядових. Вид на світанок залежить від погоди.",
      memories: [
        "Масштаб центрального гірського масиву",
        "Краєвиди долин, вершин і Атлантики",
        "Ранок, який пам’ятатиметься роками",
      ],
      day: "Виїжджаємо затемна на Піку-ду-Арієйру. Після світанку можна обрати спокійні оглядові точки або коротку прогулянку без складного гірського переходу.",
      fit: "Для тих, хто готовий до раннього старту, холоду, вітру й короткої ходьби. Є варіант майже без навантаження.",
      included: "Підготовка приватного маршруту, транспорт і супровід Павла.",
      excluded: "Сніданок, гарячі напої та платний вхід, якщо знадобиться.",
      safety:
        "Хмари, сильний вітер або офіційне закриття можуть змінити точку чи маршрут. Світанок і море хмар не гарантуються.",
      cta: "Зустріти світанок",
    },
    ru: {
      card: "На Pico do Arieiro встретьте утренний свет над центральным массивом и остановитесь на доступных смотровых. Вид на рассвет зависит от погоды.",
      memories: [
        "Масштаб центрального горного массива",
        "Вид на долины, вершины и Атлантику",
        "Рассвет, который останется в памяти на годы",
      ],
      day: "Выезжаем затемно к Пику-ду-Ариейру. После рассвета выбираем короткую прогулку или несколько смотровых без обязательного сложного горного перехода.",
      fit: "Для тех, кто готов к раннему старту, прохладе, ветру и короткой ходьбе. Есть вариант почти без нагрузки.",
      included: "Подготовка частного маршрута, транспорт и сопровождение Павла.",
      excluded: "Завтрак, горячие напитки и платный вход, если потребуется.",
      safety:
        "Облачность, сильный ветер или официальное закрытие могут изменить точку или маршрут. Рассвет и море облаков не гарантируются.",
      cta: "Встретить рассвет",
    },
  },
  whales: {
    en: {
      card: "Board a licensed operator’s boat from Machico or Caniçal only after the departure point and sea conditions are confirmed. Watch for marine life without any sighting guarantee.",
      memories: [
        "Madeira’s coast receding behind the boat",
        "Time observing the open ocean with a marine crew",
        "A new sense of the island’s wild scale",
      ],
      day: "A licensed marine team briefs the group and chooses the search area. Depending on conditions, the outing may include a swim or a meal ashore.",
      fit: "For adults and children comfortable on a boat. Tell us about motion sensitivity when enquiring.",
      included: "Pavel’s coordination and the confirmed licensed partner’s sea trip.",
      excluded: "Meals, transfers not confirmed in advance and optional extras from the operator.",
      safety:
        "Wildlife encounters are never guaranteed. Species vary by season; departure, swimming and route depend on the licensed captain and sea conditions.",
      cta: "Head into the ocean",
    },
    be: {
      card: "Выйдзіце з ліцэнзаваным аператарам з Машыку ці Канісала пасля пацвярджэння порта і ўмоў мора. Назіранне за жывёламі без гарантыі сустрэчы.",
      memories: [
        "Бераг Мадэйры, што аддаляецца",
        "Назіранне за адкрытым акіянам з марской камандай",
        "Новае адчуванне дзікага маштабу выспы",
      ],
      day: "Ліцэнзаваная марская каманда праводзіць інструктаж і выбірае раён пошуку. Пры добрых умовах магчыма купанне або абед пасля выхаду.",
      fit: "Для дарослых і дзяцей, якім камфортна на судне. Пра схільнасць да ўкалыхвання скажыце ў запыце.",
      included: "Каардынацыя Паўла і марскі выхад пацверджанага ліцэнзаванага партнёра.",
      excluded: "Ежа, не ўзгоднены загадзя трансфер і дадатковыя паслугі аператара.",
      safety:
        "Сустрэча з дзікімі жывёламі не гарантуецца. Віды залежаць ад сезону, а выхад, купанне і маршрут — ад капітана і мора.",
      cta: "Выйсці ў акіян",
    },
    uk: {
      card: "Вийдіть із ліцензованим оператором із Машику чи Канісала після підтвердження порту та умов моря. Спостереження за тваринами без гарантії зустрічі.",
      memories: [
        "Берег Мадейри, що віддаляється",
        "Спостереження за відкритим океаном із морською командою",
        "Нове відчуття дикого масштабу острова",
      ],
      day: "Ліцензована морська команда проводить інструктаж і обирає район пошуку. За сприятливих умов можливі купання або обід після виходу.",
      fit: "Для дорослих і дітей, яким комфортно на судні. Про схильність до захитування скажіть у запиті.",
      included: "Координація Павла і морський вихід підтвердженого ліцензованого партнера.",
      excluded: "Їжа, не погоджений заздалегідь трансфер і додаткові послуги оператора.",
      safety:
        "Зустріч із дикими тваринами не гарантується. Види залежать від сезону, а вихід, купання й маршрут — від капітана та моря.",
      cta: "Вийти в океан",
    },
    ru: {
      card: "Выйдите с лицензированным оператором из Машику или Канисала после подтверждения порта и условий моря. Наблюдение за животными без гарантии встречи.",
      memories: [
        "Берег Мадейры, остающийся за кормой",
        "Наблюдение за открытым океаном с морской командой",
        "Новое ощущение дикого масштаба острова",
      ],
      day: "Лицензированная морская команда проводит инструктаж и выбирает район поиска. По условиям возможны купание или обед после выхода.",
      fit: "Для взрослых и детей, которым комфортно на судне. О склонности к укачиванию сообщите в заявке.",
      included: "Координация Павла и морской выход подтверждённого лицензированного партнёра.",
      excluded: "Питание, не согласованный заранее трансфер и дополнительные услуги оператора.",
      safety:
        "Встреча с дикими животными не гарантируется. Виды зависят от сезона, а выход, купание и маршрут — от решения капитана и состояния океана.",
      cta: "Выйти в океан",
    },
  },
  balcoes: {
    en: {
      card: "Walk from Ribeiro Frio along Vereda dos Balcões to the mountain viewpoint, noticing the Laurissilva and levada water. Check official trail access before setting out.",
      memories: [
        "The cool air and textures of the ancient forest",
        "The mountain panorama from Balcões",
        "Birdsong heard without feeding wild birds",
      ],
      day: "An easy forest path among ferns follows the levada to Balcões, then continues to Ribeiro Frio’s trout farm and an optional local lunch.",
      fit: "A gentle walk for most families and adults; surfaces can be damp and uneven.",
      included: "Private route planning, transport and Pavel’s hosting.",
      excluded: "Lunch, trout-farm purchases and any paid access.",
      safety:
        "Rain and official trail status determine the walking section. Wild birds must not be attracted or fed.",
      cta: "Step into the ancient forest",
    },
    be: {
      card: "Ад Ribeiro Frio ідзіце па Vereda dos Balcões да горнай агляднай праз лаўрысільву ўздоўж вады левады. Перад выхадам праверце статус сцежкі.",
      memories: [
        "Прахалода і фактуры старажытнага лесу",
        "Горная панарама з Balcões",
        "Спевы птушак без кармлення дзікіх птушак",
      ],
      day: "Нескладаная сцежка сярод папараці ідзе ўздоўж левады да Balcões, потым — фарэлевая гаспадарка Ribeiro Frio і мясцовы абед па жаданні.",
      fit: "Лёгкая прагулка для большасці сем’яў і дарослых; пакрыццё можа быць мокрым і няроўным.",
      included: "Падрыхтоўка прыватнага маршруту, транспарт і суправаджэнне Паўла.",
      excluded: "Абед, пакупкі на гаспадарцы і платны ўваход.",
      safety:
        "Дождж і афіцыйны статус сцежкі вызначаюць пешую частку. Дзікіх птушак нельга прывабліваць ежай.",
      cta: "Увайсці ў старажытны лес",
    },
    uk: {
      card: "Від Ribeiro Frio пройдіть Vereda dos Balcões до гірської оглядової крізь лаурисильву вздовж води левади. Перед виходом перевірте статус стежки.",
      memories: [
        "Прохолода й фактури давнього лісу",
        "Гірська панорама з Balcões",
        "Спів птахів без годування диких птахів",
      ],
      day: "Нескладна стежка серед папороті йде вздовж левади до Balcões, далі — форелеве господарство Ribeiro Frio та місцевий обід за бажанням.",
      fit: "Легка прогулянка для більшості родин і дорослих; поверхня може бути мокрою та нерівною.",
      included: "Підготовка приватного маршруту, транспорт і супровід Павла.",
      excluded: "Обід, покупки на господарстві та платний вхід.",
      safety:
        "Дощ і офіційний статус стежки визначають пішу частину. Диких птахів не можна приваблювати їжею.",
      cta: "Увійти в давній ліс",
    },
    ru: {
      card: "От Ribeiro Frio пройдите по Vereda dos Balcões через лаурисильву вдоль воды к горной смотровой. Перед выходом проверьте статус тропы.",
      memories: [
        "Прохлада и фактуры древнего леса",
        "Горная панорама со смотровой Balcões",
        "Пение птиц без кормления диких птиц",
      ],
      day: "Несложная лесная тропа среди папоротников идёт вдоль левады к Balcões, затем — форелевое хозяйство Ribeiro Frio и местный обед по желанию.",
      fit: "Спокойная прогулка для большинства семей и взрослых; покрытие бывает мокрым и неровным.",
      included: "Подготовка частного маршрута, транспорт и сопровождение Павла.",
      excluded: "Обед, покупки в хозяйстве и платный вход.",
      safety:
        "Дождь и официальный статус тропы определяют пешую часть. Диких птиц нельзя приманивать едой.",
      cta: "Войти в древний лес",
    },
  },
  "rum-surf": {
    en: {
      card: "Explore Porto da Cruz and its oceanfront; check whether Engenhos do Norte can be visited. A surf lesson is a separate optional service of a partner school.",
      memories: [
        "Atlantic surf against the north coast",
        "The story and scent of Madeira sugar cane",
        "An unhurried meal beside the water",
      ],
      day: "We walk Porto da Cruz, visit Engenhos do Norte when available, watch or book surfing with a partner, and stop for lunch by the ocean.",
      fit: "The walk and alcohol-free programme suit families; surfing is optional and matched to ability.",
      included: "Private route, transport, Pavel’s hosting and mill visit when open.",
      excluded: "Lunch, surf lesson, equipment and tastings.",
      safety:
        "Surf depends on swell and the school’s decision. Alcohol is optional and strictly 18+; the full route works without it.",
      cta: "Taste the north",
    },
    be: {
      card: "Пагуляйце ўздоўж берага Порту-да-Круш і праверце магчымасць візіту ў Engenhos do Norte. Урок сёрфінгу — асобная паслуга партнёрскай школы.",
      memories: [
        "Атлантычная хваля паўночнага берага",
        "Гісторыя і водар цукровага трыснягу",
        "Нетаропкі абед каля вады",
      ],
      day: "Гуляем па Порту-да-Круш, пры даступнасці наведваем Engenhos do Norte, назіраем за сёрфінгам або браніруем занятак у партнёра і абедаем каля акіяна.",
      fit: "Прагулка і безалкагольная праграма падыходзяць сем’ям; сёрфінг — па жаданні і ўзроўні.",
      included:
        "Прыватны маршрут, транспарт, суправаджэнне Паўла і ўваход на завод, калі ён адкрыты.",
      excluded: "Абед, урок сёрфінгу, рыштунак і дэгустацыі.",
      safety:
        "Сёрфінг залежыць ад хвалі і рашэння школы. Алкаголь — толькі па жаданні і строга 18+; маршрут паўнавартасны без яго.",
      cta: "Паспрабаваць поўнач",
    },
    uk: {
      card: "Пройдіться узбережжям Порту-да-Круш і перевірте можливість візиту до Engenhos do Norte. Урок серфінгу — окрема послуга партнерської школи.",
      memories: [
        "Атлантична хвиля північного берега",
        "Історія й аромат цукрової тростини",
        "Неквапливий обід біля води",
      ],
      day: "Гуляємо Порту-да-Круш, за доступності відвідуємо Engenhos do Norte, спостерігаємо за серфінгом або бронюємо заняття в партнера й обідаємо біля океану.",
      fit: "Прогулянка й безалкогольна програма підходять родинам; серфінг — за бажанням і рівнем.",
      included: "Приватний маршрут, транспорт, супровід Павла і вхід на завод, якщо він відкритий.",
      excluded: "Обід, урок серфінгу, спорядження й дегустації.",
      safety:
        "Серфінг залежить від хвилі та рішення школи. Алкоголь — лише за бажанням і строго 18+; маршрут повноцінний без нього.",
      cta: "Скуштувати північ",
    },
    ru: {
      card: "Прогуляйтесь по побережью Порту-да-Круш и уточните возможность посещения Engenhos do Norte. Урок сёрфинга — отдельная услуга партнёрской школы.",
      memories: [
        "Атлантическая волна северного берега",
        "История и аромат сахарного тростника",
        "Неспешный обед у воды",
      ],
      day: "Гуляем по Порту-да-Круш, при доступности посещаем Engenhos do Norte, наблюдаем за сёрфингом или бронируем занятие у партнёра и обедаем у океана.",
      fit: "Прогулка и полноценная безалкогольная программа подходят семьям; сёрфинг — по желанию и уровню подготовки.",
      included: "Частный маршрут, транспорт, сопровождение Павла и вход на завод, когда он открыт.",
      excluded: "Обед, урок сёрфинга, оборудование и дегустации.",
      safety:
        "Сёрфинг зависит от волны и решения школы. Алкоголь — только по желанию и строго 18+; маршрут полноценен и без него.",
      cta: "Попробовать север",
    },
  },
  wine: {
    en: {
      card: "Start in São Vicente, visit the Quinta do Barbusano vineyards only with the winery’s confirmation, then continue along the north coast to Seixal. A tasting follows only the winery’s confirmed programme; lunch, times and availability are not included or promised. Blandy’s Wine Lodge belongs to a separate Funchal city route.",
      memories: [
        "Terraces suspended between cliffs and ocean",
        "The craft behind Madeira wine",
        "A north-coast landscape beyond the tasting glass",
      ],
      day: "Start in São Vicente, visit the Quinta do Barbusano vineyards only with the winery’s confirmation, then continue along the north coast to Seixal. A tasting follows only the winery’s confirmed programme; lunch, times and availability are not included or promised. Blandy’s Wine Lodge belongs to a separate Funchal city route.",
      fit: "For curious travellers, not only wine experts. The scenic route remains complete without alcohol.",
      included: "Private route planning and hosting; vineyard entry only after producer confirmation.",
      excluded: "Tastings, lunch and producer purchases.",
      safety:
        "Quinta do Barbusano confirms any vineyard visit, tasting, schedule and availability. Alcohol is optional and 18+; lunch is arranged separately.",
      cta: "Discover wine Madeira",
    },
    be: {
      card: "Пачніце ў São Vicente, наведайце вінаграднікі Quinta do Barbusano толькі пасля пацвярджэння вінаробні, затым едзьце паўночным берагам да Seixal. Дэгустацыя — толькі паводле пацверджанай праграмы; абед, час і даступнасць не абяцаюцца. Blandy’s Wine Lodge — асобны гарадскі маршрут Фуншала.",
      memories: [
        "Тэрасы паміж скаламі і акіянам",
        "Рамяство, што стаіць за мадэрай",
        "Поўнач выспы па-за дэгустацыйным келіхам",
      ],
      day: "Пачніце ў São Vicente, наведайце вінаграднікі Quinta do Barbusano толькі пасля пацвярджэння вінаробні, затым едзьце паўночным берагам да Seixal. Дэгустацыя — толькі паводле пацверджанай праграмы; абед, час і даступнасць не абяцаюцца. Blandy’s Wine Lodge — асобны гарадскі маршрут Фуншала.",
      fit: "Для цікаўных гасцей, не толькі знаўцаў віна. Маршрут паўнавартасны без алкаголю.",
      included: "Планаванне прыватнага маршруту і суправаджэнне; візіт на вінаробню толькі пасля пацвярджэння.",
      excluded: "Дэгустацыя, абед і пакупкі ў вытворцы.",
      safety:
        "Quinta do Barbusano пацвярджае візіт, дэгустацыю, расклад і даступнасць. Алкаголь — па жаданні і 18+; абед асобна.",
      cta: "Убачыць вінную Мадэйру",
    },
    uk: {
      card: "Почніть у São Vicente, відвідайте виноградники Quinta do Barbusano лише після підтвердження виноробні, потім їдьте північним узбережжям до Seixal. Дегустація — лише за підтвердженою програмою; обід, час і доступність не обіцяються. Blandy’s Wine Lodge — окремий міський маршрут Фуншала.",
      memories: [
        "Тераси між скелями й океаном",
        "Ремесло, що стоїть за мадерою",
        "Північ острова поза дегустаційним келихом",
      ],
      day: "Почніть у São Vicente, відвідайте виноградники Quinta do Barbusano лише після підтвердження виноробні, потім їдьте північним узбережжям до Seixal. Дегустація — лише за підтвердженою програмою; обід, час і доступність не обіцяються. Blandy’s Wine Lodge — окремий міський маршрут Фуншала.",
      fit: "Для допитливих гостей, не лише знавців вина. Маршрут повноцінний без алкоголю.",
      included: "Планування приватного маршруту й супровід; візит на виноробню лише після підтвердження.",
      excluded: "Дегустація, обід і покупки у виробника.",
      safety:
        "Quinta do Barbusano підтверджує візит, дегустацію, розклад і доступність. Алкоголь — за бажанням і 18+; обід окремо.",
      cta: "Побачити винну Мадейру",
    },
    ru: {
      card: "Начните в São Vicente, посетите виноградники Quinta do Barbusano только после подтверждения винодельни, затем отправьтесь вдоль северного побережья в Seixal. Дегустация — только по подтверждённой программе винодельни; обед, расписание и доступность не обещаются. Blandy’s Wine Lodge — отдельный городской маршрут по Фуншалу.",
      memories: [
        "Террасы между скалами и океаном",
        "Ремесло, которое стоит за мадерой",
        "Север острова за пределами дегустационного бокала",
      ],
      day: "Начните в São Vicente, посетите виноградники Quinta do Barbusano только после подтверждения винодельни, затем отправьтесь вдоль северного побережья в Seixal. Дегустация — только по подтверждённой программе винодельни; обед, расписание и доступность не обещаются. Blandy’s Wine Lodge — отдельный городской маршрут по Фуншалу.",
      fit: "Для любознательных гостей, не только ценителей вина. Маршрут остаётся полноценным без алкоголя.",
      included: "Планирование частного маршрута и сопровождение; посещение винодельни только после подтверждения.",
      excluded: "Дегустация, обед и покупки у производителя.",
      safety:
        "Quinta do Barbusano подтверждает посещение, дегустацию, расписание и доступность. Алкоголь — по желанию и 18+; обед отдельно.",
      cta: "Увидеть винную Мадейру",
    },
  },
  food: {
    en: {
      card: "Explore the fruit stalls at Mercado dos Lavradores in Funchal. Other food stops and any tastings are selected and priced separately after confirmation; nothing is pre-booked.",
      memories: [
        "A personal map of Madeira flavours",
        "Stories behind markets and family kitchens",
        "New favourites to order again",
      ],
      day: "A sequence of small tasting stops replaces one long meal: market counters, family-run places and seasonal producers.",
      fit: "For curious eaters; tell us about vegetarian choices, allergies and alcohol-free preferences in the inquiry.",
      included: "A tailored tasting route, reservations where needed and Pavel’s hosting.",
      excluded: "All food, drinks, market purchases and transport unless confirmed.",
      safety:
        "Stops follow opening hours and season. Allergies are considered but an allergen-free environment cannot be guaranteed.",
      cta: "Taste Madeira",
    },
    be: {
      card: "Паглядзіце фруктовыя прылаўкі Mercado dos Lavradores у Фуншале. Іншыя гастранамічныя прыпынкі і дэгустацыі ўзгадняюцца і аплачваюцца асобна.",
      memories: [
        "Асабістая карта смакаў Мадэйры",
        "Гісторыі рынкаў і сямейных кухняў",
        "Новыя любімыя стравы",
      ],
      day: "Замест адной доўгай трапезы — ланцужок невялікіх смакавых прыпынкаў на рынках, у сямейных месцах і ў сезонных вытворцаў.",
      fit: "Для цікаўных да ежы; вегетарыянства, алергіі і безалкагольныя варыянты пазначце ў запыце.",
      included: "Персанальны смакавы маршрут, браніраванні і суправаджэнне Паўла.",
      excluded: "Уся ежа, напоі, пакупкі і транспарт, калі не пацверджана.",
      safety:
        "Прыпынкі залежаць ад графіка і сезона. Алергіі ўлічваюцца, але цалкам безалергеннае асяроддзе не гарантуецца.",
      cta: "Паспрабаваць Мадэйру",
    },
    uk: {
      card: "Роздивіться фруктові прилавки Mercado dos Lavradores у Фуншалі. Інші гастрономічні зупинки й дегустації узгоджуються та оплачуються окремо.",
      memories: [
        "Особиста мапа смаків Мадейри",
        "Історії ринків і родинних кухонь",
        "Нові улюблені страви",
      ],
      day: "Замість однієї довгої трапези — ланцюжок невеликих смакових зупинок на ринках, у родинних закладах і сезонних виробників.",
      fit: "Для допитливих до їжі; вегетаріанство, алергії й безалкогольні варіанти зазначте в запиті.",
      included: "Персональний смаковий маршрут, бронювання й супровід Павла.",
      excluded: "Уся їжа, напої, покупки й транспорт, якщо не підтверджено.",
      safety:
        "Зупинки залежать від графіка й сезону. Алергії враховуються, але повністю безалергенне середовище не гарантується.",
      cta: "Скуштувати Мадейру",
    },
    ru: {
      card: "Посмотрите фруктовые прилавки Mercado dos Lavradores в Фуншале. Другие гастрономические остановки и дегустации согласуются и оплачиваются отдельно.",
      memories: [
        "Личная карта вкусов Мадейры",
        "Истории рынков и семейных заведений",
        "Новые блюда, которые захочется заказать снова",
      ],
      day: "Вместо одной долгой трапезы — цепочка небольших вкусовых остановок на рынках, в семейных заведениях и у сезонных производителей.",
      fit: "Для любопытных к еде; вегетарианство, аллергии и безалкогольные варианты укажите в заявке.",
      included: "Индивидуальный вкусовой маршрут, бронирования и сопровождение Павла.",
      excluded: "Вся еда, напитки, покупки и транспорт, если он не подтверждён отдельно.",
      safety:
        "Остановки зависят от графика и сезона. Аллергии учитываются, но полностью безаллергенная среда не гарантируется.",
      cta: "Попробовать Мадейру",
    },
  },
  "yacht-sunset": {
    en: {
      card: "Depart Funchal marina with a licensed skipper; the proposed coastal direction passes Câmara de Lobos towards Cabo Girão, subject to the skipper’s route and conditions.",
      memories: [
        "Golden light seen from the water",
        "Madeira’s coastal cliffs in silhouette",
        "A quiet shared hour under sail",
      ],
      day: "A confirmed yacht and captain leave from the marina for a coastal sailing route timed around sunset.",
      fit: "For couples, families and small groups comfortable aboard a yacht; accessibility depends on the vessel.",
      included: "Coordination with the confirmed licensed captain and the agreed sailing time.",
      excluded: "Transfers, food, drinks and private-vessel upgrades unless confirmed.",
      safety:
        "Departure depends strictly on wind, swell and the captain’s decision. Sunset visibility cannot be guaranteed.",
      cta: "Meet the sunset at sea",
    },
    be: {
      card: "Выйдзіце з марыны Фуншала з ліцэнзаваным капітанам; прапанаваны шлях — праз Câmara de Lobos да Cabo Girão, калі дазволяць умовы.",
      memories: [
        "Залатое святло з вады",
        "Сілуэт прыбярэжных скал Мадэйры",
        "Ціхая супольная гадзіна пад ветразем",
      ],
      day: "Пацверджаная яхта з капітанам выходзіць з марыны па прыбярэжным маршруце, разлічаным на час захаду.",
      fit: "Для пар, сем’яў і малых кампаній, якім камфортна на яхце; даступнасць залежыць ад судна.",
      included: "Каардынацыя з пацверджаным ліцэнзаваным капітанам і ўзгоднены час выхаду.",
      excluded: "Трансфер, ежа, напоі і прыватная арэнда, калі не пацверджана.",
      safety:
        "Выхад строга залежыць ад ветру, хвалі і рашэння капітана. Бачнасць захаду не гарантуецца.",
      cta: "Сустрэць захад у моры",
    },
    uk: {
      card: "Вийдіть із марини Фуншала з ліцензованим капітаном; запропонований напрямок — через Câmara de Lobos до Cabo Girão, якщо дозволять умови.",
      memories: [
        "Золоте світло з води",
        "Силует прибережних скель Мадейри",
        "Тиха спільна година під вітрилом",
      ],
      day: "Підтверджена яхта з капітаном виходить із марини прибережним маршрутом, розрахованим на час заходу сонця.",
      fit: "Для пар, родин і малих компаній, яким комфортно на яхті; доступність залежить від судна.",
      included: "Координація з підтвердженим ліцензованим капітаном і погоджений час виходу.",
      excluded: "Трансфер, їжа, напої та приватна оренда, якщо не підтверджено.",
      safety:
        "Вихід суворо залежить від вітру, хвилі й рішення капітана. Видимість заходу не гарантується.",
      cta: "Зустріти захід у морі",
    },
    ru: {
      card: "Выйдите из марины Фуншала с лицензированным капитаном; предложенное направление — через Камара-де-Лобуш к Кабу-Жирау, если позволят условия.",
      memories: [
        "Золотой закатный свет с воды",
        "Силуэт прибрежных скал Мадейры",
        "Тихий общий час под парусом",
      ],
      day: "Подтверждённая яхта с капитаном выходит из марины по прибрежному маршруту, рассчитанному на время заката.",
      fit: "Для пар, семей и небольших компаний, которым комфортно на яхте; доступность зависит от судна.",
      included:
        "Координация с подтверждённым лицензированным капитаном и согласованное время выхода.",
      excluded: "Трансфер, еда, напитки и частная аренда судна, если не подтверждено отдельно.",
      safety:
        "Выход строго зависит от ветра, волн и решения капитана. Видимость заката не гарантируется.",
      cta: "Встретить закат в море",
    },
  },
  lights: {
    en: {
      card: "Walk Funchal’s centre and waterfront, then view the bay from a land viewpoint if the official festival programme and local access allow. No fireworks are promised.",
      memories: [
        "A panoramic view across illuminated Funchal",
        "The atmosphere of an official island celebration",
        "A well-timed evening without rushed transfers",
      ],
      day: "We use only officially confirmed festival dates, choose a practical land viewpoint and plan arrival and departure around the published programme.",
      fit: "A low-effort evening route for couples, families and small groups; some crowd walking may be unavoidable.",
      included: "Route timing, private transport and Pavel’s hosting.",
      excluded: "Festival tickets, food, drinks and reserved seating where applicable.",
      safety:
        "Dates and times follow the official programme only. Crowd controls, road closures and weather can change the viewing point.",
      cta: "Choose a festive evening",
    },
    be: {
      card: "Прагуляйцеся цэнтрам і набярэжнай Фуншала, затым паглядзіце на бухту з наземнай агляднай, калі дазволяць афіцыйная праграма і доступ. Феерверк не гарантуецца.",
      memories: [
        "Панарама асветленага Фуншала",
        "Атмасфера афіцыйнага свята выспы",
        "Добра спланаваны вечар без спешкі",
      ],
      day: "Выкарыстоўваем толькі афіцыйна пацверджаныя даты, выбіраем зручную наземную аглядную кропку і плануем час паводле апублікаванай праграмы.",
      fit: "Вячэрні маршрут з невялікай нагрузкай для пар, сем’яў і кампаній; хадзьбы ў натоўпе часам не пазбегнуць.",
      included: "Планаванне часу, прыватны транспарт і суправаджэнне Паўла.",
      excluded: "Квіткі, ежа, напоі і месцы па брані, калі яны патрэбныя.",
      safety:
        "Даты і час — толькі паводле афіцыйнай праграмы. Абмежаванні руху, натоўп і надвор’е могуць змяніць кропку.",
      cta: "Выбраць святочны вечар",
    },
    uk: {
      card: "Пройдіться центром і набережною Фуншала, потім подивіться на бухту з наземної оглядової, якщо дозволять офіційна програма та доступ. Феєрверк не гарантовано.",
      memories: [
        "Панорама освітленого Фуншала",
        "Атмосфера офіційного свята острова",
        "Добре спланований вечір без поспіху",
      ],
      day: "Використовуємо лише офіційно підтверджені дати, обираємо зручну наземну оглядову точку й плануємо час за опублікованою програмою.",
      fit: "Вечірній маршрут із невеликим навантаженням для пар, родин і компаній; ходьби в натовпі інколи не уникнути.",
      included: "Планування часу, приватний транспорт і супровід Павла.",
      excluded: "Квитки, їжа, напої та заброньовані місця, якщо потрібні.",
      safety:
        "Дати й час — лише за офіційною програмою. Обмеження руху, натовп і погода можуть змінити точку.",
      cta: "Обрати святковий вечір",
    },
    ru: {
      card: "Прогуляйтесь по центру и набережной Фуншала, затем посмотрите на бухту с наземной смотровой, если позволят официальная программа и доступ. Фейерверк не гарантируется.",
      memories: [
        "Панорамный вид на освещённый Фуншал",
        "Атмосфера официального островного праздника",
        "Точно спланированный вечер без спешки",
      ],
      day: "Используем только официально подтверждённые даты фестивалей, выбираем удобную наземную обзорную точку и планируем приезд и отъезд по опубликованной программе.",
      fit: "Вечерний маршрут с небольшой нагрузкой для пар, семей и компаний; ходьбы в толпе иногда не избежать.",
      included: "Планирование тайминга, частный транспорт и сопровождение Павла.",
      excluded: "Билеты, еда, напитки и резерв мест, если они требуются.",
      safety:
        "Даты и время — только по официальной программе. Ограничения движения, толпа и погода могут изменить точку обзора.",
      cta: "Выбрать праздничный вечер",
    },
  },
  "family-west": {
    en: {
      card: "Compare Porto Moniz lava pools with Seixal’s volcanic pools and beach. Swimming is optional and only when the ocean and local access allow it.",
      memories: [
        "Black sand and volcanic stones underfoot",
        "A shared swim when ocean conditions allow",
        "A family day with room for parents to rest",
      ],
      day: "Comfortable drives connect Seixal beach, waterfalls and Porto Moniz pools, with a proper lunch and pauses chosen for the family.",
      fit: "For families of up to four. Walking is light; swimming is optional and supervised by the responsible adult.",
      included: "Family-paced route, private transport and Pavel’s hosting.",
      excluded: "Lunch, pool admission, towels and personal swimming equipment.",
      safety:
        "Swell may close pools or make Seixal unsuitable for swimming; sheltered stops and viewpoints replace the water safely.",
      cta: "Set off as a family",
    },
    be: {
      card: "Параўнайце лававыя басейны Порту-Моніш з басейнамі і пляжам Сейшала. Купанне — толькі калі дазваляюць акіян і доступ.",
      memories: [
        "Чорны пясок і вулканічныя камяні",
        "Супольнае купанне, калі дазваляе акіян",
        "Сямейны дзень з часам на адпачынак бацькоў",
      ],
      day: "Камфортныя пераезды злучаюць пляж Сейшала, вадаспады і басейны Порту-Моніш; ёсць нармальны абед і патрэбныя сям’і паўзы.",
      fit: "Для сям’і да чатырох гасцей. Хады няшмат; купанне — па жаданні і пад наглядам адказнага дарослага.",
      included: "Сямейны тэмп маршруту, прыватны транспарт і суправаджэнне Паўла.",
      excluded: "Абед, уваход у басейны, ручнікі і асабістае рыштунак.",
      safety:
        "Хваля можа закрыць басейны або зрабіць Сейшал непрыдатным для купання; тады выбіраем бяспечныя бухты і аглядныя кропкі.",
      cta: "Адправіцца ўсёй сям’ёй",
    },
    uk: {
      card: "Порівняйте лавові басейни Порту-Моніш із басейнами та пляжем Сейшала. Купання — лише якщо дозволяють океан і доступ.",
      memories: [
        "Чорний пісок і вулканічне каміння",
        "Спільне купання, коли дозволяє океан",
        "Родинний день із часом на відпочинок батьків",
      ],
      day: "Комфортні переїзди з’єднують пляж Сейшала, водоспади й басейни Порту-Моніш; є нормальний обід і потрібні родині паузи.",
      fit: "Для родини до чотирьох гостей. Ходьби небагато; купання — за бажанням і під наглядом відповідального дорослого.",
      included: "Родинний темп маршруту, приватний транспорт і супровід Павла.",
      excluded: "Обід, вхід до басейнів, рушники й особисте спорядження.",
      safety:
        "Хвиля може закрити басейни або зробити Сейшал непридатним для купання; тоді обираємо безпечні бухти й оглядові точки.",
      cta: "Вирушити всією родиною",
    },
    ru: {
      card: "Сравните лавовые бассейны Порту-Мониш с бассейнами и пляжем Сейшала. Купание — только если позволяют океан и доступ.",
      memories: [
        "Чёрный песок и вулканические камни под ногами",
        "Общее купание, когда позволяет океан",
        "Семейный день с отдыхом для родителей",
      ],
      day: "Комфортные переезды связывают пляж Сейшала, водопады и бассейны Порту-Мониш; предусмотрены нормальный обед и нужные семье паузы.",
      fit: "Для семьи до четырёх гостей. Ходьбы немного; купание — по желанию и под присмотром ответственного взрослого.",
      included: "Семейный темп маршрута, частный транспорт и сопровождение Павла.",
      excluded: "Обед, вход в бассейны, полотенца и личное снаряжение.",
      safety:
        "Волна может закрыть бассейны или сделать Сейшал неподходящим для купания; тогда выбираем безопасные бухты и смотровые.",
      cta: "Отправиться всей семьёй",
    },
  },
  "east-north": {
    en: {
      card: "Travel between Ponta de São Lourenço, Caniçal, Machico, Porto da Cruz and Faial, with short viewpoint stops chosen for the conditions that day.",
      memories: [
        "The volcanic colours of São Lourenço",
        "Machico bay and Caniçal’s maritime character",
        "The green north around Porto da Cruz and Faial",
      ],
      day: "The road links Ponta de São Lourenço, Caniçal, Machico, Porto da Cruz and Faial, with viewpoints and short walks chosen on the day.",
      fit: "For guests who enjoy a varied road trip. No long hike is required; walking can be kept short.",
      included: "Private route planning, transport and Pavel’s hosting.",
      excluded: "Lunch, museum admission and optional activities.",
      safety:
        "Wind may close or shorten the São Lourenço walk. The driving route remains flexible around road and weather conditions.",
      cta: "See the island's two faces",
    },
    be: {
      card: "Праедзьце праз Ponta de São Lourenço, Caniçal, Machico, Porto da Cruz і Faial; кароткія прыпынкі выбіраюцца па ўмовах дня.",
      memories: [
        "Вулканічныя колеры Сан-Лорэнсу",
        "Бухта Машыку і марскі характар Канісала",
        "Зялёная поўнач каля Порту-да-Круш і Фаяла",
      ],
      day: "Дарога злучае Понта-дэ-Сан-Лорэнсу, Канісал, Машыку, Порту-да-Круш і Фаял; аглядныя кропкі і кароткія прагулкі выбіраем у дзень паездкі.",
      fit: "Для тых, хто любіць насычаны роуд-трып. Доўгі паход не абавязковы; хаду можна скараціць.",
      included: "Падрыхтоўка прыватнага маршруту, транспарт і суправаджэнне Паўла.",
      excluded: "Абед, музеі і актыўнасці па жаданні.",
      safety:
        "Вецер можа закрыць або скараціць прагулку на Сан-Лорэнсу. Аўтамабільны маршрут гнутка змяняецца паводле дарог і надвор’я.",
      cta: "Убачыць два абліччы выспы",
    },
    uk: {
      card: "Проїдьте через Ponta de São Lourenço, Caniçal, Machico, Porto da Cruz та Faial; короткі зупинки обираються за умовами дня.",
      memories: [
        "Вулканічні кольори Сан-Лоуренсу",
        "Бухта Машику й морський характер Канісала",
        "Зелена північ біля Порту-да-Круш і Фаяла",
      ],
      day: "Дорога з’єднує Понта-де-Сан-Лоуренсу, Канісал, Машику, Порту-да-Круш і Фаял; оглядові точки й короткі прогулянки обираємо в день поїздки.",
      fit: "Для тих, хто любить насичений роуд-трип. Довгий похід не обов’язковий; ходьбу можна скоротити.",
      included: "Підготовка приватного маршруту, транспорт і супровід Павла.",
      excluded: "Обід, музеї та активності за бажанням.",
      safety:
        "Вітер може закрити або скоротити прогулянку Сан-Лоуренсу. Автомобільний маршрут гнучко змінюється за дорогами й погодою.",
      cta: "Побачити два обличчя острова",
    },
    ru: {
      card: "Проедьте через Ponta de São Lourenço, Caniçal, Machico, Porto da Cruz и Faial; короткие остановки выбираются по условиям дня.",
      memories: [
        "Вулканические цвета Сан-Лоренсу",
        "Бухта Машику и морской характер Канисала",
        "Зелёный север у Порту-да-Круш и Фаяла",
      ],
      day: "Дорога соединяет Ponta de São Lourenço, Caniçal, Machico, Porto da Cruz и Faial; смотровые и короткие прогулки выбираем по условиям дня.",
      fit: "Для тех, кому нравится насыщенный роуд-трип. Долгий пеший переход не обязателен; ходьбу можно сократить.",
      included: "Подготовка частного маршрута, транспорт и сопровождение Павла.",
      excluded: "Обед, музеи и дополнительные активности.",
      safety:
        "Ветер может закрыть или сократить прогулку на Сан-Лоренсу. Автомобильный маршрут гибко меняется по состоянию дорог и погоде.",
      cta: "Увидеть два лица острова",
    },
  },
  "screen-free": {
    en: {
      card: "Walk a permitted stretch of Levada dos Tornos, then pause by the coast at Ribeira da Janela. Exact stops and lunch are agreed after trail and weather checks.",
      memories: [
        "A few uninterrupted hours outdoors",
        "A calm levada walk and time by the ocean",
        "A practical way to reset everyday digital habits",
      ],
      day: "A gentle levada walk, an ocean stop and a quiet lunch leave generous gaps. You decide whether notifications stay off for part or all of the day.",
      fit: "For remote workers and anyone wanting a low-pressure digital pause. This is not a retreat, therapy or treatment.",
      included: "Day planning, private transport and Pavel’s hosting.",
      excluded: "Lunch, paid access and any specialist wellbeing support.",
      safety:
        "The route adjusts to rain, trail access and ocean conditions. Keep your phone available for safety if needed.",
      cta: "Take a screen-free day",
    },
    be: {
      card: "Прайдзіце дазволены ўчастак Левада-душ-Торнуш, затым спыніцеся каля берага Рыбейра-да-Жанела. Прыпынкі і абед — пасля праверкі ўмоў.",
      memories: [
        "Некалькі гадзін на прыродзе без перапынкаў",
        "Спакойная левада і час каля акіяна",
        "Практычны спосаб перагледзець лічбавыя звычкі",
      ],
      day: "Лёгкая прагулка ўздоўж левады, прыпынак каля акіяна і ціхі абед пакідаюць шмат паветра. Вы самі вырашаеце, на колькі выключыць апавяшчэнні.",
      fit: "Для аддаленых работнікаў і ўсіх, каму патрэбная мяккая лічбавая паўза. Гэта не рэтрыт, тэрапія і не лячэнне.",
      included: "Планаванне дня, прыватны транспарт і суправаджэнне Паўла.",
      excluded: "Абед, платны ўваход і любая спецыялізаваная дапамога.",
      safety:
        "Маршрут змяняецца паводле дажджу, доступу да сцежак і стану акіяна. Пры неабходнасці тэлефон застаецца даступным для бяспекі.",
      cta: "Зладзіць дзень без экрана",
    },
    uk: {
      card: "Пройдіть дозволену ділянку Левада-душ-Торнуш, потім зупиніться біля берега Рібейра-да-Жанела. Зупинки й обід — після перевірки умов.",
      memories: [
        "Кілька безперервних годин на природі",
        "Спокійна левада й час біля океану",
        "Практичний спосіб переглянути цифрові звички",
      ],
      day: "Легка прогулянка вздовж левади, зупинка біля океану й тихий обід залишають багато простору. Ви самі вирішуєте, на скільки вимкнути сповіщення.",
      fit: "Для віддалених працівників і всіх, кому потрібна м’яка цифрова пауза. Це не ретрит, терапія чи лікування.",
      included: "Планування дня, приватний транспорт і супровід Павла.",
      excluded: "Обід, платний вхід і будь-яка спеціалізована допомога.",
      safety:
        "Маршрут змінюється за дощем, доступом до стежок і станом океану. За потреби телефон лишається доступним для безпеки.",
      cta: "Влаштувати день без екрана",
    },
    ru: {
      card: "Пройдите разрешённый участок Левада-душ-Торнуш, затем остановитесь у берега Рибейра-да-Жанела. Остановки и обед — после проверки условий.",
      memories: [
        "Несколько непрерывных часов на природе",
        "Спокойная левада и время у океана",
        "Практичный способ пересмотреть цифровые привычки",
      ],
      day: "Лёгкая прогулка вдоль левады, остановка у океана и неспешный обед оставляют много свободного времени. Вы сами решаете, на сколько отключить уведомления.",
      fit: "Для удалённых сотрудников и всех, кому нужна мягкая цифровая пауза. Это не ретрит, не терапия и не лечение.",
      included: "Планирование дня, частный транспорт и сопровождение Павла.",
      excluded: "Обед, платный вход и любая специализированная помощь.",
      safety:
        "Маршрут меняется из-за дождя, доступа к тропам и состояния океана. При необходимости телефон остаётся доступным для безопасности.",
      cta: "Устроить день без экрана",
    },
  },
};
