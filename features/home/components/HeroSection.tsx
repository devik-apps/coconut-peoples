import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/images/img_30.jpg"
        alt="Coconut Hero Background"
        fill
        priority
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 w-full h-full min-h-dvh flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-20">
        <div className="absolute inset-4 sm:inset-8 md:inset-12 lg:inset-20 border border-white/20 pointer-events-none" />
        
        <Container className="flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl w-full">
            {/* Headline */}
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight text-white">
                Né de Madagascar,
                <br />
                fait pour le monde.
              </h1>
            </div>

            {/* Subtext */}
            <div className="mt-6 md:mt-8 flex flex-col items-center justify-center text-center">
              <p className="font-sans text-base sm:text-lg md:text-xl text-zinc-200 leading-relaxed max-w-2xl px-4">
                Tout commence par un fruit. Un arbre. Une île. Nous avons pris ce que Madagascar
                avait de plus généreux et nous en avons fait une marque — gourmande, naturelle,
                vivante.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 md:mt-12 flex items-center flex-col justify-center gap-6">
              <ButtonLink className="gap-2 px-6 py-4 md:p-8 group bg-white/20 hover:bg-white/30! transition-colors cursor-default border-white/20 rounded-2xl md:rounded-3xl!">
                <span className="text-white text-sm md:text-base">Je rejoins l&apos;aventure</span>
                <span className="bg-white rounded-full group-hover:rotate-45 transition-all p-1.5 md:p-2">
                  <ArrowUpRight className="size-4 md:size-6 text-gray-800" />
                </span>
              </ButtonLink>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
