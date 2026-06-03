import { Container } from "@/components/layout/Container";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="aspect-[4/5] bg-zinc-50 rounded-3xl animate-pulse" />
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="h-4 bg-zinc-100 rounded w-24 animate-pulse" />
              <div className="h-12 bg-zinc-50 rounded w-full animate-pulse" />
              <div className="h-12 bg-zinc-50 rounded w-5/6 animate-pulse" />
            </div>
            <div className="space-y-4">
              <div className="h-4 bg-zinc-50 rounded w-full animate-pulse" />
              <div className="h-4 bg-zinc-50 rounded w-full animate-pulse" />
              <div className="h-4 bg-zinc-50 rounded w-2/3 animate-pulse" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
