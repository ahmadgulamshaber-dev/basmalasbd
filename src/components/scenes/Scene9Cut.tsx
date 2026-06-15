"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scene3D } from "@/components/three/Scene3D";
import { Cake } from "@/components/three/Cake";
import { PostFX } from "@/components/three/PostFX";
import { Sparkles } from "@react-three/drei";
import { content } from "@/data/content";
import { useSceneProgress } from "@/hooks/useSceneProgress";
import { useBirthdayStore } from "@/lib/store";

export function Scene9Cut() {
  useSceneProgress(9);
  const [cut, setCut] = useState(false);
  const setMusicOn = useBirthdayStore((s) => s.toggleMusic);

  const handleCut = async () => {
    if (cut) return;
    setCut(true);

    // Trigger confetti via canvas-confetti style — simple version using tsparticles
    try {
      const container = document.getElementById("confetti-container");
      if (container) {
        // Simple visual burst — we'll use DOM-based particles for reliability
        for (let i = 0; i < 80; i++) {
          const particle = document.createElement("div");
          const colors = ["#E8C97A", "#C9A8FF", "#E8A0BF", "#FFFFFF", "#5B2A86"];
          particle.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: ${4 + Math.random() * 6}px;
            height: ${4 + Math.random() * 6}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: ${Math.random() > 0.5 ? "50%" : "2px"};
            pointer-events: none;
            z-index: 100;
          `;
          const angle = Math.random() * Math.PI * 2;
          const velocity = 200 + Math.random() * 400;
          const x = Math.cos(angle) * velocity;
          const y = Math.sin(angle) * velocity - 100;
          container.appendChild(particle);
          particle.animate(
            [
              { transform: "translate(-50%, -50%) rotate(0deg)", opacity: 1 },
              {
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${Math.random() * 720}deg)`,
                opacity: 0,
              },
            ],
            { duration: 2500, easing: "cubic-bezier(0.16, 1, 0.3, 1)" },
          ).onfinish = () => particle.remove();
        }
      }
    } catch {
      // Confetti failed — silently degrade.
    }
  };

  return (
    <section className="scene bg-royal-night" id="scene-9">
      <div id="confetti-container" className="absolute inset-0 pointer-events-none" />

      <div className="canvas-container">
        <Scene3D cameraPosition={[0, 1, 5]} effects={<PostFX />}>
          <Cake cut={cut} />
          <Sparkles count={60} scale={[8, 6, 4]} size={2} speed={0.5} color="#E8C97A" />
        </Scene3D>
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl flex flex-col items-center">
        {!cut ? (
          <motion.button
            onClick={handleCut}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-strong px-10 py-5 rounded-full hover:shadow-glow-gold transition-all"
          >
            <span className="font-display text-3xl text-moonlight-gold glow-text-gold tracking-wider">
              ✂️ Cut the cake
            </span>
          </motion.button>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <h2 className="font-display text-4xl md:text-6xl text-moonlight-gold glow-text-gold">
                {content.cut.heading.en}
              </h2>
              <p className="font-arabic text-2xl md:text-3xl text-lilac-glow opacity-80">
                {content.cut.heading.ar}
              </p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="italic-serif text-xl md:text-2xl text-soft-lavender mt-6 max-w-2xl leading-relaxed"
              >
                {content.cut.body.en}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.3 }}
                className="font-arabic text-lg text-lilac-glow/70"
              >
                {content.cut.body.ar}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
