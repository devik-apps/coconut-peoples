import type { ButtonLinkVariant } from "@/components/ui/ButtonLink";

export type HomeHeroAction = {
  label: string;
  href: string;
  variant: ButtonLinkVariant;
};

export type HomeHero = {
  eyebrow: string;
  title: string;
  description: string;
  actions: HomeHeroAction[];
  structure: string[];
};
