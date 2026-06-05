import {
  HeroSection,
  AboutSection,
  FeaturesSection,
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
      <FeaturesSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <NewsSection />
      <CtaSection />
    </div>
  );
}
