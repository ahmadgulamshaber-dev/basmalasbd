"use client";

import { motion } from "framer-motion";
import { Scene3D } from "@/components/three/Scene3D";
import { EnchantedRose } from "@/components/three/EnchantedRose";
import { F1Track } from "@/components/three/F1Track";
import { PostFX } from "@/components/three/PostFX";
import { content } from "@/data/content";
import { useSceneProgress } from "@/hooks/useSceneProgress";
import { Sparkles } from "@react-three/drei";
import { useState } from "react";

const FAVORITES = [
  {
    key: "purple",
    color: "#5B2A86",
    icon: "💜",
  },
  {
    key: "roses",
    color: "#E8A0BF",
    icon: "🌹",
  },
  {
    key: "batb",
    color: "#E8C97A",
    icon: "✨",
  },
  {
    key: "f1",
    color: "#C9A8FF",
    icon: "🏎️",
  },
  {
    key: "dogTeaser",
    color: "#FFFFFF",
    icon: "🐾",
  },
] as const;

export function Scene5Favorites() {
  useSceneProgress(5);
  const [active, setActive] = useState(0);

  return (
    <section className="scene bg-spotlight" id="scene-5">
      {/* 3D backdrop with rotating showcase */}
      <div className="canvas-container">
        <Scene3D cameraPosition={[0, 0, 5]} effects={<PostFX />}>
          <Sparkles count={60} scale={[10, 8, 4]} size={2} speed={0.4} color="#C9A8FF" />
          {active === 1 && <EnchantedRose scale={0.6} />}
          {active === 3 && <F1Track />}
        </Scene3D>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        {/* Favorites grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {FAVORITES.map((fav, i) => {
            const data = content.favorites[fav.key];
            const isActive = active === i;
            return (
              <motion.button
                key={fav.key}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className={`glass-strong rounded-2xl p-6 md:p-8 text-center transition-all duration-500 ${
                  isActive ? "shadow-glow-purple scale-105 border-moonlight-gold/40" : ""
                }`}
                style={{
                  borderColor: isActive ? `${fav.color}66` : undefined,
                }}
              >
                <div
                  className="text-4xl md:text-5xl mb-3"
                  style={{ filter: `drop-shadow(0 0 20px ${fav.color}88)` }}
                >
                  {fav.icon}
                </div>
                <h3
                  className="font-display text-xl md:text-2xl mb-1"
                  style={{ color: fav.color }}
                >
                  {data.word.en}
                </h3>
                <p className="font-arabic text-sm opacity-60 mb-3">{data.word.ar}</p>
                <p className="italic-serif text-soft-lavender text-sm leading-relaxed">
                  {data.note.en}
                </p>
                <p className="font-arabic text-xs text-soft-lavender/60 mt-2">
                  {data.note.ar}
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
