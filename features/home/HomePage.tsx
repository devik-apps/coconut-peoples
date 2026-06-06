import {
  HeroSection,
  CurvedCarousel,
  AboutSection,
  CollectionSection,
  WhyChooseUsSection,
  NewsSection,
  CtaSection,
  RecipesSection,
} from "./components";

export function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <CurvedCarousel />
      <RecipesSection />
      <CollectionSection />
      <WhyChooseUsSection />
      <NewsSection />
      <CtaSection />
    </div>
  );
}
