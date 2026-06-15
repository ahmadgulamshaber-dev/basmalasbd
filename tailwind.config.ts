import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "royal-purple": "#3B1F5E",
        "velvet-purple": "#5B2A86",
        "lilac-glow": "#C9A8FF",
        "moonlight-gold": "#E8C97A",
        "nile-blue": "#1B2A4E",
        "pyramid-sand": "#7B5E3F",
        "rose-pink": "#E8A0BF",
        "soft-lavender": "#F2E8FF",
        "deep-night": "#0E0820",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        arabic: ["var(--font-tajawal)", "sans-serif"],
        secondary: ["var(--font-cormorant)", "serif"],
      },
      backgroundImage: {
        "royal-night":
          "linear-gradient(180deg, #0E0820 0%, #2A1252 50%, #4B2380 100%)",
        "rose-glow":
          "radial-gradient(circle, rgba(232,160,191,0.4) 0%, transparent 70%)",
        "gold-beam":
          "linear-gradient(180deg, transparent 0%, rgba(232,201,122,0.6) 50%, transparent 100%)",
      },
      boxShadow: {
        "glow-purple": "0 0 40px rgba(91, 42, 134, 0.6)",
        "glow-gold": "0 0 30px rgba(232, 201, 122, 0.5)",
        "glow-lilac": "0 0 50px rgba(201, 168, 255, 0.4)",
      },
      animation: {
        "fade-in": "fadeIn 1.2s ease-out forwards",
        "fade-in-up": "fadeInUp 1.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "shake-x": "shakeX 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", filter: "blur(20px)" },
          "50%": { opacity: "1", filter: "blur(30px)" },
        },
        shakeX: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-8px)" },
          "75%": { transform: "translateX(8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
