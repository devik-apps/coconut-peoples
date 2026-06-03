import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-100 bg-zinc-50 py-24">
      <Container>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/" className="font-serif text-2xl font-medium tracking-tight text-zinc-950">
              Coconut People
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
              Une agence créative dédiée à l'excellence et à l'innovation dans chaque projet que nous entreprenons.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">Navigation</h4>
            <ul className="space-y-3 text-sm font-medium text-zinc-600">
              <li><Link href="#about" className="hover:text-zinc-950 transition-colors">À propos</Link></li>
              <li><Link href="#services" className="hover:text-zinc-950 transition-colors">Services</Link></li>
              <li><Link href="#portfolio" className="hover:text-zinc-950 transition-colors">Réalisations</Link></li>
              <li><Link href="#contact" className="hover:text-zinc-950 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">Légal</h4>
            <ul className="space-y-3 text-sm font-medium text-zinc-600">
              <li><Link href="/privacy" className="hover:text-zinc-950 transition-colors">Confidentialité</Link></li>
              <li><Link href="/terms" className="hover:text-zinc-950 transition-colors">Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-24 border-t border-zinc-200/50 pt-8 text-[11px] font-medium uppercase tracking-widest text-zinc-400">
          <p>© {new Date().getFullYear()} Coconut People. Tous droits réservés.</p>
        </div>
      </Container>
    </footer>
  );
}
