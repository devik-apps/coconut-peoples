import Image from "next/image";
import { Container } from "@/components/layout/Container";

export function WhyChooseUsSection() {
  return (
    <section className="relative min-h-[70dvh] flex flex-col justify-center bg-black py-24 md:py-40 overflow-hidden">
      {/* Sun background decoration — Occupies 100% width and height */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none select-none">
        <Image src="/assets/sun.png" alt="" fill className="object-cover object-center" priority />
        {/* Subtle radial overlay to focus on the center content */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Content inside standard Container - Left Aligned */}
      <Container className="relative z-10">
        <div className="max-w-4xl flex flex-col items-start text-left gap-8 md:gap-12">
          <span className="px-5 py-2 border border-white/40 rounded-full text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-white/80">
            L&apos;heure bleue
          </span>

          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.1]">
            L&apos;art de ralentir
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-white/60 leading-relaxed max-w-3xl font-light">
            Plus qu&apos;une marque, Coconut People est une invitation à reconnecter avec
            l&apos;essentiel. À travers nos trois univers, nous célébrons un mode de vie où la
            nature, l&apos;artisanat et le temps reprennent leur juste place.
          </p>
        </div>
      </Container>
    </section>
  );
}
