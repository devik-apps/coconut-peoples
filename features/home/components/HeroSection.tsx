import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-dvh flex items-center p-20 bg-black/30">
      <div className="size-full min-h-dvh flex items-center justify-center border">
        <Container className="flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl w-full">
            {/* Headline */}
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight text-zinc-950">
                Né de Madagascar,
                <br />
                fait pour le monde.
              </h1>
            </div>

            {/* Subtext */}
            <div className="mt-8 flex flex-col items-center justify-center text-center">
              <p className="font-sans text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl">
                Tout commence par un fruit. Un arbre. Une île. Nous avons pris
                ce que Madagascar avait de plus généreux et nous en avons fait
                une marque — gourmande, naturelle, vivante.
              </p>
            </div>

            {/* CTA Skeleton */}
            <div className="mt-12 flex items-center flex-col justify-center gap-6">
              <ButtonLink className="gap-2 p-8 group bg-white/20 cursor-default">
                <span>Je rejoins l&apos;aventure</span>
                <span className="bg-white rounded-full group-hover:rotate-45 transition-all p-2">
                  <ArrowUpRight className="text-gray-800" />
                </span>
              </ButtonLink>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
