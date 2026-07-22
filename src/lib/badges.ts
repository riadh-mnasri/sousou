export type Badge = {
  id: string;
  emoji: string;
  label: { fr: string; en: string };
  description: { fr: string; en: string };
};

export const BADGES: Badge[] = [
  {
    id: "premiere-mission",
    emoji: "🌱",
    label: { fr: "Premiere piece", en: "First coin" },
    description: {
      fr: "Termine ta toute premiere mission.",
      en: "Complete your very first mission.",
    },
  },
  {
    id: "streak-3",
    emoji: "🔥",
    label: { fr: "3 jours de suite", en: "3-day streak" },
    description: {
      fr: "Joue 3 jours d'affilee.",
      en: "Play 3 days in a row.",
    },
  },
  {
    id: "streak-7",
    emoji: "⭐",
    label: { fr: "Une semaine entiere", en: "Full week" },
    description: {
      fr: "Joue 7 jours d'affilee.",
      en: "Play 7 days in a row.",
    },
  },
  {
    id: "streak-30",
    emoji: "🏆",
    label: { fr: "Un mois entier", en: "Full month" },
    description: {
      fr: "Joue 30 jours d'affilee.",
      en: "Play 30 days in a row.",
    },
  },
  {
    id: "tirelire-100",
    emoji: "🐱",
    label: { fr: "Tirelire pleine", en: "Full piggy bank" },
    description: {
      fr: "Atteins 100 SouSous dans ta tirelire.",
      en: "Reach 100 SouSous in your piggy bank.",
    },
  },
  {
    id: "tirelire-500",
    emoji: "💰",
    label: { fr: "Petit tresor", en: "Little treasure" },
    description: {
      fr: "Atteins 500 SouSous dans ta tirelire.",
      en: "Reach 500 SouSous in your piggy bank.",
    },
  },
  {
    id: "sans-faute",
    emoji: "🎯",
    label: { fr: "Sans faute", en: "Perfect round" },
    description: {
      fr: "Reponds juste a toutes les questions d'une mission.",
      en: "Answer every question right in one mission.",
    },
  },
  {
    id: "niveau-5",
    emoji: "🚀",
    label: { fr: "Niveau 5", en: "Level 5" },
    description: {
      fr: "Atteins le niveau 5.",
      en: "Reach level 5.",
    },
  },
  {
    id: "niveau-10",
    emoji: "🌟",
    label: { fr: "Niveau 10", en: "Level 10" },
    description: {
      fr: "Atteins le niveau 10.",
      en: "Reach level 10.",
    },
  },
];

export function getBadge(id: string): Badge | undefined {
  return BADGES.find((badge) => badge.id === id);
}
