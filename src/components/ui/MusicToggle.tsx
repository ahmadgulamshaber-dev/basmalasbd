"use client";

import { useBirthdayStore } from "@/lib/store";
import { toggleMusic } from "@/lib/audio";
import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

export function MusicToggle() {
  const musicOn = useBirthdayStore((s) => s.musicOn);
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    const nowPlaying = toggleMusic();
    useBirthdayStore.setState({ musicOn: nowPlaying });
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full glass flex items-center justify-center transition-all duration-300 hover:scale-110"
      aria-label={musicOn ? "Mute music" : "Play music"}
    >
      {musicOn ? (
        <Volume2 className="w-5 h-5 text-moonlight-gold" />
      ) : (
        <VolumeX className="w-5 h-5 text-soft-lavender/70" />
      )}
      {hovered && (
        <span className="absolute -bottom-8 right-0 text-xs text-soft-lavender/70 whitespace-nowrap font-body">
          {musicOn ? "Music on" : "Music off"}
        </span>
      )}
    </button>
  );
}
