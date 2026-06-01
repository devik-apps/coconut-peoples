# Architecture du projet

Ce document explique comment le projet est range.

Le but est simple : quand un dev arrive, il doit savoir ou chercher et ou ajouter du code.

## Stack technique

Ce projet utilise :

- Next.js 16 : pour creer le site et les pages.
- React 19 : pour creer les composants.
- TypeScript : pour ecrire du JavaScript plus clair et plus sur.
- Tailwind CSS 4 : pour le style.
- Framer Motion : pour les animations.
- pnpm : pour installer les dependances.

## Idee principale

Le projet utilise une organisation par fonctionnalite.

On appelle ca une architecture feature-based.

Ca veut dire :

> Tout ce qui concerne une meme partie du site reste ensemble.

Exemple :

```txt
features/
  home/
    HomePage.tsx
    data.ts
    types.ts
    components/
      HeroSection.tsx
```

Ici, tout ce qui concerne la page d'accueil est dans `features/home`.

## Les dossiers

## `app/`

`app/` est le dossier des routes Next.js.

Il dit quelles pages existent dans le site.

Exemple actuel :

```txt
app/
  layout.tsx
  page.tsx
  globals.css
  favicon.ico
```

Role des fichiers :

- `layout.tsx` : le cadre global du site.
- `page.tsx` : la page d'accueil.
- `globals.css` : les styles globaux.
- `favicon.ico` : la petite icone du site dans le navigateur.

Regle simple :

> `app/` sert a assembler les pages. On evite d'y mettre beaucoup de logique.

## `features/`

`features/` contient les grandes parties du site.

Aujourd'hui, il y a :

```txt
features/
  home/
```

`features/home` contient la page d'accueil.

Exemple :

```txt
features/home/
  HomePage.tsx
  data.ts
  types.ts
  index.ts
  components/
    HeroSection.tsx
```

Role des fichiers :

- `HomePage.tsx` : construit toute la page d'accueil.
- `data.ts` : contient les textes ou donnees de la page d'accueil.
- `types.ts` : contient les types TypeScript de cette feature.
- `index.ts` : permet d'exporter la feature plus proprement.
- `components/` : contient les composants utilises par cette feature.

Regle simple :

> Si le code sert seulement a une partie du site, on le met dans `features/nom-de-la-feature`.

Exemples futurs :

```txt
features/
  home/
  contact/
  about/
  services/
```

## `components/`

`components/` contient les composants reutilisables.

Un composant reutilisable est un morceau d'interface qu'on peut utiliser a plusieurs endroits.

Exemple actuel :

```txt
components/
  layout/
    Container.tsx
  ui/
    ButtonLink.tsx
```

Role des dossiers :

- `components/layout` : composants de mise en page.
- `components/ui` : petits composants d'interface, comme les boutons.

Regle simple :

> Si un composant est utilise partout, il va dans `components/`.

Autre regle :

> Si un composant est utilise seulement par une feature, il reste dans cette feature.

Exemple :

```txt
features/home/components/HeroSection.tsx
```

`HeroSection` reste dans `features/home` parce qu'il sert a la page d'accueil.

## `config/`

`config/` contient les informations globales du site.

Exemple actuel :

```txt
config/
  site.ts
```

`site.ts` peut contenir :

- le nom du site
- la description du site
- les liens importants
- les infos SEO

Regle simple :

> Si une information sert a tout le site, elle peut aller dans `config/`.

## `lib/`

`lib/` contient les fonctions utiles partagees.

Exemple actuel :

```txt
lib/
  utils.ts
```

`utils.ts` peut contenir de petites fonctions utilisees dans plusieurs fichiers.

Regle simple :

> Si une fonction est utile partout, elle va dans `lib/`.

Mais attention :

> Si une fonction sert seulement a une feature, elle reste dans cette feature.

## `public/`

`public/` contient les fichiers publics.

Ce sont les fichiers que le navigateur peut lire directement.

Exemples :

```txt
public/
  file.svg
  globe.svg
  next.svg
  vercel.svg
  window.svg
```

On peut y mettre :

- images
- logos
- icones
- fichiers PDF
- fichiers telechargeables

Regle simple :

> Si c'est un fichier statique visible par le site, il va dans `public/`.

## Fichiers a la racine

La racine du projet contient les fichiers de configuration.

Exemples :

- `package.json` : liste les scripts et les dependances.
- `tsconfig.json` : configuration TypeScript.
- `next.config.ts` : configuration Next.js.
- `eslint.config.mjs` : configuration ESLint.
- `postcss.config.mjs` : configuration PostCSS et Tailwind.
- `pnpm-lock.yaml` : verrouille les versions installees.

Regle simple :

> La racine sert surtout a configurer le projet.

## Ou mettre un nouveau fichier ?

Pose cette question :

### Est-ce une nouvelle page ?

Mets la route dans `app/`.

Exemple :

```txt
app/contact/page.tsx
```

### Est-ce une nouvelle partie du site ?

Mets-la dans `features/`.

Exemple :

```txt
features/contact/
```

### Est-ce un composant utilise seulement dans une feature ?

Mets-le dans la feature.

Exemple :

```txt
features/contact/components/ContactForm.tsx
```

### Est-ce un composant reutilisable partout ?

Mets-le dans `components/`.

Exemple :

```txt
components/ui/ButtonLink.tsx
```

### Est-ce une fonction partagee ?

Mets-la dans `lib/`.

Exemple :

```txt
lib/utils.ts
```

### Est-ce une information globale du site ?

Mets-la dans `config/`.

Exemple :

```txt
config/site.ts
```

### Est-ce une image ou un fichier public ?

Mets-le dans `public/`.

Exemple :

```txt
public/logo.png
```

## Regles importantes

- Garder `app/` simple.
- Mettre le code metier dans `features/`.
- Ne pas tout mettre dans `components/`.
- Garder les types proches de leur feature.
- Mettre dans `lib/` seulement ce qui est vraiment partage.
- Mettre dans `config/` seulement ce qui concerne tout le site.

## Exemple simple

Si on ajoute une page Contact, on peut creer :

```txt
app/contact/page.tsx
features/contact/
  ContactPage.tsx
  components/
    ContactForm.tsx
  data.ts
  types.ts
```

`app/contact/page.tsx` affiche la page.

`features/contact` contient tout le vrai code de contact.

## Resume tres court

- `app/` : les pages.
- `features/` : les grandes parties du site.
- `components/` : les composants reutilisables.
- `config/` : les infos globales.
- `lib/` : les fonctions partagees.
- `public/` : les images et fichiers publics.
