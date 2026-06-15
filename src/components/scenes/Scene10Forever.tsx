"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { content } from "@/data/content";
import { useSceneProgress } from "@/hooks/useSceneProgress";
import { Lanterns } from "@/components/three/Lanterns";
import { ReplayButton } from "@/components/ui/ReplayButton";

// Lazy-load the fireworks component — it's heavy.
const Fireworks = dynamic(
  () => import("@/components/ui/Fireworks").then((m) => m.Fireworks),
  { ssr: false },
);

export function Scene10Forever() {
  useSceneProgress(10);

  return (
    <section className="scene relative" id="scene-10">
      {/* Background pyramids */}
      <div className="absolute inset-0">
        <Image
          src="/images/pyramids-twilight.png"
          alt="Pyramids at moonlit twilight"
          fill
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-night/60 via-velvet-purple/40 to-deep-night/80" />
      </div>

      {/* 3D rising lanterns */}
      <div className="canvas-container">
        <Lanterns count={20} upward={true} />
      </div>

      {/* Fireworks */}
      <Fireworks />

      {/* Copy */}
      <div className="relative z-10 text-center px-6 max-w-3xl flex flex-col items-center gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="font-display text-4xl md:text-7xl text-moonlight-gold glow-text-gold leading-tight"
        >
          {content.forever.heading.en}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="font-arabic text-2xl md:text-3xl text-lilac-glow opacity-80"
        >
          {content.forever.heading.ar}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="italic-serif text-2xl text-soft-lavender mt-6"
        >
          {content.forever.signature.en}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="font-arabic text-lg text-lilac-glow/70"
        >
          {content.forever.signature.ar}
        </motion.p>

        {/* Final du'a */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="glass-strong rounded-2xl px-8 py-6 mt-8"
        >
          <p className="font-arabic text-2xl md:text-3xl text-moonlight-gold glow-text-gold leading-relaxed">
            {content.forever.dua}
          </p>
          <p className="text-xs text-soft-lavender/60 mt-3 italic">
            {content.forever.duaTranslation}
          </p>
        </motion.div>
      </div>

      <ReplayButton />
    </section>
  );
}
