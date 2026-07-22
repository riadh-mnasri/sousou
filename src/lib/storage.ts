import { computeLevel, updateStreak, type StreakState } from "./gamification";

export type ProfileState = {
  xp: number;
  coins: number;
  totalCoinsEarned: number;
  streak: number;
  lastPlayedDate: string | null;
  jokerUsedWeek: string | null;
  badges: string[];
  lastMissionQuestionIds: string[];
};

const SELECTED_PROFILE_KEY = "sousou:selected-profile";

function stateKey(profileId: string): string {
  return `sousou:state:${profileId}`;
}

export function createEmptyState(): ProfileState {
  return {
    xp: 0,
    coins: 0,
    totalCoinsEarned: 0,
    streak: 0,
    lastPlayedDate: null,
    jokerUsedWeek: null,
    badges: [],
    lastMissionQuestionIds: [],
  };
}

export function loadProfileState(profileId: string): ProfileState {
  if (typeof window === "undefined") return createEmptyState();
  try {
    const raw = window.localStorage.getItem(stateKey(profileId));
    if (!raw) return createEmptyState();
    return { ...createEmptyState(), ...JSON.parse(raw) };
  } catch {
    return createEmptyState();
  }
}

export function saveProfileState(profileId: string, state: ProfileState): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(stateKey(profileId), JSON.stringify(state));
}

export function getSelectedProfileId(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(SELECTED_PROFILE_KEY);
}

export function setSelectedProfileId(profileId: string): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(SELECTED_PROFILE_KEY, profileId);
}

export function applyMissionResult(
  profileId: string,
  correctCount: number,
  totalCount: number,
  earnedXp: number,
  earnedCoins: number,
  questionIds: string[]
): ProfileState {
  const state = loadProfileState(profileId);
  const streakInput: StreakState = {
    streak: state.streak,
    lastPlayedDate: state.lastPlayedDate,
    jokerUsedWeek: state.jokerUsedWeek,
  };
  const nextStreak = updateStreak(streakInput);

  const next: ProfileState = {
    ...state,
    xp: state.xp + earnedXp,
    coins: state.coins + earnedCoins,
    totalCoinsEarned: state.totalCoinsEarned + earnedCoins,
    streak: nextStreak.streak,
    lastPlayedDate: nextStreak.lastPlayedDate,
    jokerUsedWeek: nextStreak.jokerUsedWeek,
    lastMissionQuestionIds: questionIds,
  };

  const newBadges = new Set(next.badges);
  if (next.totalCoinsEarned > 0 || correctCount > 0) newBadges.add("premiere-mission");
  if (next.streak >= 3) newBadges.add("streak-3");
  if (next.streak >= 7) newBadges.add("streak-7");
  if (next.streak >= 30) newBadges.add("streak-30");
  if (next.coins >= 100) newBadges.add("tirelire-100");
  if (next.coins >= 500) newBadges.add("tirelire-500");
  if (totalCount > 0 && correctCount === totalCount) newBadges.add("sans-faute");
  const level = computeLevel(next.xp).level;
  if (level >= 5) newBadges.add("niveau-5");
  if (level >= 10) newBadges.add("niveau-10");
  next.badges = Array.from(newBadges);

  saveProfileState(profileId, next);
  return next;
}
