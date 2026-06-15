"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Scene3D } from "@/components/three/Scene3D";
import { Lanterns } from "@/components/three/Lanterns";
import { content } from "@/data/content";
import { useSceneProgress } from "@/hooks/useSceneProgress";
import { ScrollHint } from "@/components/ui/ScrollHint";

export function Scene2Nile() {
  useSceneProgress(2);

  return (
    <section className="scene" id="scene-2">
      {/* Backdrop — pyramids image */}
      <div className="absolute inset-0">
        <Image
          src="/images/pyramids-twilight.png"
          alt="Pyramids at moonlit twilight"
          fill
          priority
          className="object-cover opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-night/40 via-velvet-purple/30 to-deep-night/60" />
      </div>

      {/* 3D lanterns */}
      <div className="canvas-container">
        <Scene3D cameraPosition={[0, 0, 6]}>
          <Lanterns count={14} />
        </Scene3D>
      </div>

      {/* Pyramid SVG silhouettes (parallax layers) */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          className="w-full h-[40vh] opacity-30"
          style={{ filter: "drop-shadow(0 0 30px rgba(91,42,134,0.6))" }}
        >
          <defs>
            <linearGradient id="pyr" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#3B1F5E" />
              <stop offset="1" stopColor="#0E0820" />
            </linearGradient>
          </defs>
          <polygon points="200,400 350,80 500,400" fill="url(#pyr)" />
          <polygon points="450,400 650,40 850,400" fill="url(#pyr)" />
          <polygon points="800,400 950,120 1100,400" fill="url(#pyr)" />
        </svg>
      </div>

      {/* Copy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false, amount: 0.5 }}
        className="relative z-10 max-w-3xl px-8 text-center"
      >
        <p className="font-secondary italic text-xl md:text-2xl text-soft-lavender leading-relaxed mb-4">
          {content.nile.en}
        </p>
        <p className="font-arabic text-lg md:text-xl text-lilac-glow/80 opacity-80">
          {content.nile.ar}
        </p>
      </motion.div>

      <ScrollHint />
    </section>
  );
}
