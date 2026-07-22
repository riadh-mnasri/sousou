"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import type { Profile } from "@/lib/profiles";
import { computeLevel } from "@/lib/gamification";
import { loadProfileState, setSelectedProfileId, type ProfileState } from "@/lib/storage";

export function ProfileCard({ profile }: { profile: Profile }) {
  const t = useTranslations("home");
  const router = useRouter();
  const [state, setState] = useState<ProfileState | null>(null);

  useEffect(() => {
    // localStorage is only available client-side; loading it after mount
    // (instead of during render) keeps the first paint matching SSR output.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState(loadProfileState(profile.id));
  }, [profile.id]);

  const level = state ? computeLevel(state.xp).level : 1;

  function handleSelect() {
    setSelectedProfileId(profile.id);
    router.push(`/profil/${profile.id}`);
  }

  return (
    <button
      type="button"
      onClick={handleSelect}
      className="group relative rounded-3xl bg-card border-2 border-card-border p-6 text-center transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
      style={{ boxShadow: `0 6px 0 ${profile.color.solid}33` }}
    >
      <div
        className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full text-4xl"
        style={{
          background: `linear-gradient(135deg, ${profile.color.from}, ${profile.color.to})`,
        }}
        aria-hidden
      >
        {profile.emoji}
      </div>
      <p className="font-heading text-xl font-bold text-foreground">{profile.name}</p>
      <p className="text-sm text-foreground/60 mb-3">
        {profile.age} {t("yearsOld")}
      </p>
      {state && state.xp > 0 && (
        <p className="text-xs font-semibold text-foreground/50 mb-3">
          {t("levelShort")} {level} · {state.coins} 🪙
        </p>
      )}
      <span
        className="inline-block rounded-full px-4 py-1.5 text-sm font-bold text-white"
        style={{ backgroundColor: profile.color.solid }}
      >
        {state && state.xp > 0 ? t("continue") : t("play")}
      </span>
    </button>
  );
}
