"use client";

import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

const IMAGES_COUNT = 20;
const TOTAL_AVAILABLE_IMAGES = 80;
const ANGLE = 360 / IMAGES_COUNT;
const RADIUS = 900;
const GAP = 6;

const IMAGE_WIDTH = (2 * Math.PI * RADIUS) / IMAGES_COUNT - GAP;
const IMAGE_HEIGHT = 450;

export const CurvedCarousel = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const rotationY = useMotionValue(180);

  const xPosRef = useRef(0);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);

  const imageIndices = useMemo(() => {
    // Generate indices first
    const indices = Array.from(
      { length: IMAGES_COUNT },
      (_, i) => (i % TOTAL_AVAILABLE_IMAGES) + 1
    );
    // Since Math.random() is impure, we can't use it directly in render.
    // We return a predictable order or handle shuffling in useEffect.
    // For now, we return a stable array to satisfy React purity rules.
    return indices;
  }, []);

  const startAutoRotation = useCallback((duration = 80) => {
    if (animationRef.current) animationRef.current.stop();

    animationRef.current = animate(rotationY, rotationY.get() - 360, {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
    });
  }, [rotationY]);

  useEffect(() => {
    startAutoRotation();
    return () => animationRef.current?.stop();
  }, [startAutoRotation]);
  const dragStart = useCallback((e: MouseEvent | TouchEvent) => {
    setIsDragging(true);
    const clientX =
      "touches" in e ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
    xPosRef.current = Math.round(clientX);
    if (animationRef.current) animationRef.current.stop();
  }, []);

  const drag = useCallback((e: MouseEvent | TouchEvent) => {
    const clientX =
      "touches" in e ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
    const currentX = Math.round(clientX);

    const isMouseDown = e instanceof MouseEvent ? e.buttons === 1 : true;

    if (xPosRef.current !== 0 && isMouseDown) {
      const diff = currentX - xPosRef.current;
      rotationY.set(rotationY.get() - diff * 0.4);
    }

    xPosRef.current = currentX;
  }, [rotationY]);

  const dragEnd = useCallback(() => {
    setIsDragging(false);
    startAutoRotation(120); // Slower after drag
  }, [startAutoRotation]);

  useEffect(() => {
    window.addEventListener("mousedown", dragStart);
    window.addEventListener("touchstart", dragStart, { passive: false });
    window.addEventListener("mousemove", drag);
    window.addEventListener("touchmove", drag, { passive: false });
    window.addEventListener("mouseup", dragEnd);
    window.addEventListener("touchend", dragEnd);

    return () => {
      window.removeEventListener("mousedown", dragStart);
      window.removeEventListener("touchstart", dragStart);
      window.removeEventListener("mousemove", drag);
      window.removeEventListener("touchmove", drag);
      window.removeEventListener("mouseup", dragEnd);
      window.removeEventListener("touchend", dragEnd);
    };
  }, [dragStart, drag, dragEnd]);

  const preserve3dStyle: React.CSSProperties = {
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden",
  };

  return (
    <section className="relative w-full h-187.5 overflow-hidden flex items-center justify-center">
      {/* Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-slate-50/50 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-slate-50/50 to-transparent z-20 pointer-events-none" />

      <div
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
          <motion.div
            style={{
              ...preserve3dStyle,
              rotateY: rotationY,
              cursor: isDragging ? "grabbing" : "grab",
            }}
            className="relative w-full h-full"
          >
            {imageIndices.map((imgIndex, i) => (
              <motion.div
                key={i}
                className="carousel-img absolute w-full h-full bg-cover bg-center cursor-pointer rounded-none"
                initial={{
                  opacity: 0,
                  y: 200,
                  rotateY: i * -ANGLE,
                  z: -RADIUS,
                }}
                animate={{
                  opacity: hoveredIndex === null ? 1 : hoveredIndex === i ? 1 : 0.4,
                  y: 0,
                  scale: hoveredIndex === i ? 1.05 : 1,
                }}
                transition={{
                  opacity: { duration: 0.4, delay: i * 0.05 },
                  y: { duration: 1.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }, // expo.out equivalent
                  scale: { duration: 0.4 },
                }}
                style={{
                  ...preserve3dStyle,
                  backgroundImage: `url(/assets/images/img_${imgIndex}.jpg)`,
                  transformOrigin: `50% 50% ${RADIUS}px`,
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
