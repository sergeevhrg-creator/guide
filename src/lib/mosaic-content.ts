import hero from "@/assets/return-hero.jpg";
import ocean from "@/assets/return-ocean.jpg";
import forest from "@/assets/return-forest.jpg";
import culture from "@/assets/return-culture.jpg";
import wild from "@/assets/exp-wild-heart.jpg";
import familyImg from "@/assets/exp-family.jpg";
import first from "@/assets/exp-first-hours.jpg";
import returnImg from "@/assets/exp-return.jpg";
import food from "@/assets/tour-food.jpg";
import yacht from "@/assets/tour-yacht.jpg";
import pools from "@/assets/tour-pools.jpg";
import festival from "@/assets/tour-festival.jpg";

import type { Lang } from "@/lib/i18n/lang";
import { tourEditorial } from "@/lib/tour-editorial";
export { getPartnerActivities } from "@/lib/partner-content";
import { tourImageIds } from "@/lib/image-credits";
import { displayTourPrice, tourPricing } from "@/lib/tour-pricing";

export type MosaicLang = Lang;

export type Category =
  | "all"
  | "ocean"
  | "peaks"
  | "forests"
  | "flavours"
  | "sailing"
  | "festivals"
  | "family"
  | "drive"
  | "quiet";

export const categoryKeys: Category[] = [
  "ocean",
  "peaks",
  "forests",
  "flavours",
  "sailing",
  "festivals",
  "family",
  "drive",
  "quiet",
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/sergeevhrg/",
  instagram: "https://www.instagram.com/paterpavel/",
};

type TourText = {
  title: string;
  outcome: string;
  route: string;
  duration: string;
  format: string;
  price: string;
  weather: string;
};

type Tour = {
  id: string;
  image: string;
  accent: "ocean" | "green" | "violet" | "orange" | "terracotta";
  categories: Category[];
  text: Record<MosaicLang, TourText>;
};

export const tours: Tour[] = [
  {
    id: "sunrise",
    image: hero,
    accent: "orange",
    categories: ["peaks", "quiet", "drive"],
    text: {
      en: {
        title: "Sunrise at Pico do Arieiro",
        outcome:
          "You watch the first light rise over a sea of clouds, feel the cold mountain air and keep a morning you cannot repeat anywhere else.",
        route: "Funchal · Pico do Arieiro · central massif viewpoints",
        duration: "5–6 hours (very early start)",
        format: "Private · up to 4 guests",
        price: "Price on request",
        weather: "Cloud, wind or closed trails can move us to another viewpoint the same morning.",
      },
      be: {
        title: "Усход сонца на Pico do Arieiro",
        outcome:
          "Вы сустракаеце першае святло над морам аблокаў, адчуваеце халоднае горнае паветра і забіраеце раніцу, якую не паўторыш нідзе.",
        route: "Фуншал · Pico do Arieiro · аглядныя пляцоўкі цэнтральнага масіву",
        duration: "5–6 гадзін (вельмі ранні старт)",
        format: "Прыватна · да 4 гасцей",
        price: "Кошт па запыце",
        weather: "Аблокі, вецер ці зачыненыя сцежкі могуць перанесці нас на іншы пункт агляду.",
      },
      uk: {
        title: "Світанок на Pico do Arieiro",
        outcome:
          "Ви зустрічаєте перше світло над морем хмар, відчуваєте холодне гірське повітря і забираєте ранок, який більше ніде не повториться.",
        route: "Фуншал · Pico do Arieiro · оглядові точки центрального масиву",
        duration: "5–6 годин (дуже ранній старт)",
        format: "Приватно · до 4 гостей",
        price: "Вартість за запитом",
        weather: "Хмари, вітер або закриті стежки можуть перенести нас на іншу оглядову точку.",
      },
      ru: {
        title: "Рассвет на Pico do Arieiro",
        outcome:
          "Вы встречаете первый свет над морем облаков, чувствуете холодный горный воздух и увозите утро, которое больше нигде не повторится.",
        route: "Фуншал · Pico do Arieiro · смотровые центрального массива",
        duration: "5–6 часов (очень ранний старт)",
        format: "Индивидуально · до 4 гостей",
        price: "Цена по запросу",
        weather:
          "Облачность, ветер или закрытые тропы могут перенести нас на другую смотровую площадку.",
      },
    },
  },
  {
    id: "balcoes",
    image: forest,
    accent: "green",
    categories: ["forests", "family", "quiet"],
    text: {
      en: {
        title: "Ribeiro Frio & Vereda dos Balcões",
        outcome:
          "You walk in green shade beside running water and come out to a valley view that makes the whole island feel close.",
        route: "Ribeiro Frio · Vereda dos Balcões · Balcões viewpoint",
        duration: "4–5 hours",
        format: "Private · up to 4 guests · easy walking",
        price: "Price on request",
        weather: "Rain and official trail status decide the walking section that morning.",
      },
      be: {
        title: "Ribeiro Frio і Vereda dos Balcões",
        outcome:
          "Вы ідзяце ў зялёным цяні ўздоўж вады і выходзіце да віду на даліну, дзе востраў здаецца зусім блізкім.",
        route: "Ribeiro Frio · Vereda dos Balcões · аглядная Balcões",
        duration: "4–5 гадзін",
        format: "Прыватна · да 4 гасцей · лёгкая хада",
        price: "Кошт па запыце",
        weather: "Дождж і афіцыйны статус сцежак вызначаюць пешую частку той раніцай.",
      },
      uk: {
        title: "Ribeiro Frio та Vereda dos Balcões",
        outcome:
          "Ви йдете в зеленій тіні вздовж води і виходите до краєвиду долини, де острів здається зовсім близьким.",
        route: "Ribeiro Frio · Vereda dos Balcões · оглядова Balcões",
        duration: "4–5 годин",
        format: "Приватно · до 4 гостей · легка хода",
        price: "Вартість за запитом",
        weather: "Дощ і офіційний статус стежок визначають пішу частину того ранку.",
      },
      ru: {
        title: "Рибейру-Фриу и Vereda dos Balcões",
        outcome:
          "Вы идёте в зелёной тени вдоль воды и выходите к виду на долину, от которого остров становится совсем близким.",
        route: "Рибейру-Фриу · Vereda dos Balcões · смотровая Balcões",
        duration: "4–5 часов",
        format: "Индивидуально · до 4 гостей · лёгкая прогулка",
        price: "Цена по запросу",
        weather: "Дождь и официальный статус троп определяют пешую часть в это утро.",
      },
    },
  },
  {
    id: "family-west",
    image: pools,
    accent: "ocean",
    categories: ["family", "ocean", "quiet"],
    text: {
      en: {
        title: "Porto Moniz pools & Seixal",
        outcome:
          "Children swim in natural lava pools, everyone stops at waterfalls, and the day ends with black sand and warm ocean light.",
        route: "Porto Moniz natural pools · Seixal volcanic pools · Seixal beach",
        duration: "7–8 hours · comfortable pace",
        format: "Family · up to 4 guests",
        price: "Price on request",
        weather: "Ocean swell can close the pools; we then keep to viewpoints and sheltered bays.",
      },
      be: {
        title: "Басейны Порту-Моніш і Сейшал",
        outcome:
          "Дзеці купаюцца ў лававых басейнах, усе спыняюцца ля вадаспадаў, а дзень заканчваецца чорным пяском і цёплым святлом акіяна.",
        route: "Прыродныя басейны Порту-Моніш · басейны і пляж Сейшала",
        duration: "7–8 гадзін · камфортны тэмп",
        format: "Сям'я · да 4 гасцей",
        price: "Кошт па запыце",
        weather:
          "Моцная хваля можа зачыніць басейны — тады застаемся на відарысах і ў зацішных бухтах.",
      },
      uk: {
        title: "Басейни Порту-Моніш і Сейшал",
        outcome:
          "Діти купаються в лавових басейнах, усі зупиняються біля водоспадів, а день завершується чорним піском і теплим світлом океану.",
        route: "Природні басейни Порту-Моніш · басейни та пляж Сейшала",
        duration: "7–8 годин · комфортний темп",
        format: "Родина · до 4 гостей",
        price: "Вартість за запитом",
        weather:
          "Сильна хвиля може закрити басейни — тоді лишаємось на оглядових точках і в тихих бухтах.",
      },
      ru: {
        title: "Бассейны Порту-Мониш и Сейшал",
        outcome:
          "Дети купаются в природных лавовых бассейнах, все останавливаются у водопадов, а день заканчивается чёрным песком и тёплым светом океана.",
        route: "Природные бассейны Порту-Мониш · бассейны и пляж Сейшала",
        duration: "7–8 часов · комфортный темп",
        format: "Семья · до 4 гостей",
        price: "Цена по запросу",
        weather:
          "Сильная волна может закрыть бассейны — тогда остаёмся на смотровых и в спокойных бухтах.",
      },
    },
  },
  {
    id: "east-north",
    image: first,
    accent: "terracotta",
    categories: ["drive", "peaks", "ocean"],
    text: {
      en: {
        title: "Ponta de São Lourenço, Caniçal & Faial",
        outcome:
          "You cross from dry red cliffs to a green north in one day and remember how many islands fit inside Madeira.",
        route: "Ponta de São Lourenço · Caniçal · Machico · Porto da Cruz · Faial",
        duration: "8 hours",
        format: "Private · up to 4 guests",
        price: "Price on request",
        weather: "Wind on the peninsula may shorten the walk; the drive and viewpoints stay.",
      },
      be: {
        title: "Ponta de São Lourenço, Caniçal і Faial",
        outcome:
          "За адзін дзень вы пераходзіце ад сухіх чырвоных скал да зялёнай поўначы і разумееце, колькі выспаў змяшчаецца ў Мадэйры.",
        route: "Ponta de São Lourenço · Caniçal · Machico · Porto da Cruz · Faial",
        duration: "8 гадзін",
        format: "Прыватна · да 4 гасцей",
        price: "Кошт па запыце",
        weather: "Вецер на паўвостраве можа скараціць пешую частку; дарога і відарысы застаюцца.",
      },
      uk: {
        title: "Ponta de São Lourenço, Caniçal та Faial",
        outcome:
          "За один день ви переходите від сухих червоних скель до зеленої півночі й розумієте, скільки островів уміщається в Мадейрі.",
        route: "Ponta de São Lourenço · Caniçal · Machico · Porto da Cruz · Faial",
        duration: "8 годин",
        format: "Приватно · до 4 гостей",
        price: "Вартість за запитом",
        weather: "Вітер на півострові може скоротити пішу частину; дорога й оглядові лишаються.",
      },
      ru: {
        title: "Понта-де-Сан-Лоренсу, Канисал и Фаял",
        outcome:
          "За один день вы переходите от сухих красных скал к зелёному северу и понимаете, сколько островов помещается в Мадейре.",
        route: "Ponta de São Lourenço · Caniçal · Machico · Porto da Cruz · Faial",
        duration: "8 часов",
        format: "Индивидуально · до 4 гостей",
        price: "Цена по запросу",
        weather: "Ветер на полуострове может сократить пешую часть; дорога и смотровые остаются.",
      },
    },
  },
  {
    id: "lights",
    image: festival,
    accent: "violet",
    categories: ["festivals", "quiet"],
    text: {
      en: {
        title: "Funchal waterfront & festival lights",
        outcome:
          "You see Funchal turn on: illuminated streets, music from the squares and the whole bay glowing beneath you.",
        route: "Funchal centre · Funchal waterfront · bay viewpoint (subject to official programme)",
        duration: "3–4 hours, evening",
        format: "Private · up to 4 guests",
        price: "Price on request",
        weather: "Programme follows the official festival and illumination calendar.",
      },
      be: {
        title: "Набярэжная Фуншала і святочныя агні",
        outcome:
          "Вы бачыце, як Фуншал запальваецца: асветленыя вуліцы, музыка з плошчаў і ўся бухта, што свеціцца ўнізе.",
        route: "Цэнтр Фуншала · набярэжная · аглядная бухты (паводле афіцыйнай праграмы)",
        duration: "3–4 гадзіны, вечар",
        format: "Прыватна · да 4 гасцей",
        price: "Кошт па запыце",
        weather: "Праграма залежыць ад афіцыйнага календара фестываляў і ілюмінацыі.",
      },
      uk: {
        title: "Набережна Фуншала та святкові вогні",
        outcome:
          "Ви бачите, як Фуншал загоряється: освітлені вулиці, музика з площ і вся бухта, що світиться внизу.",
        route: "Центр Фуншала · набережна · оглядова бухти (за офіційною програмою)",
        duration: "3–4 години, вечір",
        format: "Приватно · до 4 гостей",
        price: "Вартість за запитом",
        weather: "Програма залежить від офіційного календаря фестивалів та ілюмінації.",
      },
      ru: {
        title: "Набережная Фуншала и праздничные огни",
        outcome:
          "Вы видите, как Фуншал загорается: освещённые улицы, музыка с площадей и вся бухта, светящаяся внизу.",
        route: "Центр Фуншала · набережная · смотровая бухты (по официальной программе)",
        duration: "3–4 часа, вечер",
        format: "Индивидуально · до 4 гостей",
        price: "Цена по запросу",
        weather: "Программа зависит от официального календаря фестивалей и иллюминации.",
      },
    },
  },
  {
    id: "rum-surf",
    image: culture,
    accent: "terracotta",
    categories: ["flavours", "drive", "ocean"],
    text: {
      en: {
        title: "Porto da Cruz & Engenhos do Norte",
        outcome:
          "You smell warm sugar cane at a working mill, then stand in Atlantic surf with black cliffs behind you.",
        route: "Porto da Cruz · Engenhos do Norte (visit subject to opening) · coast; surf lesson separately by partner",
        duration: "6 hours",
        format: "Private hosting + licensed surf partner",
        price: "Price on request",
        weather: "Surf depends on swell and the partner school's decision.",
      },
      be: {
        title: "Порту-да-Круш і Engenhos do Norte",
        outcome:
          "Вы адчуваеце пах цёплага цукровага трыснягу на дзеючай фабрыцы, а потым стаіце ў атлантычнай хвалі пад чорнымі скаламі.",
        route: "Порту-да-Круш · Engenhos do Norte (візіт пры адкрыцці) · узбярэжжа; сёрфінг асобна ў партнёра",
        duration: "6 гадзін",
        format: "Прыватнае суправаджэнне + ліцэнзаваны партнёр па сёрфінгу",
        price: "Кошт па запыце",
        weather: "Сёрфінг залежыць ад хвалі і рашэння партнёрскай школы.",
      },
      uk: {
        title: "Порту-да-Круш та Engenhos do Norte",
        outcome:
          "Ви відчуваєте запах теплої цукрової тростини на діючій фабриці, а потім стоїте в атлантичній хвилі під чорними скелями.",
        route: "Порту-да-Круш · Engenhos do Norte (візит за доступності) · узбережжя; серфінг окремо в партнера",
        duration: "6 годин",
        format: "Приватний супровід + ліцензований партнер із серфінгу",
        price: "Вартість за запитом",
        weather: "Серфінг залежить від хвилі та рішення партнерської школи.",
      },
      ru: {
        title: "Порту-да-Круш и Engenhos do Norte",
        outcome:
          "Вы чувствуете запах тёплого сахарного тростника на действующей фабрике, а потом стоите в атлантической волне под чёрными скалами.",
        route: "Порту-да-Круш · Engenhos do Norte (посещение при доступности) · побережье; сёрфинг отдельно у партнёра",
        duration: "6 часов",
        format: "Частное сопровождение + лицензированный партнёр по сёрфингу",
        price: "Цена по запросу",
        weather: "Сёрфинг зависит от волны и решения партнёрской школы.",
      },
    },
  },
  {
    id: "whales",
    image: ocean,
    accent: "ocean",
    categories: ["ocean", "family"],
    text: {
      en: {
        title: "Marine wildlife watching from Machico or Caniçal",
        outcome:
          "You meet the ocean as a living space: dolphins beside the hull, seabirds overhead and silence when everyone just watches.",
        route: "Machico or Caniçal departure (partner to confirm) · Atlantic coast",
        duration: "3 hours",
        format: "Partner's boat + Pavel's hosting",
        price: "Price on request",
        weather: "Wildlife encounters are never guaranteed; departures depend on the ocean.",
      },
      be: {
        title: "Назіранне за марскімі жывёламі з Машыку ці Канісала",
        outcome:
          "Вы сустракаеце акіян як жывую прастору: дэльфіны ля борта, марскія птушкі ўверсе і цішыня, калі ўсе проста глядзяць.",
        route: "Выхад з Машыку ці Канісала (пацвердзіць у партнёра) · Атлантыка",
        duration: "3 гадзіны",
        format: "Судна партнёра + суправаджэнне Паўла",
        price: "Кошт па запыце",
        weather: "Сустрэча з дзікімі жывёламі не гарантуецца; выхад залежыць ад акіяна.",
      },
      uk: {
        title: "Спостереження за морськими тваринами з Машику чи Канісала",
        outcome:
          "Ви зустрічаєте океан як живий простір: дельфіни біля борту, морські птахи вгорі й тиша, коли всі просто дивляться.",
        route: "Вихід із Машику чи Канісала (підтверджує партнер) · Атлантика",
        duration: "3 години",
        format: "Судно партнера + супровід Павла",
        price: "Вартість за запитом",
        weather: "Зустріч із дикими тваринами не гарантується; вихід залежить від океану.",
      },
      ru: {
        title: "Наблюдение за морскими животными из Машику или Канисала",
        outcome:
          "Вы встречаете океан как живое пространство: дельфины у борта, морские птицы наверху и тишина, когда все просто смотрят.",
        route: "Выход из Машику или Канисала (уточнить у партнёра) · Атлантика",
        duration: "3 часа",
        format: "Судно партнёра + сопровождение Павла",
        price: "Цена по запросу",
        weather: "Встреча с дикими животными не гарантируется; выход зависит от океана.",
      },
    },
  },
  {
    id: "yacht-sunset",
    image: yacht,
    accent: "ocean",
    categories: ["sailing", "ocean", "quiet"],
    text: {
      en: {
        title: "Sailing from Funchal towards Cabo Girão",
        outcome:
          "You leave the noise on shore, watch Cabo Girão turn gold and come back with the calmest hour of your trip.",
        route: "Funchal marina · Câmara de Lobos · Cabo Girão (route confirmed by skipper)",
        duration: "3 hours",
        format: "Licensed skipper's small group",
        price: "Price on request",
        weather: "The skipper confirms departure by wind and swell.",
      },
      be: {
        title: "Ветразны выхад з Фуншала да Cabo Girão",
        outcome:
          "Вы пакідаеце шум на беразе, бачыце, як Кабу-Жырау робіцца залатым, і вяртаецеся з самай спакойнай гадзінай паездкі.",
        route: "Марына Фуншала · Câmara de Lobos · Cabo Girão (маршрут пацвярджае капітан)",
        duration: "3 гадзіны",
        format: "Малая група ліцэнзаванага шкіпера",
        price: "Кошт па запыце",
        weather: "Выхад пацвярджае шкіпер паводле ветру і хвалі.",
      },
      uk: {
        title: "Вітрильний вихід із Фуншала до Cabo Girão",
        outcome:
          "Ви лишаєте шум на березі, бачите, як Кабу-Жирау стає золотим, і повертаєтесь із найспокійнішою годиною поїздки.",
        route: "Марина Фуншала · Câmara de Lobos · Cabo Girão (маршрут підтверджує капітан)",
        duration: "3 години",
        format: "Мала група ліцензованого шкіпера",
        price: "Вартість за запитом",
        weather: "Вихід підтверджує шкіпер за вітром і хвилею.",
      },
      ru: {
        title: "Выход под парусом из Фуншала к Кабу-Жирау",
        outcome:
          "Вы оставляете шум на берегу, видите, как Кабу-Жирау становится золотым, и возвращаетесь с самым спокойным часом поездки.",
        route: "Марина Фуншала · Камара-де-Лобуш · Кабу-Жирау (маршрут подтверждает капитан)",
        duration: "3 часа",
        format: "Малая группа лицензированного шкипера",
        price: "Цена по запросу",
        weather: "Выход подтверждает шкипер по ветру и волне.",
      },
    },
  },
  {
    id: "screen-free",
    image: returnImg,
    accent: "violet",
    categories: ["quiet", "forests", "ocean"],
    text: {
      en: {
        title: "Levada dos Tornos & the Atlantic coast",
        outcome:
          "A deliberate day away from notifications, with a levada, the Atlantic and an unhurried lunch.",
        route: "Levada dos Tornos · Ribeira da Janela coast (subject to trail and weather checks)",
        duration: "5–6 hours",
        format: "Private · up to 4 guests · not a retreat",
        price: "Price on request",
        weather: "The route follows rain, official trail access and ocean conditions.",
      },
      be: {
        title: "Левада-душ-Торнуш і ўзбярэжжа Атлантыкі",
        outcome: "Свядомы дзень без апавяшчэнняў: левада, Атлантыка і нетаропкі абед.",
        route: "Левада-душ-Торнуш · бераг Рыбейра-да-Жанела (пасля праверкі сцежкі і надвор’я)",
        duration: "5–6 гадзін",
        format: "Прыватна · да 4 гасцей · не рэтрыт",
        price: "Кошт па запыце",
        weather: "Маршрут залежыць ад дажджу, доступу да сцежак і стану акіяна.",
      },
      uk: {
        title: "Левада-душ-Торнуш та атлантичне узбережжя",
        outcome: "Свідомий день без сповіщень: левада, Атлантика й неквапливий обід.",
        route: "Левада-душ-Торнуш · берег Рібейра-да-Жанела (після перевірки стежки й погоди)",
        duration: "5–6 годин",
        format: "Приватно · до 4 гостей · не ретрит",
        price: "Вартість за запитом",
        weather: "Маршрут залежить від дощу, доступу до стежок і стану океану.",
      },
      ru: {
        title: "Левада-душ-Торнуш и атлантическое побережье",
        outcome: "Осознанный день без уведомлений: левада, Атлантика и неспешный обед.",
        route: "Левада-душ-Торнуш · берег Рибейра-да-Жанела (после проверки тропы и погоды)",
        duration: "5–6 часов",
        format: "Индивидуально · до 4 гостей · не ретрит",
        price: "Цена по запросу",
        weather: "Маршрут зависит от дождя, доступа к тропам и состояния океана.",
      },
    },
  },
  {
    id: "wine",
    image: wild,
    accent: "violet",
    categories: ["flavours", "quiet", "drive"],
    text: {
      en: {
        title: "Wine tour: Quinta do Barbusano, São Vicente & Seixal",
        outcome:
          "You stand in a vineyard above the Atlantic and understand why this wine tastes of wind, volcanic soil and patience.",
        route: "São Vicente · Quinta do Barbusano vineyard (by confirmation) · north coast · Seixal",
        duration: "6–7 hours",
        format: "Private · up to 4 guests",
        price: "Price on request",
        weather: "Vineyard and cellar visits require confirmation from the producer.",
      },
      be: {
        title: "Вінны тур: Quinta do Barbusano, São Vicente і Seixal",
        outcome:
          "Вы стаіце ў вінаградніку над Атлантыкай і разумееце, чаму гэтае віно мае смак ветру, вулканічнай глебы і цярпення.",
        route: "São Vicente · вінаграднікі Quinta do Barbusano (пры пацвярджэнні) · паўночны бераг · Seixal",
        duration: "6–7 гадзін",
        format: "Прыватна · да 4 гасцей",
        price: "Кошт па запыце",
        weather: "Наведванне вінаградніка і склепа патрабуе пацвярджэння вытворцы.",
      },
      uk: {
        title: "Винний тур: Quinta do Barbusano, São Vicente та Seixal",
        outcome:
          "Ви стоїте у винограднику над Атлантикою і розумієте, чому це вино має смак вітру, вулканічного ґрунту й терпіння.",
        route: "São Vicente · виноградники Quinta do Barbusano (за підтвердженням) · північне узбережжя · Seixal",
        duration: "6–7 годин",
        format: "Приватно · до 4 гостей",
        price: "Вартість за запитом",
        weather: "Відвідування виноградника й льоху потребує підтвердження виробника.",
      },
      ru: {
        title: "Винный тур: Quinta do Barbusano, São Vicente и Seixal",
        outcome:
          "Вы стоите в винограднике над океаном и понимаете, почему это вино имеет вкус ветра, вулканической почвы и терпения.",
        route: "São Vicente · виноградники Quinta do Barbusano (после подтверждения) · северное побережье · Seixal",
        duration: "6–7 часов",
        format: "Индивидуально · до 4 гостей",
        price: "Цена по запросу",
        weather: "Посещение виноградника и погреба требует подтверждения производителя.",
      },
    },
  },
  {
    id: "food",
    image: food,
    accent: "orange",
    categories: ["flavours", "family"],
    text: {
      en: {
        title: "Mercado dos Lavradores & Funchal food stops",
        outcome:
          "You taste the island rather than read about it: espada with banana, espetada, bolo do caco and fruit you have never seen before.",
        route: "Mercado dos Lavradores · Funchal food stops selected after confirmation",
        duration: "4 hours",
        format: "Private · up to 4 guests",
        price: "Price on request",
        weather: "Market days and tavern hours shape the order of stops.",
      },
      be: {
        title: "Mercado dos Lavradores і гастранамічныя прыпынкі Фуншала",
        outcome:
          "Вы куштуеце востраў, а не чытаеце пра яго: эшпада з бананам, эшпетада, бола-ду-каку і садавіна, якой вы не бачылі раней.",
        route: "Mercado dos Lavradores · гастранамічныя прыпынкі Фуншала пасля ўзгаднення",
        duration: "4 гадзіны",
        format: "Прыватна · да 4 гасцей",
        price: "Кошт па запыце",
        weather: "Дні рынку і гадзіны працы таверны вызначаюць парадак прыпынкаў.",
      },
      uk: {
        title: "Mercado dos Lavradores і гастрономічні зупинки Фуншала",
        outcome:
          "Ви куштуєте острів, а не читаєте про нього: ешпада з бананом, ешпетада, боло-ду-каку і фрукти, яких ви не бачили раніше.",
        route: "Mercado dos Lavradores · гастрономічні зупинки Фуншала після узгодження",
        duration: "4 години",
        format: "Приватно · до 4 гостей",
        price: "Вартість за запитом",
        weather: "Дні ринку та години таверни визначають порядок зупинок.",
      },
      ru: {
        title: "Mercado dos Lavradores и гастрономические остановки Фуншала",
        outcome:
          "Вы пробуете остров, а не читаете о нём: эшпада с бананом, эшпетада, боло-ду-каку и фрукты, которых вы раньше не видели.",
        route: "Mercado dos Lavradores · гастрономические остановки Фуншала после согласования",
        duration: "4 часа",
        format: "Индивидуально · до 4 гостей",
        price: "Цена по запросу",
        weather: "Дни рынка и часы работы таверны определяют порядок остановок.",
      },
    },
  },
];

export function getTours(lang: MosaicLang) {
  return tours.map((tour) => ({
    ...tour,
    ...tour.text[lang],
    ...tourEditorial[tour.id as keyof typeof tourEditorial][lang],
    price: displayTourPrice(tour.id, lang),
    pricing: tourPricing[tour.id],
    photo: tourImageIds[tour.id] ?? "home-coast",
  }));
}

export const productImages = { day: first, family: familyImg, silence: forest, remote: ocean };

export const mosaicContent: Record<
  MosaicLang,
  {
    nav: string[];
    heroSub: string;
    heroTitle: string;
    heroText: string;
    toursCta: string;
    journeyCta: string;
    productsLabel: string;
    productsTitle: string;
    products: { title: string; body: string; link: string }[];
    exploreLabel: string;
    exploreTitle: string;
    all: string;
    categories: string[];
    found: string;
    reset: string;
    catalogLabel: string;
    catalogTitle: string;
    catalogIntro: string;
    details: string;
    outcomeLabel: string;
    routeLabel: string;
    duration: string;
    format: string;
    weather: string;
    included: string;
    includedText: string;
    excluded: string;
    excludedText: string;
    inquiry: string;
    empty: string;
    partnersLabel: string;
    partnersTitle: string;
    partnersPrice: string;
    guideLabel: string;
    guideTitle: string;
    guideText: string;
    guideLink: string;
    aboutLabel: string;
    aboutTitle: string;
    aboutText: string[];
    aboutPoints: string[];
    formTitle: string;
    formText: string;
    formBadge: string;
    name: string;
    contact: string;
    note: string;
    send: string;
    success: string;
    successBody: string;
    footer: string;
    footerNote: string;
  }
> = {
  en: {
    nav: ["Tours", "Journeys", "Guide", "About Pavel"],
    heroSub: "Madeira, Portugal · private routes",
    heroTitle: "See the Madeira you'll remember",
    heroText:
      "Sunrises above the clouds, levadas, the ocean and the island’s living stories. Choose an experience — the route will be adapted to your pace, interests and dates.",
    toursCta: "Choose a tour",
    journeyCta: "Help me choose a route",
    productsLabel: "Four ways to travel",
    productsTitle: "Pick the format first, the route second",
    products: [
      {
        title: "Day tours",
        body: "Single days across the island: ocean, peaks, forests, flavours and festivals, for up to four guests.",
        link: "See the catalogue",
      },
      {
        title: "Family journey: Return to What Matters",
        body: "Seven days for a family or a couple, with shared routes and a journey book you take home.",
        link: "Open the 7-day journey",
      },
      {
        title: "Spiritual retreat: Week of Silence",
        body: "A separate, quiet week with a clear structure of silence. Never mixed with sightseeing tours.",
        link: "Open the retreat",
      },
      {
        title: "Remote Work & Concierge Madeira",
        body: "Live and work on the island: housing, internet, work spots, networking and practical help.",
        link: "Open remote work",
      },
    ],
    exploreLabel: "What would you like to see?",
    exploreTitle: "What will your Madeira feel like?",
    all: "All tours",
    categories: [
      "Ocean & Wildlife",
      "Peaks & Clouds",
      "Forests & Levadas",
      "Gastronomy & Flavours",
      "Sailing & Sunset",
      "Festivals & Fireworks",
      "Family & Kids",
      "Drive & Adventure",
      "Quiet Corners",
    ],
    found: "tours found",
    reset: "Show all tours",
    catalogLabel: "Tour catalogue",
    catalogTitle: "What will your Madeira feel like?",
    catalogIntro:
      "Choose an experience — the route will be adapted to your day, pace and the weather.",
    details: "Details",
    outcomeLabel: "What you take home",
    routeLabel: "Route",
    duration: "Duration",
    format: "Format",
    weather: "Weather & access",
    included: "Included",
    includedText:
      "Route planning, Pavel's hosting and transport on private tours when stated in your confirmation.",
    excluded: "Not included",
    excludedText: "Meals, tickets, tastings and third-party services unless agreed separately.",
    inquiry: "Send inquiry",
    empty: "No tours in this category yet.",
    partnersLabel: "Partner activities",
    partnersTitle: "Extra experiences with specialist partners",
    partnersPrice:
      "Price on request — depends on dates, duration, group size and experience level.",
    guideLabel: "Madeira guide",
    guideTitle: "Beaches, food, traditions and festivals",
    guideText:
      "A practical island guide: where to swim, what to eat, which traditions are still alive and when the festivals happen.",
    guideLink: "Open the guide",
    aboutLabel: "About Pavel",
    aboutTitle: "Pavel Sergeev",
    aboutText: [
      "Pavel lives on Madeira and creates private routes himself, shaping each day around the weather and the people who came.",
      "Years of work in HR and international technology companies stand behind that: attention to people, detail and a well-organised day.",
      "Languages: Russian, English, Belarusian.",
    ],
    aboutPoints: ["RU · EN · BE", "Up to 4 guests", "Weather-led routes"],
    formTitle: "Request a route",
    formText:
      "No payment and no automatic booking. Pavel personally confirms dates, group and details.",
    formBadge: "Inquiry prototype",
    name: "Your name",
    contact: "Email, WhatsApp or Telegram",
    note: "Which tour and dates interest you?",
    send: "Send inquiry",
    success: "Inquiry noted in the prototype",
    successBody: "Nothing was sent: this is a visual form only.",
    footer: "Madeira Mosaic · Private tours and journeys across Madeira",
    footerNote: "Inquiry only · No online payments",
  },
  be: {
    nav: ["Экскурсіі", "Падарожжы", "Гід", "Пра Паўла"],
    heroSub: "Мадэйра, Партугалія · прыватныя маршруты",
    heroTitle: "Убачыць Мадэйру, якую вы запомніце",
    heroText:
      "Усходы сонца над аблокамі, левады, акіян і жывыя гісторыі выспы. Выберыце ўражанне — маршрут будзе прыстасаваны да вашага тэмпу, інтарэсаў і дат.",
    toursCta: "Выбраць экскурсію",
    journeyCta: "Дапамажыце выбраць маршрут",
    productsLabel: "Чатыры фарматы",
    productsTitle: "Спачатку фармат, потым маршрут",
    products: [
      {
        title: "Аднадзённыя экскурсіі",
        body: "Асобныя дні па выспе: акіян, горы, лясы, смакі і святы, да чатырох гасцей.",
        link: "Глядзець каталог",
      },
      {
        title: "Сямейнае падарожжа «Вярнуцца да галоўнага»",
        body: "Сем дзён для сям'і ці пары: агульныя маршруты і кніга шляху, якую вы забіраеце дадому.",
        link: "Адкрыць 7 дзён",
      },
      {
        title: "Духоўны рэтрыт «Тыдзень цішыні»",
        body: "Асобны ціхі тыдзень з выразнай структурай цішыні. Ніколі не змешваецца з экскурсіямі.",
        link: "Адкрыць рэтрыт",
      },
      {
        title: "Працаваць і жыць на Мадэйры",
        body: "Жыллё, інтэрнэт, месцы для працы, нетворкінг і практычная дапамога на востраве.",
        link: "Адкрыць старонку",
      },
    ],
    exploreLabel: "Што вам хочацца ўбачыць?",
    exploreTitle: "Якой будзе ваша Мадэйра?",
    all: "Усе экскурсіі",
    categories: [
      "Акіян і дзікая прырода",
      "Горы і аблокі",
      "Лясы і левады",
      "Гастранамічныя туры",
      "Ветразь і захад",
      "Святы і агні",
      "З дзецьмі",
      "Драйв і прыгоды",
      "Ціхія куткі выспы",
    ],
    found: "экскурсій знойдзена",
    reset: "Паказаць усе экскурсіі",
    catalogLabel: "Каталог экскурсій",
    catalogTitle: "Якой будзе ваша Мадэйра?",
    catalogIntro:
      "Выберыце ўражанне — маршрут будзе прыстасаваны да вашага дня, тэмпу і надвор’я.",
    details: "Падрабязна",
    outcomeLabel: "Што застанецца з вамі",
    routeLabel: "Маршрут",
    duration: "Працягласць",
    format: "Фармат",
    weather: "Надвор'е і доступ",
    included: "Уключана",
    includedText:
      "Падрыхтоўка маршруту, суправаджэнне Паўла і транспарт у прыватных паездках, калі гэта пазначана ў пацвярджэнні.",
    excluded: "Не ўключана",
    excludedText: "Ежа, білеты, дэгустацыі і паслугі партнёраў, калі не ўзгоднена асобна.",
    inquiry: "Адправіць запыт",
    empty: "У гэтай катэгорыі пакуль няма экскурсій.",
    partnersLabel: "Партнёрскія актыўнасці",
    partnersTitle: "Дадатковыя ўражанні з профільнымі партнёрамі",
    partnersPrice:
      "Кошт па запыце — залежыць ад дат, працягласці, складу групы і ўзроўню падрыхтоўкі.",
    guideLabel: "Гід па Мадэйры",
    guideTitle: "Пляжы, кухня, традыцыі і святы",
    guideText:
      "Практычны даведнік па выспе: дзе купацца, што есці, якія традыцыі жывыя і калі праходзяць святы.",
    guideLink: "Адкрыць гід",
    aboutLabel: "Пра Паўла",
    aboutTitle: "Павел Сергееў",
    aboutText: [
      "Павел жыве на Мадэйры і сам стварае прыватныя маршруты, падладжваючы дзень пад надвор'е і пад людзей, якія прыехалі.",
      "За гэтым — шматгадовы досвед у сферы HR і ў міжнародных тэхналагічных кампаніях: увага да людзей, дэталяў і арганізацыі дня.",
      "Мовы: руская, англійская, беларуская.",
    ],
    aboutPoints: ["RU · EN · BE", "Да 4 гасцей", "Маршрут па надвор'і"],
    formTitle: "Запытаць маршрут",
    formText:
      "Без аплаты і без аўтаматычнага браніравання. Павел асабіста ўдакладніць даты, склад групы і дэталі.",
    formBadge: "Inquiry prototype",
    name: "Ваша імя",
    contact: "Email, WhatsApp ці Telegram",
    note: "Якая экскурсія і якія даты вас цікавяць?",
    send: "Адправіць запыт",
    success: "Запыт прыняты ў прататыпе",
    successBody: "Нічога не адпраўлена: гэта візуальная версія формы.",
    footer: "Madeira Mosaic · Прыватныя экскурсіі і падарожжы па Мадэйры",
    footerNote: "Толькі запыт · Без анлайн-аплаты",
  },
  uk: {
    nav: ["Екскурсії", "Подорожі", "Гід", "Про Павла"],
    heroSub: "Мадейра, Португалія · приватні маршрути",
    heroTitle: "Побачити Мадейру, яку ви пам’ятатимете",
    heroText:
      "Світанки над хмарами, левади, океан і живі історії острова. Оберіть враження — маршрут буде пристосовано до вашого темпу, інтересів і дат.",
    toursCta: "Обрати екскурсію",
    journeyCta: "Допоможіть обрати маршрут",
    productsLabel: "Чотири формати",
    productsTitle: "Спершу формат, потім маршрут",
    products: [
      {
        title: "Одноденні екскурсії",
        body: "Окремі дні островом: океан, гори, ліси, смаки і свята, до чотирьох гостей.",
        link: "Дивитися каталог",
      },
      {
        title: "Сімейна подорож «Повернутися до головного»",
        body: "Сім днів для родини чи пари: спільні маршрути і книга шляху, яку ви забираєте додому.",
        link: "Відкрити 7 днів",
      },
      {
        title: "Духовний ретрит «Тиждень тиші»",
        body: "Окремий тихий тиждень із чіткою структурою тиші. Ніколи не змішується з екскурсіями.",
        link: "Відкрити ретрит",
      },
      {
        title: "Працювати і жити на Мадейрі",
        body: "Житло, інтернет, місця для роботи, нетворкінг і практична допомога на острові.",
        link: "Відкрити сторінку",
      },
    ],
    exploreLabel: "Що вам хочеться побачити?",
    exploreTitle: "Якою буде ваша Мадейра?",
    all: "Усі екскурсії",
    categories: [
      "Океан і дика природа",
      "Гори і хмари",
      "Ліси і левади",
      "Гастрономічні тури",
      "Вітрило і захід сонця",
      "Свята і вогні",
      "З дітьми",
      "Драйв і пригоди",
      "Тихі куточки острова",
    ],
    found: "екскурсій знайдено",
    reset: "Показати всі екскурсії",
    catalogLabel: "Каталог екскурсій",
    catalogTitle: "Якою буде ваша Мадейра?",
    catalogIntro:
      "Оберіть враження — маршрут буде пристосовано до вашого дня, темпу й погоди.",
    details: "Докладніше",
    outcomeLabel: "Що залишиться з вами",
    routeLabel: "Маршрут",
    duration: "Тривалість",
    format: "Формат",
    weather: "Погода і доступ",
    included: "Включено",
    includedText:
      "Підготовка маршруту, супровід Павла і транспорт у приватних поїздках, якщо це вказано в підтвердженні.",
    excluded: "Не включено",
    excludedText: "Їжа, квитки, дегустації та послуги партнерів, якщо не узгоджено окремо.",
    inquiry: "Надіслати запит",
    empty: "У цій категорії поки немає екскурсій.",
    partnersLabel: "Партнерські активності",
    partnersTitle: "Додаткові враження з профільними партнерами",
    partnersPrice:
      "Вартість на запит — залежить від дат, тривалості, складу групи та рівня підготовки.",
    guideLabel: "Гід Мадейрою",
    guideTitle: "Пляжі, кухня, традиції та свята",
    guideText:
      "Практичний путівник островом: де купатися, що їсти, які традиції живі й коли відбуваються свята.",
    guideLink: "Відкрити путівник",
    aboutLabel: "Про Павла",
    aboutTitle: "Павло Сергеєв",
    aboutText: [
      "Павло живе на Мадейрі і сам створює приватні маршрути, підлаштовуючи день під погоду і під людей, які приїхали.",
      "За цим — багаторічний досвід у сфері HR і в міжнародних технологічних компаніях: увага до людей, деталей та організації дня.",
      "Мови: російська, англійська, білоруська.",
    ],
    aboutPoints: ["RU · EN · BE", "До 4 гостей", "Маршрут за погодою"],
    formTitle: "Запитати маршрут",
    formText:
      "Без оплати і без автоматичного бронювання. Павло особисто уточнить дати, склад групи та деталі.",
    formBadge: "Inquiry prototype",
    name: "Ваше ім'я",
    contact: "Email, WhatsApp або Telegram",
    note: "Яка екскурсія і які дати вас цікавлять?",
    send: "Надіслати запит",
    success: "Запит прийнято в прототипі",
    successBody: "Нічого не надіслано: це візуальна версія форми.",
    footer: "Madeira Mosaic · Приватні екскурсії та подорожі Мадейрою",
    footerNote: "Тільки запит · Без онлайн-оплати",
  },
  ru: {
    nav: ["Экскурсии", "Путешествия", "Гид", "О Павле"],
    heroSub: "Мадейра, Португалия · приватные маршруты",
    heroTitle: "Увидеть Мадейру, которую вы будете вспоминать",
    heroText:
      "Рассветы над облаками, левады, океан и живые истории острова. Выберите впечатление — маршрут будет адаптирован под ваш темп, интересы и даты.",
    toursCta: "Выбрать экскурсию",
    journeyCta: "Помочь выбрать маршрут",
    productsLabel: "Четыре формата",
    productsTitle: "Сначала формат, потом маршрут",
    products: [
      {
        title: "Однодневные экскурсии",
        body: "Отдельные дни по острову: океан, горы, леса, вкусы и праздники, до четырёх гостей.",
        link: "Смотреть каталог",
      },
      {
        title: "Семейное путешествие «Вернуться к главному»",
        body: "Семь дней для семьи или пары: общие маршруты и книга пути, которую вы забираете домой.",
        link: "Открыть 7 дней",
      },
      {
        title: "Духовный ретрит «Неделя тишины»",
        body: "Отдельная тихая неделя с ясной структурой тишины. Никогда не смешивается с экскурсиями.",
        link: "Открыть ретрит",
      },
      {
        title: "Работать и жить на Мадейре",
        body: "Жильё, интернет, места для работы, нетворкинг и практическая помощь на острове.",
        link: "Открыть страницу",
      },
    ],
    exploreLabel: "Что вам хочется увидеть?",
    exploreTitle: "Какой будет ваша Мадейра?",
    all: "Все экскурсии",
    categories: [
      "Океан и дикая природа",
      "Горы и облака",
      "Леса и левады",
      "Гастрономические туры",
      "Парус и закат",
      "Праздники и огни",
      "С детьми",
      "Драйв и приключения",
      "Тихие уголки острова",
    ],
    found: "экскурсий найдено",
    reset: "Показать все экскурсии",
    catalogLabel: "Каталог экскурсий",
    catalogTitle: "Какой будет ваша Мадейра?",
    catalogIntro:
      "Выберите впечатление — маршрут будет адаптирован под ваш день, темп и погоду.",
    details: "Подробнее",
    outcomeLabel: "Что останется с вами",
    routeLabel: "Маршрут",
    duration: "Длительность",
    format: "Формат",
    weather: "Погода и доступ",
    included: "Включено",
    includedText:
      "Подготовка маршрута, сопровождение Павла и транспорт в частных поездках, если это указано в подтверждении.",
    excluded: "Не включено",
    excludedText: "Питание, билеты, дегустации и услуги партнёров, если не согласовано отдельно.",
    inquiry: "Отправить запрос",
    empty: "В этой категории пока нет экскурсий.",
    partnersLabel: "Партнёрские активности",
    partnersTitle: "Дополнительные впечатления с профильными партнёрами",
    partnersPrice:
      "Стоимость по запросу — зависит от дат, продолжительности, состава группы и уровня подготовки.",
    guideLabel: "Гид по Мадейре",
    guideTitle: "Пляжи, кухня, традиции и праздники",
    guideText:
      "Практический путеводитель по острову: где купаться, что есть, какие традиции живы и когда проходят праздники.",
    guideLink: "Открыть путеводитель",
    aboutLabel: "О Павле",
    aboutTitle: "Павел Сергеев",
    aboutText: [
      "Павел живёт на Мадейре и сам создаёт частные маршруты, подстраивая день под погоду и под людей, которые приехали.",
      "За этим — многолетний опыт в сфере HR и в международных технологических компаниях: внимание к людям, деталям и организации дня.",
      "Языки: русский, английский, белорусский.",
    ],
    aboutPoints: ["RU · EN · BE", "До 4 гостей", "Маршрут по погоде"],
    formTitle: "Запросить маршрут",
    formText:
      "Без оплаты и без автоматического бронирования. Павел лично уточнит даты, состав группы и детали.",
    formBadge: "Inquiry prototype",
    name: "Ваше имя",
    contact: "Email, WhatsApp или Telegram",
    note: "Какая экскурсия и какие даты вас интересуют?",
    send: "Отправить запрос",
    success: "Запрос принят в прототипе",
    successBody: "Ничего не отправлено: это визуальная версия формы.",
    footer: "Madeira Mosaic · Приватные экскурсии и путешествия по Мадейре",
    footerNote: "Только запрос · Без онлайн-оплаты",
  },
};
