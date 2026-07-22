"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import type { Profile } from "@/lib/profiles";
import { getQuestionsForTier, shuffleQuestionOptions, type Question } from "@/lib/content/questions";
import { shuffle } from "@/lib/shuffle";
import {
  COINS_PER_CORRECT,
  PERFECT_BONUS_COINS,
  PERFECT_BONUS_XP,
  XP_PER_CORRECT,
} from "@/lib/gamification";
import { applyMissionResult, loadProfileState } from "@/lib/storage";
import { getBadge } from "@/lib/badges";
import { BadgeChip } from "@/components/BadgeChip";
import { CatMascot } from "@/components/CatMascot";
import { Confetti } from "@/components/Confetti";

const QUESTIONS_PER_MISSION = 6;

export function MissionFlow({ profile }: { profile: Profile }) {
  const t = useTranslations("mission");
  const locale = useLocale() as "fr" | "en";
  const router = useRouter();

  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [done, setDone] = useState(false);
  const [newBadgeIds, setNewBadgeIds] = useState<string[]>([]);
  const [result, setResult] = useState<{ coins: number; xp: number } | null>(null);

  useEffect(() => {
    // The question order is randomized on purpose; picking it after mount
    // (instead of during render) avoids a server/client hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setQuestions(
      shuffle(getQuestionsForTier(profile.tier))
        .slice(0, QUESTIONS_PER_MISSION)
        .map(shuffleQuestionOptions)
    );
  }, [profile.tier]);

  if (!questions) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <CatMascot mood="idle" className="h-20 w-20 mx-auto" />
      </div>
    );
  }

  const current = questions[index];
  const isLast = index === questions.length - 1;
  const isCorrect = selected !== null && selected === current.correctIndex;

  function handleSelect(optionIndex: number) {
    if (selected !== null) return;
    setSelected(optionIndex);
    if (optionIndex === current.correctIndex) {
      setCorrectCount((c) => c + 1);
    }
  }

  function handleNext() {
    if (!isLast) {
      setIndex((i) => i + 1);
      setSelected(null);
      return;
    }
    finishMission();
  }

  function finishMission() {
    const missionQuestions = questions!;
    const finalCorrect = correctCount;
    const perfect = finalCorrect === missionQuestions.length;
    const earnedXp = finalCorrect * XP_PER_CORRECT + (perfect ? PERFECT_BONUS_XP : 0);
    const earnedCoins = finalCorrect * COINS_PER_CORRECT + (perfect ? PERFECT_BONUS_COINS : 0);
    const before = loadProfileState(profile.id);
    const after = applyMissionResult(
      profile.id,
      finalCorrect,
      missionQuestions.length,
      earnedXp,
      earnedCoins,
      missionQuestions.map((q) => q.id)
    );
    setNewBadgeIds(after.badges.filter((id) => !before.badges.includes(id)));
    setResult({ coins: earnedCoins, xp: earnedXp });
    setDone(true);
  }

  if (done && result) {
    const perfect = correctCount === questions.length;
    return (
      <div className="max-w-xl mx-auto px-4 py-12 text-center animate-pop-in">
        <Confetti pieces={perfect ? 48 : 28} />
        <CatMascot mood="excited" className="h-28 w-28 mx-auto mb-4" />
        <h1 className="font-heading text-2xl sm:text-3xl font-extrabold mb-6">
          {t("recapTitle")}
        </h1>
        <div className="rounded-3xl bg-card border-2 border-card-border p-6 mb-6 grid grid-cols-3 gap-4">
          <div>
            <p className="text-2xl font-extrabold text-coral">{correctCount}/{questions.length}</p>
            <p className="text-xs text-foreground/60 font-semibold">{t("correctAnswers")}</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-gold-dark">+{result.coins}</p>
            <p className="text-xs text-foreground/60 font-semibold">{t("coinsEarned")}</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-mint-dark">+{result.xp}</p>
            <p className="text-xs text-foreground/60 font-semibold">{t("xpEarned")}</p>
          </div>
        </div>

        {perfect && (
          <p className="font-semibold text-mint-dark mb-4">{t("perfect")}</p>
        )}

        {newBadgeIds.length > 0 && (
          <div className="mb-8">
            <p className="font-heading font-bold mb-3">{t("newBadge")}</p>
            <div className="flex justify-center gap-3 flex-wrap">
              {newBadgeIds.map((id) => {
                const badge = getBadge(id);
                if (!badge) return null;
                return <BadgeChip key={id} badge={badge} unlocked />;
              })}
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => router.push(`/profil/${profile.id}`)}
          className="w-full rounded-2xl bg-coral hover:bg-coral-dark transition-colors text-white font-heading text-lg font-bold py-4 cursor-pointer"
        >
          {t("backToDashboard")}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-8 sm:py-12">
      <div className="mb-6">
        <p className="text-sm font-semibold text-foreground/60 mb-2">
          {t("question")} {index + 1} {t("of")} {questions.length}
        </p>
        <div className="h-2 w-full rounded-full bg-card-border overflow-hidden">
          <div
            className="h-full rounded-full bg-coral transition-all"
            style={{ width: `${((index + (selected !== null ? 1 : 0)) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="rounded-3xl bg-card border-2 border-card-border p-6 mb-6">
        <p className="font-heading text-xl font-bold mb-6">{current.prompt[locale]}</p>
        <div className="flex flex-col gap-3">
          {current.options.map((option, i) => {
            const isSelected = selected === i;
            const showCorrect = selected !== null && i === current.correctIndex;
            const showWrong = isSelected && i !== current.correctIndex;
            return (
              <button
                key={i}
                type="button"
                onClick={() => handleSelect(i)}
                disabled={selected !== null}
                className={`text-left rounded-2xl border-2 px-4 py-3 font-semibold transition-colors ${
                  showCorrect
                    ? "border-mint bg-mint/15 text-mint-dark"
                    : showWrong
                      ? "border-coral bg-coral/10 text-coral-dark"
                      : "border-card-border hover:border-sky/60"
                } ${selected === null ? "cursor-pointer" : "cursor-default"}`}
              >
                {option[locale]}
              </button>
            );
          })}
        </div>
      </div>

      {selected !== null && (
        <div
          className={`flex items-start gap-3 rounded-2xl p-4 mb-6 animate-pop-in ${
            isCorrect ? "bg-mint/15 border-2 border-mint" : "bg-coral/10 border-2 border-coral"
          }`}
        >
          <CatMascot
            mood={isCorrect ? "happy" : "thinking"}
            className="h-12 w-12 shrink-0"
          />
          <div>
            <p className={`font-heading font-bold mb-1 ${isCorrect ? "text-mint-dark" : "text-coral-dark"}`}>
              {isCorrect ? t("correct") : t("incorrect")}
            </p>
            <p className="text-sm text-foreground/80">{current.explanation[locale]}</p>
          </div>
        </div>
      )}

      {selected !== null && (
        <button
          type="button"
          onClick={handleNext}
          className="w-full rounded-2xl bg-sky hover:opacity-90 transition-opacity text-white font-heading text-lg font-bold py-4 cursor-pointer"
        >
          {isLast ? t("finish") : t("next")}
        </button>
      )}
    </div>
  );
}
