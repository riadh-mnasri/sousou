"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PROFILES } from "@/lib/profiles";
import { computeLevel } from "@/lib/gamification";
import { loadProfileState, type ProfileState } from "@/lib/storage";

export default function ParentsPage() {
  const t = useTranslations("parents");
  const [states, setStates] = useState<Record<string, ProfileState> | null>(null);

  useEffect(() => {
    const entries: Record<string, ProfileState> = {};
    for (const profile of PROFILES) {
      entries[profile.id] = loadProfileState(profile.id);
    }
    // localStorage is only available client-side; loading it after mount
    // (instead of during render) keeps the first paint matching SSR output.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStates(entries);
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <h1 className="font-heading text-2xl sm:text-3xl font-extrabold mb-2">{t("title")}</h1>
      <p className="text-foreground/60 mb-8">{t("subtitle")}</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {PROFILES.map((profile) => {
          const state = states?.[profile.id];
          const hasStarted = state && state.xp > 0;
          const level = state ? computeLevel(state.xp).level : 1;
          return (
            <div
              key={profile.id}
              className="rounded-3xl bg-card border-2 border-card-border p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full text-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${profile.color.from}, ${profile.color.to})`,
                  }}
                  aria-hidden
                >
                  {profile.emoji}
                </div>
                <p className="font-heading text-lg font-bold">{profile.name}</p>
              </div>

              {hasStarted && state ? (
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-foreground/60">{t("level")}</span>
                    <span className="font-bold">{level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/60">{t("streak")}</span>
                    <span className="font-bold">
                      {state.streak} {state.streak === 1 ? t("day") : t("days")}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/60">{t("piggyBank")}</span>
                    <span className="font-bold">{state.coins} 🪙</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/60">{t("badgesUnlocked")}</span>
                    <span className="font-bold">{state.badges.length}</span>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-foreground/50 mb-4">{t("noActivity")}</p>
              )}

              <Link
                href={`/profil/${profile.id}`}
                className="block text-center rounded-full text-sm font-bold text-white py-2"
                style={{ backgroundColor: profile.color.solid }}
              >
                {t("viewProfile")}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
