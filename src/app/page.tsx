"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useBirthdayStore } from "@/lib/store";
import { Preloader } from "@/components/ui/Preloader";
import { MusicToggle } from "@/components/ui/MusicToggle";
import { initLenis, destroyLenis } from "@/lib/lenis";
import { setupGSAP } from "@/lib/gsap-setup";

// Lazy-load each scene — saves massive JS bundle for first paint.
const Scene0Password = dynamic(
  () => import("@/components/scenes/Scene0Password").then((m) => m.Scene0Password),
  { ssr: false },
);
const Scene1Gate = dynamic(
  () => import("@/components/scenes/Scene1Gate").then((m) => m.Scene1Gate),
  { ssr: false },
);
const Scene2Nile = dynamic(
  () => import("@/components/scenes/Scene2Nile").then((m) => m.Scene2Nile),
  { ssr: false },
);
const Scene3Title = dynamic(
  () => import("@/components/scenes/Scene3Title").then((m) => m.Scene3Title),
  { ssr: false },
);
const Scene4Timeline = dynamic(
  () => import("@/components/scenes/Scene4Timeline").then((m) => m.Scene4Timeline),
  { ssr: false },
);
const Scene5Favorites = dynamic(
  () => import("@/components/scenes/Scene5Favorites").then((m) => m.Scene5Favorites),
  { ssr: false },
);
const Scene6Dog = dynamic(
  () => import("@/components/scenes/Scene6Dog").then((m) => m.Scene6Dog),
  { ssr: false },
);
const Scene7Eighteen = dynamic(
  () => import("@/components/scenes/Scene7Eighteen").then((m) => m.Scene7Eighteen),
  { ssr: false },
);
const Scene8Cake = dynamic(
  () => import("@/components/scenes/Scene8Cake").then((m) => m.Scene8Cake),
  { ssr: false },
);
const Scene9Cut = dynamic(
  () => import("@/components/scenes/Scene9Cut").then((m) => m.Scene9Cut),
  { ssr: false },
);
const Scene10Forever = dynamic(
  () => import("@/components/scenes/Scene10Forever").then((m) => m.Scene10Forever),
  { ssr: false },
);

export default function Home() {
  const unlocked = useBirthdayStore((s) => s.unlocked);

  useEffect(() => {
    // Initialize Lenis + GSAP on mount
    const lenis = initLenis();
    setupGSAP();

    if (lenis) {
      // Drive Lenis from GSAP ticker for synchronized RAF
      const tickerUpdate = (time: number) => {
        lenis.raf(time * 1000);
      };
      const gsap = setupGSAP();
      gsap.ticker.add(tickerUpdate);

      return () => {
        gsap.ticker.remove(tickerUpdate);
        destroyLenis();
      };
    }
  }, []);

  return (
    <main className="relative">
      <Preloader />
      <MusicToggle />

      {/* Scene 0 — Password gate (always rendered, but scene is a single page flow) */}
      <Scene0Password />

      {/* Scenes 1–10 only render after unlock. They share the page but are gated by CSS display. */}
      {unlocked && (
        <>
          <Scene1Gate />
          <Scene2Nile />
          <Scene3Title />
          <Scene4Timeline />
          <Scene5Favorites />
          <Scene6Dog />
          <Scene7Eighteen />
          <Scene8Cake />
          <Scene9Cut />
          <Scene10Forever />
        </>
      )}

      {/* Watermark — always visible in lower-right corner */}
      <footer className="fixed bottom-3 left-3 z-30 text-[10px] text-soft-lavender/30 font-body pointer-events-none">
        Built with 🩷 for Basmala
      </footer>
    </main>
  );
}
