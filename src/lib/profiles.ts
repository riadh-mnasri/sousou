export type Tier = "explorateur" | "aventurier" | "strategiste";

export type Profile = {
  id: string;
  name: string;
  age: number;
  tier: Tier;
  emoji: string;
  color: {
    from: string;
    to: string;
    solid: string;
  };
};

export const PROFILES: Profile[] = [
  {
    id: "syma",
    name: "Syma",
    age: 6,
    tier: "explorateur",
    emoji: "🐣",
    color: { from: "#FFD166", to: "#FFB703", solid: "#F59E0B" },
  },
  {
    id: "sany",
    name: "Sany",
    age: 8,
    tier: "aventurier",
    emoji: "🦊",
    color: { from: "#FF9F7A", to: "#FF6B6B", solid: "#F97362" },
  },
  {
    id: "seji",
    name: "Seji",
    age: 11,
    tier: "strategiste",
    emoji: "🦉",
    color: { from: "#7BDFF2", to: "#3FC1C9", solid: "#1FAAA6" },
  },
];

export function getProfile(id: string | null | undefined): Profile | undefined {
  return PROFILES.find((profile) => profile.id === id);
}
