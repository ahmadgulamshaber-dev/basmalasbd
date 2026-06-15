"use client";

import { ChevronDown } from "lucide-react";
import { scrollToScene } from "@/lib/lenis";

export function NextSceneArrow({ targetScene }: { targetScene: number }) {
  return (
    <button
      onClick={() => scrollToScene(targetScene)}
      className="fixed bottom-8 right-8 z-30 w-14 h-14 rounded-full glass-strong flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-glow-purple"
      aria-label="Next scene"
    >
      <ChevronDown className="w-6 h-6 text-moonlight-gold animate-bounce" />
    </button>
  );
}
