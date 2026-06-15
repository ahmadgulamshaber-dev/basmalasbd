/**
 * Global runtime configuration.
 * Edit here to change behavior without touching components.
 */
export const config = {
  /** Password for the gate — case-insensitive. Change to whatever you want. */
  password: "Basmala18",

  /** Whether the music toggle is enabled by default (off by default for iOS safety). */
  musicEnabledByDefault: false,

  /** Volume for ambient music (0.0–1.0). */
  musicVolume: 0.3,

  /** Fade-in duration when user enables music (ms). */
  musicFadeInMs: 2000,

  /** Show subtle dog easter-eggs in scenes 5, 8, 9, 10. */
  dogEasterEggs: true,

  /** Show the floating "next scene" arrow on mobile. */
  showMobileNavArrows: true,

  /** Site title shown in browser tab + OG metadata. */
  siteTitle: "Happy 18th, Basmala ✨",

  /** Site description for SEO / OG. */
  siteDescription:
    "A cinematic journey through Basmala's 18th birthday — purple, roses, Egypt, and a fluffy little surprise.",

  /** Number of confetti particles on cake cut. */
  confettiCount: 200,

  /** Number of fireworks emitters in Scene 10. */
  fireworksEmitters: 4,
} as const;
