import { useState, type FormEvent } from "react";
import { z } from "zod";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACTS, contactUrl } from "@/lib/contacts";
import { useLang } from "@/lib/i18n/lang";
import { englishSalesInquiryMessage } from "@/lib/sales-inquiry-en";

const copy = {
 en: { title: "Discuss your trip with Pavel", name: "Your name", contact: "Your contact", channel: "Preferred contact method", dates: "Dates or date range", guests: "Number of guests", product: "Tour or programme", comment: "What would you especially like to see?", submit: "Open messenger", note: "A ready-to-send message opens in your chosen messenger. Send it yourself to start the conversation; dates and availability are not yet confirmed.", empty: "I need help choosing a route", error: "Please complete the required fields." },
 be: { title: "Абмеркаваць паездку з Паўлам", name: "Ваша імя", contact: "Ваш кантакт", channel: "Зручны спосаб сувязі", dates: "Даты ці прамежак дат", guests: "Колькасць гасцей", product: "Экскурсія ці праграма", comment: "Што вам асабліва хочацца ўбачыць?", submit: "Адкрыць мэсенджар", note: "У абраным мэсенджары адкрыецца гатовае паведамленне. Дашліце яго самі, каб пачаць размову; даты і даступнасць яшчэ не пацверджаны.", empty: "Патрэбна дапамога з выбарам маршруту", error: "Запоўніце абавязковыя палі." },
 uk: { title: "Обговорити поїздку з Павлом", name: "Ваше ім’я", contact: "Ваш контакт", channel: "Зручний спосіб зв’язку", dates: "Дати або період", guests: "Кількість гостей", product: "Екскурсія або програма", comment: "Що вам особливо хочеться побачити?", submit: "Відкрити месенджер", note: "В обраному месенджері відкриється готове повідомлення. Надішліть його самі, щоб почати розмову; дати й доступність ще не підтверджено.", empty: "Потрібна допомога з вибором маршруту", error: "Заповніть обов’язкові поля." },
 ru: { title: "Обсудить поездку с Павлом", name: "Ваше имя", contact: "Ваш контакт", channel: "Удобный способ связи", dates: "Даты или диапазон дат", guests: "Количество гостей", product: "Экскурсия или программа", comment: "Что вам особенно хочется увидеть?", submit: "Открыть мессенджер", note: "В выбранном мессенджере откроется готовое сообщение. Отправьте его сами, чтобы начать разговор; даты и доступность ещё не подтверждены.", empty: "Нужна помощь с выбором маршрута", error: "Заполните обязательные поля." },
};
const schema = z.object({ name: z.string().trim().min(1).max(100), contact: z.string().trim().min(3).max(150), channel: z.enum(["WhatsApp", "Telegram"]), dates: z.string().trim().min(1).max(150), guests: z.coerce.number().int().min(1).max(30), product: z.string().trim().min(1).max(250), comment: z.string().trim().max(1000) });
export function SalesInquiryForm({ products, selected, onSelect }: { products: string[]; selected: string; onSelect: (value: string) => void }) {
 const { lang } = useLang(); const t = copy[lang]; const [error, setError] = useState(false);
 function submit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault(); const parsed = schema.safeParse(Object.fromEntries(new FormData(event.currentTarget)));
  if (!parsed.success) { setError(true); return; }
  setError(false); const d = parsed.data;
  const message = lang === "en" ? englishSalesInquiryMessage(d) : [`Madeira Mosaic`, `${t.name}: ${d.name}`, `${t.channel}: ${d.channel}`, `${t.contact}: ${d.contact}`, `${t.dates}: ${d.dates}`, `${t.guests}: ${d.guests}`, `${t.product}: ${d.product}`, `${t.comment}: ${d.comment || "—"}`, `Language: ${lang.toUpperCase()}`].join("\n");
  const channel = d.channel === "Telegram" ? "telegram" : "whatsapp";
  window.open(contactUrl(channel, message), "_blank", "noopener,noreferrer");
 }
 const field = "mt-2 w-full min-w-0 rounded-md border border-input bg-background px-3 py-3 text-base font-normal text-foreground";
 return <div className="mx-auto max-w-3xl"><h2 className="font-display text-3xl font-extrabold text-mosaic-deep sm:text-4xl">{t.title}</h2><p className="mt-4 leading-7 text-muted-foreground">{t.note}</p>
 <form className="mt-8 grid gap-5 sm:grid-cols-2" onSubmit={submit}>
 <label className="text-sm font-bold">{t.name}<input name="name" autoComplete="name" required maxLength={100} className={field}/></label>
 <label className="text-sm font-bold">{t.contact}<input name="contact" required minLength={3} maxLength={150} className={field}/></label>
 <label className="text-sm font-bold">{t.channel}<select name="channel" className={field}><option>WhatsApp</option><option>Telegram</option></select></label>
 <label className="text-sm font-bold">{t.dates}<input name="dates" required maxLength={150} className={field}/></label>
 <label className="text-sm font-bold">{t.guests}<input name="guests" type="number" min={1} max={30} defaultValue={2} required className={field}/></label>
 <label className="text-sm font-bold">{t.product}<select name="product" required value={selected && selected !== "choose" ? selected : t.empty} onChange={e => onSelect(e.target.value)} className={field}><option value={t.empty}>{t.empty}</option>{products.filter(p => p !== t.empty).map(p => <option key={p} value={p}>{p}</option>)}</select></label>
 <label className="text-sm font-bold sm:col-span-2">{t.comment}<textarea name="comment" rows={4} maxLength={1000} className={field}/></label>
 {error && <p role="alert" className="text-destructive sm:col-span-2">{t.error}</p>}
 <div className="flex flex-wrap gap-3 sm:col-span-2"><Button type="submit" size="lg" className="bg-mosaic-leaf font-bold hover:bg-mosaic-deep"><MessageCircle/>{t.submit}</Button><Button asChild size="lg" variant="outline"><a href={CONTACTS.telegramUrl} target="_blank" rel="noopener noreferrer"><Send/>Telegram {CONTACTS.telegramHandle}</a></Button></div>
 </form></div>;
}
