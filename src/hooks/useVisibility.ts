"use client";

import { useEffect, useRef } from "react";

/**
 * Returns a ref to attach to a container.
 * Calls onEnter/onLeave when the container enters/leaves the viewport.
 */
export function useVisibility<T extends HTMLElement>(
  onEnter?: () => void,
  onLeave?: () => void,
  threshold = 0.1,
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onEnter?.();
        else onLeave?.();
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [onEnter, onLeave, threshold]);

  return ref;
}
