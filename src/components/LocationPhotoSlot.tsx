import type { ImageId } from "@/lib/image-credits";
import { imageCredits } from "@/lib/image-credits";
import { useLang } from "@/lib/i18n/lang";

export function LocationPhotoSlot({
  imageId,
  className = "aspect-[16/9]",
}: {
  imageId: ImageId;
  className?: string;
}) {
  const { lang } = useLang();
  const image = imageCredits[imageId];

  return (
    <img
      src={image.src}
      alt={image.alt[lang]}
      className={`block w-full object-cover ${className}`}
      loading={className === "h-full" ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
