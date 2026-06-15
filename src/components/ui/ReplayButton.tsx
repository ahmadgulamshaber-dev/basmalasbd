"use client";

import { RotateCcw } from "lucide-react";
import { scrollToScene } from "@/lib/lenis";
import { useBirthdayStore } from "@/lib/store";

export function ReplayButton() {
  const triggerReplay = useBirthdayStore((s) => s.triggerReplay);

  const handleClick = () => {
    triggerReplay();
    // Scroll back to top (which is the gate, now unlocked)
    scrollToScene(0);
    // Force unlock reset? No — once unlocked, stay unlocked.
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 px-6 py-3 rounded-full glass-strong flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-glow-gold group"
      aria-label="Replay the journey"
    >
      <RotateCcw className="w-4 h-4 text-moonlight-gold group-hover:rotate-180 transition-transform duration-700" />
      <span className="text-moonlight-gold text-sm tracking-wider font-display">
        Replay
      </span>
    </button>
  );
}
