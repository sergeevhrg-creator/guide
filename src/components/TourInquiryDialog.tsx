import { useRef, useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { contactUrl } from "@/lib/contacts";
import { useLang } from "@/lib/i18n/lang";
import type { ImageId } from "@/lib/image-credits";
import { imageCredits } from "@/lib/image-credits";

type Selection = { title: string; photo?: ImageId; duration?: string; format?: string; price?: string };
const copy = {
  en: { title: "Discuss your journey", name: "Your name", dates: "Dates or date range", adults: "Adults", children: "Children", ages: "Children’s ages, if any", wishes: "What would you love to see?", consent: "I agree to share these details with Pavel via the messenger I choose.", wa: "Write on WhatsApp", tg: "Write on Telegram", note: "This opens your messenger with a draft. Nothing is sent until you send it yourself. Dates, weather and availability are confirmed personally; this is not a booking.", empty: "A route picked together with Pavel" },
  be: { title: "Абмеркаваць падарожжа", name: "Ваша імя", dates: "Даты ці прамежак дат", adults: "Дарослых", children: "Дзяцей", ages: "Узрост дзяцей, калі ёсць", wishes: "Што хацелі б убачыць?", consent: "Згаджаюся перадаць гэтыя звесткі Паўлу праз абраны мэсенджар.", wa: "Напісаць у WhatsApp", tg: "Напісаць ў Telegram", note: "Адкрыецца чарнавік у мэсенджары. Нічога не адпраўляецца, пакуль вы самі не дашлеце паведамленне. Даты, надвор’е і даступнасць пацвярджаюцца асабіста; гэта не бронь.", empty: "Маршрут разам з Паўлам" },
  uk: { title: "Обговорити подорож", name: "Ваше ім’я", dates: "Дати або період", adults: "Дорослих", children: "Дітей", ages: "Вік дітей, якщо є", wishes: "Що хотіли б побачити?", consent: "Погоджуюся поділитися цими даними з Павлом через обраний месенджер.", wa: "Написати у WhatsApp", tg: "Написати в Telegram", note: "Відкриється чернетка в месенджері. Нічого не надсилається, доки ви самі не надішлете повідомлення. Дати, погода й доступність підтверджуються особисто; це не бронювання.", empty: "Маршрут разом із Павлом" },
  ru: { title: "Обсудить путешествие", name: "Ваше имя", dates: "Даты или диапазон дат", adults: "Взрослых", children: "Детей", ages: "Возраст детей, если есть", wishes: "Что хотелось бы увидеть?", consent: "Согласен(на) передать эти сведения Павлу через выбранный мессенджер.", wa: "Написать в WhatsApp", tg: "Написать в Telegram", note: "Откроется черновик в мессенджере. Ничего не отправится, пока вы сами не отправите сообщение. Дату, погоду и доступность Павел подтверждает лично; это не бронирование.", empty: "Маршрут вместе с Павлом" },
} as const;

export function TourInquiryDialog({ open, onOpenChange, selection }: { open: boolean; onOpenChange: (open: boolean) => void; selection: Selection | null }) {
  const { lang } = useLang();
  const t = copy[lang];
  const [name, setName] = useState("");
  const [dates, setDates] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [ages, setAges] = useState("");
  const [wishes, setWishes] = useState("");
  const [consent, setConsent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function continueTo(channel: "whatsapp" | "telegram") {
    if (!consent || !formRef.current?.reportValidity()) return;
    const cleanUrl = `${window.location.origin}${window.location.pathname}`;
    const message = [
      `Hello Pavel! / Здравствуйте, Павел! ${name.trim()} would like to discuss Madeira Mosaic: ${selection?.title ?? t.empty}.`,
      `Dates / Даты: ${dates.trim()}`,
      `Guests / Гости: ${adults} adults, ${children} children${ages.trim() ? ` (${ages.trim()})` : ""}`,
      `Language / Язык: ${lang.toUpperCase()}`,
      `Wishes / Пожелания: ${wishes.trim() || "—"}`,
      `Page / Страница: ${cleanUrl}`,
    ].join("\n");
    window.open(contactUrl(channel, message), "_blank", "noopener,noreferrer");
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92dvh] max-w-xl overflow-y-auto">
        <DialogTitle className="font-display text-2xl font-extrabold text-mosaic-deep">{t.title}</DialogTitle>
        <DialogDescription>{t.note}</DialogDescription>
        {selection && <div className="flex min-w-0 items-center gap-3 border-y border-border py-3">
          {selection.photo && <img src={imageCredits[selection.photo].src} alt={imageCredits[selection.photo].alt[lang]} className="h-16 w-20 shrink-0 rounded object-cover" />}
          <div className="min-w-0"><strong className="block font-display text-sm text-mosaic-deep">{selection.title}</strong><p className="text-xs text-muted-foreground">{[selection.duration, selection.format, selection.price].filter(Boolean).join(" · ")}</p></div>
        </div>}
        <form ref={formRef} className="grid gap-3" onSubmit={(event) => { event.preventDefault(); continueTo("whatsapp"); }}>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="text-xs font-bold text-foreground">{t.name}<input required value={name} onChange={(e) => setName(e.target.value)} className="mt-1 h-11 w-full rounded border border-input bg-background px-3 text-sm" /></label>
            <label className="text-xs font-bold text-foreground">{t.dates}<input required value={dates} onChange={(e) => setDates(e.target.value)} className="mt-1 h-11 w-full rounded border border-input bg-background px-3 text-sm" /></label>
            <label className="text-xs font-bold text-foreground">{t.adults}<input required type="number" min="1" max="20" value={adults} onChange={(e) => setAdults(Number(e.target.value))} className="mt-1 h-11 w-full rounded border border-input bg-background px-3 text-sm" /></label>
            <label className="text-xs font-bold text-foreground">{t.children}<input required type="number" min="0" max="20" value={children} onChange={(e) => setChildren(Number(e.target.value))} className="mt-1 h-11 w-full rounded border border-input bg-background px-3 text-sm" /></label>
          </div>
          {children > 0 && <label className="text-xs font-bold text-foreground">{t.ages}<input required value={ages} onChange={(e) => setAges(e.target.value)} className="mt-1 h-11 w-full rounded border border-input bg-background px-3 text-sm" /></label>}
          <label className="text-xs font-bold text-foreground">{t.wishes}<textarea value={wishes} onChange={(e) => setWishes(e.target.value)} rows={2} className="mt-1 w-full rounded border border-input bg-background p-3 text-sm" /></label>
          <label className="flex items-start gap-2 text-xs leading-5 text-foreground"><input type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 accent-mosaic-ocean" />{t.consent}</label>
          <div className="grid gap-2 sm:grid-cols-2">
            <Button type="submit" className="bg-mosaic-leaf font-bold hover:bg-mosaic-deep"><MessageCircle />{t.wa}</Button>
            <Button type="button" variant="outline" onClick={() => continueTo("telegram")} className="border-mosaic-ocean font-bold text-mosaic-ocean"><Send />{t.tg}</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}