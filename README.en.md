# SouSou

A playful app that teaches kids how to manage money through daily missions, a virtual piggy bank that grows, and unlockable badges, without ever using real money or real-world rewards as a motivation mechanic.

## Why this app

SouSou offers 3 child profiles (tailored by age group: 6, 8, and 11 years old), each with different pedagogical content:

- **Explorer (age 6)**: what money is for, the piggy bank, needs vs wants
- **Adventurer (age 8)**: comparing prices, simple budgeting, avoiding impulse buys
- **Strategist (age 11)**: income vs expenses, the concept of interest, monthly budgets, financial priorities

Each day, the child can complete a 6-question mission. Correct answers fill their virtual piggy bank (SouSous) and level up their progress and play streak. Badges reward milestones (streaks, a full piggy bank, perfect rounds, levels).

## Design choice: no real-world rewards

All motivation relies on virtual progression (SouSous, levels, badges) rather than real pocket money or automated material rewards, to avoid the overjustification effect and keep the joy of learning intact.

## Tech stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- next-intl (bilingual French/English interface)
- Local persistence via `localStorage` (no database, no data sent to a server)

## Local development

```bash
npm install
npm run dev
```

The app is served at [http://localhost:3939](http://localhost:3939).

## Tests

No automated test suite yet (simple pedagogical content and game logic, verified manually in the browser).

## Deployment

Planned deployment on Vercel, linked to the `riadh-mnasri/sousou` GitHub repo.

## Progress

- [x] 3 child profiles with age-appropriate content
- [x] Daily missions (quizzes) with pedagogical explanations
- [x] Virtual piggy bank, levels, play streak, badges
- [x] Parents area (read-only, no intrusive tracking)
- [x] Bilingual French / English interface
- [ ] Custom favicon and app icon
- [ ] More pedagogical content (additional questions per age group)

## Copyright

© 2026 Riadh MNASRI
