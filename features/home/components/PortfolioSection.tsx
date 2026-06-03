import { Container } from "@/components/layout/Container";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="section-padding bg-zinc-50/30">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="h-4 bg-zinc-200 rounded w-28 animate-pulse" />
            <div className="h-12 bg-zinc-100 rounded w-full animate-pulse" />
          </div>
          <div className="h-10 bg-zinc-100 rounded-full w-32 animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-6">
              <div className="aspect-[16/10] bg-zinc-100 rounded-3xl animate-pulse" />
              <div className="space-y-2">
                <div className="h-6 bg-zinc-100 rounded w-1/3 animate-pulse" />
                <div className="h-4 bg-zinc-50 rounded w-1/4 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
