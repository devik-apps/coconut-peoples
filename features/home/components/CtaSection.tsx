import { Container } from "@/components/layout/Container";

export function CtaSection() {
  return (
    <section id="contact" className="py-32 bg-white">
      <Container>
        <div className="bg-zinc-950 rounded-[3rem] p-16 md:p-32 text-center space-y-12">
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="h-16 md:h-24 bg-zinc-900 rounded-2xl w-full animate-pulse" />
            <div className="h-4 bg-zinc-800 rounded w-2/3 mx-auto animate-pulse" />
          </div>
          <div className="h-14 bg-white rounded-full w-56 mx-auto animate-pulse" />
        </div>
      </Container>
    </section>
  );
}
