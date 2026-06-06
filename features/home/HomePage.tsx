import {
  HeroSection,
  CurvedCarousel,
  AboutSection,
  CollectionSection,
  RecipesGallerySection,
  RecipesSection,
  WhyChooseUsSection,
  NewsSection,
  CtaSection,
} from "./components";

export function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <CurvedCarousel />
      <RecipesGallerySection />
      <CollectionSection />
      <RecipesSection />
      <WhyChooseUsSection />
      <NewsSection />
      <CtaSection />
    </div>
  );
}
