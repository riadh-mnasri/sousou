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
    label: { fr: "Première pièce", en: "First coin" },
    description: {
      fr: "Termine ta toute première mission.",
      en: "Complete your very first mission.",
    },
  },
  {
    id: "streak-3",
    emoji: "🔥",
    label: { fr: "3 jours de suite", en: "3-day streak" },
    description: {
      fr: "Joue 3 jours d'affilée.",
      en: "Play 3 days in a row.",
    },
  },
  {
    id: "streak-7",
    emoji: "⭐",
    label: { fr: "Une semaine entière", en: "Full week" },
    description: {
      fr: "Joue 7 jours d'affilée.",
      en: "Play 7 days in a row.",
    },
  },
  {
    id: "streak-14",
    emoji: "🌈",
    label: { fr: "Deux semaines", en: "Two weeks" },
    description: {
      fr: "Joue 14 jours d'affilée.",
      en: "Play 14 days in a row.",
    },
  },
  {
    id: "streak-30",
    emoji: "🏆",
    label: { fr: "Un mois entier", en: "Full month" },
    description: {
      fr: "Joue 30 jours d'affilée.",
      en: "Play 30 days in a row.",
    },
  },
  {
    id: "streak-100",
    emoji: "👑",
    label: { fr: "Cent jours", en: "100 days" },
    description: {
      fr: "Joue 100 jours d'affilée.",
      en: "Play 100 days in a row.",
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
    label: { fr: "Petit trésor", en: "Little treasure" },
    description: {
      fr: "Atteins 500 SouSous dans ta tirelire.",
      en: "Reach 500 SouSous in your piggy bank.",
    },
  },
  {
    id: "tirelire-1000",
    emoji: "💎",
    label: { fr: "Grand trésor", en: "Big treasure" },
    description: {
      fr: "Atteins 1000 SouSous dans ta tirelire.",
      en: "Reach 1000 SouSous in your piggy bank.",
    },
  },
  {
    id: "tirelire-2000",
    emoji: "🏦",
    label: { fr: "Coffre-fort", en: "Vault" },
    description: {
      fr: "Atteins 2000 SouSous dans ta tirelire.",
      en: "Reach 2000 SouSous in your piggy bank.",
    },
  },
  {
    id: "sans-faute",
    emoji: "🎯",
    label: { fr: "Sans faute", en: "Perfect round" },
    description: {
      fr: "Réponds juste à toutes les questions d'une mission.",
      en: "Answer every question right in one mission.",
    },
  },
  {
    id: "perfect-5",
    emoji: "💯",
    label: { fr: "Cinq sans-faute", en: "Five perfect rounds" },
    description: {
      fr: "Réussis 5 missions sans aucune erreur.",
      en: "Complete 5 missions with no mistakes at all.",
    },
  },
  {
    id: "missions-10",
    emoji: "📚",
    label: { fr: "Petit habitué", en: "Getting into it" },
    description: {
      fr: "Termine 10 missions.",
      en: "Complete 10 missions.",
    },
  },
  {
    id: "missions-50",
    emoji: "🎓",
    label: { fr: "Grand habitué", en: "Regular" },
    description: {
      fr: "Termine 50 missions.",
      en: "Complete 50 missions.",
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
  {
    id: "niveau-15",
    emoji: "🌠",
    label: { fr: "Niveau 15", en: "Level 15" },
    description: {
      fr: "Atteins le niveau 15.",
      en: "Reach level 15.",
    },
  },
  {
    id: "niveau-20",
    emoji: "🎖️",
    label: { fr: "Niveau 20", en: "Level 20" },
    description: {
      fr: "Atteins le niveau 20.",
      en: "Reach level 20.",
    },
  },
];

export function getBadge(id: string): Badge | undefined {
  return BADGES.find((badge) => badge.id === id);
}
