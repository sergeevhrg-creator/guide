import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { imageCredits } from "@/lib/image-credits";
import { useLang } from "@/lib/i18n/lang";

const labels = {
  en: ["Pause background motion", "Resume background motion"],
  be: ["Спыніць рух фону", "Аднавіць рух фону"],
  uk: ["Зупинити рух фону", "Відновити рух фону"],
  ru: ["Остановить движение фона", "Возобновить движение фона"],
} as const;

export function MadeiraHeroMotion() {
  const { lang } = useLang();
  const [playing, setPlaying] = useState(true);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const onVisibility = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <img
        src={imageCredits["pico-arieiro"].src}
        alt=""
        fetchPriority="high"
        width="1800"
        height="1200"
        className={`hero-photo h-full w-full object-cover object-center ${playing && visible ? "hero-photo-playing" : ""}`}
      />
      <Button
        type="button"
        variant="outline"
        size="icon"
        title={playing ? labels[lang][0] : labels[lang][1]}
        aria-label={playing ? labels[lang][0] : labels[lang][1]}
        aria-hidden="false"
        onClick={() => setPlaying((value) => !value)}
        className="absolute bottom-4 right-4 z-10 hidden border-primary-foreground/70 bg-mosaic-deep/50 text-primary-foreground hover:bg-mosaic-deep hover:text-primary-foreground motion-safe:md:inline-flex"
      >
        {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </Button>
    </div>
  );
}