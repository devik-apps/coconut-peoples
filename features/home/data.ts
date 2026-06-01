import type { HomeHero } from "./types";

export const homeHero: HomeHero = {
  eyebrow: "Feature based website",
  title: "Une base claire pour faire grandir le site.",
  description:
    "Le routing reste dans app, tandis que les sections, contenus et composants propres a la homepage vivent dans features/home.",
  actions: [
    {
      label: "Deploy Now",
      href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
      variant: "primary",
    },
    {
      label: "Documentation",
      href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
      variant: "secondary",
    },
  ],
  structure: [
    "app/ = routes Next.js",
    "features/home/ = homepage",
    "components/ = composants partages",
    "config/ = constantes du site",
  ],
};
