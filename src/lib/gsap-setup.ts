"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/** Register GSAP plugins once. Safe to call from any client component. */
export function setupGSAP() {
  if (typeof window === "undefined" || registered) return gsap;
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ force3D: true });
  ScrollTrigger.config({ ignoreMobileResize: true });
  registered = true;
  return gsap;
}

export { gsap, ScrollTrigger };
