"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = { src: string; alt: string };

const SLIDES: Slide[] = [
  {
    src: "/gallery/FB_IMG_1771944411767.jpg",
    alt: "Tan tiered block retaining wall with planter terraces behind a shaded green lawn",
  },
  {
    src: "/gallery/FB_IMG_1743117341843.jpg",
    alt: "Gray rectangular paver patio with a central square stone fire pit in an open backyard",
  },
  {
    src: "/gallery/FB_IMG_1771690046733.jpg",
    alt: "Lakefront property with a curved tan block retaining wall and sand beach in front of a home",
  },
  {
    src: "/gallery/FB_IMG_1779146552127.jpg",
    alt: "Long gray block staircase climbing alongside a curved retaining wall with wrought-iron railing",
  },
  {
    src: "/gallery/FB_IMG_1779146559581.jpg",
    alt: "Backyard hardscape combining a gray paver patio, block steps, and a small retaining wall",
  },
  {
    src: "/gallery/FB_IMG_1743097735372.jpg",
    alt: "Tall rustic natural stone retaining wall with a wide stone staircase in a wooded backyard",
  },
  {
    src: "/gallery/FB_IMG_1743117555124.jpg",
    alt: "Newly laid green sod lawn bordered by a white river-rock drainage strip beside a home",
  },
  {
    src: "/gallery/FB_IMG_1771690358929.jpg",
    alt: "Curved gray block retaining wall with built-in steps alongside a home and a mulched bed on top",
  },
];

const SLIDE_DURATION_MS = 5000;
const FADE_DURATION_MS = 700;

export function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onVisibilityChange = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  useEffect(() => {
    if (paused || !visible) return;
    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % SLIDES.length);
    }, SLIDE_DURATION_MS);
    return () => window.clearInterval(id);
  }, [paused, visible]);

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      onTouchCancel={() => setPaused(false)}
    >
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 ease-in-out"
          style={{
            transitionProperty: "opacity",
            transitionDuration: `${FADE_DURATION_MS}ms`,
            opacity: i === activeIndex ? 1 : 0,
          }}
          aria-hidden={i !== activeIndex}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Dark gradient so white hero text stays readable on every slide */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/85"
        aria-hidden
      />

      {/* Dot indicators */}
      <div
        className="absolute inset-x-0 bottom-3 z-30 flex justify-center gap-2"
        role="tablist"
        aria-label="Hero slide indicators"
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-label={`Show slide ${i + 1} of ${SLIDES.length}`}
            aria-selected={i === activeIndex}
            onClick={() => setActiveIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-8 bg-white"
                : "w-2 bg-white/55 hover:bg-white/85"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
