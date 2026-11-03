import type { Lang } from "@/lib/i18n/lang";

const l = (en: string, be: string, uk: string, ru: string): Record<Lang, string> => ({
  en,
  be,
  uk,
  ru,
});
export const salesCopy = {
  hours: l("hours", "гадзін", "годин", "часов"),
  car: l("per whole car", "за ўсю машыну", "за всю машину", "за всю машину"),
  guests: l("Up to 4 guests", "Да 4 гасцей", "До 4 гостей", "До 4 гостей"),
  discuss: l("Discuss date", "Абмеркаваць дату", "Обговорити дату", "Обсудить дату"),
  programs: l(
    "Two seven-day journeys",
    "Два сямідзённыя падарожжы",
    "Дві семиденні подорожі",
    "Две семидневные программы",
  ),
  request: l(
    "7 days · Dates and price on request",
    "7 дзён · Даты і кошт па запыце",
    "7 днів · Дати й ціна за запитом",
    "7 дней · Цена и даты по запросу",
  ),
  childSeat: l(
    "Travelling with a child? A child seat is free on request — please include your child’s age in the enquiry.",
    "Падарожнічаеце з дзіцем? Дзіцячае крэсла падрыхтуем бясплатна — пазначце ўзрост дзіцяці ў заяўцы.",
    "Подорожуєте з дитиною? Дитяче крісло підготуємо безплатно — вкажіть вік дитини в заявці.",
    "Путешествуете с ребёнком? Детское кресло подготовим бесплатно — укажите возраст ребёнка в заявке.",
  ),
  included: l(
    "Pavel plans the route and personally accompanies you throughout the outing. A child seat is free on request.",
    "Павел рыхтуе маршрут і асабіста суправаджае вас на працягу паездкі. Дзіцячае крэсла па запыце — бясплатна.",
    "Павло готує маршрут і особисто супроводжує вас протягом поїздки. Дитяче крісло за запитом — безплатно.",
    "Павел готовит маршрут и лично сопровождает вас на протяжении поездки. Детское кресло по запросу — бесплатно.",
  ),
  checks: l(
    "Before the trip, Pavel will check the forecast and choose the best stops for the day.",
    "Перад паездкай Павел праверыць прагноз і абярэ найлепшыя месцы для вашага дня.",
    "Перед поїздкою Павло перевірить прогноз і обере найкращі місця для вашого дня.",
    "Перед поездкой Павел проверит прогноз и выберет самые удачные точки для вашего дня.",
  ),
  pavel: l(
    "An experienced Orthodox priest and an HR recruiter with over 12 years of experience. Pavel personally hosts small private outings, attentive to your pace and interests. Languages: Russian, English and Belarusian.",
    "Дасведчаны праваслаўны святар і HR-рэкрутар з досведам больш за 12 гадоў. Павел асабіста праводзіць невялікія прыватныя паездкі, улічваючы ваш тэмп і інтарэсы. Мовы: руская, англійская, беларуская.",
    "Досвідчений православний священник і HR-рекрутер із досвідом понад 12 років. Павло особисто проводить невеликі приватні поїздки, зважаючи на ваш темп та інтереси. Мови: російська, англійська, білоруська.",
    "Опытный православный священник и HR-рекрутер с опытом более 12 лет. Павел лично проводит небольшие частные поездки, внимательно относится к темпу и интересам гостей. Языки: русский, английский, белорусский.",
  ),
  transport: l(
    "Pavel welcomes up to four guests in his sky-blue 2024 Volkswagen T-Cross. A child seat is prepared free of charge when requested in advance.",
    "Павел запрашае да чатырох гасцей у свой нябесна-сіні Volkswagen T-Cross 2024 года. Дзіцячае крэсла падрыхтуем бясплатна, калі паведаміць пра яго загадзя.",
    "Павло запрошує до чотирьох гостей у свій небесно-синій Volkswagen T-Cross 2024 року. Дитяче крісло підготуємо безплатно, якщо повідомити про нього заздалегідь.",
    "Павел приглашает до четырёх гостей в свой небесно-синий Volkswagen T-Cross 2024 года. Детское кресло подготовим бесплатно, если сообщить о нём заранее.",
  ),
};
export const salesDescriptions: Record<string, Record<Lang, string>> = {
  sunrise: l(
    "An early outing to Pico do Arieiro, with mountain viewpoints chosen for that morning’s light and weather.",
    "Ранняя паездка на Pico do Arieiro з горнымі агляднымі пляцоўкамі, якія Павел абярэ паводле святла і надвор’я.",
    "Рання поїздка на Pico do Arieiro з гірськими оглядовими майданчиками, які Павло обере за світлом і погодою.",
    "Ранний выезд на Пику-ду-Арейру с горными смотровыми, которые Павел выберет по свету и погоде этого утра.",
  ),
  balcoes: l(
    "Walk from Ribeiro Frio through Laurissilva towards Vereda dos Balcões. Pavel checks current PR11 access before the trip.",
    "Прагулка з Ribeiro Frio праз лаўрысільву да Vereda dos Balcões. Перад паездкай Павел праверыць актуальны доступ да PR11.",
    "Прогулянка з Ribeiro Frio лаврисільвою до Vereda dos Balcões. Перед поїздкою Павло перевірить актуальний доступ до PR11.",
    "Прогулка из Ribeiro Frio через лаврисильву к Vereda dos Balcões. Перед поездкой Павел проверит актуальный доступ к PR11.",
  ),
  "family-west": l(
    "Explore Porto Moniz’s volcanic shore and Seixal’s coast, with viewpoints, an Atlantic walk and time for swimming when conditions are right.",
    "Вулканічнае ўзбярэжжа Porto Moniz і бераг Seixal: аглядныя пляцоўкі, прагулка ля Атлантыкі і час для купання пры добрых умовах.",
    "Вулканічне узбережжя Porto Moniz і берег Seixal: оглядові майданчики, прогулянка біля Атлантики та час для купання за добрих умов.",
    "Вулканическое побережье Порту-Мониша и берег Сейшала: смотровые, прогулка у Атлантики и время для купания при подходящих условиях.",
  ),
  "east-north": l(
    "A varied day through Ponta de São Lourenço, Caniçal, Machico, Porto da Cruz and Faial, with a comfortable balance of viewpoints and walking.",
    "Разнастайны дзень праз Ponta de São Lourenço, Caniçal, Machico, Porto da Cruz і Faial з камфортным балансам аглядных пляцовак і прагулак.",
    "Різноманітний день через Ponta de São Lourenço, Caniçal, Machico, Porto da Cruz і Faial із комфортним балансом оглядових майданчиків і прогулянок.",
    "Разнообразный день через Ponta de São Lourenço, Caniçal, Machico, Porto da Cruz и Faial с комфортным балансом смотровых и прогулок.",
  ),
  funchal: l(
    "Walk through Funchal’s old town, visit the waterfront and city viewpoints. The balance of walking and driving is adapted to your pace.",
    "Прагулка па старым Фуншале, набережная і гарадскія смотравыя. Суадносіны прагулкі і паездкі падладжваюцца пад ваш тэмп.",
    "Прогулянка старим Фуншалом, набережна та міські оглядові. Співвідношення ходьби й поїздки підлаштовується під ваш темп.",
    "Прогулка по старому Фуншалу, набережная и городские смотровые. Соотношение пеших участков и поездки адаптируется под ваш темп.",
  ),
  "rum-surf": l(
    "Discover Porto da Cruz’s seafront and the story of Engenhos do Norte. Pavel checks the current visitor programme before the trip.",
    "Адкрыйце ўзбярэжжа Porto da Cruz і гісторыю Engenhos do Norte. Перад паездкай Павел праверыць актуальную праграму для наведвальнікаў.",
    "Відкрийте узбережжя Porto da Cruz та історію Engenhos do Norte. Перед поїздкою Павло перевірить актуальну програму для відвідувачів.",
    "Откройте побережье Porto da Cruz и историю Engenhos do Norte. Перед поездкой Павел проверит актуальную программу для посетителей.",
  ),
  "screen-free": l(
    "Walk a comfortable section of Levada dos Tornos, then continue to the north coast for Atlantic views.",
    "Прайдзіце камфортны ўчастак Levada dos Tornos, а затым працягніце дзень на паўночным узбярэжжы з відамі на Атлантыку.",
    "Пройдіть комфортну ділянку Levada dos Tornos, а потім продовжте день на північному узбережжі з видами на Атлантику.",
    "Пройдите комфортный участок Levada dos Tornos, а затем продолжите день на северном побережье с видами на Атлантику.",
  ),
  wine: l(
    "São Vicente, Quinta do Barbusano’s vineyards and Seixal bring together mountain scenery, Madeira wine and the north coast. Pavel coordinates the day with the winery.",
    "São Vicente, вінаграднікі Quinta do Barbusano і Seixal злучаюць горныя пейзажы, мадэйрскае віно і паўночнае ўзбярэжжа. Павел узгодніць дзень з вінарняй.",
    "São Vicente, виноградники Quinta do Barbusano та Seixal поєднують гірські пейзажі, мадерське вино й північне узбережжя. Павло узгодить день із виноробнею.",
    "São Vicente, виноградники Quinta do Barbusano и Seixal соединяют горные пейзажи, мадеру и северное побережье. Павел согласует программу дня с винодельней.",
  ),
  food: l(
    "Explore Mercado dos Lavradores and Funchal’s old town, then choose local flavours and food stops around your interests.",
    "Пазнаёмцеся з Mercado dos Lavradores і старым Фуншалам, а затым выберыце мясцовыя смакі і гастранамічныя прыпынкі паводле сваіх інтарэсаў.",
    "Познайомтеся з Mercado dos Lavradores і старим Фуншалом, а потім оберіть місцеві смаки та гастрономічні зупинки за своїми інтересами.",
    "Познакомьтесь с Mercado dos Lavradores и старым Фуншалом, а затем выберите местные вкусы и гастрономические остановки по своим интересам.",
  ),
  curral: l(
    "See the valley from Eira do Serrado, then visit Curral das Freiras. Viewpoint paths and village walking are agreed according to your mobility and the weather.",
    "Від на даліну з Eira do Serrado і наведванне Curral das Freiras. Прагулкі па смотравой і вёсцы ўзгадняюцца паводле вашай рухомасці і надвор’я.",
    "Вид на долину з Eira do Serrado та відвідування Curral das Freiras. Прогулянки оглядовою й селом погоджуються з урахуванням вашої рухливості та погоди.",
    "Вид на долину с Eira do Serrado и посещение Curral das Freiras / Долины монахинь. Прогулки по смотровой и посёлку согласовываются с учётом вашей подвижности и погоды.",
  ),
  fanal: l(
    "Walk among Fanal’s old laurel trees and continue towards the northwest coast. Clear light and mist reveal two different sides of the forest.",
    "Прайдзіце сярод старых лаўраў Fanal і працягніце шлях да паўночна-заходняга ўзбярэжжа. Яснае святло і туман адкрываюць два розныя бакі лесу.",
    "Пройдіть серед старих лаврів Fanal і продовжте шлях до північно-західного узбережжя. Ясне світло й туман відкривають два різні боки лісу.",
    "Пройдите среди старых лавров Фанала и продолжите путь к северо-западному побережью. Ясный свет и туман открывают две разные стороны леса.",
  ),
  camara: l(
    "Visit Câmara de Lobos’s colourful harbour, then see Madeira’s southern coast from the Cabo Girão viewpoint.",
    "Наведайце каляровую гавань Câmara de Lobos, а затым паглядзіце на паўднёвае ўзбярэжжа Мадэйры з Cabo Girão.",
    "Відвідайте барвисту гавань Câmara de Lobos, а потім подивіться на південне узбережжя Мадейри з Cabo Girão.",
    "Посетите яркую гавань Câmara de Lobos, а затем посмотрите на южное побережье Мадейры с Cabo Girão.",
  ),
  blandys: l(
    "Combine historic Funchal with Blandy’s Wine Lodge and discover how Madeira wine became part of the city’s story.",
    "Злучыце гістарычны Фуншал з Blandy’s Wine Lodge і даведайцеся, як мадэйрскае віно стала часткай гісторыі горада.",
    "Поєднайте історичний Фуншал із Blandy’s Wine Lodge і дізнайтеся, як мадерське вино стало частиною історії міста.",
    "Соедините исторический Фуншал с Blandy’s Wine Lodge и узнайте, как мадера стала частью истории города.",
  ),
  "cruise-one": l(
    "I plan a realistic route through Câmara de Lobos, Cabo Girão and Eira do Serrado around your ship’s hours, with a return buffer.",
    "Я складу маршрут праз Câmara de Lobos, Cabo Girão і Eira do Serrado паводле раскладу судна, з запасам на вяртанне.",
    "Я складу маршрут через Câmara de Lobos, Cabo Girão та Eira do Serrado за розкладом судна, із запасом на повернення.",
    "Я составлю реалистичный маршрут через Câmara de Lobos, Cabo Girão и Eira do Serrado по расписанию лайнера, с запасом времени на возвращение.",
  ),
  "cruise-two": l(
    "I’ll show you Porto Moniz and Seixal in the west, then São Lourenço, Machico and Porto da Cruz in the east, planned around your ship’s schedule.",
    "Я пакажу вам Porto Moniz і Seixal на захадзе, затым São Lourenço, Machico і Porto da Cruz на ўсходзе — з планам паводле раскладу судна.",
    "Я покажу вам Porto Moniz і Seixal на заході, потім São Lourenço, Machico та Porto da Cruz на сході — за планом відповідно до розкладу судна.",
    "Я покажу вам Porto Moniz и Seixal на западе, затем São Lourenço, Machico и Porto da Cruz на востоке — по плану, составленному под расписание лайнера.",
  ),
  "photo-tour": l(
    "Pavel will plan a route through cliffs, ocean viewpoints and forest locations and help you find a photographer to suit your style if you wish.",
    "Павел складзе маршрут да скал, акіянскіх панарам і лясных лакацый і пры жаданні дапаможа знайсці фатографа пад ваш стыль.",
    "Павло складе маршрут до скель, океанських панорам і лісових локацій і за бажання допоможе знайти фотографа під ваш стиль.",
    "Павел составит маршрут к скалам, океанским панорамам и лесным локациям и при желании поможет найти фотографа под ваш стиль.",
  ),
};
