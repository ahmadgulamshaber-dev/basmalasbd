"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let raf: number;
    let p = 0;
    const tick = () => {
      p = Math.min(100, p + Math.random() * 8 + 2);
      setProgress(p);
      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setHidden(true), 600);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-deep-night transition-opacity duration-700"
      style={{ opacity: hidden ? 0 : 1 }}
    >
      {/* Animated logo */}
      <div className="relative mb-12">
        <div className="absolute inset-0 animate-pulse-glow rounded-full bg-velvet-purple" />
        <div className="relative font-display text-6xl text-moonlight-gold glow-text-gold tracking-widest">
          B
        </div>
      </div>

      <h1 className="font-display text-3xl text-soft-lavender glow-text mb-2">
        Basmala's Journey
      </h1>
      <p className="font-secondary italic text-rose-pink text-sm mb-12">
        Preparing something magical…
      </p>

      {/* Progress bar */}
      <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-velvet-purple via-lilac-glow to-moonlight-gold transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-3 text-xs text-white/40 tracking-widest">
        {Math.floor(progress)}%
      </p>
    </div>
  );
}
