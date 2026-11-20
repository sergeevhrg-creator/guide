import curralCover from "@/assets/sales/32-curral-das-freiras-textless-v1.webp";
import type { Lang } from "@/lib/i18n/lang";

type GeneratedTourCover = {
  src: string;
  alt: Record<Lang, string>;
  provenance: string;
};

// Original Madeira Mosaic illustrations generated for the site. They are deliberately
// textless so one cover can be paired with accessible, localized HTML copy in every locale.
export const generatedTourCovers: Record<string, GeneratedTourCover> = {
  curral: {
    src: curralCover,
    alt: {
      en: "Illustration of Curral das Freiras village enclosed by Madeira's mountain ridges",
      be: "Ілюстрацыя вёскі Curral das Freiras сярод горных хрыбтоў Мадэйры",
      uk: "Ілюстрація селища Curral das Freiras серед гірських хребтів Мадейри",
      ru: "Иллюстрация деревни Curral das Freiras среди горных хребтов Мадейры",
    },
    provenance: "Original AI-assisted Madeira Mosaic illustration, created 2026-11-11",
  },
};
