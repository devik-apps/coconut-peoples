import {
  HeroSection,
  CurvedCarousel,
  AboutSection,
  FeaturesSection,
  ProcessSection,
  PortfolioSection,
  TestimonialsSection,
  FaqSection,
  NewsSection,
  CtaSection,
} from "./components";

export function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <CurvedCarousel />
      <FeaturesSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FaqSection />
      <NewsSection />
      <CtaSection />
    </div>
  );
}
