"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import type { Profile } from "@/lib/profiles";
import { computeLevel, nextPiggyMilestone, toDateKey } from "@/lib/gamification";
import { loadProfileState, type ProfileState } from "@/lib/storage";
import { BADGES } from "@/lib/badges";
import { PiggyBank } from "@/components/PiggyBank";
import { BadgeChip } from "@/components/BadgeChip";

export function Dashboard({ profile }: { profile: Profile }) {
  const t = useTranslations("dashboard");
  const router = useRouter();
  const [state, setState] = useState<ProfileState | null>(null);

  useEffect(() => {
    // localStorage is only available client-side; loading it after mount
    // (instead of during render) keeps the first paint matching SSR output.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState(loadProfileState(profile.id));
  }, [profile.id]);

  if (!state) {
    return <div className="max-w-3xl mx-auto px-4 py-16 text-center">…</div>;
  }

  const { level, xpIntoLevel, xpForNextLevel } = computeLevel(state.xp);
  const milestone = nextPiggyMilestone(state.coins);
  const playedToday = state.lastPlayedDate === toDateKey(new Date());
  const previewBadges = BADGES.slice(0, 4);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-full text-2xl"
            style={{
              background: `linear-gradient(135deg, ${profile.color.from}, ${profile.color.to})`,
            }}
            aria-hidden
          >
            {profile.emoji}
          </div>
          <div>
            <p className="font-heading text-xl font-bold">{profile.name}</p>
            <p className="text-sm text-foreground/60">
              {t("level")} {level}
            </p>
          </div>
        </div>
        <Link
          href="/"
          className="text-sm font-semibold text-foreground/60 hover:text-foreground underline"
        >
          {t("switchProfileCta")}
        </Link>
      </div>

      <div className="rounded-3xl bg-card border-2 border-card-border p-6 sm:p-8 text-center mb-6">
        <PiggyBank coins={state.coins} milestone={milestone} color={profile.color.solid} />
        <p className="font-heading text-2xl font-extrabold mt-4">
          {state.coins} {t("coins")}
        </p>
        <p className="text-sm text-foreground/60 mb-6">
          {milestone - state.coins} {t("untilMilestone")}
        </p>

        <div className="mb-2 flex justify-between text-xs font-semibold text-foreground/60">
          <span>
            {t("level")} {level}
          </span>
          <span>
            {xpIntoLevel}/{xpForNextLevel} {t("xpToNext")}
          </span>
        </div>
        <div className="h-3 w-full rounded-full bg-card-border overflow-hidden">
          <div
            className="h-full rounded-full bg-mint transition-all"
            style={{ width: `${Math.min(100, (xpIntoLevel / xpForNextLevel) * 100)}%` }}
          />
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-lg font-bold">
          <span aria-hidden>🔥</span>
          <span>
            {state.streak} {state.streak === 1 ? t("streakDay") : t("streakDays")}
          </span>
        </div>
      </div>

      {playedToday ? (
        <div className="rounded-2xl bg-mint/15 border-2 border-mint text-center py-4 px-4 font-semibold text-foreground mb-6">
          {t("playedToday")}
        </div>
      ) : (
        <button
          type="button"
          onClick={() => router.push(`/profil/${profile.id}/mission`)}
          className="w-full rounded-2xl bg-coral hover:bg-coral-dark transition-colors text-white font-heading text-lg font-bold py-4 mb-6 cursor-pointer shadow-[0_5px_0_rgba(0,0,0,0.15)] active:translate-y-0.5 active:shadow-none"
        >
          {t("startMission")}
        </button>
      )}

      <div className="rounded-3xl bg-card border-2 border-card-border p-6">
        <div className="flex items-center justify-between mb-4">
          <p className="font-heading text-lg font-bold">{t("badges")}</p>
          <Link
            href={`/profil/${profile.id}/badges`}
            className="text-sm font-semibold text-sky hover:underline"
          >
            {t("seeAllBadges")}
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {previewBadges.map((badge) => (
            <BadgeChip key={badge.id} badge={badge} unlocked={state.badges.includes(badge.id)} />
          ))}
        </div>
      </div>
    </div>
  );
}
