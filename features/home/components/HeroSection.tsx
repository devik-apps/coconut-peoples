import { Container } from "@/components/layout/Container";

export function HeroSection() {
  return (
    <section className="relative min-h-[90dvh] flex items-center pt-20">
      <Container>
        <div className="max-w-4xl">
          {/* Headline Skeleton */}
          <div className="space-y-6">
            <div className="h-16 md:h-24 bg-zinc-50 rounded-lg w-full animate-pulse" />
            <div className="h-16 md:h-24 bg-zinc-50 rounded-lg w-3/4 animate-pulse" />
          </div>
          
          {/* Subtext Skeleton */}
          <div className="mt-10 space-y-3">
            <div className="h-4 bg-zinc-50 rounded w-1/2 animate-pulse" />
            <div className="h-4 bg-zinc-50 rounded w-1/3 animate-pulse" />
          </div>

          {/* CTA Skeleton */}
          <div className="mt-12">
            <div className="h-12 bg-zinc-100 rounded-full w-40 animate-pulse" />
          </div>
        </div>
      </Container>
    </section>
  );
}
