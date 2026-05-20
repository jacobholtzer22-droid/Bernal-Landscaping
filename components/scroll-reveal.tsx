"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  delayMs?: number;
  className?: string;
  as?: "div" | "section" | "article";
};

// Fade-up reveal triggered when ~15% of the element is in view. Uses
// IntersectionObserver and respects prefers-reduced-motion. Pass a delayMs
// (typically index * 100) on adjacent items to stagger a grid.
export function ScrollReveal({
  children,
  delayMs = 0,
  className = "",
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`motion-reduce:!opacity-100 motion-reduce:!translate-y-0 motion-reduce:!transition-none ${className}`}
      style={{
        transitionProperty: "opacity, transform",
        transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)",
        transitionDuration: "600ms",
        transitionDelay: `${delayMs}ms`,
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(20px)",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}
