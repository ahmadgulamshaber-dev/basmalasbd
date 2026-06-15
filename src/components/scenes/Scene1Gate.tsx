"use client";

import { motion } from "framer-motion";
import { Scene3D } from "@/components/three/Scene3D";
import { Doors } from "@/components/three/Doors";
import { PostFX } from "@/components/three/PostFX";
import { Sparkles } from "@react-three/drei";
import { content } from "@/data/content";
import { useSceneProgress } from "@/hooks/useSceneProgress";
import { ScrollHint } from "@/components/ui/ScrollHint";

export function Scene1Gate() {
  useSceneProgress(1);

  return (
    <section className="scene" id="scene-1">
      {/* 3D — doors opening, light spilling in */}
      <div className="canvas-container">
        <Scene3D cameraPosition={[0, 0, 5]} effects={<PostFX />}>
          <Doors open={true} />
          {/* Central light beam */}
          <pointLight position={[0, 0, 2]} intensity={3} color="#E8C97A" distance={6} />
          <Sparkles
            count={120}
            scale={[10, 8, 4]}
            size={3}
            speed={0.6}
            color="#E8C97A"
          />
          <Sparkles
            count={80}
            scale={[10, 8, 4]}
            size={2}
            speed={0.4}
            color="#C9A8FF"
          />
        </Scene3D>
      </div>

      <div className="absolute inset-0 bg-gradient-radial from-transparent via-deep-night/30 to-deep-night/80 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.6 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="font-display text-4xl md:text-6xl text-moonlight-gold glow-text-gold mb-4">
          {content.gateOpen.en}
        </h1>
        <p className="font-arabic text-2xl md:text-3xl text-lilac-glow opacity-80">
          {content.gateOpen.ar}
        </p>
      </motion.div>

      <ScrollHint />
    </section>
  );
}
