import type { ImageId } from "@/lib/image-credits";
import { imageCredits } from "@/lib/image-credits";
import pavelPortrait from "@/assets/posters/pavel-original.jpg.asset.json";

export const pavelImages = { portrait: pavelPortrait.url };

// A photo must document an identifiable stop, not merely the island or a promotional collage.
export const tourPhotoNeeds: Record<string, Record<"en" | "be" | "uk" | "ru", string>> = {
  wine: {
    en: "Photo needed: Quinta do Barbusano vineyard, São Vicente",
    be: "Патрэбнае фота: вінаграднік Quinta do Barbusano, Сан-Вісэнтэ",
    uk: "Потрібне фото: виноградник Quinta do Barbusano, Сан-Вісенте",
    ru: "Нужно фото: виноградники Quinta do Barbusano, Сан-Висенте",
  },
};

export function tourVisual(id: string, neutral: ImageId) {
  return tourPhotoNeeds[id] ? null : imageCredits[neutral];
}
