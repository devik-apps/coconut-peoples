"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#services", label: "Nos recettes" },
  { href: "#portfolio", label: "Nos produits" },
  { href: "#portfolio", label: "Qui sommes-nous ?" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 z-50 w-full pt-6 md:pt-10 px-4 md:px-20 pointer-events-none">
      <Container className="pointer-events-auto">
        <div className="flex h-20 items-center justify-between bg-white/90 backdrop-blur-md px-6 md:px-10">
          <Link
            href="/"
            className="font-serif text-xl md:text-2xl font-medium tracking-tight text-zinc-950 shrink-0"
          >
            Coconut People
          </Link>

          {/* Desktop Nav - Ajusté pour 6 liens */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm tracking-[0.15em] text-zinc-500">
            {navLinks.map((link, i) => (
              <Link
                key={`${link.href}-${i}`}
                href={link.href}
                className="hover:text-zinc-950 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-950 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X size={24} strokeWidth={1.5} />
              ) : (
                <Menu size={24} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[-1] bg-white pointer-events-auto flex flex-col justify-center p-8 lg:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={`${link.href}-mobile-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: i * 0.1,
                      duration: 0.5,
                      ease: [0.32, 0.72, 0, 1],
                    },
                  }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-4xl font-medium text-zinc-950 hover:text-zinc-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
