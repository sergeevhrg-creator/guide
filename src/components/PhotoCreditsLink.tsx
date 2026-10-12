import { Link } from "@tanstack/react-router";

import { useLang } from "@/lib/i18n/lang";

const labels = {
  en: "Photo credits",
  be: "Аўтары фотаздымкаў",
  uk: "Автори фотографій",
  ru: "Фотографии",
} as const;

export function PhotoCreditsLink({ className = "" }: { className?: string }) {
  const { lang } = useLang();
  return (
    <Link
      to="/photo-credits"
      className={`underline underline-offset-4 hover:text-primary-foreground ${className}`}
    >
      {labels[lang]}
    </Link>
  );
}
