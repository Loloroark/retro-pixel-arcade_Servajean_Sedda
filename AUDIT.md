# AUDIT.md : à compléter

En binôme, sans modifier le code, retrouvez au moins **3 problèmes de
structure sémantique** sur le site PixelVault (le site en contient bien plus,
n'hésitez pas à en noter davantage si le temps le permet).

## Méthode conseillée (25 minutes, ça va vite)

1. **Naviguez normalement** sur 3-4 pages (Accueil, Catalogue, une fiche
   jeu, Hall of Fame...) comme le ferait un visiteur, avant d'ouvrir les
   outils.
2. **Ouvrez l'extension WAVE** sur chaque page : l'icône "Structure"
   affiche en un coup d'œil les landmarks (`header`/`nav`/`main`/`footer`)
   et la hiérarchie des titres détectés, sans avoir à lire le code.
3. **Ouvrez l'onglet "Elements" des DevTools** (clic droit > Inspecter) et
   repérez les balises utilisées autour des titres, des menus et des
   boutons : est-ce que ça correspond à ce qu'on voit à l'écran ?
4. **Essayez de naviguer au clavier** (Tab) sur une page : tout ce qui est
   cliquable à la souris répond-il aussi au clavier ?
5. Notez chaque problème dans le tableau ci-dessous au fur et à mesure,
   plutôt que d'attendre la fin.

## Où regarder en priorité

À vérifier systématiquement sur
n'importe quelle page :

- **Landmarks** : la page a-t-elle un vrai `<header>`, `<nav>`, `<main>`,
  `<footer>` ? (Panneau "Structure" de WAVE, ou onglet Accessibility des
  DevTools.)
- **Hiérarchie des titres** : y a-t-il un seul `<h1>` par page ? Les
  niveaux s'enchaînent-ils sans saut (`h1` → `h2` → `h3`...) ?
- **Listes** : un ensemble d'éléments similaires (jeux, fils de discussion,
  avis...) est-il balisé en `<ul>/<li>`, ou juste en `<div>` empilées ?
- **`button` vs `a`** : une action (ajouter au panier, envoyer un
  formulaire) utilise-t-elle un `<button>` ? Un lien de navigation
  utilise-t-il un `<a href>` ?
- **Labels de formulaire** : chaque champ a-t-il un `<label>` associé, ou
  seulement un `placeholder` ?
- **Attribut `lang`** : la balise `<html>` déclare-t-elle la langue de la
  page ?
- **Texte alternatif** : les images ont-elles un `alt` pertinent (ou vide
  si purement décoratives) ?

## Ressources à garder sous la main

- [Référence rapide WCAG 2.1 (W3C, filtrable par niveau A/AA)](https://www.w3.org/WAI/WCAG21/quickref/)
- [Les 4 principes WCAG : P.O.U.R.](https://www.w3.org/WAI/fundamentals/accessibility-principles/)
- [RGAA 4.1 : critères et tests officiels](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [MDN : Accessibilité et bases HTML](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Accessibility/HTML)
- [MDN : les landmarks ARIA](https://developer.mozilla.org/fr/docs/Web/Accessibility/ARIA/ARIA_Landmarks_Example)
- [WebAIM : utiliser l'extension WAVE](https://wave.webaim.org/)
- [WebAIM : vérificateur de contraste de couleurs](https://webaim.org/resources/contrastchecker/)
- [W3C ARIA Authoring Practices Guide (patterns de composants)](https://www.w3.org/WAI/ARIA/apg/)

## Tableau d'audit

| #   | Problème trouvé (page, quoi) | Principe WCAG (P / O / U / R) | Pourquoi c'est bloquant, et pour qui | Correction proposée |
| --- | ---------------------------- | ----------------------------- | ------------------------------------ | ------------------- |
| 1   |                              |                               |                                      |                     |
| 2   |                              |                               |                                      |                     |
| 3   |                              |                               |                                      |                     |
| 4   |                              |                               |                                      |                     |
| 5   |                              |                               |                                      |                     |

> Rappel : P = Perceptible, O = Opérable, U = Utilisable (Compréhensible), R = Robuste.
