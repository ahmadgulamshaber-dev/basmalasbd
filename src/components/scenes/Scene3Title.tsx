"use client";

import { motion } from "framer-motion";
import { Scene3D } from "@/components/three/Scene3D";
import { EnchantedRose } from "@/components/three/EnchantedRose";
import { Petals } from "@/components/three/Petals";
import { PostFX } from "@/components/three/PostFX";
import { content } from "@/data/content";
import { useSceneProgress } from "@/hooks/useSceneProgress";
import { ScrollHint } from "@/components/ui/ScrollHint";

export function Scene3Title() {
  useSceneProgress(3);

  // Letter stagger for the English title
  const titleLetters = content.title.main.en.split(" ");

  return (
    <section className="scene bg-nile-night" id="scene-3">
      {/* 3D enchanted rose + petals */}
      <div className="canvas-container">
        <Scene3D cameraPosition={[0, 0, 4]} effects={<PostFX />}>
          <EnchantedRose scale={0.9} />
          <Petals count={40} />
        </Scene3D>
      </div>

      {/* Title overlay */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false, amount: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-moonlight-gold glow-text-gold leading-tight mb-4"
        >
          {titleLetters.map((word, wi) => (
            <motion.span
              key={wi}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: wi * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="inline-block mr-4"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="font-arabic text-2xl md:text-3xl text-lilac-glow opacity-80 mb-8"
        >
          {content.title.main.ar}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="italic-serif text-xl md:text-2xl text-soft-lavender max-w-2xl mx-auto leading-relaxed">
            {content.title.subline.en}
          </p>
          <p className="font-arabic text-lg text-lilac-glow/70 mt-3">
            {content.title.subline.ar}
          </p>
        </motion.div>
      </div>

      <ScrollHint />
    </section>
  );
}
