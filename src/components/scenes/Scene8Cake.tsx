"use client";

import { motion } from "framer-motion";
import { Scene3D } from "@/components/three/Scene3D";
import { Cake } from "@/components/three/Cake";
import { PostFX } from "@/components/three/PostFX";
import { Sparkles } from "@react-three/drei";
import { content } from "@/data/content";
import { useSceneProgress } from "@/hooks/useSceneProgress";
import { NextSceneArrow } from "@/components/ui/NextSceneArrow";

export function Scene8Cake() {
  useSceneProgress(8);

  return (
    <section className="scene bg-spotlight" id="scene-8">
      <div className="canvas-container">
        <Scene3D cameraPosition={[0, 1, 5]} effects={<PostFX />}>
          <Cake />
          <Sparkles count={80} scale={[8, 6, 4]} size={2} speed={0.4} color="#E8C97A" />
        </Scene3D>
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="font-display text-3xl md:text-5xl text-moonlight-gold glow-text-gold mb-3"
        >
          {content.cake.heading.en}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          className="font-arabic text-xl md:text-2xl text-lilac-glow opacity-80 mb-6"
        >
          {content.cake.heading.ar}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="italic-serif text-xl text-soft-lavender leading-relaxed"
        >
          {content.cake.sub.en}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          className="font-arabic text-base text-lilac-glow/70 mt-3"
        >
          {content.cake.sub.ar}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-12 text-moonlight-gold/80 text-sm tracking-[0.3em] uppercase animate-pulse"
        >
          {content.cake.cutPrompt.en}
        </motion.p>
      </div>

      <NextSceneArrow targetScene={9} />
    </section>
  );
}
