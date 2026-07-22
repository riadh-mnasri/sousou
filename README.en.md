# SouSou

A playful, bilingual web app that teaches kids how to manage money: daily missions, a virtual piggy bank, levels, a play streak, and unlockable badges, without ever using real money or real-world rewards as a motivation mechanic.

Copyright (c) 2026 Riadh MNASRI. All rights reserved.

**Live demo**: [sousou-iota.vercel.app](https://sousou-iota.vercel.app)

## Features

- **3 child profiles** tailored by age group, each with its own pedagogical path:
  - **Explorer (age 6)**: what money is for, the piggy bank, needs vs wants
  - **Adventurer (age 8)**: comparing prices, simple budgeting, avoiding impulse buys
  - **Strategist (age 11)**: income vs expenses, the concept of interest, monthly budgets, financial priorities
- **Daily missions**: 6 multiple-choice questions randomly drawn from the profile's question bank, each followed by a pedagogical explanation.
- **Virtual piggy bank**: correct answers fill the piggy bank (SouSous) toward visual milestones (a progress ring).
- **Progression**: levels with an increasing XP curve, a play streak with one tolerated joker day per week.
- **Badges**: milestones to unlock (first mission, 3/7/30-day streaks, full piggy bank, perfect round, levels 5 and 10).
- **Parents area**: a read-only overview of all 3 profiles (level, streak, piggy bank, badges), with no intrusive tracking.
- **Bilingual**: the full interface exists in French and English, switch instantly from the header.

## Design choice: no real-world rewards

All motivation relies on virtual progression (SouSous, levels, badges) rather than real pocket money or automated material rewards, to avoid the overjustification effect and keep the joy of learning intact. If a real-world reward should ever exist, it should remain a one-off decision made by the parents, outside the game engine.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- [next-intl](https://next-intl.dev) for the bilingual French/English interface
- Local persistence via `localStorage` (no database, no data sent to a server)

## Local development

```bash
npm install
npm run dev
```

The app is served at [http://localhost:3939](http://localhost:3939).

No environment variables are required: all data (profiles, progress, badges) is stored locally in the browser.

## Available scripts

| Command         | Description                                 |
| ---------------- | -------------------------------------------- |
| `npm run dev`     | Development server (Turbopack, port 3939)    |
| `npm run build`   | Production build                             |
| `npm start`       | Runs the production build                    |
| `npm run lint`    | Lints the code with ESLint                   |

## Tests

No automated test suite yet: the pedagogical content and game logic (levels, streaks, badges) are simple and verified manually in the browser. The build (`npm run build`) acts as a type safety net (strict TypeScript) before every deployment.

## Architecture

```
src/
  app/
    [locale]/
      layout.tsx              header, footer, i18n provider
      page.tsx                home: child profile picker
      profil/[profileId]/
        page.tsx               dashboard (piggy bank, level, streak, badges)
        mission/page.tsx        daily mission (quiz)
        badges/page.tsx         full badges grid
      parents/page.tsx         parents area (read-only)
  components/                 reusable UI (Header, Dashboard, PiggyBank, MissionFlow, ...)
  i18n/                        next-intl configuration (routing, navigation, request)
  lib/
    profiles.ts                the 3 child profiles and their age groups
    content/questions.ts       bilingual question bank, by age group
    gamification.ts            levels, play streaks, piggy bank milestones
    badges.ts                  badge definitions
    storage.ts                 reading/writing progress in localStorage
  proxy.ts                     locale routing (fr/en)
messages/
  fr.json, en.json             UI copy (outside the pedagogical content)
```

## Deployment

Deployed on Vercel, linked to the `riadh-mnasri/sousou` GitHub repo (automatic deployment on every push to `main`).

```bash
vercel --prod
```

## Progress

- [x] 3 child profiles with age-appropriate content
- [x] Daily missions (quizzes) with pedagogical explanations
- [x] Virtual piggy bank, levels, play streak, badges
- [x] Parents area (read-only, no intrusive tracking)
- [x] Bilingual French / English interface
- [x] Production deployment on Vercel
- [ ] Custom favicon and app icon
- [ ] More pedagogical content (additional questions per age group)

## License

Personal project, not intended for redistribution. All rights reserved, Riadh MNASRI.
