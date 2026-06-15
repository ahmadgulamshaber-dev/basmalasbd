"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scene3D } from "@/components/three/Scene3D";
import { PuppyModel } from "@/components/three/PuppyModel";
import { PostFX } from "@/components/three/PostFX";
import { Sparkles } from "@react-three/drei";
import { content } from "@/data/content";
import { useSceneProgress } from "@/hooks/useSceneProgress";
import { useBirthdayStore } from "@/lib/store";
import { Heart } from "lucide-react";

export function Scene6Dog() {
  useSceneProgress(6);
  const [showPet, setShowPet] = useState(false);
  const incrementPets = useBirthdayStore((s) => s.incrementPets);

  const handlePet = () => {
    incrementPets();
    setShowPet(true);
    setTimeout(() => setShowPet(false), 2000);
  };

  return (
    <section className="scene bg-royal-night" id="scene-6">
      <div className="canvas-container">
        <Scene3D cameraPosition={[0, 0, 4]} effects={<PostFX />}>
          <PuppyModel />
          <Sparkles
            count={100}
            scale={[8, 6, 4]}
            size={2.5}
            speed={0.5}
            color="#E8C97A"
          />
          <Sparkles
            count={60}
            scale={[6, 4, 2]}
            size={1.5}
            speed={0.6}
            color="#E8A0BF"
          />
        </Scene3D>
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl flex flex-col items-center gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="font-display text-3xl md:text-5xl text-moonlight-gold glow-text-gold"
        >
          {content.dog.heading.en}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          className="font-arabic text-xl md:text-2xl text-lilac-glow opacity-80"
        >
          {content.dog.heading.ar}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="italic-serif text-xl text-soft-lavender leading-relaxed mt-4"
        >
          {content.dog.body.en}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="font-arabic text-base text-lilac-glow/70"
        >
          {content.dog.body.ar}
        </motion.p>

        {/* Pet button */}
        <motion.button
          onClick={handlePet}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-6 py-3 rounded-full glass-strong flex items-center gap-3 hover:shadow-glow-gold"
          aria-label="Pet the dog"
        >
          <Heart className="w-5 h-5 text-rose-pink fill-rose-pink" />
          <span className="text-moonlight-gold font-display tracking-wider">
            Pet her
          </span>
        </motion.button>

        <AnimatePresence>
          {showPet && (
            <motion.p
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              className="italic-serif text-rose-pink text-lg mt-2"
            >
              {content.dog.pet.en} 💕
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
