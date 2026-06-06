import { Container } from "@/components/layout/Container";
import { InteractiveFlipCard } from "@/components/ui/InteractiveFlipCard";

const INTERACTIVE_DATA = [
  {
    name: "Poulet au curry lait de coco",
    img: "/assets/images/img_13.jpg",
    ingredients: [
      "500 g de poulet",
      "1 oignon, 2 gousses d’ail",
      "1 c. à café de curry",
      "Sel, Poivre, Huile",
      "1 petit morceau de gingembre",
      "20 cl de lait de coco",
    ],
    preparation: [
      "Faites revenir l’oignon, l’ail et le gingembre dans un peu d’huile.",
      "Ajoutez le poulet et faites-le dorer.",
      "Versez le lait de coco, ajoutez le curry, sel et poivre.",
      "Laissez mijoter 20 à 25 minutes jusqu’à sauce onctueuse.",
      "Servez avec du riz.",
    ],
  },
  {
    name: "Yaourt Coco",
    img: "/assets/images/img_5.jpg",
    ingredients: [
      "2 yaourts nature",
      "10 à 15 cl de lait de coco",
      "2 à 3 c. à soupe de sucre",
      "2 c. à soupe de noix de coco râpée",
    ],
    preparation: [
      "Mélangez les yaourts avec le lait de coco et le sucre jusqu’à texture homogène.",
      "Ajoutez la noix de coco râpée.",
      "Placez au frais au moins 1 heure avant de servir.",
    ],
  },
  {
    name: "Ravitot au lait de Coco",
    img: "/assets/images/img_12.jpg",
    ingredients: [
      "500 g de ravitoto (feuilles de manioc pilées)",
      "300 g de viande de porc (ou bœuf)",
      "1 oignon, 2 gousses d’ail",
      "20 à 30 cl de lait de coco",
      "Sel, poivre. Un peu d’huile",
    ],
    preparation: [
      "Faites revenir l’oignon et l’ail dans l’huile, ajoutez la viande et laissez dorer.",
      "Ajoutez le ravitoto, salez et poivrez, puis couvrez d’un peu d’eau et laissez cuire 30 à 40 minutes.",
      "Versez le lait de coco en fin de cuisson et laissez mijoter encore 10 minutes.",
    ],
  },
];

export type Plate = (typeof INTERACTIVE_DATA)[number];

export function RecipesSection() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <Container>
        <div className="mb-16 md:mb-24 text-center max-w-5xl mx-auto flex flex-col gap-4 items-center">
          <h3 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#234A23]">
            Inspirez-vous avec des recettes faciles à réaliser au quotidien
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4 md:gap-8 items-center justify-items-center">
          {INTERACTIVE_DATA.map((item, index) => (
            <InteractiveFlipCard key={index} category={item} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button className="px-8 py-4 font-sans text-lg text-black font-normal bg-gradient-to-b from-white to-slate-50 rounded-full transition-all duration-300 ease-in-out shadow-[0_8px_16px_rgba(0,0,0,0.06),_0_2px_4px_rgba(0,0,0,0.02)] hover:shadow-[inset_0_4px_12px_rgba(0,0,0,0.12),_inset_0_2px_4px_rgba(0,0,0,0.06)] hover:from-slate-100 hover:to-white cursor-pointer">
            Cliquer pour retourner
          </button>
        </div>
      </Container>
    </section>
  );
}
