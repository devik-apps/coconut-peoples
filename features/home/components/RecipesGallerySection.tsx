"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const ORBIT_ITEMS = [
  { name: "Entremet fruit tropical", img: "/assets/images/img_21.jpg" },
  { name: "Pâte à tartiner coco", img: "/assets/images/img_22.jpg" },
  { name: "Cookies coco", img: "/assets/images/img_23.jpg" },
  { name: "Gâteau coco & passion", img: "/assets/images/img_24.jpg" },
  { name: "Chips coco", img: "/assets/images/img_25.jpg" },
  { name: "Tartelettes coco", img: "/assets/images/img_26.jpg" },
  { name: "Soufflés coco", img: "/assets/images/img_27.jpg" },
  { name: "Glace coco", img: "/assets/images/img_28.jpg" },
];

const CENTER_ITEM = { name: "Mochi au coco", img: "/assets/images/img_20.jpg" };

const GalleryCard = ({ 
  name, 
  img, 
  className, 
}: { 
  name: string; 
  img: string; 
  className?: string;
}) => (
  <div 
    className={cn(
      "bg-white border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] group",
      className
    )}
  >
    <div className="relative w-full h-[75%] overflow-hidden">
      <Image
        src={img}
        alt={name}
        fill
        className="object-cover"
      />
    </div>
    <div className="h-[25%] flex items-center justify-center bg-white px-2">
      <span className="text-[10px] md:text-xs font-sans font-bold uppercase tracking-wider text-zinc-800 text-center leading-tight">
        {name}
      </span>
    </div>
  </div>
);

export function RecipesGallerySection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-32 bg-[#F8F9FA] overflow-hidden min-h-225 flex flex-col items-center">
      <div className="mb-16 text-center">
        <h3 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#5C4709]">
          Nos Recettes
        </h3>
      </div>

      <Container className="relative h-200 flex items-center justify-center">
        {/* Radial Layout Container */}
        <div className="relative w-full h-full max-w-200 max-h-200 flex items-center justify-center">
          {/* Central Card */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="z-30 cursor-pointer"
          >
            <motion.div
              animate={{ y: isHovered ? -10 : 0 }}
              transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
            >
              <GalleryCard
                name={CENTER_ITEM.name}
                img={CENTER_ITEM.img}
                className="w-40 h-52 md:w-48 md:h-64 border-2 border-white"
              />
            </motion.div>
            {/* Hint when not hovered */}
            {/* <AnimatePresence>
              {!isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold uppercase tracking-widest text-zinc-400"
                >
                  Survoler pour explorer
                </motion.div>
              )}
            </AnimatePresence> */}
          </div>

          {/* Orbiting Cards */}
          {ORBIT_ITEMS.map((item, i) => {
            const angle = (i * 360) / ORBIT_ITEMS.length;
            const radius = 320;

            return (
              <div
                key={i}
                className="absolute hidden md:block pointer-events-none"
                style={{
                  transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                }}
              >
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 60, scale: 0.9 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        transition: { 
                          delay: i * 0.15, // Délai augmenté pour un affichage plus séquentiel
                          duration: 1.2,   // Durée allongée pour plus de douceur
                          ease: [0.22, 1, 0.36, 1] // Courbe plus douce et moins abrupte
                        }
                      }}
                      exit={{ 
                        opacity: 0, 
                        y: 40, 
                        scale: 0.95,
                        transition: { 
                          delay: (ORBIT_ITEMS.length - i) * 0.05, // Disparition séquentielle inverse
                          duration: 0.5, 
                          ease: "easeInOut" 
                        }
                      }}
                      className="pointer-events-auto will-change-transform"
                    >
                      <GalleryCard
                        name={item.name}
                        img={item.img}
                        className="w-36 h-48 shadow-sm"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* Mobile Grid Fallback (Always visible or on tap) */}
          <div className="absolute inset-0 grid grid-cols-2 gap-4 md:hidden mt-20 overflow-y-auto pt-10 px-4">
            {ORBIT_ITEMS.map((item, i) => (
              <GalleryCard
                key={`mobile-${i}`}
                name={item.name}
                img={item.img}
                className="w-full h-40"
              />
            ))}
          </div>
        </div>

        {/* Decorative elements to simulate studio lighting */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/40 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/40 blur-[120px] rounded-full pointer-events-none" />
      </Container>
    </section>
  );
}
