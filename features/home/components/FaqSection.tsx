import { Container } from "@/components/layout/Container";

export function FaqSection() {
  return (
    <section className="section-padding bg-zinc-50/50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div className="lg:col-span-1 space-y-6">
            <div className="h-4 bg-zinc-200 rounded w-16 animate-pulse" />
            <div className="h-12 bg-zinc-100 rounded w-full animate-pulse" />
            <div className="h-4 bg-zinc-100 rounded w-4/5 animate-pulse" />
          </div>
          <div className="lg:col-span-2 space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="p-8 bg-white border border-zinc-100 rounded-3xl space-y-4">
                <div className="h-6 bg-zinc-50 rounded w-2/3 animate-pulse" />
                <div className="h-4 bg-zinc-50 rounded w-full animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
