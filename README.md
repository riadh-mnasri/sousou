# SouSou

Une application ludique pour apprendre aux enfants a bien gerer leur argent, a travers des missions quotidiennes, une tirelire virtuelle qui grossit et des badges a debloquer, sans jamais utiliser d'argent reel ni de recompenses reelles comme mecanique de motivation.

## Pourquoi cette app

SouSou propose 3 profils enfant (adaptes par tranche d'age : 6, 8 et 11 ans) avec un contenu pedagogique different pour chacun :

- **Explorateur (6 ans)** : c'est quoi l'argent, la tirelire, besoins vs envies
- **Aventurier (8 ans)** : comparer les prix, faire un petit budget, eviter les achats impulsifs
- **Strategiste (11 ans)** : revenu vs depense, notion d'interet, budget mensuel, priorites financieres

Chaque jour, l'enfant peut faire une mission de 6 questions. Les bonnes reponses remplissent sa tirelire virtuelle (SouSous) et font progresser son niveau et sa serie de jours joues. Des badges recompensent les jalons (streak, tirelire pleine, sans-faute, niveaux).

## Choix de conception : pas de recompenses reelles

Toute la motivation repose sur la progression virtuelle (SouSous, niveaux, badges) et non sur de l'argent de poche reel ou des recompenses materielles automatisees, pour eviter l'effet de sur-justification et garder le plaisir d'apprendre intact.

## Stack technique

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- next-intl (interface bilingue francais/anglais)
- Persistance locale via `localStorage` (aucune base de donnees, aucune donnee envoyee a un serveur)

## Developpement local

```bash
npm install
npm run dev
```

L'application est servie sur [http://localhost:3939](http://localhost:3939).

## Tests

Aucune suite de tests automatises pour le moment (contenu pedagogique et logique de jeu simples, verifies manuellement en navigateur).

## Deploiement

Deploiement prevu sur Vercel, lie au repo GitHub `riadh-mnasri/sousou`.

## Etat d'avancement

- [x] 3 profils enfant avec contenu adapte par age
- [x] Missions quotidiennes (quiz) avec explications pedagogiques
- [x] Tirelire virtuelle, niveaux, serie de jours, badges
- [x] Espace parents (lecture seule, sans surveillance intrusive)
- [x] Interface bilingue francais / anglais
- [ ] Favicon et icone d'application personnalises
- [ ] Contenu pedagogique additionnel (plus de questions par tranche d'age)

## Copyright

© 2026 Riadh MNASRI
