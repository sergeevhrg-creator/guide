import type { Lang } from "@/lib/i18n/lang";
import { salesTours } from "@/lib/sales";
import { tourPages } from "@/lib/tour-pages";
import type { IndexableGuideCategoryId } from "@/lib/guide-categories";

/** Tours that visit the places described in each indexable guide section (internal links for readers and search). */
export const guideRelatedTourIds: Record<IndexableGuideCategoryId, readonly string[]> = {
  beaches: ["family-west", "camara", "east-north", "cruise-two"],
  levadas: ["screen-free", "balcoes", "fanal", "east-north"],
  mountains: ["sunrise", "curral", "fanal", "balcoes"],
  churches: ["funchal", "east-north", "camara", "cruise-one"],
};

export const relatedToursHeading: Record<Lang, string> = {
  en: "Private tours to these places",
  be: "Экскурсіі па гэтых мясцінах",
  uk: "Екскурсії до цих місць",
  ru: "Экскурсии по этим местам",
};

export function relatedToursFor(categoryId: IndexableGuideCategoryId, lang: Lang) {
  return guideRelatedTourIds[categoryId].flatMap((id) => {
    const page = tourPages.find((item) => item.tourId === id);
    const tour = salesTours.find((item) => item.id === id);
    if (!page || !tour) return [];
    return [
      {
        id,
        href: `/tours/${page.slug}?lang=${lang}`,
        title: tour.title[lang],
        route: tour.route[lang],
      },
    ];
  });
}
