"use client";

import { useState } from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { Plate } from "@/features/home/components";

type InteractiveFlipCardProps = {
  category: Plate;
};

export function InteractiveFlipCard({ category }: InteractiveFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex items-center justify-center p-4">
      <Tilt
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        perspective={1200}
        transitionSpeed={2000}
        scale={1.01}
        gyroscope={true}
        tiltReverse={true}
        className="w-90 h-110 cursor-pointer"
      >
        <div
          className="relative w-full h-full transition-all duration-700 preserve-3d"
          style={{
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transformStyle: "preserve-3d",
          }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Front Side - Defined Square Silhouette */}
          <div
            className="absolute inset-0 w-full h-full backface-hidden rounded-none overflow-hidden border border-zinc-200 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="relative w-full h-[78%] overflow-hidden">
              <Image
                src={category.img}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[22%] bg-white flex items-center justify-center px-6">
              <h4 className="font-sans text-xl text-zinc-800 text-center tracking-tight">
                {category.name}
              </h4>
            </div>
          </div>

          {/* Back Side - Defined Square Silhouette */}
          <div
            className="absolute inset-0 w-full h-full backface-hidden rounded-none bg-white border border-zinc-200 p-10 flex flex-col items-center justify-center text-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <h4 className="font-serif text-2xl text-zinc-900 w-full text-center tracking-tight pb-2">
              Ingrédients
            </h4>
            <ul className="w-full">
              {category.ingredients.map((detail, i) => (
                <li key={i} className="text-center text-sm font-medium text-gray-700">
                  {detail}
                </li>
              ))}
            </ul>
            <h4 className="font-serif text-2xl mb-2 text-gray-900 w-full text-center tracking-tight py-2">
              Préparation
            </h4>

            <div className="w-full">
              {category.preparation.map((detail, i) => (
                <p className="text-center text-sm font-medium text-gray-800" key={i}>
                  {detail}
                </p>
              ))}
            </div>
            {/* <ul className="w-full">
              {category.preparation.map((detail, i) => (
                <li key={i} className="text-center text-sm font-medium text-zinc-600">
                  {detail}
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </Tilt>
    </div>
  );
}
