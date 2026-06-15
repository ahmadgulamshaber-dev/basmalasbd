import { create } from "zustand";

type BirthdayState = {
  /** Whether the password gate has been unlocked. */
  unlocked: boolean;
  /** Whether music is currently playing. */
  musicOn: boolean;
  /** Current scene index (0–10). */
  currentScene: number;
  /** Total "pet the dog" taps. */
  pets: number;
  /** Trigger replay from Scene 1. */
  replayCount: number;

  // Actions
  setUnlocked: (v: boolean) => void;
  toggleMusic: () => void;
  setCurrentScene: (i: number) => void;
  incrementPets: () => void;
  triggerReplay: () => void;
};

export const useBirthdayStore = create<BirthdayState>((set) => ({
  unlocked: false,
  musicOn: false,
  currentScene: -1,
  pets: 0,
  replayCount: 0,

  setUnlocked: (v) => set({ unlocked: v }),
  toggleMusic: () => set((s) => ({ musicOn: !s.musicOn })),
  setCurrentScene: (i) => set({ currentScene: i }),
  incrementPets: () => set((s) => ({ pets: s.pets + 1 })),
  triggerReplay: () =>
    set((s) => ({ replayCount: s.replayCount + 1, currentScene: 0 })),
}));
