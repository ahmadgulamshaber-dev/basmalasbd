# 🎂 BASMALA — A CINEMATIC BIRTHDAY JOURNEY
## Full Planning Document (Pre-Build)

> **Status:** Planning only — awaiting your approval before any code is written.
> **Deployment target:** Vercel (Next.js 15, App Router)
> **Document version:** 1.0 — research-backed, optimized, premium.

---

## 📌 A) PRODUCT / EXPERIENCE VISION

**One-paragraph concept summary.**
This is not a birthday "card" — it is a *cinematic journey through an enchanted world built for one person*. The visitor steps through a golden gate into a violet sky above an Egyptian royal horizon, where pyramids glow under moonlight, enchanted roses float under glass domes, F1-inspired neon trails streak across the sky, and a small white fluffy dog quietly appears as a surprise. Each scroll is a chapter. Each scene is a love letter. The website feels like walking through a dream that Basmala's best friend built specifically for her — turning 18, glowing in purple, surrounded by her favorite things, and crowned with fireworks at the end.

**Emotional tone.**
Wholesome, royal, intimate, magical, slightly nostalgic, deeply personal. It must feel *grown-up* (because she's turning 18) but still carry the warmth of childhood wonder. Think: a Disney-meets-Awwwards-meets-personal scrapbook.

**Style references.**
- *Beauty and the Beast* (2017/1991) — enchanted rose, ballroom lighting, gold-on-violet palette.
- Egyptian royal cinematic posters — Pharaoh, moonlight, lotus, deep lapis lazuli.
- Awwwards Site of the Day (F1 driver personal site, 2025) — cinematic scroll-driven storytelling with rotating 3D objects.
- Disney's "Once Upon a Time" title cards — elegant serif + soft glow.
- Studio Ghibli moonlit skies — soft particle motion, painterly glow.

**What makes it special.**
1. **It's about *her* — specifically.** Not a generic birthday template. Purple + roses + BatB + F1 + dog + Egypt + 18 + one-year friendship are woven into every single scene.
2. **It is *interactive*, not passive.** Scroll drives the story; the user controls the pace.
3. **It is *cinematic*, not just decorated.** Real 3D, real bloom, real shaders, real motion design — not flat gradients.
4. **It is *respectful and Muslim-friendly*.** No alcohol, no inappropriate imagery, no music with haram lyrics. The whole tone is du'a-style warmth, gratitude, and elegance.

---

## 🎬 B) FULL STORY FLOW — SCENE-BY-SCENE PLAN

The website is one long scroll (with click accelerators). Each scene = 100vh pinned section. Total ~10 scenes, transitions via GSAP timeline.

### SCENE 0 — "The Locked Gate" (Password Screen — NEW)
A private, magical entry screen added before Scene 1. Only Basmala (or whoever knows the password) can open the door.

- **Visual mood:** Black velvet. Two massive golden doors closed, with a small ornate glowing keypad at the center. Soft purple runes pulse faintly. A tiny paw-print watermark hints at what's coming.
- **Main objects:** Closed 3D doors (R3F), ornate keypad with 4 glowing input dots, "Unlock" button. Background ambient particle dust.
- **Text copy:**
  - Top hint: *"This door opens for one person."*
  - Below keypad (italic, faint lavender): *"Enter the key, my friend."*
  - On wrong password (gentle shake): *"Not yet. Try again — you know it."*
  - On correct (chime + glow): *"Welcome, Basmala. 🩷"*
- **Interaction:** Visitor enters the password (`Basmala18` by default, fully editable in `lib/config.ts`).
- **Animation:** Doors remain closed until password is correct. Wrong password → subtle horizontal shake + red glow on keypad. Correct → chime sound + keypad dissolves into a glowing key + doors swing open (Scene 1 begins).
- **Transition:** Doors open → light spills in → Scene 1 starts.

### SCENE 1 — "The Gate" (Opening / Entrance)
- **Visual mood:** Continues from the unlocked gate. Light spills in as doors swing open. Black velvet transforms to deep purple haze.
- **Main objects:** Two golden door panels (3D, R3F) swinging open, engraved with stylized "بسم الله" and a stylized "B" monogram. Subtle purple aura.
- **Text copy (centered):** *"Open the door to Basmala's 18th."* (subtle, lowercase, serif) + Arabic: *"افتحي الباب يا بسملة"*.
- **Interaction:** Doors auto-open (no click needed — password already unlocked them).
- **Animation:** Doors swing open via GSAP — left rotates -95deg, right rotates +95deg on Y. Light spills in. A bloom flare passes across screen.
- **Transition:** Bloom flare → camera dolly forward into Scene 2.

### SCENE 2 — "The Nile at Midnight" (Egyptian Purple World)
- **Visual mood:** Deep violet sky over a glassy reflective Nile. Pyramids silhouette in distance, glowing from moonlight. Lotus flowers float. Stars twinkle.
- **Main objects:** SVG/canvas parallax layers: sky gradient, distant pyramids (parallax depth 0.2), mid-ground palms (depth 0.5), foreground lotus & reeds (depth 0.9). Reflective water plane. Lanterns with glowing cores drift gently.
- **Text copy (top center, fades in):** *"For Basmala — like Egypt's moonlit Nile, your light reflects on everyone around you."*
- **Animation:** Slow horizontal scroll-based parallax. Floating lanterns drift up-right with sine-wave motion. Soft purple sparkles rise from the water.
- **Transition:** Camera pans right, lotus petals fly past, sliding into Scene 3.

### SCENE 3 — "The Birthday Title Reveal"
- **Visual mood:** The water from Scene 2 dissolves into a velvet purple haze. A single spotlight hits the center of the screen.
- **Main objects:** Big serif title (Playfair Display + a custom Arabic serif), floating rose petals, a subtle enchanted rose silhouette in glass behind the text.
- **Text copy:**
  - Main: **"Happy 18th Birthday, Basmala"**
  - Subline: *"From your favorite person — celebrating one year of friendship, a lifetime of light."*
- **Animation:** Letters stagger-fade-in from below with GSAP SplitText-style effect. Rose petals fall continuously. The glass-dome enchanted rose slowly rotates in 3D behind the text.
- **Transition:** Title fades, petals carry the eye downward.

### SCENE 4 — "One Year of Us" (Friendship Timeline)
- **Visual mood:** A royal scroll unfurls down the screen. Gold-edged parchment texture, faint watercolor Egyptian motifs.
- **Main objects:** Vertical timeline with 4–6 milestone cards:
  1. *"The day we met"* — "You laughed at something I'd said, and I remember thinking: this one's going to matter."
  2. *"Our first late-night talk"* — "Hours disappeared without either of us noticing."
  3. *"The trip / memory that sealed it"* — (placeholder, customizable)
  4. *"Today"* — "365 days. One beautiful friendship."
- **Text copy:** Each card has a short handwritten-style note (customizable via content.json).
- **Animation:** ScrollTrigger pins the timeline. As user scrolls, each card slides in from alternating left/right, a glowing gold dot lights up the active node, and a faint heartbeat-pulse animation runs.
- **Transition:** Timeline fades, last card zooms into Scene 5.

### SCENE 5 — "The Things She Loves" (Favorites Showcase)
- **Visual mood:** Five glowing orbs in a 3D carousel. Deep purple haze, gold dust.
- **Main objects (each = an interactive 3D card):**
  1. **Purple** — a slowly swirling 3D violet gemstone catching light.
  2. **Roses** — an enchanted rose under glass dome (BatB reference), petals drifting.
  3. **Beauty and the Beast** — a floating chandelier silhouette + the iconic yellow ball gown silhouette (subtle, golden).
  4. **F1** — a glowing neon track line streaking left-to-right with the silhouette of an F1 car on a curved arc.
  5. **White fluffy dog** — *teaser* (ear silhouette, paw, or sleeping curl — not full reveal yet).
- **Text copy:** Each card has a single word + a one-line love note. E.g. "Purple — *the color of queens. Yours.*"
- **Animation:** Mouse-controlled 3D rotation (Drei `<PresentationControls>`). Cards tilt, glow, and have bloom halos.
- **Transition:** Cards orbit and dissolve into a single dog scene (Scene 6).

### SCENE 6 — "The Surprise" (Dog Reveal)
- **Visual mood:** A spotlight fades up. Soft music swell (optional, see Questions). Confetti purple + gold.
- **Main objects:** A 3D-style illustrated white fluffy puppy (or a stylized 2D illustrated SVG with subtle 3D parallax) sitting in a small glowing crown, blinking, wagging tail.
- **Text copy:**
  - *"Every queen deserves a tiny loyal friend."*
  - *"Meet your surprise — a little fluff of unconditional love, sent with all my heart. 🤍"*
- **Animation:** Dog fades in, tail wags in a loop, sparkles appear around it. Click/tap to "pet" — heart particles burst.
- **Transition:** Soft zoom-out, scene darkens to reveal Scene 7.

### SCENE 7 — "Eighteen" (18th Birthday Transformation)
- **Visual mood:** Center stage. Spotlight beams down. Particles of golden light converge.
- **Main objects:** Large "18" numeral (custom stylized — gold serif with purple glow). Around it, a circle of 18 floating roses, each representing a year. A faint Islamic geometric pattern rotates slowly in the background.
- **Text copy:**
  - *"You are 18 — a chapter begins."*
  - *"May your years ahead be as elegant, brave, and beautiful as you already are."*
  - Optional du'a-style line: *"اللهم بارك لها في عمرها"* (God, bless her in her years).
- **Animation:** The number 18 scales up from 0 to 1 with overshoot. Roses orbit in a slow circle, one by one lighting up. Background pattern rotates.
- **Transition:** Roses converge, the number fades, cake rises from below.

### SCENE 8 — "The Cake Reveal"
- **Visual mood:** Warm, golden, intimate. A 3D cake sits on a velvet pedestal under soft glow.
- **Main objects:** Three-tier cake (purple ombre frosting, gold filigree, rose decorations on top, 18 candle silhouettes), pedestal, soft candles flicker, light particles.
- **Text copy:** *"Make a wish, Basmala. This one's yours."*
- **Animation:** Cake rises from below (translateY from +200px to 0). Candles flicker via subtle scaleY loop. A gentle sparkle layer sits behind.
- **Transition:** "Click to cut" prompt appears.

### SCENE 9 — "Cake Cutting Celebration"
- **Visual mood:** Joyful, warm, explosive happiness.
- **Main objects:** A glowing golden knife slides in from the right, the cake splits open, lights pour out from inside, petals burst.
- **Text copy:**
  - *"Happy birthday, Princess. 🩷"*
  - *"I can't wait to see who you become at 19, 25, 30 — every year, I'll still be right here."*
- **Animation:** Knife cuts → cake halves separate with physics-style spring → inside reveals a glow → confetti + petals burst → brief flash of light.
- **Transition:** Camera pulls back, fireworks launch.

### SCENE 10 — "Forever" (Final Celebration)
- **Visual mood:** Open night sky above the pyramids from Scene 2, but now exploding with light.
- **Main objects:** Fireworks, falling rose petals, floating lanterns rising upward like in Tangled, drifting away. A final line of text + "Forever yours" tag.
- **Text copy:**
  - *"For Basmala — today, tomorrow, always."*
  - *"With love, your friend. 🤍"*
- **Animation:** tsParticles fireworks preset (multiple emitters). Continuous upward lantern float. Rose petals fall. Soft music swell (optional). Final fade-to-purple.
- **Final interaction:** A subtle "Replay journey" button appears to restart from Scene 1.

---

## 🛠 C) TECH STACK RECOMMENDATION

| Layer | Choice | Why |
|---|---|---|
| **Framework** | **Next.js 15 (App Router)** + React 19 | Best-in-class Vercel integration. Static rendering + edge caching = instant first paint. App Router supports per-scene server/client split for SEO + heavy 3D. |
| **3D / WebGL** | **React Three Fiber (R3F) + @react-three/drei + @react-three/postprocessing** | Declarative, React-native, huge ecosystem, perfect for cinematic 3D. Three.js under the hood. |
| **Animation** | **GSAP 3** (with **ScrollTrigger**) + **Framer Motion** | GSAP for cinematic scroll-pinned timelines and complex sequences (industry-standard for Awwwards sites). Framer Motion for mount/unmount + UI micro-interactions. They coexist cleanly. |
| **Smooth Scroll** | **Lenis** | Industry standard smooth scroll, ~3KB gzipped, integrates with GSAP's ticker via `gsap.ticker.add` to keep ScrollTrigger in sync. Vercel-friendly, no build issues. |
| **Particles / Effects** | **@tsparticles/react + @tsparticles/preset-confetti + @tsparticles/preset-fireworks** | Built-in fireworks + confetti presets, light, no canvas-confetti config hassle. |
| **Styling** | **Tailwind CSS v4** + custom CSS for glow/glass | Tailwind = fast styling, v4 has best tree-shaking. Custom CSS layers for cinematic glow, backdrop-blur, and royal gradients. |
| **Audio (optional)** | **Howler.js** | Best for file-based playback (ambient music + chime). No React wrapper needed; we use it directly in `useEffect` with cleanup. |
| **Icons** | **Lucide React** | Tree-shakable, clean, fits aesthetic. |
| **Utilities** | `clsx` + `tailwind-merge` (via `cn()`) | Conditional classnames. |

**Why this stack beats alternatives:**
- Vite + R3F would be lighter, but Next.js on Vercel gives us automatic edge caching, image optimization (`next/image`), and preview deploys per push — worth it for a one-page experience.
- Pure Three.js (vanilla) would need imperative code that fights React. R3F lets us compose scenes like React components — far cleaner.
- Framer Motion alone is great for UI but lacks the precise scroll-driven timeline control that GSAP ScrollTrigger offers. We use both.

---

## 📦 D) DEPENDENCY PLAN

### Core (essential)
```
next@15                # Framework
react@19, react-dom    # Core
typescript             # Types
tailwindcss@4          # Styling
```
**Why essential:** App foundation.

### 3D / WebGL (essential for cinematic scenes)
```
three                  # WebGL engine
@react-three/fiber     # React renderer for Three.js
@react-three/drei      # Helpers (PresentationControls, Float, Sparkles, useTexture, etc.)
@react-three/postprocessing  # Bloom, Vignette, ChromaticAberration
```
**Why essential:** Every premium scene (door, rose dome, F1 neon, cake) needs 3D feel.

### Animation (essential)
```
gsap                   # Core + ScrollTrigger
@gsap/react            # React hook (useGSAP) for safe cleanup
framer-motion          # UI micro-interactions
```
**Why essential:** GSAP drives cinematic scroll. Framer Motion handles modals, AnimatePresence, hover.

### Scroll (essential)
```
lenis                  # Smooth scrolling
```
**Why essential:** The whole journey *feels* cinematic only when scrolling is butter-smooth.

### Particles / Glow (essential for final scene + ambiance)
```
@tsparticles/react
@tsparticles/engine
@tsparticles/preset-confetti
@tsparticles/preset-fireworks
```
**Why essential:** Fireworks and confetti for the celebration ending.

### Audio (optional, recommended)
```
howler
@types/howler
```
**Why optional:** We can ship with mute-by-default and let user toggle. Music is a personal decision.

### Icons (essential)
```
lucide-react
```
**Why essential:** Heart, music toggle, replay button, social icons.

### Utilities (essential)
```
clsx
tailwind-merge
```
**Why essential:** Safe class composition.

### Fonts (essential, free via `next/font`)
- **Playfair Display** (serif, royal titles) — Google Fonts.
- **Cormorant Garamond** (elegant secondary) — Google Fonts.
- **Tajawal** (Arabic, for any Arabic copy) — Google Fonts.
- **Inter** (UI body) — Google Fonts.

---

## 🎨 E) UI/UX SYSTEM PLAN

### Layout approach
- **Vertical scroll narrative** — each scene is a full-viewport section (`h-screen`, pinned during timeline).
- **Scene containers** with `position: relative`, layers stacked via `position: absolute`.
- **Persistent UI overlays** — music toggle (top-right), replay button (bottom-right, only on Scene 10), "scroll down" hint on Scene 1.

### Spacing rhythm
- **8pt grid** baseline.
- **Section padding:** `py-32` desktop, `py-16` mobile.
- **Card padding:** `p-8` / `p-6`.
- **Letter-spacing for titles:** `tracking-widest` for royal feel.

### Typography
- **Display:** Playfair Display, weights 400 + 700, italic for love-notes.
- **Body:** Inter, weight 300 + 400.
- **Arabic (optional):** Tajawal, weight 400.
- **Scale:** Display 4xl → 7xl, body sm → base. Use clamp() for fluid sizing.

### Color palette
**Primary**
- Royal Purple: `#3B1F5E` (deep)
- Velvet Purple: `#5B2A86` (mid)
- Lilac Glow: `#C9A8FF` (accent)
- Moonlight Gold: `#E8C97A`
- Pure White: `#FFFFFF`

**Supporting**
- Nile Blue: `#1B2A4E`
- Pyramid Sand: `#7B5E3F`
- Rose Pink: `#E8A0BF`
- Soft Lavender: `#F2E8FF`

**Gradients**
- Royal Night: `linear-gradient(180deg, #0E0820 0%, #2A1252 50%, #4B2380 100%)`
- Rose Glow: `radial-gradient(circle, #E8A0BF 0%, transparent 70%)`
- Gold Beam: `linear-gradient(180deg, transparent 0%, #E8C97A 50%, transparent 100%)`

### Glow / Glass / Royal effects
- **`backdrop-blur-md`** on glass cards with `bg-white/10 border border-white/20`.
- **CSS box-shadow glows:** layered `0 0 40px rgba(...)` for bloom-like glow without GPU cost.
- **SVG filters:** `<feGaussianBlur>` for soft halos around roses and text.
- **Drei `<Bloom>` postprocessing** (R3F) for true HDR bloom on 3D objects.

### Interaction style
- **Cursor:** default cursor; custom cursor only on interactive 3D objects (optional, can ship without).
- **Hover:** subtle scale (1.02) + glow increase.
- **Click:** scale-down (0.98) spring.
- **Scroll-driven:** main storytelling device.
- **Click-driven:** optional "Next chapter" button at end of each scene (mobile-friendly fallback).

### Responsiveness strategy
- **Mobile-first CSS**, but design starts at desktop and gracefully collapses.
- **3D quality:** scale `dpr={[1, 2]}` down on mobile, reduce particle counts via `useMediaQuery`.
- **Touch:** Lenis handles touch inertia; click-to-advance buttons appear on mobile.
- **Breakpoints:** `sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536`.

### Mobile fallback behavior
- Reduce 3D complexity by ~60% (fewer particles, lower geometry).
- Replace ScrollTrigger pin with simple scroll-fade on mobile (avoids iOS Safari pin issues).
- Show "Tap to continue" prompts instead of relying on scroll hints.
- Pre-render poster-frame for first scene (immediate visual before 3D loads).

### Accessibility considerations
- **`prefers-reduced-motion`:** fall back to static gradient backgrounds, fade-only transitions, no particle motion.
- **Keyboard navigation:** "N" key = next scene, "R" = replay.
- **Color contrast:** all body text meets WCAG AA against purple.
- **Alt text:** every image has descriptive alt.
- **Audio:** never autoplay with sound; require user click on music toggle.
- **Focus states:** visible gold outline on all interactive elements.

---

## 🖼 F) ASSET / IMAGE / 3D CONTENT PLAN

### Generation strategy
- **Mix of generated AI imagery + procedural 3D + SVG.**
- All assets hosted via Vercel's image optimization or directly in `/public`.
- Use `.webp` for images, `.glb` for 3D models (compressed with gltf-transform).
- Lazy-load everything except the opening scene.

| # | Asset | Type | Purpose | Story location | Custom or procedural? |
|---|---|---|---|---|---|
| A1 | Magical golden doors | 3D (R3F geometry) + texture | Scene 1 entrance | Scene 1 | Procedural R3F geometry + procedural texture |
| A2 | Purple night sky | Gradient + noise shader | Scene 2 backdrop | Scenes 2, 10 | Procedural shader |
| A3 | Pyramid silhouettes | SVG vector (3 layers) | Egyptian mood | Scenes 2, 10 | Hand-crafted SVG (parallax) |
| A4 | Reflective Nile | Canvas + fragment shader | Water reflection | Scene 2 | Procedural |
| A5 | Lotus flowers | SVG illustration (3 variants) | Foreground decoration | Scene 2 | Generated image (AI) + SVG overlay |
| A6 | Floating lanterns | 3D (R3F) with glow | Vertical motion | Scenes 2, 10 | Procedural R3F |
| A7 | Enchanted rose in glass dome | 3D (R3F) | Centerpiece | Scenes 3, 5 | Procedural R3F (rose geometry + glass shader) |
| A8 | Falling rose petals | Particle system (R3F) | Ambient motion | Scenes 3, 4, 5, 10 | Procedural |
| A9 | Royal scroll/parchment | SVG texture | Friendship timeline | Scene 4 | AI-generated image |
| A10 | 3D rotating orbs (5) | 3D (R3F) — gemstone, rose, chandelier, F1 car, dog paw | Favorites showcase | Scene 5 | Procedural R3F |
| A11 | F1 neon track line | 3D (R3F) curve + emissive material | F1 vibe | Scene 5 | Procedural |
| A12 | Beauty and the Beast chandelier silhouette | SVG | BatB vibe | Scene 5 | Hand-crafted SVG |
| A13 | White fluffy dog | 3D (R3F) — stylized cartoon or AI-generated + R3F plane | Surprise scene | Scenes 5 (teaser), 6 (full) | AI-generated image, optional low-poly R3F |
| A14 | Geometric Islamic pattern | SVG (rotating) | Background atmosphere | Scene 7 | Hand-crafted SVG |
| A15 | Floating roses (×18) | Particle system + image | Year representation | Scene 7 | Procedural |
| A16 | Three-tier cake | 3D (R3F) + image | Cake reveal | Scenes 8, 9 | Procedural R3F geometry |
| A17 | Golden knife | SVG / R3F | Cake cutting | Scene 9 | Procedural |
| A18 | Sparkle / dust particles | R3F `<Sparkles>` | Ambient | All scenes | Procedural |
| A19 | Fireworks | tsParticles preset | Finale | Scene 10 | Preset |
| A20 | Confetti | tsParticles preset | Cake-cutting + finale | Scenes 9, 10 | Preset |
| A21 | Audio: ambient music (optional) | MP3 + OGG | Background | All (toggle) | Royalty-free track OR user-supplied |
| A22 | Audio: chime | MP3 | Scene transitions | Transitions | Procedural (Web Audio API) |

### Image generation plan (this phase, before coding)
We will create high-quality AI-generated images for these key elements that benefit from photography-style realism:
- Pyramids at twilight (Scene 2 backdrop)
- White fluffy dog (Scene 6) — the only "subject" character
- Rose close-up texture (for 3D material)
- Lotus flower field (foreground)
- Background nebula/stars texture (sky)

All others are procedural — built with code, no PNG dependency, infinitely scalable.

---

## 🖌 G) IMAGE GENERATION (Pre-Build Assets)

> **Status:** To be generated in Phase 2 of the build roadmap. Listed here for your approval first.

### Asset prompts to generate:

1. **Pyramids at moonlit twilight**
   *"Cinematic wide-angle shot of three Egyptian pyramids silhouetted against a deep violet night sky with a glowing full moon, soft mist at the base, faint stars, ultra-realistic, magical mood, 8K."*

2. **White fluffy puppy, royal setting**
   *"An adorable tiny white fluffy puppy (Maltese/Bichon style) sitting on a velvet purple cushion with golden thread embroidery, wearing a tiny gold crown tilted charmingly, soft bokeh lights in background, dreamy purple-gold palette, cinematic portrait, photorealistic, 8K."*

3. **Enchanted rose in glass dome (Beauty and the Beast style)**
   *"A single red velvet rose inside a hand-blown glass cloche dome, lit by warm candlelight, surrounded by falling petals, deep purple background, golden bokeh, ultra-cinematic, 8K."*

4. **Lotus flowers on reflective water at night**
   *"Pink and white lotus flowers floating on a perfectly still dark water surface, glowing under moonlight, soft purple haze, misty atmosphere, ethereal, 8K."*

5. **Royal purple velvet curtain background**
   *"Heavy royal purple velvet curtain with gold trim, soft folds, dramatic side lighting, texture close-up, cinematic, 8K."*

### Procedurally generated (no AI image needed):
- Magical doors (R3F geometry)
- Glass dome (R3F)
- Floating lanterns (R3F)
- 3D cake (R3F)
- Fireworks (tsParticles)
- Confetti (tsParticles)
- Petals (R3F particle system)
- F1 neon track (R3F curve + emissive material)

---

## 🎞 H) MOTION / ANIMATION PLAN

### Movement language philosophy
**"Slow, royal, intentional — never rushed."**
Every animation respects 800ms–2000ms durations for primary motion. Micro-interactions stay at 200–400ms. Nothing snaps; everything glides.

### Per-motion specification

| Motion | Trigger | Duration | Easing | Notes |
|---|---|---|---|---|
| Door open | Click/Enter | 1800ms | `power3.inOut` | Left door rotates -95° Y, right +95° Y. Bloom flash on completion. |
| Nile parallax | Scroll | continuous | linear | 3-layer parallax: pyramids 0.2, palms 0.5, lotus 0.9. |
| Title letter stagger | InView | 1200ms total | `power4.out` | Each letter delays by 40ms, rises 30px. |
| Rose petal fall | Continuous loop | ∞ | linear | 30 petals, varied x-speed, gentle x-sway via sine. |
| Timeline card slide | ScrollTrigger (pinned section) | 800ms each | `power2.out` | Alternating left/right. Pin section 400vh tall. |
| Favorites card carousel | Mouse drag / touch | continuous | spring | Drei `<PresentationControls>` with damping. |
| Dog fade-in | ScrollTrigger | 1500ms | `power3.out` | Scale 0.6 → 1, opacity 0 → 1, dog wags loop after. |
| 18 numeral reveal | ScrollTrigger | 1200ms | `back.out(1.7)` | Scale 0 → 1 with overshoot. Roses orbit and light up sequentially. |
| Cake rise | ScrollTrigger | 1500ms | `power3.out` | translateY +200 → 0, opacity 0 → 1. |
| Cake cut | Click | 1000ms | `power4.inOut` | Knife slice → cake splits via spring physics. |
| Confetti burst | Cake cut trigger | 3000ms | linear | tsParticles confetti preset, 200 particles. |
| Fireworks | Scene 10 enter + click | continuous loop | linear | 4 emitters at top, varied delay. |
| Lanterns rise | Scene 10 continuous | ∞ | linear | 20 lanterns drifting upward. |
| Scene transition | Scroll end of scene | 800ms | `power2.inOut` | Cross-fade + slight scale (0.98 → 1) for next scene. |
| Replay button hover | Hover | 300ms | spring | scale 1 → 1.05, glow doubles. |

### Scroll vs click — both supported
- **Default:** scroll-driven (Lenis + ScrollTrigger).
- **Click-driven fallback:** "Next" arrow button appears in corner — advances to next scene programmatically (sets `window.scrollTo` to next pinned section).
- Mobile users can tap the arrow or scroll — both work.

### Reduced motion
If `prefers-reduced-motion: reduce`:
- Disable 3D rotation (camera locked).
- Replace ScrollTrigger pin with simple cross-fade.
- Disable particle motion.
- Reduce all durations to 300ms.
- All content still readable, all scenes still reachable.

---

## 🏗 I) IMPLEMENTATION ARCHITECTURE

### Project structure
```
basmala-birthday/
├── public/
│   ├── fonts/                    # Self-hosted fonts (fallback)
│   ├── images/                   # AI-generated PNGs (WebP-converted)
│   ├── audio/                    # Optional music files
│   └── models/                   # Optional .glb files (none planned)
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout, fonts, metadata
│   │   ├── page.tsx              # Main page — orchestrates all scenes
│   │   ├── globals.css           # Tailwind + custom CSS vars + glow utilities
│   │   └── not-found.tsx         # Graceful fallback
│   ├── components/
│   │   ├── scenes/
│   │   │   ├── Scene1Gate.tsx
│   │   │   ├── Scene2Nile.tsx
│   │   │   ├── Scene3Title.tsx
│   │   │   ├── Scene4Timeline.tsx
│   │   │   ├── Scene5Favorites.tsx
│   │   │   ├── Scene6Dog.tsx
│   │   │   ├── Scene7Eighteen.tsx
│   │   │   ├── Scene8Cake.tsx
│   │   │   ├── Scene9Cut.tsx
│   │   │   └── Scene10Forever.tsx
│   │   ├── three/                # 3D subcomponents
│   │   │   ├── Door.tsx
│   │   │   ├── EnchantedRose.tsx
│   │   │   ├── Cake.tsx
│   │   │   ├── Puppy.tsx
│   │   │   ├── Lanterns.tsx
│   │   │   ├── Petals.tsx
│   │   │   ├── F1Track.tsx
│   │   │   └── PostFX.tsx        # Bloom, Vignette, ChromaticAberration
│   │   ├── ui/                   # Reusable UI
│   │   │   ├── MusicToggle.tsx
│   │   │   ├── ScrollHint.tsx
│   │   │   ├── NextSceneArrow.tsx
│   │   │   ├── ReplayButton.tsx
│   │   │   └── Preloader.tsx
│   │   └── overlays/
│   │       ├── PreloaderOverlay.tsx
│   │       └── SceneTransitionOverlay.tsx
│   ├── lib/
│   │   ├── lenis.ts              # Smooth scroll setup
│   │   ├── gsap-setup.ts         # Plugin registration + ticker sync
│   │   ├── audio.ts              # Howler setup + cleanup
│   │   ├── particles.ts          # tsParticles presets config
│   │   └── utils.ts              # cn(), random, etc.
│   ├── hooks/
│   │   ├── useReducedMotion.ts
│   │   ├── useSceneProgress.ts   # Custom hook for scene state
│   │   ├── useMediaQuery.ts
│   │   └── useVisibility.ts      # Pause animations off-screen
│   ├── data/
│   │   └── content.ts            # All copy in one editable file
│   └── types/
│       └── index.ts              # TS types
├── tailwind.config.ts
├── next.config.ts                # optimizePackageImports, image config
├── vercel.json                   # Region, headers
└── package.json
```

### Modular patterns
- **Scene manager:** `page.tsx` mounts all 10 scenes; each scene uses a custom hook `useSceneProgress(id)` to know when it's active.
- **Asset manager:** central registry in `lib/assets.ts` — fallback image URLs if 3D fails.
- **Animation controller:** `useGSAP` wraps each scene's timeline; auto-cleanup on unmount.
- **Data/content file:** all personal copy in `data/content.ts` — easy for you to edit without touching components.
- **Config file:** `lib/config.ts` for runtime toggles (music on/off, dog appears once/multiple, language).
- **Fallbacks:** every 3D scene has a CSS/SVG-only fallback that renders if WebGL fails or `prefers-reduced-motion` is set.

### State management
- **Zustand** (lightweight) for: current scene index, music state, replay counter, "pet the dog" counter.
- Total: ~1KB, no Redux needed.

### Performance optimization approach
1. **Code-split scenes** with `next/dynamic` + `{ ssr: false }` so each scene's 3D bundle loads only when reached.
2. **`optimizePackageImports`** in `next.config.ts` for framer-motion, lucide-react, @react-three/drei.
3. **next/image** for any raster images, with proper `sizes` and `priority` only on hero.
4. **`<Canvas dpr={[1, 2]}>`** adaptive pixel ratio.
5. **Visibility-aware animation** — pause 3D `<useFrame>` when scene off-screen.
6. **IntersectionObserver** to defer non-critical 3D until scene in view.
7. **Static prerender** of page.tsx shell + critical above-the-fold content for SEO + fastest FCP.
8. **Vercel `Cache-Control: public, max-age=31536000, immutable`** for `_next/static`.

---

## ⚠️ J) PERFORMANCE / RISKS / FALLBACKS

### What may be heavy
| Risk | Severity | Mitigation |
|---|---|---|
| R3F + Drei + Postprocessing bundle | Medium | Dynamic-import each scene; tree-shake Drei helpers; only load `<Bloom>` on Scenes 1, 3, 7, 8. |
| tsParticles fireworks | Low–Medium | Lazy-load preset only in Scene 10; cap particle count at 200. |
| Lenis RAF loop | Low | Sync with GSAP ticker (single RAF source). |
| Many simultaneous ScrollTriggers | Medium | Cap at ~12 active; refresh only on resize-end (debounced). |
| iOS Safari WebGL limitations | Medium | Detect via `isWebGL2Supported()`; fall back to 2D canvas. |
| Audio autoplay restrictions | Low | Default to muted; require user tap to enable. |
| 3D model loading | Low (we use procedural) | n/a — no .glb files. |

### How we keep it fast
- **Target Lighthouse:** 90+ on desktop, 80+ on mobile.
- **LCP:** opening door scene = critical path; static gradient renders before R3F hydrates.
- **CLS:** all 3D canvases have reserved `aspect-ratio` containers.
- **INP:** defer heavy computation to `requestIdleCallback`; no layout-thrashing animations.
- **Total JS shipped (gzipped estimate):** ~180KB (R3F + Drei + GSAP + Framer + Lenis + tsParticles). Acceptable for a one-time celebration page.
- **Vercel Edge Cache:** page prerendered, served from edge in <100ms TTFB worldwide.

### Low-end device handling
- Detect `devicePixelRatio`, `navigator.hardwareConcurrency`, `prefers-reduced-motion`.
- If low-end: disable Bloom, halve particles, disable parallax depth, switch 3D to static image + CSS.
- Mobile always gets reduced-quality 3D (`dpr={1}`, simpler geometry).

### If 3D fails
- Each scene wraps its `<Canvas>` in an `ErrorBoundary`.
- On error: render a `<picture>` with the AI-generated static image as fallback.
- Page still scrolls, copy still readable, story still complete.

### If assets are missing
- All AI-generated assets have placeholder gradients + emoji (e.g. 🐶).
- All copy in `data/content.ts` has English default if Arabic not provided.

---

## 🗺 K) BUILD ROADMAP

### Phase 1 — Planning ✅ (current)
- Research, document, ask questions, get approval.

### Phase 2 — Asset Creation
- Generate all AI images (5 prompts above).
- Convert to WebP, place in `/public/images/`.
- Source/curate royalty-free ambient music (or receive your track).
- Finalize `data/content.ts` with your personal copy.

### Phase 3 — Base App Setup
- `npx create-next-app@latest` (TypeScript, App Router, Tailwind).
- Configure Tailwind, fonts, color palette, globals.css.
- Set up Lenis + GSAP integration (`lib/lenis.ts`, `lib/gsap-setup.ts`).
- Build preloader + scene manager shell.
- Deploy a "Hello World" to Vercel to validate pipeline.

### Phase 4 — Scenes + Animations
- Build Scenes 1–3 (door, Nile, title) — validates 3D + scroll pipeline.
- Build Scene 4 (timeline) — validates ScrollTrigger pin.
- Build Scene 5 (favorites carousel) — validates 3D interaction.
- Build Scene 6 (dog surprise) — emotional climax A.
- Build Scene 7 (18 reveal) — emotional climax B.
- Build Scene 8 (cake) — 3D + glow.
- Build Scene 9 (cut) — interaction + confetti.
- Build Scene 10 (fireworks finale) — particles + lanterns.

### Phase 5 — Polish + Testing
- Cross-browser test (Chrome, Safari, Firefox, mobile Safari, mobile Chrome).
- Lighthouse audit + Core Web Vitals tuning.
- Accessibility audit (axe, keyboard nav, reduced motion).
- Responsive QA at 360px, 768px, 1024px, 1440px, 1920px.
- Performance pass: tree-shake, lazy-load, image compression.

### Phase 6 — Final Celebration Details
- Music toggle polish.
- Replay button polish.
- Loading sequence refinement (luxury preloader).
- Final deploy to Vercel with custom domain (optional).
- Final review with you — share preview URL, gather any last edits, ship.

---

## ✅ L) DECISIONS LOCKED

All 10 questions answered. Final locked state:

| # | Question | Decision |
|---|---|---|
| 1 | Birthday copy | I wrote all copy in `COPY.md` — review & request edits anytime |
| 2 | Language | **Bilingual EN primary + Arabic accents** (Playfair Display + Tajawal fonts) |
| 3 | Music | **"Dreamy Piano" by Clavier** (Pixabay, royalty-free, safe for Vercel) |
| 4 | Dog | **Main reveal Scene 6 + 4 subtle easter-eggs** in Scenes 5, 8, 9, 10 |
| 5 | Photos | **Purely stylized** — no real photos (only AI-generated + 3D + SVG) |
| 6 | Du'a | **Yes — two du'a** included (Scene 7 + Scene 10, with EN translations) |
| 7 | Sharing | **Password gate (NEW Scene 0)** — default password `Basmala18` |
| 8 | Interaction | **Both** — scroll on desktop, click arrows on mobile |
| 9 | Aesthetic | **Hybrid balance** — deep royal purple + soft lilac + gold |
| 10 | Vercel | **Default `*.vercel.app` URL** (you can add a custom domain later via Vercel dashboard) |

Full bilingual copy is in **`COPY.md`** in the workspace.

---

## 🔐 NEW: PASSWORD GATE (Scene 0)

A magical locked-gate scene has been added BEFORE Scene 1. Only Basmala (or whoever knows the password) opens the door. This makes the experience feel like *her* private world — a magical gift, not a public site.

- **Default password:** `Basmala18` (case-insensitive, fully editable in `lib/config.ts`).
- **Wrong password:** gentle horizontal shake + faint red glow + *"Not yet. Try again — you know it."*
- **Correct password:** soft golden chime + keypad dissolves into a glowing key + doors swing open → cinematic journey begins.

---

## 🎵 NEW: MUSIC INTEGRATION PLAN

- **Track:** *"Dreamy Piano"* by Clavier (Pixabay Content License — free for commercial use, no attribution required).
- **Implementation:** Howler.js, muted by default.
- **UI:** Floating music toggle (top-right) — single click enables, single click mutes.
- **Volume:** 30%, fades in over 2 seconds when enabled.
- **Secondary audio:** Procedural soft chime (Web Audio API) plays on password unlock and scene transitions.
- **iOS-safe:** never autoplays sound; user-initiated only.

---

## ✨ CLOSING NOTES

**Why this will be special:**
1. **It is engineered, not just designed.** Real 3D, real bloom, real shaders — not Stock-Photo-PowerPoint.
2. **It is personal, not generic.** Every scene references *her* favorites and *your* friendship.
3. **It is emotionally paced.** The 11-scene arc (with password gate) mirrors a real emotional journey: lock → unlock → immersion → declaration → memory → surprise → transformation → celebration → eternity.
4. **It respects the culture.** Muslim-friendly tone, no haram imagery, optional du'a, Arabic accents.
5. **It is private.** Password-protected — only Basmala (and whoever she shares the password with) experiences it.
6. **It will run forever on Vercel's free tier.** Fast, reliable, shareable with one link.

**Awaiting your "build" command to begin Phase 2.**

🎂 *For Basmala — to be the most beautiful 18th.*
