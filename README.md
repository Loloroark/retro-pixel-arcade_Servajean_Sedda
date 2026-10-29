# PixelVault : Mini-audit accessibilité en binôme

**Mission** : PixelVault est un (faux) site communautaire dédié aux jeux vidéo
rétro (Pac-Man, Tetris, Donkey Kong, Street Fighter II...). Visuellement, le
site a l'air soigné. Pourtant il cache de nombreux problèmes de **structure
sémantique** et d'accessibilité, volontairement intégrés.

En binôme, sans rien corriger pour l'instant :

1. Lancez le site (`npm install` puis `npm run dev`).
2. Parcourez au moins 3 pages (Accueil, Catalogue, une fiche jeu, Hall of
   Fame, Communauté, Contact...).
3. Repérez **au moins 3 problèmes de structure sémantique** en vous appuyant
   sur ce qui vient d'être vu en cours : landmarks (`header`/`nav`/`main`/
   `footer`), hiérarchie des titres, listes, `button` vs `a`, labels de
   formulaire, attribut `lang`.
4. Vous pouvez vous aider de l'extension **WAVE** (icône dans la barre
   d'outils du navigateur) ou de l'arbre d'accessibilité des DevTools, mais
   l'objectif principal est de savoir repérer ces problèmes à l'œil et dans
   le code, pas seulement de lire un rapport automatique.

## Démarrer

```bash
npm install
npm run dev
```

## Rendre votre audit

Complétez [`AUDIT.md`](./AUDIT.md) : pour chaque problème trouvé, notez la
page concernée, une description, le critère WCAG/RGAA associé et une piste de
correction.
