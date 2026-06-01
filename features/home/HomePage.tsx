import { Container } from "@/components/layout/Container";
import { HeroSection } from "./components/HeroSection";

export function HomePage() {
  return (
    <main className="flex min-h-dvh items-center bg-zinc-50 py-20 dark:bg-black">
      <Container>
        <HeroSection />
      </Container>
    </main>
  );
}
