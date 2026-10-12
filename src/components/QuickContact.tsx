import { useEffect, useState } from "react";
import { MessageCircle, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { CONTACTS } from "@/lib/contacts";
import { useLang } from "@/lib/i18n/lang";

const copy = {
  ru: { button: "Помочь выбрать маршрут", title: "Помочь выбрать маршрут", text: "Напишите в WhatsApp или Telegram, либо заполните короткую форму — я помогу подобрать день под ваш темп и погоду.", form: "Заполнить форму" },
  en: { button: "Help me choose a route", title: "Help me choose a route", text: "Message me on WhatsApp or Telegram, or fill in the short form — I’ll help you pick a day that suits your pace and the weather.", form: "Fill in the form" },
  be: { button: "Дапамагчы выбраць маршрут", title: "Дапамагчы выбраць маршрут", text: "Напішыце ў WhatsApp ці Telegram або запоўніце кароткую форму.", form: "Запоўніць форму" },
  uk: { button: "Допомогти обрати маршрут", title: "Допомогти обрати маршрут", text: "Напишіть у WhatsApp чи Telegram або заповніть коротку форму.", form: "Заповнити форму" },
};

export function QuickContact({ onOpenForm }: { onOpenForm: () => void }) {
  const { lang } = useLang();
  const t = copy[lang];
  const isMobile = useIsMobile();
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

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

  return (
    <>
      {visible && !open && (
        <Button
          data-quick-contact
          onClick={() => setOpen(true)}
          className="fixed bottom-4 left-1/2 z-30 -translate-x-1/2 rounded-full bg-mosaic-deep px-5 font-extrabold shadow-lg hover:bg-mosaic-ocean md:left-auto md:right-6 md:bottom-6 md:translate-x-0"
        >
          <Sparkles />
          {t.button}
        </Button>
      )}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side={isMobile ? "bottom" : "right"} data-quick-panel className={isMobile ? "rounded-t-xl" : "w-full sm:max-w-sm"}>
          <SheetTitle className="pr-8 font-display text-xl font-extrabold text-mosaic-deep">{t.title}</SheetTitle>
          <SheetDescription className="mt-2 leading-6">{t.text}</SheetDescription>
          <div className="mt-6 grid gap-3">
            <Button asChild className="bg-mosaic-leaf font-bold hover:bg-mosaic-deep">
              <a href={CONTACTS.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle />WhatsApp {CONTACTS.whatsappNumber}</a>
            </Button>
            <Button asChild variant="outline" className="font-bold">
              <a href={CONTACTS.telegramUrl} target="_blank" rel="noopener noreferrer"><Send />Telegram {CONTACTS.telegramHandle}</a>
            </Button>
            <Button variant="secondary" className="font-bold" onClick={() => { setOpen(false); onOpenForm(); }}>{t.form}</Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
