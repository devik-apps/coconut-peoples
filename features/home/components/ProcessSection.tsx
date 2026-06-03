import { Container } from "@/components/layout/Container";

export function ProcessSection() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="mb-24 space-y-4">
          <div className="h-4 bg-zinc-100 rounded w-40 animate-pulse" />
          <div className="h-12 bg-zinc-50 rounded w-2/3 animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-6">
              <div className="text-5xl font-serif text-zinc-100 animate-pulse">0{i}</div>
              <div className="h-6 bg-zinc-50 rounded w-1/2 animate-pulse" />
              <div className="h-20 bg-zinc-50 rounded w-full animate-pulse" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
