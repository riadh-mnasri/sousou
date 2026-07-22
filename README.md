# SouSou

Application web ludique et bilingue qui apprend aux enfants a bien gerer leur argent : missions quotidiennes, tirelire virtuelle, niveaux, serie de jours joues et badges a debloquer, sans jamais utiliser d'argent reel ni de recompenses reelles comme mecanique de motivation.

Copyright (c) 2026 Riadh MNASRI. Tous droits reserves.

**Demo en ligne** : [sousou-iota.vercel.app](https://sousou-iota.vercel.app)

## Fonctionnalites

- **3 profils enfant** adaptes par tranche d'age, chacun avec son propre parcours pedagogique :
  - **Explorateur (6 ans)** : c'est quoi l'argent, la tirelire, besoins vs envies
  - **Aventurier (8 ans)** : comparer les prix, faire un petit budget, eviter les achats impulsifs
  - **Strategiste (11 ans)** : revenu vs depense, notion d'interet, budget mensuel, priorites financieres
- **Missions quotidiennes** : 6 questions a choix multiple tirees au sort dans la banque de questions du profil, avec une explication pedagogique apres chaque reponse.
- **Tirelire virtuelle** : les bonnes reponses remplissent la tirelire (SouSous) jusqu'a des paliers visuels (anneau de progression).
- **Progression** : niveaux avec courbe d'XP croissante, serie de jours joues avec un jour de joker tolere par semaine.
- **Badges** : jalons a debloquer (premiere mission, series de 3/7/30 jours, tirelire pleine, sans-faute, niveaux 5 et 10).
- **Espace parents** : vue d'ensemble en lecture seule des 3 profils (niveau, serie, tirelire, badges), sans suivi intrusif.
- **Bilingue** : interface complete en francais et en anglais, bascule instantanee depuis l'en-tete.

## Choix de conception : pas de recompenses reelles

Toute la motivation repose sur la progression virtuelle (SouSous, niveaux, badges) et non sur de l'argent de poche reel ou des recompenses materielles automatisees, pour eviter l'effet de sur-justification et garder le plaisir d'apprendre intact. Si une recompense reelle doit exister un jour, ce doit rester une decision ponctuelle des parents, en dehors du moteur de jeu.

## Stack technique

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- [next-intl](https://next-intl.dev) pour l'interface bilingue francais/anglais
- Persistance locale via `localStorage` (aucune base de donnees, aucune donnee envoyee a un serveur)

## Demarrage local

```bash
npm install
npm run dev
```

L'application est servie sur [http://localhost:3939](http://localhost:3939).

Aucune variable d'environnement n'est necessaire : toutes les donnees (profils, progression, badges) sont stockees localement dans le navigateur.

## Scripts disponibles

| Commande         | Description                                  |
| ---------------- | --------------------------------------------- |
| `npm run dev`     | Serveur de developpement (Turbopack, port 3939) |
| `npm run build`   | Build de production                            |
| `npm start`       | Lance le build de production                   |
| `npm run lint`    | Verifie le code avec ESLint                    |

## Tests

Aucune suite de tests automatises pour le moment : le contenu pedagogique et la logique de jeu (niveaux, series, badges) sont simples et verifies manuellement en navigateur. Le build (`npm run build`) fait office de garde-fou de type (TypeScript strict) avant chaque deploiement.

## Architecture

```
src/
  app/
    [locale]/
      layout.tsx              en-tete, pied de page, fournisseur i18n
      page.tsx                accueil : choix du profil enfant
      profil/[profileId]/
        page.tsx               tableau de bord (tirelire, niveau, serie, badges)
        mission/page.tsx        mission quotidienne (quiz)
        badges/page.tsx         grille complete des badges
      parents/page.tsx         espace parents (lecture seule)
  components/                 UI reutilisable (Header, Dashboard, PiggyBank, MissionFlow, ...)
  i18n/                        configuration next-intl (routing, navigation, requete)
  lib/
    profiles.ts                definition des 3 profils enfant et de leurs tranches d'age
    content/questions.ts       banque de questions bilingues, par tranche d'age
    gamification.ts            niveaux, series de jours, paliers de tirelire
    badges.ts                  definition des badges
    storage.ts                 lecture/ecriture de la progression dans localStorage
  proxy.ts                     routage des locales (fr/en)
messages/
  fr.json, en.json             textes d'interface (hors contenu pedagogique)
```

## Deploiement

Deploye sur Vercel, lie au repo GitHub `riadh-mnasri/sousou` (deploiement automatique a chaque push sur `main`).

```bash
vercel --prod
```

## Etat d'avancement

- [x] 3 profils enfant avec contenu adapte par age
- [x] Missions quotidiennes (quiz) avec explications pedagogiques
- [x] Tirelire virtuelle, niveaux, serie de jours, badges
- [x] Espace parents (lecture seule, sans surveillance intrusive)
- [x] Interface bilingue francais / anglais
- [x] Deploiement production sur Vercel
- [ ] Favicon et icone d'application personnalises
- [ ] Contenu pedagogique additionnel (plus de questions par tranche d'age)

## Licence

Projet personnel non destine a la redistribution. Tous droits reserves, Riadh MNASRI.
