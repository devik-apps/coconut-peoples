# Coconut Peoples.mg

Site web e-commerce multi-univers pour une marque malgache premium autour du coco.

Signature de marque :

> From Madagascar with Coconut Soul.

## Presentation du projet

`Coconut Peoples.mg` est un site e-commerce qui presente et vend des produits autour du coco, avec une identite malgache premium.

Le projet est organise autour de 3 grands univers :

- `COCO FOOD` : l'univers alimentaire.
- `COCO ECO` : l'univers ecologique et artisanal.
- `COCO LIFE` : l'univers lifestyle tropical.

Chaque univers a sa propre ambiance, ses couleurs, ses photos et son storytelling.

Mais tous les univers doivent rester coherents sous une seule marque mere : `Coconut Peoples`.

## Stack technique

Le projet utilise :

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- pnpm

Pour comprendre l'organisation technique des dossiers, lire :

[docs/architecture.md](docs/architecture.md)

## Objectifs du site

Le site doit permettre de :

- presenter la marque Coconut Peoples.mg
- expliquer les 3 univers de produits
- vendre des produits en ligne
- raconter l'origine malgache de la marque
- mettre en avant une image premium, tropicale et artisanale
- preparer une vision long terme autour de l'export, de l'eco-design et du lifestyle

## Architecture de marque

La marque est construite autour de 3 sous-univers.

Chaque sous-univers peut avoir :

- sa propre palette de couleurs
- son propre style photo
- son propre ton editorial
- ses propres produits
- ses propres pages ou sections

L'ensemble doit toujours rester rattache a `Coconut Peoples.mg`.

## COCO FOOD

`COCO FOOD` est l'univers alimentaire de la marque.

Il regroupe les produits gourmands a base de coco.

Exemples de produits :

- pates a tartiner
- chips de coco
- boissons
- epices
- huiles
- produits alimentaires derives du coco

Ambiance :

- gourmande
- tropicale
- chaleureuse
- premium mais accessible

Couleurs principales :

- beige coco
- caramel
- blanc creme

Contenu attendu :

- photos gourmandes
- recettes
- scenes lifestyle food
- mise en avant des ingredients
- storytelling autour du gout et de Madagascar

Vision long terme :

> Distribution alimentaire et export.

## COCO ECO

`COCO ECO` est l'univers ecologique, artisanal et durable.

Il regroupe les produits crees a partir des matieres du coco.

Exemples de produits :

- fibres de coco
- coques de coco
- decoration
- packaging naturels
- accessoires maison
- objets artisanaux

Ambiance :

- nature brute
- artisanat chic
- durable
- sobre
- elegante

Couleurs principales :

- vert naturel
- marron terre
- beige sable

Contenu attendu :

- photos de matieres naturelles
- mise en avant du travail artisanal
- storytelling autour du recyclage et de la durabilite
- ambiance maison, decoration et eco-design

Vision long terme :

> Eco-design et artisanat durable.

## COCO LIFE

`COCO LIFE` est l'univers lifestyle tropical inspire de Madagascar.

Il regroupe les produits de style, d'ambiance et d'experience.

Exemples de produits :

- vetements
- accessoires plage
- bougies
- papeterie
- editions limitees
- objets lifestyle

Ambiance :

- editoriale
- premium
- solaire
- tropicale
- inspiree des boutiques hotels

Couleurs principales :

- sable
- soleil
- tons naturels lumineux

Contenu attendu :

- shooting photo lifestyle
- ambiance voyage et bord de mer
- scenes premium et tropicales
- editions limitees
- storytelling autour de l'art de vivre malgache

Vision long terme :

> Marque lifestyle tropicale internationale.

## Navigation principale

Le menu principal du site doit contenir :

- Accueil
- A propos
- COCO FOOD
- COCO ECO
- COCO LIFE
- Blog
- Professionnels
- Contact

## Role des pages

### Accueil

Presenter rapidement la marque, la signature et les 3 univers.

Objectif :

- donner envie d'explorer
- montrer l'identite premium
- orienter vers `COCO FOOD`, `COCO ECO` et `COCO LIFE`

### A propos

Raconter l'histoire de Coconut Peoples.mg.

Objectif :

- expliquer l'origine malgache
- presenter la vision autour du coco
- installer la credibilite de la marque

### COCO FOOD

Presenter les produits alimentaires et l'univers gourmand.

Objectif :

- vendre les produits food
- montrer les recettes
- mettre en avant le gout et les ingredients

### COCO ECO

Presenter les produits ecologiques et artisanaux.

Objectif :

- montrer les matieres naturelles
- expliquer la demarche durable
- valoriser l'artisanat

### COCO LIFE

Presenter l'univers lifestyle tropical.

Objectif :

- vendre des produits lifestyle
- creer un imaginaire premium
- renforcer l'image internationale de la marque

### Blog

Publier du contenu autour du coco, de Madagascar, des recettes, du lifestyle et de l'eco-design.

Objectif :

- ameliorer le SEO
- raconter la marque
- eduquer les visiteurs

### Professionnels

Page pour les partenaires, revendeurs, hotels, restaurants, distributeurs et clients B2B.

Objectif :

- recevoir des demandes professionnelles
- preparer la distribution et l'export
- presenter les offres B2B

### Contact

Permettre aux visiteurs de contacter la marque.

Objectif :

- demandes clients
- demandes professionnelles
- collaborations
- presse ou partenariats

## Identite visuelle globale

La marque doit rester :

- premium
- tropicale
- malgache
- naturelle
- chaleureuse
- moderne
- coherente entre les 3 univers

Chaque univers peut avoir son propre style, mais le site ne doit pas ressembler a 3 marques differentes.

La marque mere `Coconut Peoples.mg` doit toujours etre visible.

## Vision strategique

La vision long terme repose sur 3 directions :

1. `COCO FOOD` : distribution alimentaire et export.
2. `COCO ECO` : eco-design et artisanat durable.
3. `COCO LIFE` : marque lifestyle tropicale internationale.

Le site doit donc etre pense comme une base evolutive.

Il doit pouvoir accueillir :

- plus de produits
- plus de collections
- plus de contenus editoriaux
- des pages B2B
- des demandes professionnelles
- une future strategie export

## Lancer le projet en local

Installer les dependances :

```bash
pnpm install
```

Lancer le serveur de developpement :

```bash
pnpm dev
```

Ouvrir le site :

```txt
http://localhost:3000
```

## Scripts disponibles

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## CI

Le projet contient une CI GitHub Actions dans :

```txt
.github/workflows/ci.yml
```

Elle se lance sur toutes les branches, pour les `push` et les `pull requests`.

Elle verifie :

- l'installation des dependances avec `pnpm install --frozen-lockfile`
- le lint avec `pnpm lint`
- le build de production avec `pnpm build`

## Resume court

`Coconut Peoples.mg` est une marque e-commerce malgache premium autour du coco.

Elle se divise en 3 univers :

- `COCO FOOD` pour le gout
- `COCO ECO` pour l'artisanat durable
- `COCO LIFE` pour le lifestyle tropical

Le site doit vendre, raconter la marque et preparer une vision internationale.
