# SouSou

Application web ludique et bilingue qui apprend aux enfants à bien gérer leur argent : missions quotidiennes, tirelire virtuelle, niveaux, série de jours joués et badges à débloquer, sans jamais utiliser d'argent réel ni de récompenses réelles comme mécanique de motivation.

Copyright (c) 2026 Riadh MNASRI. Tous droits réservés.

**Démo en ligne** : [sousou-iota.vercel.app](https://sousou-iota.vercel.app)

## Fonctionnalités

- **3 profils enfant** adaptés par tranche d'âge, chacun avec son propre parcours pédagogique et sa propre banque de questions :
  - **Explorateur (6 ans)** : c'est quoi l'argent, la tirelire, besoins vs envies
  - **Aventurier (8 ans)** : comparer les prix, faire un petit budget, éviter les achats impulsifs
  - **Stratégiste (11 ans)** : revenu vs dépense, notion d'intérêt, budget mensuel, priorités financières
- **Missions quotidiennes** : 6 questions à choix multiple tirées au sort dans la banque de questions du profil (16 questions par tranche d'âge), avec une explication pédagogique après chaque réponse.
- **Tirelire virtuelle** : les bonnes réponses remplissent la tirelire (SouSous) jusqu'à des paliers visuels (anneau de progression).
- **Progression** : niveaux avec courbe d'XP croissante, série de jours joués avec un jour de joker toléré par semaine.
- **Badges** : 18 jalons à débloquer (séries de 3/7/14/30/100 jours, tirelire pleine à 100/500/1000/2000 SouSous, sans-faute, 5 sans-faute, 10/50 missions terminées, niveaux 5/10/15/20).
- **Espace parents** : vue d'ensemble en lecture seule des 3 profils (niveau, série, tirelire, badges), sans suivi intrusif.
- **Bilingue** : interface complète en français et en anglais, bascule instantanée depuis l'en-tête.

## Choix de conception : pas de récompenses réelles

Toute la motivation repose sur la progression virtuelle (SouSous, niveaux, badges) et non sur de l'argent de poche réel ou des récompenses matérielles automatisées, pour éviter l'effet de sur-justification et garder le plaisir d'apprendre intact. Si une récompense réelle doit exister un jour, ce doit rester une décision ponctuelle des parents, en dehors du moteur de jeu.

## Stack technique

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- [next-intl](https://next-intl.dev) pour l'interface bilingue français/anglais
- Persistance locale via `localStorage` (aucune base de données, aucune donnée envoyée à un serveur)

## Démarrage local

```bash
npm install
npm run dev
```

L'application est servie sur [http://localhost:3939](http://localhost:3939).

Aucune variable d'environnement n'est nécessaire : toutes les données (profils, progression, badges) sont stockées localement dans le navigateur.

## Scripts disponibles

| Commande         | Description                                     |
| ---------------- | ------------------------------------------------ |
| `npm run dev`     | Serveur de développement (Turbopack, port 3939)  |
| `npm run build`   | Build de production                              |
| `npm start`       | Lance le build de production                     |
| `npm run lint`    | Vérifie le code avec ESLint                      |

## Tests

Aucune suite de tests automatisés pour le moment : le contenu pédagogique et la logique de jeu (niveaux, séries, badges) sont simples et vérifiés manuellement en navigateur. Le build (`npm run build`) fait office de garde-fou de type (TypeScript strict) avant chaque déploiement.

## Architecture

```
src/
  app/
    [locale]/
      layout.tsx              en-tête, pied de page, fournisseur i18n
      page.tsx                accueil : choix du profil enfant
      profil/[profileId]/
        page.tsx               tableau de bord (tirelire, niveau, série, badges)
        mission/page.tsx        mission quotidienne (quiz)
        badges/page.tsx         grille complète des badges
      parents/page.tsx         espace parents (lecture seule)
  components/                 UI réutilisable (Header, Dashboard, PiggyBank, MissionFlow, ...)
  i18n/                        configuration next-intl (routing, navigation, requête)
  lib/
    profiles.ts                définition des 3 profils enfant et de leurs tranches d'âge
    content/questions.ts       banque de questions bilingues, par tranche d'âge
    gamification.ts            niveaux, séries de jours, paliers de tirelire
    badges.ts                  définition des badges
    storage.ts                 lecture/écriture de la progression dans localStorage
  proxy.ts                     routage des locales (fr/en)
messages/
  fr.json, en.json             textes d'interface (hors contenu pédagogique)
```

## Déploiement

Déployé sur Vercel, lié au repo GitHub `riadh-mnasri/sousou` (déploiement automatique à chaque push sur `main`).

```bash
vercel --prod
```

## État d'avancement

- [x] 3 profils enfant avec contenu adapté par âge (16 questions par tranche d'âge)
- [x] Missions quotidiennes (quiz) avec explications pédagogiques
- [x] Tirelire virtuelle, niveaux, série de jours, 18 badges
- [x] Espace parents (lecture seule, sans surveillance intrusive)
- [x] Interface bilingue français / anglais
- [x] Déploiement production sur Vercel
- [ ] Favicon et icône d'application personnalisés
- [ ] Contenu pédagogique additionnel (plus de questions par tranche d'âge)

## Licence

Projet personnel non destiné à la redistribution. Tous droits réservés, Riadh MNASRI.
