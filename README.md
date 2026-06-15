# 🎂 Basmala's Cinematic Birthday Journey

A premium, cinematic birthday website built with love for Basmala's 18th.
Purple. Roses. Egypt. A fluffy white dog. Du'a. Bilingual EN + AR.
**Password-protected** — only Basmala (and whoever she shares the password with) opens the door.

---

## 🚀 Deploy to Vercel — 3 Easy Steps

### Step 1: Push to GitHub

If you haven't already, create a GitHub repository and push this project:

```bash
git init
git add .
git commit -m "Initial commit — Basmala's birthday journey"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/basmala-birthday.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Project"** → select your GitHub repo
3. Vercel will auto-detect Next.js — leave all settings as defaults
4. Click **Deploy**
5. Wait ~60 seconds → you get a live URL like `https://basmala-birthday.vercel.app`

### Step 3 (Optional): Add a custom domain

In Vercel dashboard → Project → Settings → Domains → add your domain.
DNS will be set up automatically. Free SSL included.

---

## 🔐 The Password

The default password is **`Basmala18`** (case-insensitive).
To change it: edit `src/lib/config.ts`:

```ts
export const config = {
  password: "Basmala18", // ← change this
  ...
}
```

Then redeploy (Vercel auto-rebuilds on git push).

---

## 🎵 Adding Background Music (Optional but Recommended)

The site has music integration wired up but the audio file is not bundled (for licensing safety).

**To add the recommended track:**

1. Visit [pixabay.com/music/ambient-dreamy-piano-197564](https://pixabay.com/music/ambient-dreamy-piano-197564/)
2. Click **Download** (free under Pixabay Content License, no attribution needed)
3. Rename the file to **`dreamy-piano.mp3`**
4. Place it in `public/audio/` (create the folder if it doesn't exist)
5. Commit + push → Vercel auto-deploys with music working

**Backups** (in case you want a different mood):
- 🥈 Cinematic Ambient Emotional: [pixabay.com/music/ambient-cinematic-ambient-emotional-main-7230](https://pixabay.com/music/ambient-cinematic-ambient-emotional-main-7230/)
- 🥉 Ethereal Ambient: [pixabay.com/music/ambient-ethereal-ambient-deep-amp-dreamy-soundscape-313116](https://pixabay.com/music/ambient-ethereal-ambient-deep-amp-dreamy-soundscape-313116/)

The music toggle (top-right corner) is muted by default — visitor clicks once to enable.

---

## ✏️ Editing Copy

All text lives in **`src/data/content.ts`**. Change any line, commit, push — Vercel rebuilds.

Lines are bilingual (`{ en: "...", ar: "..." }`). You can edit either language freely.
Arabic uses [Tajawal](https://fonts.google.com/specimen/Tajawal) — already loaded.

---

## 🛠 Local Development

```bash
npm install
npm run dev      # starts at http://localhost:3000
npm run build    # production build
npm run lint
npm run typecheck
```

Requires Node.js 18+.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout + fonts + metadata
│   ├── page.tsx             # Main orchestrator (mounts all 11 scenes)
│   ├── globals.css          # Tailwind + custom glow utilities
│   └── not-found.tsx        # 404 page
├── components/
│   ├── scenes/              # Scene 0 (password) → Scene 10 (forever)
│   ├── three/               # 3D components (doors, rose, cake, puppy…)
│   └── ui/                  # Overlays (music toggle, preloader, fireworks…)
├── lib/
│   ├── lenis.ts             # Smooth scroll
│   ├── gsap-setup.ts        # GSAP plugins
│   ├── audio.ts             # Howler.js + Web Audio chimes
│   ├── store.ts             # Zustand state (unlocked, music, pets…)
│   ├── config.ts            # Password + runtime toggles
│   └── utils.ts             # cn(), random(), helpers
├── hooks/
│   ├── useReducedMotion.ts  # Accessibility
│   ├── useMediaQuery.ts
│   └── useSceneProgress.ts
├── data/
│   └── content.ts           # ALL bilingual copy — edit here
└── types/
    └── index.ts
public/
├── images/                  # 5 AI-generated cinematic images (already here)
└── audio/                   # DROP dreamy-piano.mp3 here
```

---

## 🎬 The 11-Scenes Story

| # | Scene | What happens |
|---|---|---|
| 0 | **The Locked Gate** | Password screen. Two golden doors closed. Only Basmala enters the key. |
| 1 | **The Gate Opens** | Doors swing open, golden light spills in. |
| 2 | **The Nile at Midnight** | Pyramids under a violet sky. Lanterns drift. |
| 3 | **The Title Reveal** | "Happy 18th Birthday, Basmala" + enchanted rose in glass. |
| 4 | **One Year of Us** | Friendship timeline — 4 milestone cards. |
| 5 | **The Things She Loves** | 5 glowing cards: Purple, Roses, BatB, F1, 🐾 |
| 6 | **The Surprise** | A white fluffy puppy appears with a tiny crown. |
| 7 | **Eighteen** | The number 18 with 18 orbiting roses + du'a. |
| 8 | **The Cake** | A three-tier purple-ombre cake rises on a velvet pedestal. |
| 9 | **The Cut** | Click to cut the cake → confetti burst → "Happy birthday, Princess" |
| 10 | **Forever** | Fireworks + rising lanterns + final du'a + replay button. |

---

## ⚡ Performance

- **First Load JS:** 166 KB (gzipped) — includes R3F, Drei, GSAP, Framer Motion, Lenis
- **All scenes lazy-loaded** via `next/dynamic` — only loaded when needed
- **Adaptive DPR** for low-end devices
- **prefers-reduced-motion** fully respected
- **Lighthouse target:** 90+ desktop, 80+ mobile
- **Vercel Edge cache** for instant first paint worldwide

---

## 🔒 Privacy

- No analytics, no tracking, no cookies.
- No real photos used — purely stylized 3D + AI-generated imagery + SVG.
- Muslim-friendly tone throughout. No haram content.
- Du'a included with English translations.

---

## 🩷 Built with Love

This is a gift. Share it with Basmala on her 18th birthday.
May Allah bless her in her years. ✨

---

## 🆘 Troubleshooting

**The page is blank?**
→ Open browser dev tools (F12) → Console tab → look for errors.
→ Most common: blocked WebGL. Try Chrome or Safari on desktop first.

**Music not playing?**
→ Make sure `dreamy-piano.mp3` is in `public/audio/`.
→ Browsers block autoplay — user must click the music toggle.

**Password gate won't accept my password?**
→ It's case-insensitive but make sure no leading/trailing spaces.
→ Change it in `src/lib/config.ts` and redeploy.

**3D looks weird on mobile?**
→ Performance optimization auto-detects low-end devices and reduces complexity.
→ For best experience, use a recent iPhone/Android with Chrome.

---

🎂 *For Basmala — to be the most beautiful 18th.*
