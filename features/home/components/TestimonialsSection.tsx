import { Container } from "@/components/layout/Container";

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <Container>
        <div className="text-center mb-24 space-y-4">
          <div className="h-4 bg-zinc-100 rounded w-24 mx-auto animate-pulse" />
          <div className="h-12 bg-zinc-50 rounded w-1/2 mx-auto animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="p-12 bg-zinc-50 rounded-[2.5rem] space-y-8">
              <div className="space-y-4">
                <div className="h-4 bg-zinc-200 rounded w-full animate-pulse" />
                <div className="h-4 bg-zinc-200 rounded w-full animate-pulse" />
                <div className="h-4 bg-zinc-200 rounded w-2/3 animate-pulse" />
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-zinc-200 rounded-full animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 bg-zinc-200 rounded w-24 animate-pulse" />
                  <div className="h-3 bg-zinc-100 rounded w-32 animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
