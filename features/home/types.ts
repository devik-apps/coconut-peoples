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

export type ApproachItem = {
  id: string;
  label: string;
  title: string;
  description: string;
  highlights: string[];
};

export type ApproachData = {
  eyebrow: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  items: ApproachItem[];
};

export type WhyChooseUsReason = {
  number: string;
  title: string;
  description: string;
};

export type WhyChooseUsData = {
  reasons: WhyChooseUsReason[];
};

export type NewsItem = {
  id: string;
  image: string;
  title: string;
  date?: string;
  category: {
    label: string;
    color: string; // Tailwind color class like 'bg-caramel' or 'bg-green-500'
  };
};

export type NewsData = {
  title: string;
  items: NewsItem[];
};
