export const XP_PER_CORRECT = 10;
export const COINS_PER_CORRECT = 5;
export const PERFECT_BONUS_COINS = 20;
export const PERFECT_BONUS_XP = 15;

export function xpForLevelStart(level: number): number {
  if (level <= 1) return 0;
  let total = 0;
  for (let l = 1; l < level; l++) {
    total += 60 + (l - 1) * 25;
  }
  return total;
}

export function computeLevel(xp: number): {
  level: number;
  xpIntoLevel: number;
  xpForNextLevel: number;
} {
  let level = 1;
  while (xpForLevelStart(level + 1) <= xp) {
    level++;
  }
  const start = xpForLevelStart(level);
  const nextStart = xpForLevelStart(level + 1);
  return {
    level,
    xpIntoLevel: xp - start,
    xpForNextLevel: nextStart - start,
  };
}

export function nextPiggyMilestone(coins: number): number {
  const milestones = [100, 500, 1000, 1500, 2000, 2500, 3000];
  const found = milestones.find((milestone) => milestone > coins);
  if (found) return found;
  return Math.ceil((coins + 1) / 500) * 500;
}

export function toDateKey(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function isoWeekKey(date: Date): string {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${weekNo}`;
}

export type StreakState = {
  streak: number;
  lastPlayedDate: string | null;
  jokerUsedWeek: string | null;
};

export function updateStreak(
  prev: StreakState,
  today: Date = new Date()
): StreakState {
  const todayKey = toDateKey(today);
  if (prev.lastPlayedDate === todayKey) {
    return prev;
  }

  const currentWeek = isoWeekKey(today);
  const jokerAvailable = prev.jokerUsedWeek !== currentWeek;

  if (!prev.lastPlayedDate) {
    return { streak: 1, lastPlayedDate: todayKey, jokerUsedWeek: prev.jokerUsedWeek };
  }

  const last = new Date(prev.lastPlayedDate + "T00:00:00Z");
  const todayUtc = new Date(todayKey + "T00:00:00Z");
  const diffDays = Math.round((todayUtc.getTime() - last.getTime()) / 86400000);

  if (diffDays === 1) {
    return { streak: prev.streak + 1, lastPlayedDate: todayKey, jokerUsedWeek: prev.jokerUsedWeek };
  }

  if (diffDays === 2 && jokerAvailable) {
    return {
      streak: prev.streak + 1,
      lastPlayedDate: todayKey,
      jokerUsedWeek: currentWeek,
    };
  }

  return { streak: 1, lastPlayedDate: todayKey, jokerUsedWeek: prev.jokerUsedWeek };
}
