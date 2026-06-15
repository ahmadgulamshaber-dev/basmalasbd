"use client";

import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

/**
 * Initialize Lenis smooth scroll and sync it with GSAP's ticker.
 * This is critical: running both on the same RAF keeps ScrollTrigger in sync.
 */
export function initLenis() {
  if (typeof window === "undefined") return null;
  if (lenisInstance) return lenisInstance;

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    syncTouch: true,
  });

  lenisInstance = lenis;
  return lenis;
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}

export function destroyLenis() {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}

/** Scroll programmatically to a specific Y position. */
export function scrollToScene(index: number, sceneHeight = window.innerHeight) {
  if (lenisInstance) {
    lenisInstance.scrollTo(index * sceneHeight, { duration: 1.4 });
  } else {
    window.scrollTo({ top: index * sceneHeight, behavior: "smooth" });
  }
}
