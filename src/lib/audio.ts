"use client";

import { Howl } from "howler";
import { config } from "@/lib/config";

let musicHowl: Howl | null = null;
let audioContext: AudioContext | null = null;
let musicIsPlaying = false;

/**
 * Initialize ambient background music.
 * Returns the Howl instance so the caller can control playback.
 *
 * NOTE: The track itself is NOT bundled — we use Howler's CDN streaming
 * OR you can drop a file at /public/audio/dreamy-piano.mp3.
 * For a self-hosted build, download from Pixabay and place in /public/audio/.
 */
export function initMusic(): Howl | null {
  if (typeof window === "undefined" || musicHowl) return musicHowl;

  // Try local first, fall back to graceful silence.
  const src: string[] = ["/audio/dreamy-piano.mp3"];

  musicHowl = new Howl({
    src,
    html5: true, // use HTML5 audio (avoids CORS, supports streaming)
    loop: true,
    volume: 0,
    preload: false, // don't load until user enables
    onloaderror: () => {
      // Music file missing — silently degrade.
      musicHowl = null;
    },
  });

  return musicHowl;
}

/** Enable music with smooth fade-in. */
export function playMusic() {
  const howl = initMusic();
  if (!howl) return;
  if (!howl.playing()) howl.play();
  howl.fade(howl.volume(), config.musicVolume, config.musicFadeInMs);
  musicIsPlaying = true;
}

/** Disable music with smooth fade-out. */
export function pauseMusic() {
  if (!musicHowl) {
    musicIsPlaying = false;
    return;
  }
  musicHowl.fade(musicHowl.volume(), 0, 800);
  setTimeout(() => {
    musicHowl?.pause();
    musicIsPlaying = false;
  }, 800);
}

/** Toggle music on/off and return the new state. */
export function toggleMusic(): boolean {
  if (musicIsPlaying) {
    pauseMusic();
    return false;
  }
  playMusic();
  return true;
}

/** Whether music is currently playing (sync helper for UI). */
export function isMusicPlaying(): boolean {
  return musicIsPlaying;
}

/** Play a soft chime (procedural via Web Audio API). No asset needed. */
export function playChime() {
  if (typeof window === "undefined") return;
  try {
    if (!audioContext) {
      audioContext = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext)();
    }
    const ctx = audioContext;
    if (ctx.state === "suspended") ctx.resume();

    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99]; // C5, E5, G5 — a soft major chord arpeggio

    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, now + i * 0.12);
      gain.gain.linearRampToValueAtTime(0.08, now + i * 0.12 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.8);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + i * 0.12);
      osc.stop(now + i * 0.12 + 0.9);
    });
  } catch {
    // Audio context unavailable — silent fail.
  }
}

/** Cleanup all audio on unmount. */
export function destroyAudio() {
  if (musicHowl) {
    musicHowl.unload();
    musicHowl = null;
  }
  if (audioContext && audioContext.state !== "closed") {
    audioContext.close().catch(() => {});
    audioContext = null;
  }
}
