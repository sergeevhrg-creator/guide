import type { Lang } from "@/lib/i18n/lang";

export type LocalizedText = Record<Lang, string>;

export type GuideSource = {
  url: string;
  checkedOn: string;
};

export interface GuideCard {
  id: string;
  name: string;
  area: LocalizedText;
  description: LocalizedText;
  benefit: LocalizedText;
  fit: LocalizedText;
  practical: LocalizedText;
  source: GuideSource;
}

export interface GuideTab {
  id: string;
  title: LocalizedText;
  intro: LocalizedText;
  cards: GuideCard[];
  disclaimer?: LocalizedText;
}

export const localized = (
  en: string,
  be: string,
  uk: string,
  ru: string,
): LocalizedText => ({ en, be, uk, ru });

export const VERIFIED_ON = "2026-09-17";