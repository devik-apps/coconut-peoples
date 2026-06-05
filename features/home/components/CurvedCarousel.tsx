"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const IMAGES_COUNT = 20;
const TOTAL_AVAILABLE_IMAGES = 80;
const ANGLE = 360 / IMAGES_COUNT;
const RADIUS = 900;
const GAP = 6;

const IMAGE_WIDTH = (2 * Math.PI * RADIUS) / IMAGES_COUNT - GAP;
const IMAGE_HEIGHT = 450;

export const CurvedCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const xPosRef = useRef(0);
  const isDraggingRef = useRef(false);

  // Correction de l'erreur linting : initialisation paresseuse du state
  const [imageIndices] = useState<number[]>(() => {
    const indices = Array.from(
      { length: IMAGES_COUNT },
      (_, i) => (i % TOTAL_AVAILABLE_IMAGES) + 1
    );
    return indices.sort(() => Math.random() - 0.5);
  });

  useGSAP(
    () => {
      gsap.set(ringRef.current, { rotationY: 180, cursor: "grab" });

      gsap.set(".carousel-img", {
        rotateY: (i: number) => i * -ANGLE,
        transformOrigin: `50% 50% ${RADIUS}px`,
        z: -RADIUS,
        backgroundImage: (i: number) => `url(/assets/images/img_${imageIndices[i]}.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backfaceVisibility: "hidden",
      });

      gsap.from(".carousel-img", {
        duration: 1.5,
        y: 200,
        opacity: 0,
        stagger: 0.05,
        ease: "expo.out",
      });

      gsap.to(ringRef.current, {
        rotationY: "-=360",
        duration: 80,
        repeat: -1,
        ease: "none",
      });
    },
    { scope: containerRef, dependencies: [imageIndices] }
  );

  const handleMouseEnter = (e: React.MouseEvent) => {
    const current = e.currentTarget;
    gsap.to(".carousel-img", {
      opacity: (i: number, t: HTMLElement) => (t === current ? 1 : 0.4),
      scale: (i: number, t: HTMLElement) => (t === current ? 1.05 : 1),
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(".carousel-img", {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

  const dragStart = (e: MouseEvent | TouchEvent) => {
    isDraggingRef.current = true;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    xPosRef.current = Math.round(clientX);
    gsap.set(ringRef.current, { cursor: "grab" });
    gsap.killTweensOf(ringRef.current);
  };

  const drag = (e: MouseEvent | TouchEvent) => {
    if (!isDraggingRef.current) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const currentX = Math.round(clientX);
    const diff = (currentX - xPosRef.current) % 360;

    gsap.to(ringRef.current, {
      rotationY: `-=${diff * 0.4}`,
      duration: 0.5,
      ease: "power2.out",
    });

    xPosRef.current = currentX;
  };

  const dragEnd = () => {
    isDraggingRef.current = false;
    gsap.to(ringRef.current, {
      rotationY: "-=360",
      duration: 120,
      repeat: -1,
      ease: "none",
    });
  };

  useEffect(() => {
    const handleDragStart = (e: MouseEvent | TouchEvent) => dragStart(e);
    const handleDrag = (e: MouseEvent | TouchEvent) => drag(e);
    const handleDragEnd = () => dragEnd();

    window.addEventListener("mousedown", handleDragStart);
    window.addEventListener("touchstart", handleDragStart);
    window.addEventListener("mousemove", handleDrag);
    window.addEventListener("touchmove", handleDrag);
    window.addEventListener("mouseup", handleDragEnd);
    window.addEventListener("touchend", handleDragEnd);

    return () => {
      window.removeEventListener("mousedown", handleDragStart);
      window.removeEventListener("touchstart", handleDragStart);
      window.removeEventListener("mousemove", handleDrag);
      window.removeEventListener("touchmove", handleDrag);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchend", handleDragEnd);
    };
  }, []);

  const preserve3dStyle: React.CSSProperties = {
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden",
  };

  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] h-[750px] overflow-hidden bg-slate-50 flex items-center justify-center">
      <div
        ref={containerRef}
        style={{ ...preserve3dStyle, perspective: "1500px" }}
        className="stage relative w-full h-full"
      >
        <div
          style={{
            ...preserve3dStyle,
            width: `${IMAGE_WIDTH}px`,
            height: `${IMAGE_HEIGHT}px`,
          }}
          className="container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div ref={ringRef} style={preserve3dStyle} className="ring relative w-full h-full">
            {imageIndices.map((_, i) => (
              <div
                key={i}
                className="carousel-img absolute w-full h-full bg-cover bg-center cursor-pointer rounded-none"
                style={preserve3dStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
