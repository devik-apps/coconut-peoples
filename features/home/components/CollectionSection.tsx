"use client";

import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import Image from "next/image";

type CollectionCardProps = {
  className: string;
  category: { name: string; img: string };
};

const CollectionCard = ({ className, category }: CollectionCardProps) => {
  return (
    <div className={cn("group relative overflow-hidden rounded-none cursor-pointer", className)}>
      {/* Background Image with Blur Effect */}
      <div className="absolute inset-0 transition-all duration-700 group-hover:blur-sm">
        <Image src={category.img} alt={category.name} fill className="object-cover" />
      </div>

      {/* Overlay to darken on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10" />

      {/* Content - Slide from top to bottom-left */}
      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-20 overflow-hidden">
        <div className="translate-y-[-120%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <h4 className="font-serif text-xl md:text-3xl font-medium text-white drop-shadow-lg">
            {category.name}
          </h4>
        </div>
      </div>
    </div>
  );
};

export function CollectionSection() {
  return (
    <section id="services" className="section-padding bg-white px-4 md:px-0">
      <Container>
        <div className="mb-12 md:mb-24 text-center max-w-2xl mx-auto flex flex-col gap-4 items-center">
          <h3 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900">
            La Collection
          </h3>
          <p className="font-serif text-xl md:text-2xl text-zinc-600">
            Craquez pour nos créations artisanales en coco et raphia.
          </p>
        </div>

        <div id="collection-grid" className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <CollectionCard
            className="md:col-start-1 md:col-end-6 h-80 md:h-100"
            category={{ name: "Paillassons en fibre de coco", img: "/assets/images/img_20.jpg" }}
          />
          <CollectionCard
            className="md:col-start-6 md:col-end-13 h-80 md:h-100"
            category={{ name: "Boucles d'oreilles", img: "/assets/images/img_79.jpg" }}
          />
          <CollectionCard
            className="md:col-start-1 md:col-end-4 h-80 md:h-100"
            category={{ name: "Ustensiles bois", img: "/assets/images/img_80.jpg" }}
          />
          <CollectionCard
            className="md:col-start-4 md:col-end-8 h-80 md:h-100"
            category={{ name: "Tressage artisanal", img: "/assets/images/img_22.jpg" }}
          />
          <CollectionCard
            className="md:col-start-8 md:col-end-13 h-80 md:h-100"
            category={{ name: "Mode et accessoires naturels", img: "/assets/images/img_24.jpg" }}
          />
          <CollectionCard
            className="md:col-start-1 md:col-end-13 h-80 md:h-100"
            category={{ name: "Sets de table", img: "/assets/images/img_31.jpg" }}
          />

          <div className="md:col-start-1 md:col-end-8 grid grid-cols-1 md:grid-rows-2 gap-4">
            <CollectionCard
              className="md:row-start-1 md:row-end-2 h-80 md:h-auto"
              category={{ name: "Sacs artisanaux en raphia", img: "/assets/images/img_61.jpg" }}
            />
            <CollectionCard
              className="md:row-start-2 md:row-end-3 h-80 md:h-auto"
              category={{ name: "Sandales en raphia", img: "/assets/images/img_63.jpg" }}
            />
          </div>

          <CollectionCard
            className="md:col-start-8 md:col-end-13 h-80 md:h-100"
            category={{ name: "Bois artisanaux en bois de coco", img: "/assets/images/img_54.jpg" }}
          />
        </div>
      </Container>
    </section>
  );
}
