import logo from "@/assets/brand/madeira-mosaic-logo-transparent-v2.png.asset.json";

export function MosaicLogo({ compact = false, onDark = false }: { compact?: boolean; onDark?: boolean }) {
  return (
    <span className={onDark ? "inline-flex" : "inline-flex"}>
      <img
        src={logo.url}
        alt="Madeira Mosaic"
        width="1920"
        height="641"
        className={`block h-auto w-full object-contain ${compact ? "max-w-32 sm:max-w-40" : "max-w-28 sm:max-w-40"}`}
      />
    </span>
  );
}