"use client";

import { useState } from "react";
import Image from "next/image";
import { homeApproach } from "@/features/home/data";
import { cn } from "@/lib/utils";
import type { ApproachItem } from "@/features/home/types";

export function CtaSection() {
  const { eyebrow, title, image, items } = homeApproach;
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");
  const activeItem = items.find((item) => item.id === activeId) ?? items[0];

  return (
    <section id="contact" className="bg-coco-green  pb-20 py-10 overflow-hidden">
      <div className="w-full px-4 md:px-8 lg:px-20 pt-0 pb-16  ">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_5fr] gap-12 lg:gap-16 items-stretch">
          {/* Left — Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Decorative accents */}
            <div className="absolute -bottom-4 -right-4 w-48 h-48 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -top-4 -left-4 w-56 h-56 rounded-full bg-amber-200/15 blur-3xl" />
          </div>

          {/* Right — Content */}
          <div className="space-y-10">
            {/* Eyebrow */}
            <div className="space-y-4">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-white border border-white/30 px-4 py-2 rounded-full">
                {eyebrow}
              </span>
              <h2 className="font-architects text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-wide text-white">
                {title}
              </h2>
            </div>

            {/* Tab buttons — no icons */}
            <div className="flex flex-wrap gap-3">
              {items.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={cn(
                      "px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300",
                      isActive
                        ? "bg-white text-black shadow-lg shadow-black/20"
                        : "bg-black/50 text-white/60 hover:bg-black/70 hover:text-white/90",
                    )}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Active content */}
            <TransitionContent item={activeItem} />
          </div>
        </div>
      </div>
    </section>
  );
}

function TransitionContent({ item }: { item: ApproachItem }) {
  return (
    <div
      key={item.id}
      className="space-y-6 transition-all duration-300"
    >
      {/* Title */}
      <div>
        <h3 className="font-serif text-2xl md:text-3xl font-medium text-white">
          {item.title}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-white/70">
          {item.description}
        </p>
      </div>

      {/* Highlights */}
      <ul className="space-y-3 pt-2">
        {item.highlights.map((highlight, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-white/80">
            <span className="mt-0.5 block size-1.5 shrink-0 rounded-full bg-white/40" />
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
}
