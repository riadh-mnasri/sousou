type Mood = "idle" | "happy" | "excited" | "thinking";

export function CatMascot({
  mood = "idle",
  className,
}: {
  mood?: Mood;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="SouSou le chat"
    >
      {/* ears */}
      <path d="M 45 75 L 60 20 L 92 68 Z" fill="#F0A93C" />
      <path d="M 155 75 L 140 20 L 108 68 Z" fill="#F0A93C" />
      <path d="M 55 68 L 64 36 L 82 64 Z" fill="#FFD9B8" />
      <path d="M 145 68 L 136 36 L 118 64 Z" fill="#FFD9B8" />

      {/* head */}
      <circle cx="100" cy="112" r="72" fill="#FFC257" />

      {/* cheeks blush */}
      <ellipse cx="52" cy="128" rx="14" ry="9" fill="#FF8C7A" opacity="0.55" />
      <ellipse cx="148" cy="128" rx="14" ry="9" fill="#FF8C7A" opacity="0.55" />

      {/* whiskers */}
      <g stroke="#B9761F" strokeWidth="3" strokeLinecap="round">
        <path d="M 38 118 L 6 112" />
        <path d="M 38 128 L 6 130" />
        <path d="M 38 138 L 8 148" />
        <path d="M 162 118 L 194 112" />
        <path d="M 162 128 L 194 130" />
        <path d="M 162 138 L 192 148" />
      </g>

      {mood === "excited" && (
        <g stroke="#FFC257" strokeWidth="6" strokeLinecap="round" opacity="0.9">
          <path d="M 40 40 L 28 26" />
          <path d="M 160 40 L 172 26" />
          <path d="M 100 24 L 100 8" />
        </g>
      )}

      {/* eyes */}
      {mood === "happy" && (
        <g stroke="#3A2B18" strokeWidth="7" strokeLinecap="round" fill="none">
          <path d="M 62 108 Q 76 92 90 108" />
          <path d="M 110 108 Q 124 92 138 108" />
        </g>
      )}
      {mood === "idle" && (
        <g>
          <circle cx="76" cy="106" r="15" fill="#3A2B18" />
          <circle cx="124" cy="106" r="15" fill="#3A2B18" />
          <circle cx="71" cy="100" r="4.5" fill="#fff" />
          <circle cx="119" cy="100" r="4.5" fill="#fff" />
        </g>
      )}
      {mood === "thinking" && (
        <g>
          <circle cx="76" cy="100" r="14" fill="#3A2B18" />
          <circle cx="124" cy="104" r="14" fill="#3A2B18" />
          <circle cx="79" cy="94" r="4" fill="#fff" />
          <circle cx="127" cy="99" r="4" fill="#fff" />
        </g>
      )}
      {mood === "excited" && (
        <g>
          <circle cx="76" cy="106" r="18" fill="#3A2B18" />
          <circle cx="124" cy="106" r="18" fill="#3A2B18" />
          <circle cx="82" cy="98" r="6" fill="#fff" />
          <circle cx="130" cy="98" r="6" fill="#fff" />
        </g>
      )}

      {/* eyebrow for thinking */}
      {mood === "thinking" && (
        <path d="M 62 78 Q 78 68 92 76" fill="none" stroke="#3A2B18" strokeWidth="5" strokeLinecap="round" />
      )}

      {/* nose */}
      <path d="M 93 122 L 107 122 L 100 132 Z" fill="#FF8C7A" />

      {/* mouth */}
      {mood === "idle" && (
        <path d="M 100 132 Q 100 142 88 140 M 100 132 Q 100 142 112 140" fill="none" stroke="#3A2B18" strokeWidth="5" strokeLinecap="round" />
      )}
      {mood === "happy" && (
        <path d="M 78 134 Q 100 158 122 134" fill="none" stroke="#3A2B18" strokeWidth="6" strokeLinecap="round" />
      )}
      {mood === "thinking" && (
        <path d="M 90 140 Q 100 136 110 140" fill="none" stroke="#3A2B18" strokeWidth="5" strokeLinecap="round" />
      )}
      {mood === "excited" && (
        <path d="M 74 134 Q 100 168 126 134 Q 100 150 74 134 Z" fill="#7A2E1D" stroke="#3A2B18" strokeWidth="5" strokeLinejoin="round" />
      )}
    </svg>
  );
}
