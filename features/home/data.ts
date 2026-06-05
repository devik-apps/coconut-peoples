import type { ApproachData, HomeHero, NewsData } from "./types";

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

export const homeApproach: ApproachData = {
  eyebrow: "Notre approche",
  title: "Une vision en trois dimensions",
  image: {
    src: "https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=2400&auto=format&fit=crop",
    alt: "Coco Beach à Madagascar — paysage paradisiaque",
  },
  items: [
    {
      id: "food",
      label: "COCO FOOD",
      title: "Des saveurs qui racontent une île",
      description:
        "De la noix de coco brute aux créations les plus raffinées, chaque produit COCO FOOD capture l&apos;essence de Madagascar. Nous travaillons main dans la main avec les producteurs locaux pour sélectionner les meilleures récoltes, transformées avec un savoir-faire artisanal qui préserve toute la richesse des arômes.",
      highlights: [
        "Ingrédients 100% naturels, sans additifs",
        "Partenariats directs avec 200+ agriculteurs malgaches",
        "Transformé artisanalement dans notre atelier à Tamatave",
      ],
    },
    {
      id: "eco",
      label: "COCO ECO",
      title: "La nature comme unique modèle",
      description:
        "Notre engagement environnemental va bien au-delà du recyclage. COCO ECO repense chaque étape de notre chaîne de valeur — de la culture régénérative des cocotiers aux emballages biodégradables — pour que chaque produit laisse une empreinte positive sur la planète.",
      highlights: [
        "Emballages 100% compostables ou réutilisables",
        "Neutralité carbone atteinte en 2025",
        "1 arbre planté pour chaque produit vendu",
      ],
    },
    {
      id: "life",
      label: "COCO LIFE",
      title: "L&apos;art de vivre malgache, chez vous",
      description:
        "COCO LIFE est une invitation à ralentir. Des cosmétiques naturels à la décoration intérieure en passant par les accessoires artisanaux, nous créons des objets qui apportent un peu de la douceur de vivre de Madagascar dans votre quotidien.",
      highlights: [
        "Cosmétiques bio à base d&apos;huile de coco vierge",
        "Artisanat fait main par des coopératives locales",
        "Certifié commerce équitable et cruelty-free",
      ],
    },
  ],
};

export const homeNews: NewsData = {
  title: "Vivre l'expérience Coconut People",
  items: [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1590005354167-6da97870c757?q=80&w=800&auto=format&fit=crop",
      title: "Récolte matinale à Tamatave",
      date: "12 Mai 2026",
      category: { label: "COCO FOOD", color: "bg-coco-caramel" },
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop",
      title: "Artisanat d'exception",
      category: { label: "COCO ECO", color: "bg-coco-green" },
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=800&auto=format&fit=crop",
      title: "Lifestyle Tropical",
      date: "08 Juin 2026",
      category: { label: "COCO LIFE", color: "bg-coco-sun" },
    },
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=800&auto=format&fit=crop",
      title: "Pâtes à tartiner",
      category: { label: "COCO FOOD", color: "bg-coco-caramel" },
    },
    {
      id: "5",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop",
      title: "Design Durable",
      date: "20 Avril 2026",
      category: { label: "COCO ECO", color: "bg-coco-green" },
    },
    {
      id: "6",
      image: "https://images.unsplash.com/photo-1511144085314-da949c1100c9?q=80&w=800&auto=format&fit=crop",
      title: "Plages de Madagascar",
      category: { label: "COCO LIFE", color: "bg-coco-sun" },
    },
    {
      id: "7",
      image: "https://images.unsplash.com/photo-1493106819501-66d381c446a5?q=80&w=800&auto=format&fit=crop",
      title: "Noix de coco fraîche",
      date: "15 Mars 2026",
      category: { label: "COCO FOOD", color: "bg-coco-caramel" },
    },
    {
      id: "8",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      title: "Atelier de création",
      category: { label: "COCO ECO", color: "bg-coco-green" },
    },
    {
      id: "9",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
      title: "Sourire Malgache",
      date: "02 Février 2026",
      category: { label: "COCO LIFE", color: "bg-coco-sun" },
    },
    {
      id: "10",
      image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=800&auto=format&fit=crop",
      title: "Huile de coco vierge",
      category: { label: "COCO FOOD", color: "bg-coco-caramel" },
    },
    {
      id: "11",
      image: "https://images.unsplash.com/photo-1505933332468-31b5a10ad636?q=80&w=800&auto=format&fit=crop",
      title: "Texture Coco",
      date: "10 Janvier 2026",
      category: { label: "COCO ECO", color: "bg-coco-green" },
    },
    {
      id: "12",
      image: "https://images.unsplash.com/photo-1534612829471-aa3570624d73?q=80&w=800&auto=format&fit=crop",
      title: "Évasion Tropicale",
      category: { label: "COCO LIFE", color: "bg-coco-sun" },
    },
  ],
};
