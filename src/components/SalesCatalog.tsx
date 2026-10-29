import { ChevronRight, Clock3, Users, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { useLang, type Lang } from "@/lib/i18n/lang";
import { imageCredits, type ImageId } from "@/lib/image-credits";
import { mosaicContent } from "@/lib/mosaic-content";
import { salesPosters, updatedSalesPosters, salesPosterReplacementPending, type SalesTour } from "@/lib/sales";
import { salesCopy } from "@/lib/sales-copy";
import { salesDescriptions } from "@/lib/sales-descriptions";
import { salesEditorialRu } from "@/lib/sales-editorial";
import { salesEditorialEn } from "@/lib/sales-editorial-en";
import { getTourPageSlug } from "@/lib/tour-pages";
import photoTourCover from "@/assets/sales/31-photo-tour-madeira-textless-v1.webp";

export const featuredTourIds = ["sunrise", "family-west", "funchal", "fanal"] as const;
export const discussRoute: Record<Lang, string> = { ru: "Обсудить маршрут", en: "Discuss this route", be: "Абмеркаваць маршрут", uk: "Обговорити маршрут" };
export const helpChooseRoute: Record<Lang, string> = { ru: "Нужна помощь с выбором маршрута", en: "I need help choosing a route", be: "Патрэбна дапамога з выбарам маршруту", uk: "Потрібна допомога з вибором маршруту" };
const perHour = (lang: Lang) => ({ ru: "час", be: "гадзіну", uk: "годину", en: "hour" })[lang];

export function SalesTourCard({ tour, onDetails, onDiscuss }: { tour: SalesTour; onDetails: () => void; onDiscuss: (title: string) => void }) {
 const { lang } = useLang(); const t = mosaicContent[lang]; const pageSlug = getTourPageSlug(tour.id);
 return <article data-tour={tour.id} className="flex h-full min-w-0 flex-col overflow-hidden rounded-md border border-border bg-card">
  <TourArt tour={tour}/><div className="flex flex-1 flex-col p-5 sm:p-6">
  <h3 className="font-display text-xl font-extrabold leading-snug text-mosaic-deep">{tourTitle(tour, lang)}</h3>
  <p className="mt-3 text-sm leading-6 text-foreground">{lang === "ru" ? salesEditorialRu[tour.id]?.short : lang === "en" ? salesEditorialEn[tour.id]?.short : salesDescriptions[tour.id]?.[lang] ?? newTourSummary[tour.id]?.[lang]}</p>
  <p className="mt-4 flex items-start gap-2 text-sm leading-6 text-muted-foreground"><MapPin className="mt-1 h-4 w-4 shrink-0 text-mosaic-roof"/>{tour.route[lang]}</p>
  <div className="mt-5 flex flex-wrap gap-4 border-t border-border pt-4 text-sm font-bold"><span className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-mosaic-ocean"/>{tourDuration(tour, lang)}</span><span className="flex items-center gap-2"><Users className="h-4 w-4 text-mosaic-leaf"/>{salesCopy.guests[lang]}</span></div>
  <p className="mt-4 text-sm font-semibold">€35/{perHour(lang)}</p><strong className="mt-2 text-lg text-mosaic-deep">€{tourPrice(tour)} · {salesCopy.car[lang]}</strong>
  <p className="mt-3 text-xs leading-5 text-muted-foreground">{tour.id === "photo-tour" ? (lang === "en" ? `${photographerSeparate.en} ${separateCosts.en}` : photographerSeparate[lang]) : separateCosts[lang]}</p>
  {cruiseNotes[tour.id] && <p className="mt-2 text-xs leading-5 text-muted-foreground">{cruiseNotes[tour.id]?.[lang]}</p>}
  <div className="mt-auto flex flex-wrap gap-2 pt-5">{pageSlug ? <Button asChild variant="outline"><a href={`/tours/${pageSlug}?lang=${lang}`}>{t.details}<ChevronRight/></a></Button> : <Button variant="outline" onClick={onDetails}>{t.details}<ChevronRight/></Button>}<Button className="bg-mosaic-deep hover:bg-mosaic-ocean" onClick={() => onDiscuss(tourTitle(tour, lang))}>{discussRoute[lang]}<MessageCircle/></Button></div>
  </div></article>;
}

export function TourDetailsDialog({ tour, onClose, onDiscuss }: { tour: SalesTour | null; onClose: () => void; onDiscuss: (title: string) => void }) {
 const { lang } = useLang();
 return <Dialog open={tour !== null} onOpenChange={open => { if (!open) onClose(); }}><DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto">{tour && <><DialogTitle className="pr-6 font-display text-2xl font-extrabold text-mosaic-deep">{tourTitle(tour, lang)}</DialogTitle><DialogDescription>{lang === "ru" ? "Мой маршрут для вашей небольшой компании" : "Your private Madeira day"}</DialogDescription><div data-full-tour-copy className="space-y-5 leading-7 text-foreground">{(lang === "ru" ? salesEditorialRu[tour.id]?.full ?? "" : firstPersonDetail(tour, lang)).split("\n\n").map((paragraph, i) => <p key={i}>{paragraph}</p>)}</div><p className="text-sm leading-6 text-muted-foreground">{transportNote[lang]}</p><p className="font-bold">{tourDuration(tour, lang)} · €35/{perHour(lang)} · €{tourPrice(tour)} {salesCopy.car[lang]} · {salesCopy.guests[lang]}</p><p className="text-sm leading-6">{lang === "ru" ? "Напишите мне даты, количество гостей и что вам особенно хочется увидеть. Я предложу подходящий маршрут и запасной вариант на случай перемены погоды." : salesCopy.checks[lang]}</p><Button onClick={() => onDiscuss(tourTitle(tour, lang))} className="h-auto min-h-10 whitespace-normal bg-mosaic-deep hover:bg-mosaic-ocean">{lang === "ru" ? "Обсудить эту поездку со мной" : discussRoute[lang]}<MessageCircle/></Button></>}</DialogContent></Dialog>;
}

const neutralPhotos: Record<string, ImageId> = { sunrise: "pico-arieiro", balcoes: "balcoes", "family-west": "porto-moniz", "east-north": "sao-lourenco", funchal: "food", "rum-surf": "engenhos", "screen-free": "levada", wine: "seixal", food: "food", curral: "pico-arieiro", fanal: "fanal", camara: "home-coast", blandys: "food", "cruise-one": "home-coast", "cruise-two": "porto-moniz", "photo-tour": "sao-lourenco" };
const photoTourArtCopy: Record<
 Lang,
 { badge: string; title: string; places: string; alt: string }
> = {
 ru: {
  badge: "ФОТОМАРШРУТ",
  title: "Фотосессия на Мадейре",
  places: "Океан · горы · лес",
  alt: "Иллюстрация фотосессии на океанской смотровой Мадейры",
 },
 en: {
  badge: "PHOTO TOUR",
  title: "Madeira photo tour",
  places: "Ocean · mountains · forest",
  alt: "Illustration of a photo session at a Madeira Atlantic viewpoint",
 },
 be: {
  badge: "ФОТАМАРШРУТ",
  title: "Фотасесія на Мадэйры",
  places: "Акіян · горы · лес",
  alt: "Ілюстрацыя фотасесіі на акіянскай агляднай пляцоўцы Мадэйры",
 },
 uk: {
  badge: "ФОТОМАРШРУТ",
  title: "Фотосесія на Мадейрі",
  places: "Океан · гори · ліс",
  alt: "Ілюстрація фотосесії на океанському оглядовому майданчику Мадейри",
 },
};
export const introductionTitle = { ru: "Давайте знакомиться — меня зовут Павел", en: "Let’s meet — I’m Pavel", be: "Давайце знаёміцца — мяне завуць Павел", uk: "Познайоммося — мене звати Павло" };
export const introduction = {
 en: "Hi, I’m Pavel Sergeev. I’m from Belarus and now live in Madeira, exploring the island with my wife Yulia and our son Nikolai. I personally host small outings in Russian, English and Belarusian.\n\nI’m an Orthodox priest and have worked in recruitment for over 12 years. Both have taught me to listen carefully and create an atmosphere where you can relax rather than keep up with a large group.\n\nMy background in orienteering and tourism helps me read a route, match your pace and plan an alternative. Tell me whether you prefer mountains, ocean, forest, old towns or wine; I’ll help you choose a day that feels right.",
 be: "Прывітанне, мяне завуць Павел Сяргееў. Я родам з Беларусі і жыву на Мадэйры, якую даследую разам з жонкай Юліяй і сынам Мікалаем. Я асабіста праводжу невялікія паездкі на рускай, англійскай і беларускай мовах.\n\nЯ праваслаўны святар і больш за 12 гадоў працую ў рэкрутменце. Абедзве справы навучылі мяне ўважліва слухаць людзей і ствараць спакойную атмасферу без спешкі.\n\nДосвед спартыўнага арыентавання і турызму дапамагае мне ўлічваць тэмп групы і рыхтаваць запасны маршрут. Раскажыце, што вам бліжэй: горы, акіян, лес, старыя гарады ці віно. Я дапамагу выбраць ваш дзень на востраве.",
 uk: "Привіт, мене звати Павло Сергєєв. Я родом із Білорусі й живу на Мадейрі, яку досліджую разом із дружиною Юлією та сином Миколаєм. Особисто проводжу невеликі поїздки російською, англійською та білоруською мовами.\n\nЯ православний священник і понад 12 років працюю в рекрутменті. Обидві справи навчили мене уважно слухати людей і створювати спокійну атмосферу без поспіху.\n\nДосвід спортивного орієнтування й туризму допомагає враховувати темп групи та готувати запасний маршрут. Розкажіть, що вам ближче: гори, океан, ліс, старі міста чи вино. Я допоможу обрати ваш день на острові."
};
export const transportNote = {
  ru: "Для камерной поездки до четырёх гостей я приглашаю вас в мой небесно-голубой Volkswagen T-Cross. Если вашей компании нужен более просторный формат, я помогу организовать комфортный профессиональный транспорт с лицензированным партнёром — всё согласуем заранее.",
  en: "For a private outing of up to four guests, I invite you to travel in my sky-blue Volkswagen T-Cross. If your group needs more space, I’ll help arrange comfortable professional transport with a licensed partner, with every detail agreed in advance.",
  be: "Для камернай паездкі да чатырох гасцей я запрашаю вас у мой нябесна-блакітны Volkswagen T-Cross. Калі вашай кампаніі патрэбны больш прасторны фармат, я дапамагу арганізаваць камфортны прафесійны транспарт з ліцэнзаваным партнёрам — усе дэталі ўзгоднім загадзя.",
  uk: "Для камерної поїздки до чотирьох гостей я запрошую вас у свій небесно-блакитний Volkswagen T-Cross. Якщо вашій компанії потрібен просторіший формат, я допоможу організувати комфортний професійний транспорт із ліцензованим партнером — усі деталі погодимо заздалегідь.",
};
const separateCosts = { ru: "Билеты, питание и дегустации — отдельно; посещения подтверждаем заранее.", en: "Tickets, meals, tastings and partner services are paid separately; visits are confirmed in advance.", be: "Білеты, ежа і дэгустацыі — асобна; наведванні пацвярджаем загадзя.", uk: "Квитки, харчування й дегустації — окремо; відвідування підтверджуємо заздалегідь." };
const photographerSeparate = { ru: "Маршрут и сопровождение; профессиональный фотограф заказывается и оплачивается отдельно.", en: "Route planning and hosting; a professional photographer is booked and paid separately.", be: "Маршрут і суправаджэнне; прафесійны фатограф замаўляецца і аплачваецца асобна.", uk: "Маршрут і супровід; професійний фотограф замовляється й оплачується окремо." };
const newTourSummary: Record<string, Record<Lang, string>> = {
 "cruise-one": { ru: "", en: "I plan a realistic route through Câmara de Lobos, Cabo Girão and Eira do Serrado around your ship’s hours, with a return buffer.", be: "Я складу маршрут праз Câmara de Lobos, Cabo Girão і Eira do Serrado паводле раскладу судна, з запасам на вяртанне.", uk: "Я складу маршрут через Câmara de Lobos, Cabo Girão та Eira do Serrado за розкладом судна, із запасом на повернення." },
 "cruise-two": { ru: "", en: "I’ll show you Porto Moniz and Seixal on the west, then São Lourenço, Machico and Porto da Cruz on the east, subject to your ship’s schedule.", be: "Я пакажу вам Porto Moniz і Seixal на захадзе, затым São Lourenço, Machico і Porto da Cruz на ўсходзе, паводле раскладу судна.", uk: "Я покажу вам Porto Moniz і Seixal на заході, потім São Lourenço, Machico та Porto da Cruz на сході, за розкладом судна." },
 "photo-tour": { ru: "", en: "I’ll plan a route through cliffs, ocean viewpoints and forest locations. Choose one area; a photographer is paid separately.", be: "Я складу маршрут да скал, акіянскіх панарам і лясных лакацый. Выбіраем адзін рэгіён; фатограф аплачваецца асобна.", uk: "Я складу маршрут до скель, океанських панорам і лісових локацій. Обираємо один регіон; фотограф оплачується окремо." }
};
export function tourTitle(tour: SalesTour, lang: Lang) { return lang === "ru" ? salesEditorialRu[tour.id]?.title ?? tour.title.ru : lang === "en" ? salesEditorialEn[tour.id]?.title ?? tour.title.en : tour.title[lang]; }
function tourDuration(tour: SalesTour, lang: Lang) { if (tour.id === "cruise-one") return { ru: "5–8 часов", en: "5–8 hours", be: "5–8 гадзін", uk: "5–8 годин" }[lang]; return tour.id === "cruise-two" ? { ru: "2 дня по 7 часов", en: "2 days × 7 hours", be: "2 дні па 7 гадзін", uk: "2 дні по 7 годин" }[lang] : `${tour.hours} ${salesCopy.hours[lang]}`; }
function tourPrice(tour: SalesTour) { return tour.id === "cruise-one" ? "175–280" : String(tour.price); }
const cruiseNotes: Record<string, Record<Lang, string>> = {
  "cruise-one": { ru: "Продолжительность зависит от стоянки лайнера и маршрута.", en: "Duration depends on your ship’s schedule. We agree a return-time buffer; weather, access or schedule changes may alter the route.", be: "Працягласць залежыць ад стаянкі лайнера і маршруту.", uk: "Тривалість залежить від стоянки лайнера та маршруту." },
  "cruise-two": { ru: "Предложение действует при подходящем расписании судна.", en: "Subject to a suitable ship schedule, with an agreed return-time buffer each day. The itinerary may change with weather, access or the timetable.", be: "Прапанова дзее пры зручным раскладзе судна.", uk: "Пропозиція діє за відповідного розкладу судна." }
};
const updatedPosterAlts: Record<string, string> = {
  "cruise-one": "Круизная экскурсия из порта Фуншал по Madeira: Câmara de Lobos, Cabo Girão и Eira do Serrado",
  "cruise-two": "Двухдневная круизная экскурсия по Madeira: Seixal, Porto Moniz, São Lourenço, Machico и Porto da Cruz"
};
function firstPersonDetail(tour: SalesTour, lang: Lang) {
 if (lang === "en") return [salesEditorialEn[tour.id]?.full, salesCopy.extras.en].filter(Boolean).join("\n\n");
 return [{ en: "", be: "Я падрыхтую гэтую паездку паводле вашых інтарэсаў і тэмпу.", uk: "Я підготую цю поїздку за вашими інтересами й темпом.", ru: "" }[lang], salesDescriptions[tour.id]?.[lang] ?? newTourSummary[tour.id]?.[lang], salesCopy.included[lang], salesCopy.checks[lang], tour.id === "photo-tour" ? photographerSeparate[lang] : salesCopy.extras[lang]].filter(Boolean).join("\n\n");
}
function PhotoTourArt({ lang }: { lang: Lang }) {
 const copy = photoTourArtCopy[lang];
 return <div className="relative isolate aspect-[4/5] w-full overflow-hidden bg-mosaic-deep">
  <img src={photoTourCover} alt={copy.alt} width={960} height={1200} loading="lazy" className="absolute inset-0 h-full w-full object-cover"/>
  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-mosaic-deep/95 via-mosaic-deep/15 to-transparent"/>
  <span aria-hidden="true" className="absolute left-4 top-4 rounded-full border border-white/30 bg-mosaic-deep/75 px-3 py-1 text-xs font-extrabold tracking-[0.12em] text-white backdrop-blur-sm sm:left-5 sm:top-5">{copy.badge}</span>
  <div aria-hidden="true" className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
   <p className="font-display text-2xl font-extrabold leading-tight sm:text-3xl">{copy.title}</p>
   <p className="mt-2 text-sm font-bold text-white/85">{copy.places}</p>
  </div>
 </div>;
}
function TourArt({tour}: {tour: SalesTour}) { const {lang} = useLang(); const photo = imageCredits[neutralPhotos[tour.id] ?? "home-coast"];
 if (tour.id === "photo-tour") return <PhotoTourArt lang={lang}/>;
 const updated = updatedSalesPosters[tour.id];
 if (lang === "ru" && updated) return <img src={updated} alt={updatedPosterAlts[tour.id] ?? `${tourTitle(tour, lang)} — рекламная афиша`} width={768} height={960} loading="lazy" className="aspect-[4/5] w-full object-contain"/>;
 if (lang === "ru" && tour.poster) return <div role="img" aria-label={`${tourTitle(tour, lang)} — рекламная афиша`} data-artwork-replacement={salesPosterReplacementPending.includes(tour.id) ? "pending" : undefined} className={`aspect-[4/5] w-full bg-no-repeat ${tour.poster === "d" ? "bg-cover" : "bg-[length:200%_200%]"}`} style={{backgroundImage: `url(${salesPosters[tour.poster]})`, backgroundPosition: tour.position}}/>;
 return <img src={photo.src} alt={photo.alt[lang]} width={768} height={960} loading="lazy" className="aspect-[4/5] w-full object-cover"/>;
}
