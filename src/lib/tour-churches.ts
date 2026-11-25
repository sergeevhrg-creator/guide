import type { MosaicLang as Lang } from "@/lib/mosaic-content";

/**
 * Every tour includes at least one local church (Pavel's rule): the parish church of the
 * place we visit; in Funchal — the Sé and Capela de Santa Catarina.
 * Facts: visitmadeira.com, elucidariomadeirense.pt, cultura.madeira.gov.pt (checked 25.11.2026).
 */
type Text = Record<Lang, string>;
export type Church = { name: string; note: Text };

export const churches = {
  "santa-catarina": {
    name: "Capela de Santa Catarina",
    note: {
      ru: "Первый храм Мадейры, основан в 1425 году. Здесь служит православная община Павла.",
      uk: "Перший храм Мадейри, заснований у 1425 році. Тут служить православна громада Павла.",
      be: "Першы храм Мадэйры, заснаваны ў 1425 годзе. Тут служыць праваслаўная абшчына Паўла.",
      en: "Madeira’s first church, founded in 1425. Pavel’s Orthodox community holds its services here.",
    },
  },
  se: {
    name: "Sé do Funchal",
    note: {
      ru: "Кафедральный собор конца XV века в мануэлинском стиле; кафедра епископа — с 1514 года.",
      uk: "Кафедральний собор кінця XV століття в мануеліанському стилі; кафедра єпископа — з 1514 року.",
      be: "Кафедральны сабор канца XV стагоддзя ў мануэлінскім стылі; кафедра біскупа — з 1514 года.",
      en: "Late-15th-century Manueline cathedral; the bishop’s seat since 1514.",
    },
  },
  monte: {
    name: "Igreja do Monte",
    note: {
      ru: "Храм Nossa Senhora do Monte, покровительницы Мадейры; здесь гробница последнего австрийского императора Карла I.",
      uk: "Храм Nossa Senhora do Monte, покровительки Мадейри; тут гробниця останнього австрійського імператора Карла I.",
      be: "Храм Nossa Senhora do Monte, апякункі Мадэйры; тут грабніца апошняга аўстрыйскага імператара Карла I.",
      en: "Shrine of Nossa Senhora do Monte, Madeira’s patroness, with the tomb of Charles I, the last Austrian emperor.",
    },
  },
  "canical-sebastiao": {
    name: "Igreja de São Sebastião (Caniçal)",
    note: {
      ru: "Приходской храм рыбацкого Канисала; первая часовня Св. Себастьяна основана в начале XVI века.",
      uk: "Парафіяльний храм рибальського Канісала; першу каплицю Св. Себастьяна заснували на початку XVI століття.",
      be: "Парафіяльны храм рыбацкага Канісала; першая капліца Св. Сябасцьяна заснавана ў пачатку XVI стагоддзя.",
      en: "Parish church of the fishing village of Caniçal; the first chapel of St Sebastian dates from the early 16th century.",
    },
  },
  milagres: {
    name: "Capela do Senhor dos Milagres (Machico)",
    note: {
      ru: "Барочная часовня на месте эрмиты XV века; здесь хранится распятие Senhor dos Milagres, к которому 8–9 октября идут паломники со всего острова.",
      uk: "Барокова каплиця на місці ерміти XV століття; тут зберігається розп’яття Senhor dos Milagres, до якого 8–9 жовтня йдуть прочани з усього острова.",
      be: "Барочная капліца на месцы эрміты XV стагоддзя; тут захоўваецца распяцце Senhor dos Milagres, да якога 8–9 кастрычніка ідуць пілігрымы з усяго выспы.",
      en: "Baroque chapel on the site of a 15th-century hermitage, home of the Senhor dos Milagres crucifix; pilgrims walk here from across the island on 8–9 October.",
    },
  },
  "machico-matriz": {
    name: "Igreja Matriz de Machico",
    note: {
      ru: "Храм Nossa Senhora da Conceição конца XV века; мраморные колонны портала — дар короля Мануэла I.",
      uk: "Храм Nossa Senhora da Conceição кінця XV століття; мармурові колони порталу — дар короля Мануела I.",
      be: "Храм Nossa Senhora da Conceição канца XV стагоддзя; мармуровыя калоны партала — дар караля Мануэла I.",
      en: "Late-15th-century church of Nossa Senhora da Conceição; the marble portal columns were a gift from King Manuel I.",
    },
  },
  "porto-da-cruz": {
    name: "Igreja de Nossa Senhora de Guadalupe",
    note: {
      ru: "Приходская церковь Порту-да-Круш у самого океана; история прихода начинается в 1570-х годах.",
      uk: "Парафіяльна церква Порту-да-Круш біля самого океану; історія парафії починається в 1570-х роках.",
      be: "Парафіяльная царква Порту-да-Круш каля самага акіяна; гісторыя парафіі пачынаецца ў 1570-х гадах.",
      en: "Porto da Cruz parish church right by the ocean; the parish dates back to the 1570s.",
    },
  },
  "sao-vicente": {
    name: "Igreja Matriz de São Vicente",
    note: {
      ru: "Храм XVII века с маньеристским порталом в центре старого Сан-Висенте.",
      uk: "Храм XVII століття з маньєристським порталом у центрі старого Сан-Вісенте.",
      be: "Храм XVII стагоддзя з маньерысцкім парталам у цэнтры старога Сан-Вісэнтэ.",
      en: "17th-century church with a Mannerist portal in the heart of old São Vicente.",
    },
  },
  "porto-moniz": {
    name: "Igreja Matriz do Porto Moniz",
    note: {
      ru: "Храм конца XVII века с главным алтарём в золочёной резьбе.",
      uk: "Храм кінця XVII століття з головним вівтарем у позолоченому різьбленні.",
      be: "Храм канца XVII стагоддзя з галоўным алтаром у пазалочанай разьбе.",
      en: "Late-17th-century church with a gilded carved high altar.",
    },
  },
  seixal: {
    name: "Igreja de Santo Antão (Seixal)",
    note: {
      ru: "Главный храм Сейшала: приход основан в 1553 году, от церкви открывается вид на океан.",
      uk: "Головний храм Сейшала: парафію засновано в 1553 році, від церкви відкривається вид на океан.",
      be: "Галоўны храм Сейшала: парафія заснавана ў 1553 годзе, ад царквы адкрываецца від на акіян.",
      en: "Seixal’s main church: the parish was founded in 1553, and the church looks out over the ocean.",
    },
  },
  "ribeira-janela": {
    name: "Igreja de Nossa Senhora da Encarnação (Ribeira da Janela)",
    note: {
      ru: "Построена в 1699 году на месте часовни, разрушенной селем; по дороге из Фанала к океану.",
      uk: "Збудована в 1699 році на місці каплиці, зруйнованої селем; дорогою з Фанала до океану.",
      be: "Пабудавана ў 1699 годзе на месцы капліцы, разбуранай селем; па дарозе з Фанала да акіяна.",
      en: "Built in 1699 to replace a chapel destroyed by a flood; on the road down from Fanal to the ocean.",
    },
  },
  curral: {
    name: "Igreja de Nossa Senhora do Livramento",
    note: {
      ru: "Приходской храм Долины монахинь начала XIX века — единственный исторический памятник деревни; праздник в последнее воскресенье августа.",
      uk: "Парафіяльний храм Долини черниць початку XIX століття — єдина історична пам’ятка села; свято в останню неділю серпня.",
      be: "Парафіяльны храм Даліны манашак пачатку XIX стагоддзя — адзіны гістарычны помнік вёскі; свята ў апошнюю нядзелю жніўня.",
      en: "Early-19th-century parish church of the Nuns’ Valley, the village’s only historic monument; its feast is on the last Sunday of August.",
    },
  },
  "camara-sebastiao": {
    name: "Igreja de São Sebastião (Câmara de Lobos)",
    note: {
      ru: "Главный храм Камара-ди-Лобуш: заложен в 1426 году по приказу инфанта Энрике, барокко; праздник 20 января.",
      uk: "Головний храм Камара-ді-Лобуш: закладений у 1426 році за наказом інфанта Енріке, бароко; свято 20 січня.",
      be: "Галоўны храм Камара-дзі-Лобуш: закладзены ў 1426 годзе па загадзе інфанта Энрыке, барока; свята 20 студзеня.",
      en: "Câmara de Lobos’ main church, founded in 1426 on the orders of Prince Henry the Navigator; Baroque; feast on 20 January.",
    },
  },
} satisfies Record<string, Church>;

export type ChurchId = keyof typeof churches;

/** At least one church per tour; a test checks every catalogue tour is covered. */
export const tourChurches: Record<string, [ChurchId, ...ChurchId[]]> = {
  sunrise: ["monte"],
  balcoes: ["monte"],
  "screen-free": ["monte"],
  "family-west": ["porto-moniz", "seixal"],
  "east-north": ["canical-sebastiao", "milagres"],
  funchal: ["santa-catarina", "se"],
  food: ["santa-catarina", "se"],
  blandys: ["santa-catarina", "se"],
  "rum-surf": ["porto-da-cruz"],
  wine: ["sao-vicente", "seixal"],
  curral: ["curral"],
  fanal: ["ribeira-janela"],
  camara: ["camara-sebastiao"],
  "cruise-one": ["santa-catarina", "camara-sebastiao"],
  "cruise-two": ["seixal", "machico-matriz"],
  "photo-tour": ["machico-matriz"],
};

export function churchesForTour(tourId: string): Church[] {
  return (tourChurches[tourId] ?? []).map((id) => churches[id]);
}

export const churchCopy = {
  label: {
    ru: "Храм на маршруте",
    uk: "Храм на маршруті",
    be: "Храм на маршруце",
    en: "Church on the route",
  },
  intro: {
    ru: "В каждую экскурсию входит посещение местного храма: история прихода, архитектура и тихая минута внутри. Если идёт служба или храм закрыт, посмотрим его снаружи.",
    uk: "У кожну екскурсію входить відвідування місцевого храму: історія парафії, архітектура і тиха хвилина всередині. Якщо триває служба або храм зачинено, оглянемо його ззовні.",
    be: "У кожную экскурсію ўваходзіць наведванне мясцовага храма: гісторыя парафіі, архітэктура і ціхая хвіліна ўнутры. Калі ідзе служба ці храм зачынены, паглядзім яго звонку.",
    en: "Every tour includes a visit to a local church: the parish’s story, its architecture and a quiet moment inside. If a service is on or the church is closed, we see it from outside.",
  },
} satisfies Record<string, Text>;
