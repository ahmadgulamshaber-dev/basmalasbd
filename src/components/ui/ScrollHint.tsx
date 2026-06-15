"use client";

import { ChevronDown } from "lucide-react";

export function ScrollHint({ visible = true }: { visible?: boolean }) {
  return (
    <div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <span className="text-xs text-soft-lavender/50 tracking-widest font-body">
        Scroll to begin
      </span>
      <div className="animate-bounce">
        <ChevronDown className="w-5 h-5 text-lilac-glow/60" />
      </div>
    </div>
  );
}
