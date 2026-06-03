import { Container } from "@/components/layout/Container";

export function FeaturesSection() {
  return (
    <section id="services" className="section-padding bg-zinc-50/50">
      <Container>
        <div className="mb-24 text-center max-w-2xl mx-auto space-y-4">
          <div className="h-4 bg-zinc-200 rounded w-32 mx-auto animate-pulse" />
          <div className="h-12 bg-zinc-100 rounded w-full animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="p-10 bg-white border border-zinc-100 rounded-3xl space-y-6">
              <div className="w-12 h-12 bg-zinc-50 rounded-2xl animate-pulse" />
              <div className="h-6 bg-zinc-50 rounded w-1/2 animate-pulse" />
              <div className="space-y-2">
                <div className="h-3 bg-zinc-50 rounded w-full animate-pulse" />
                <div className="h-3 bg-zinc-50 rounded w-4/5 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
