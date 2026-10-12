import type { Lang } from "@/lib/i18n/lang";
import home_coastAsset from "@/assets/images/home-coast.webp.asset.json";
import pico_arieiroAsset from "@/assets/images/pico-arieiro.webp.asset.json";
import cetaceansAsset from "@/assets/images/cetaceans.webp.asset.json";
import balcoesAsset from "@/assets/images/balcoes.webp.asset.json";
import engenhosAsset from "@/assets/images/engenhos.webp.asset.json";
import vineyardAsset from "@/assets/images/vineyard.webp.asset.json";
import foodAsset from "@/assets/images/food.webp.asset.json";
import yachtAsset from "@/assets/images/yacht.webp.asset.json";
import fireworksAsset from "@/assets/images/fireworks.webp.asset.json";
import seixalAsset from "@/assets/images/seixal.webp.asset.json";
import porto_monizAsset from "@/assets/images/porto-moniz.webp.asset.json";
import sao_lourencoAsset from "@/assets/images/sao-lourenco.webp.asset.json";
import levadaAsset from "@/assets/images/levada.webp.asset.json";
import machicoAsset from "@/assets/images/machico.webp.asset.json";
import santanaAsset from "@/assets/images/santana.webp.asset.json";
import fanalAsset from "@/assets/images/fanal.webp.asset.json";

export type ImageId =
  | "home-coast"
  | "pico-arieiro"
  | "cetaceans"
  | "balcoes"
  | "engenhos"
  | "vineyard"
  | "food"
  | "yacht"
  | "fireworks"
  | "seixal"
  | "porto-moniz"
  | "sao-lourenco"
  | "levada"
  | "machico"
  | "santana"
  | "fanal";

export type ImageCredit = {
  id: ImageId;
  slot: Record<Lang, string>;
  localPath: string;
  src: string;
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
  alt: Record<Lang, string>;
};

export const imageCredits: Record<ImageId, ImageCredit> = {
  "home-coast": {
    id: "home-coast",
    slot: {
      en: "Ribeira da Janela sea stacks on Madeira’s north coast",
      be: "Марскія скалы Рыбейра-да-Жанела на паўночным узбярэжжы Мадэйры",
      uk: "Морські скелі Рібейра-да-Жанела на північному узбережжі Мадейри",
      ru: "Морские скалы Рибейра-да-Жанела на северном побережье Мадейры",
    },
    localPath: "src/assets/images/home-coast.webp.asset.json",
    src: home_coastAsset.url,
    author: "Dietmar Rabich",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Ribeira_da_Janela_(Madeira,_Portugal),_Ilheus_da_Rib_--_2025_--_1582.jpg",
    alt: {
      en: "Ribeira da Janela sea stacks on Madeira’s north coast",
      be: "Марскія скалы Рыбейра-да-Жанела на паўночным узбярэжжы Мадэйры",
      uk: "Морські скелі Рібейра-да-Жанела на північному узбережжі Мадейри",
      ru: "Морские скалы Рибейра-да-Жанела на северном побережье Мадейры",
    },
  },
  "pico-arieiro": {
    id: "pico-arieiro",
    slot: {
      en: "Mountain ridges and clouds at Pico do Arieiro, Madeira",
      be: "Горныя хрыбты і аблокі на Піку-ду-Арыейру, Мадэйра",
      uk: "Гірські хребти й хмари на Піку-ду-Арієйру, Мадейра",
      ru: "Горные хребты и облака на Пику-ду-Ариейру, Мадейра",
    },
    localPath: "src/assets/images/pico-arieiro.webp.asset.json",
    src: pico_arieiroAsset.url,
    author: "Marco Klapper",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pico_do_Arieiro_(33266992472).jpg",
    alt: {
      en: "Mountain ridges and clouds at Pico do Arieiro, Madeira",
      be: "Горныя хрыбты і аблокі на Піку-ду-Арыейру, Мадэйра",
      uk: "Гірські хребти й хмари на Піку-ду-Арієйру, Мадейра",
      ru: "Горные хребты и облака на Пику-ду-Ариейру, Мадейра",
    },
  },
  cetaceans: {
    id: "cetaceans",
    slot: {
      en: "Whale and dolphin watching boat on the Atlantic off Madeira",
      be: "Судна для назірання за кітамі і дэльфінамі ў Атлантыцы ля Мадэйры",
      uk: "Судно для спостереження за китами й дельфінами в Атлантиці біля Мадейри",
      ru: "Судно для наблюдения за китами и дельфинами в Атлантике у Мадейры",
    },
    localPath: "src/assets/images/cetaceans.webp.asset.json",
    src: cetaceansAsset.url,
    author: "Asurnipal",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Madeira-Atlantic-Whale_and_Dolphin_Watching_Tours-01ASD.jpg",
    alt: {
      en: "Whale and dolphin watching boat on the Atlantic off Madeira",
      be: "Судна для назірання за кітамі і дэльфінамі ў Атлантыцы ля Мадэйры",
      uk: "Судно для спостереження за китами й дельфінами в Атлантиці біля Мадейри",
      ru: "Судно для наблюдения за китами и дельфинами в Атлантике у Мадейры",
    },
  },
  balcoes: {
    id: "balcoes",
    slot: {
      en: "Levada path at Ribeiro Frio and Balcões, Madeira",
      be: "Сцежка левады ў Рыбейру-Фрыу і Балкойш, Мадэйра",
      uk: "Стежка левади в Рібейру-Фріу та Балкойш, Мадейра",
      ru: "Тропа левады в Рибейру-Фриу и Балкойш, Мадейра",
    },
    localPath: "src/assets/images/balcoes.webp.asset.json",
    src: balcoesAsset.url,
    author: "Karelj",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Madeira_levada_Ribeiro_Frio_Balc%C3%B5es_2016_4.jpg",
    alt: {
      en: "Levada path at Ribeiro Frio and Balcões, Madeira",
      be: "Сцежка левады ў Рыбейру-Фрыу і Балкойш, Мадэйра",
      uk: "Стежка левади в Рібейру-Фріу та Балкойш, Мадейра",
      ru: "Тропа левады в Рибейру-Фриу и Балкойш, Мадейра",
    },
  },
  engenhos: {
    id: "engenhos",
    slot: {
      en: "Engenhos do Norte sugar-cane rum mill in Porto da Cruz",
      be: "Завод трысняговага рому Engenhos do Norte у Порту-да-Круш",
      uk: "Завод тростинного рому Engenhos do Norte у Порту-да-Круш",
      ru: "Завод тростникового рома Engenhos do Norte в Порту-да-Круш",
    },
    localPath: "src/assets/images/engenhos.webp.asset.json",
    src: engenhosAsset.url,
    author: "singra13",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Fabrica_de_aguardente_de_cana_de_a%C3%A7ucar,porto_cruz,_Madeira_-_panoramio.jpg",
    alt: {
      en: "Engenhos do Norte sugar-cane rum mill in Porto da Cruz",
      be: "Завод трысняговага рому Engenhos do Norte у Порту-да-Круш",
      uk: "Завод тростинного рому Engenhos do Norte у Порту-да-Круш",
      ru: "Завод тростникового рома Engenhos do Norte в Порту-да-Круш",
    },
  },
  vineyard: {
    id: "vineyard",
    slot: {
      en: "Terraced vineyard on Madeira",
      be: "Тэрасны вінаграднік на Мадэйры",
      uk: "Терасний виноградник на Мадейрі",
      ru: "Террасный виноградник на Мадейре",
    },
    localPath: "src/assets/images/vineyard.webp.asset.json",
    src: vineyardAsset.url,
    author: "Alexander Baxevanis",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Madeira_Vineyard.jpg",
    alt: {
      en: "Terraced vineyard on Madeira",
      be: "Тэрасны вінаграднік на Мадэйры",
      uk: "Терасний виноградник на Мадейрі",
      ru: "Террасный виноградник на Мадейре",
    },
  },
  food: {
    id: "food",
    slot: {
      en: "Fruit stalls inside Mercado dos Lavradores in Funchal",
      be: "Фруктовыя прылаўкі ў Mercado dos Lavradores у Фуншале",
      uk: "Фруктові прилавки в Mercado dos Lavradores у Фуншалі",
      ru: "Фруктовые прилавки в Mercado dos Lavradores в Фуншале",
    },
    localPath: "src/assets/images/food.webp.asset.json",
    src: foodAsset.url,
    author: "Dietmar Rabich",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Funchal_(Madeira,_Portugal),_Mercado_dos_Lavradores_--_2025_--_0962.jpg",
    alt: {
      en: "Fruit stalls inside Mercado dos Lavradores in Funchal",
      be: "Фруктовыя прылаўкі ў Mercado dos Lavradores у Фуншале",
      uk: "Фруктові прилавки в Mercado dos Lavradores у Фуншалі",
      ru: "Фруктовые прилавки в Mercado dos Lavradores в Фуншале",
    },
  },
  yacht: {
    id: "yacht",
    slot: {
      en: "Sailboat at sunset off Madeira",
      be: "Ветразнік на захадзе сонца ля Мадэйры",
      uk: "Вітрильник на заході сонця біля Мадейри",
      ru: "Парусник на закате у Мадейры",
    },
    localPath: "src/assets/images/yacht.webp.asset.json",
    src: yachtAsset.url,
    author: "Alexander Baxevanis",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Sailboat_%26_Sunset,_Madeira_-_Nov_2010.jpg",
    alt: {
      en: "Sailboat at sunset off Madeira",
      be: "Ветразнік на захадзе сонца ля Мадэйры",
      uk: "Вітрильник на заході сонця біля Мадейри",
      ru: "Парусник на закате у Мадейры",
    },
  },
  fireworks: {
    id: "fireworks",
    slot: {
      en: "New Year lights and drone show over Funchal",
      be: "Навагоднія агні і шоу дронаў над Фуншалам",
      uk: "Новорічні вогні та шоу дронів над Фуншалом",
      ru: "Новогодние огни и шоу дронов над Фуншалом",
    },
    localPath: "src/assets/images/fireworks.webp.asset.json",
    src: fireworksAsset.url,
    author: "Dr. Thomas Liptak",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Funchal,_New_Year%27s_Eve_(drone_show)_2.jpg",
    alt: {
      en: "New Year lights and drone show over Funchal",
      be: "Навагоднія агні і шоу дронаў над Фуншалам",
      uk: "Новорічні вогні та шоу дронів над Фуншалом",
      ru: "Новогодние огни и шоу дронов над Фуншалом",
    },
  },
  seixal: {
    id: "seixal",
    slot: {
      en: "Natural volcanic pools at Seixal, Madeira",
      be: "Прыродныя вулканічныя басейны ў Сейшале, Мадэйра",
      uk: "Природні вулканічні басейни в Сейшалі, Мадейра",
      ru: "Природные вулканические бассейны в Сейшале, Мадейра",
    },
    localPath: "src/assets/images/seixal.webp.asset.json",
    src: seixalAsset.url,
    author: "Vitor Oliveira from Torres Vedras, PORTUGAL",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Piscinas_Naturais_do_Seixal_-_Ilha_da_Madeira_-_Portugal_(6435834747).jpg",
    alt: {
      en: "Natural volcanic pools at Seixal, Madeira",
      be: "Прыродныя вулканічныя басейны ў Сейшале, Мадэйра",
      uk: "Природні вулканічні басейни в Сейшалі, Мадейра",
      ru: "Природные вулканические бассейны в Сейшале, Мадейра",
    },
  },
  "porto-moniz": {
    id: "porto-moniz",
    slot: {
      en: "Natural volcanic pools at Porto Moniz, Madeira",
      be: "Прыродныя вулканічныя басейны Порту-Моніш, Мадэйра",
      uk: "Природні вулканічні басейни Порту-Моніш, Мадейра",
      ru: "Природные вулканические бассейны Порту-Мониш, Мадейра",
    },
    localPath: "src/assets/images/porto-moniz.webp.asset.json",
    src: porto_monizAsset.url,
    author: "Ximonic (Simo Räsänen)",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Piscinas_Naturais_do_Aqu%C3%A1rio_in_Porto_Moniz,_Madeira,_2023_May.jpg",
    alt: {
      en: "Natural volcanic pools at Porto Moniz, Madeira",
      be: "Прыродныя вулканічныя басейны Порту-Моніш, Мадэйра",
      uk: "Природні вулканічні басейни Порту-Моніш, Мадейра",
      ru: "Природные вулканические бассейны Порту-Мониш, Мадейра",
    },
  },
  "sao-lourenco": {
    id: "sao-lourenco",
    slot: {
      en: "Volcanic cliffs of Ponta de São Lourenço, Madeira",
      be: "Вулканічныя скалы Понта-дэ-Сан-Лорэнсу, Мадэйра",
      uk: "Вулканічні скелі Понта-де-Сан-Лоуренсу, Мадейра",
      ru: "Вулканические скалы Понта-де-Сан-Лоренсу, Мадейра",
    },
    localPath: "src/assets/images/sao-lourenco.webp.asset.json",
    src: sao_lourencoAsset.url,
    author: "Diego Delso",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Ponta_de_S%C3%A3o_Louren%C3%A7o,_Madeira,_Portugal,_2019-05-28,_DD_31.jpg",
    alt: {
      en: "Volcanic cliffs of Ponta de São Lourenço, Madeira",
      be: "Вулканічныя скалы Понта-дэ-Сан-Лорэнсу, Мадэйра",
      uk: "Вулканічні скелі Понта-де-Сан-Лоуренсу, Мадейра",
      ru: "Вулканические скалы Понта-де-Сан-Лоренсу, Мадейра",
    },
  },
  levada: {
    id: "levada",
    slot: {
      en: "Levada dos Tornos with mountain and Atlantic views",
      be: "Левада-душ-Торнуш з відам на горы і Атлантыку",
      uk: "Левада-душ-Торнуш із краєвидом гір та Атлантики",
      ru: "Левада-душ-Торнуш с видом на горы и Атлантику",
    },
    localPath: "src/assets/images/levada.webp.asset.json",
    src: levadaAsset.url,
    author: "Gerda Arendt",
    license: "CC0",
    licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Levada_dos_Tornos,_Madeira,_view_to_Lombo_Urzal,_peaks_clear.jpg",
    alt: {
      en: "Levada dos Tornos with mountain and Atlantic views",
      be: "Левада-душ-Торнуш з відам на горы і Атлантыку",
      uk: "Левада-душ-Торнуш із краєвидом гір та Атлантики",
      ru: "Левада-душ-Торнуш с видом на горы и Атлантику",
    },
  },
  machico: {
    id: "machico",
    slot: {
      en: "Machico bay and town on Madeira",
      be: "Бухта і горад Машыку на Мадэйры",
      uk: "Бухта й місто Машику на Мадейрі",
      ru: "Бухта и город Машику на Мадейре",
    },
    localPath: "src/assets/images/machico.webp.asset.json",
    src: machicoAsset.url,
    author: "muffinn from Worcester, UK",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Madeira_-_Machico_-_view_across_the_bay_on_a_stormy_day_(33192095770).jpg",
    alt: {
      en: "Machico bay and town on Madeira",
      be: "Бухта і горад Машыку на Мадэйры",
      uk: "Бухта й місто Машику на Мадейрі",
      ru: "Бухта и город Машику на Мадейре",
    },
  },
  santana: {
    id: "santana",
    slot: {
      en: "Traditional thatched houses in Santana, Madeira",
      be: "Традыцыйныя саламяныя дамы ў Сантане, Мадэйра",
      uk: "Традиційні солом’яні будинки в Сантані, Мадейра",
      ru: "Традиционные соломенные дома в Сантане, Мадейра",
    },
    localPath: "src/assets/images/santana.webp.asset.json",
    src: santanaAsset.url,
    author: "Paul Mannix",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Traditional_thatched_houses_(palheiros),_Santana,_Madeira,_Portugal.jpg",
    alt: {
      en: "Traditional thatched houses in Santana, Madeira",
      be: "Традыцыйныя саламяныя дамы ў Сантане, Мадэйра",
      uk: "Традиційні солом’яні будинки в Сантані, Мадейра",
      ru: "Традиционные соломенные дома в Сантане, Мадейра",
    },
  },
  fanal: {
    id: "fanal",
    slot: {
      en: "Ancient laurel trees in Fanal forest, Madeira",
      be: "Старажытныя лаўровыя дрэвы ў лесе Фанал, Мадэйра",
      uk: "Стародавні лаврові дерева в лісі Фанал, Мадейра",
      ru: "Древние лавровые деревья в лесу Фанал, Мадейра",
    },
    localPath: "src/assets/images/fanal.webp.asset.json",
    src: fanalAsset.url,
    author: "Jnvalves",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:O_Fanal,_Ilha_da_Madeira,_Portugal.jpg",
    alt: {
      en: "Ancient laurel trees in Fanal forest, Madeira",
      be: "Старажытныя лаўровыя дрэвы ў лесе Фанал, Мадэйра",
      uk: "Стародавні лаврові дерева в лісі Фанал, Мадейра",
      ru: "Древние лавровые деревья в лесу Фанал, Мадейра",
    },
  },
};

export const tourImageIds: Record<string, ImageId> = {
  sunrise: "pico-arieiro",
  whales: "cetaceans",
  balcoes: "balcoes",
  "rum-surf": "engenhos",
  wine: "vineyard",
  food: "food",
  "yacht-sunset": "yacht",
  lights: "fireworks",
  "family-west": "seixal",
  "east-north": "sao-lourenco",
  "screen-free": "levada",
};

export const productImageIds: ImageId[] = ["pico-arieiro", "seixal", "fanal", "home-coast"];
export const returnImageIds: ImageId[] = [
  "machico",
  "cetaceans",
  "balcoes",
  "santana",
  "pico-arieiro",
  "engenhos",
  "vineyard",
];
export const pageImageIds = {
  silence: "fanal",
  remote: "home-coast",
  guide: "food",
} as const satisfies Record<string, ImageId>;
