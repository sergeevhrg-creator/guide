import { Bike, Flag, Sailboat, Waves, Wind } from "lucide-react";
import type { PartnerVisual } from "@/lib/partner-content";

const icons = {
  water: Waves,
  speed: Flag,
  sail: Sailboat,
  balance: Waves,
  golf: Flag,
  air: Wind,
  depth: Waves,
  canyon: Waves,
  kayak: Sailboat,
  surf: Waves,
} as const;
const colors = [
  "bg-mosaic-ocean",
  "bg-mosaic-roof",
  "bg-mosaic-hydrangea",
  "bg-mosaic-leaf",
  "bg-mosaic-deep",
];

export function ActivityGraphic({ visual, index }: { visual: PartnerVisual; index: number }) {
  const Icon = icons[visual] ?? Bike;
  return (
    <div
      className={`relative grid aspect-[16/9] place-items-center overflow-hidden ${colors[index % colors.length]}`}
      aria-hidden
    >
      <span className="absolute -right-8 -top-8 h-28 w-28 rounded-full border-[18px] border-primary-foreground/15" />
      <span className="absolute -bottom-8 -left-6 h-24 w-40 rotate-12 bg-primary-foreground/10" />
      <Icon className="relative h-12 w-12 text-primary-foreground" strokeWidth={1.6} />
    </div>
  );
}
