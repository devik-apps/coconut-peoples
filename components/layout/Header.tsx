import Link from "next/link";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-medium tracking-tight text-zinc-950">
          Coconut People
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-[13px] font-medium uppercase tracking-widest text-zinc-500">
          <Link href="#about" className="hover:text-zinc-950 transition-colors">À propos</Link>
          <Link href="#services" className="hover:text-zinc-950 transition-colors">Services</Link>
          <Link href="#portfolio" className="hover:text-zinc-950 transition-colors">Réalisations</Link>
          <Link href="#contact" className="hover:text-zinc-950 transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center">
          <Link 
            href="#contact" 
            className="rounded-full bg-zinc-950 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-zinc-800 active:scale-[0.97]"
          >
            Démarrer
          </Link>
        </div>
      </Container>
    </header>
  );
}
