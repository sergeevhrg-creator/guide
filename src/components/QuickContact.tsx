import { useEffect, useState } from "react";
import { MessageCircle, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { CONTACTS, contactUrl, QUICK_INQUIRY } from "@/lib/contacts";
import { useLang } from "@/lib/i18n/lang";

const copy = {
  ru: { button: "Помочь выбрать маршрут", title: "Помочь выбрать экскурсию?", text: "Расскажите, какую Мадейру вы хотите увидеть. Я лично отвечу, помогу выбрать маршрут и заранее согласую все детали поездки.", form: "Оставить заявку" },
  en: { button: "Help me choose a route", title: "Would you like help choosing a tour?", text: "Tell me what you would like to see in Madeira. I’ll reply personally, help you choose a route and agree the trip details in advance.", form: "Send an inquiry" },
  be: { button: "Дапамагчы выбраць маршрут", title: "Дапамагчы выбраць экскурсію?", text: "Раскажыце, якую Мадэйру вы хочаце ўбачыць. Я адкажу асабіста, дапамагу выбраць маршрут і загадзя ўзгадню ўсе дэталі паездкі.", form: "Пакінуць запыт" },
  uk: { button: "Допомогти обрати маршрут", title: "Допомогти обрати екскурсію?", text: "Розкажіть, яку Мадейру ви хочете побачити. Я відповім особисто, допоможу обрати маршрут і заздалегідь погоджу всі деталі поїздки.", form: "Залишити запит" },
};

const AUTO_OPEN_DELAY_MS = 25_000;
const AUTO_OPEN_RETRY_MS = 8_000;
const AUTO_OPEN_SEEN_KEY = "mosaic-contact-auto-seen";

export function QuickContact({ onOpenForm }: { onOpenForm: () => void }) {
  const { lang } = useLang();
  const t = copy[lang];
  const isMobile = useIsMobile();
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  function changeOpen(next: boolean) {
    setOpen(next);
    if (next) window.sessionStorage.setItem(AUTO_OPEN_SEEN_KEY, "1");
  }

  useEffect(() => {
    const hero = document.querySelector("[data-hero]");
    if (!hero) {
      const onScroll = () => setVisible(window.scrollY > 300);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
    const io = new IntersectionObserver((entries) => setVisible(!(entries[0]?.isIntersecting ?? true)));
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (window.sessionStorage.getItem(AUTO_OPEN_SEEN_KEY)) return;

    let timer: number;
    const tryOpen = () => {
      if (window.sessionStorage.getItem(AUTO_OPEN_SEEN_KEY)) return;

      const contact = document.getElementById("contact");
      const contactRect = contact?.getBoundingClientRect();
      const contactIsVisible = Boolean(
        contactRect && contactRect.top < window.innerHeight && contactRect.bottom > 0,
      );
      const anotherDialogIsOpen = Boolean(document.querySelector('[role="dialog"]'));

      if (document.visibilityState !== "visible" || contactIsVisible || anotherDialogIsOpen) {
        timer = window.setTimeout(tryOpen, AUTO_OPEN_RETRY_MS);
        return;
      }

      changeOpen(true);
    };

    timer = window.setTimeout(tryOpen, AUTO_OPEN_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {visible && !open && (
        <Button
          data-quick-contact
          onClick={() => changeOpen(true)}
          className="fixed bottom-4 left-1/2 z-30 -translate-x-1/2 rounded-full bg-mosaic-deep px-5 font-extrabold shadow-lg hover:bg-mosaic-ocean md:left-auto md:right-6 md:bottom-6 md:translate-x-0"
        >
          <Sparkles />
          {t.button}
        </Button>
      )}
      <Sheet open={open} onOpenChange={changeOpen}>
        <SheetContent side={isMobile ? "bottom" : "right"} data-quick-panel className={isMobile ? "max-h-[88dvh] overflow-y-auto rounded-t-xl pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))]" : "w-full overflow-y-auto sm:max-w-sm"}>
          <SheetTitle className="pr-8 font-display text-xl font-extrabold text-mosaic-deep">{t.title}</SheetTitle>
          <SheetDescription className="mt-2 leading-6">{t.text}</SheetDescription>
          <div className="mt-6 grid gap-3">
            <Button asChild className="bg-mosaic-leaf font-bold hover:bg-mosaic-deep">
              <a href={contactUrl("whatsapp", QUICK_INQUIRY[lang])} target="_blank" rel="noopener noreferrer"><MessageCircle />WhatsApp {CONTACTS.whatsappNumber}</a>
            </Button>
            <Button asChild variant="outline" className="font-bold">
              <a href={contactUrl("telegram", QUICK_INQUIRY[lang])} target="_blank" rel="noopener noreferrer"><Send />Telegram {CONTACTS.telegramHandle}</a>
            </Button>
            <Button variant="secondary" className="font-bold" onClick={() => { changeOpen(false); onOpenForm(); }}>{t.form}</Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
