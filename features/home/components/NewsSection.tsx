import { Container } from "@/components/layout/Container";

export function NewsSection() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="flex items-end justify-between mb-24">
          <div className="space-y-4 max-w-xl">
            <div className="h-4 bg-zinc-100 rounded w-20 animate-pulse" />
            <div className="h-12 bg-zinc-50 rounded w-full animate-pulse" />
          </div>
          <div className="h-12 bg-zinc-50 rounded-full w-32 animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-6">
              <div className="aspect-[16/10] bg-zinc-50 rounded-3xl animate-pulse" />
              <div className="space-y-4">
                <div className="h-4 bg-zinc-100 rounded w-24 animate-pulse" />
                <div className="h-8 bg-zinc-50 rounded w-full animate-pulse" />
                <div className="h-4 bg-zinc-50 rounded w-4/5 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
