"use client";

import { homeNews } from "../data";
import { NewsItem } from "../types";
import { motion } from "framer-motion";
import Image from "next/image";

function NewsCard({ item, className }: { item: NewsItem; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -5, rotate: 0 }}
      className={`relative flex-shrink-0 w-[280px] md:w-[320px] bg-white px-2.5 md:px-3 pt-5 md:pt-6 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 ${
        item.date ? "pb-6 md:pb-10" : "pb-10 md:pb-16"
      } ${className}`}
    >
      {/* Label "Sticker" Style - Top Centered, Empty, Translucent */}
      <div
        className={`absolute -top-2 left-1/2 -translate-x-1/2 z-30 w-12 h-4 opacity-25 shadow-sm rotate-[-1deg] ${item.category.color}`}
      />

      {/* Image Container - Square aspect with slight radius */}
      <div className="relative aspect-square overflow-hidden bg-zinc-100 border border-zinc-50 rounded-[1px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
      </div>

      {/* Description Content - Exact style from template - Centered */}
      <div className="mt-4 flex flex-col gap-1 text-center px-2">
        <h3 className="font-serif text-lg md:text-xl font-bold leading-[1.2] text-zinc-950">
          {item.title}
        </h3>
        {item.date && (
          <span className="font-sans text-[10px] font-bold tracking-[0.1em] text-zinc-400 uppercase">
            {item.date}
          </span>
        )}
      </div>
    </motion.div>
  );
}

export function NewsSection() {
  const firstRow = [...homeNews.items.slice(0, 6), ...homeNews.items.slice(0, 6)];
  const secondRow = [...homeNews.items.slice(6, 12), ...homeNews.items.slice(6, 12)];

  return (
    <section className="flex flex-col justify-center bg-wet-sand overflow-hidden py-32 md:py-40">
      {/* Header - Compact */}
      <div className="mb-8 md:mb-12 px-6 text-center">
        <h2 className="font-architects text-3xl md:text-5xl lg:text-6xl font-bold text-coco-green tracking-wide">
          vivre libre, vivre solaire, vivre coco
        </h2>
      </div>

      {/* Album Strip - Infinite Scroll */}
      <div className="relative flex flex-col gap-4 md:gap-8">
        {/* Row 1 - Moving Left */}
        <div className="flex overflow-hidden no-scrollbar py-4">
          <motion.div 
            animate={{ x: [0, -1920] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex gap-12 md:gap-32 px-10 md:px-32 items-start"
          >
            {firstRow.map((item, idx) => (
              <NewsCard 
                key={`${item.id}-row1-${idx}`} 
                item={item} 
                className={idx % 2 === 0 ? "rotate-[1deg]" : "rotate-[-1deg] mt-2"}
              />
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Moving Right */}
        <div className="flex overflow-hidden no-scrollbar py-4">
          <motion.div 
            animate={{ x: [-1920, 0] }}
            transition={{ 
              duration: 45, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex gap-12 md:gap-32 px-10 md:px-32 items-start"
          >
            {secondRow.map((item, idx) => (
              <NewsCard 
                key={`${item.id}-row2-${idx}`} 
                item={item} 
                className={idx % 2 === 0 ? "rotate-[-0.5deg] mt-1" : "rotate-[0.5deg]"}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
