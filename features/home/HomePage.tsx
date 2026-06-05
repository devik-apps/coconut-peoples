import {
  HeroSection,
  CurvedCarousel,
  AboutSection,
  CollectionSection,
  ProcessSection,
  PortfolioSection,
  TestimonialsSection,
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
      <CollectionSection />
      <WhyChooseUsSection />
      <NewsSection />
      <CtaSection />
    </div>
  );
}
