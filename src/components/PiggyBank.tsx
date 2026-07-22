export function PiggyBank({
  coins,
  milestone,
  color,
}: {
  coins: number;
  milestone: number;
  color: string;
}) {
  const previousMilestone = milestone > 100 ? milestone - (milestone <= 500 ? 400 : 500) : 0;
  const range = milestone - previousMilestone;
  const progress = Math.min(100, Math.max(0, ((coins - previousMilestone) / range) * 100));

  return (
    <div
      className="relative mx-auto flex h-36 w-36 items-center justify-center rounded-full"
      style={{
        background: `conic-gradient(${color} ${progress}%, #f0e3cc ${progress}% 100%)`,
      }}
    >
      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-card text-6xl animate-piggy-bounce">
        🐱
      </div>
    </div>
  );
}
