"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";
import { useSceneProgress } from "@/hooks/useSceneProgress";
import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";

// 18 orbiting roses (pure 3D)
function OrbitingRoses() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.elapsedTime * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 18 }).map((_, i) => {
        const angle = (i / 18) * Math.PI * 2;
        const radius = 3.2;
        return (
          <group
            key={i}
            position={[
              Math.cos(angle) * radius,
              Math.sin(i * 0.4) * 0.5,
              Math.sin(angle) * radius,
            ]}
          >
            <mesh>
              <sphereGeometry args={[0.18, 12, 12]} />
              <meshStandardMaterial
                color="#E8A0BF"
                emissive="#E8A0BF"
                emissiveIntensity={0.6}
                roughness={0.4}
              />
            </mesh>
            <mesh position={[0, -0.3, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.3, 6]} />
              <meshStandardMaterial color="#3a6b1f" />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

export function Scene7Eighteen() {
  useSceneProgress(7);

  return (
    <section className="scene bg-spotlight" id="scene-7">
      {/* 3D backdrop */}
      <div className="canvas-container">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          gl={{ alpha: true, antialias: true }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.5} color="#C9A8FF" />
          <pointLight position={[0, 0, 0]} color="#E8C97A" intensity={2} />
          <OrbitingRoses />
          <Sparkles count={80} scale={[10, 8, 4]} size={2} speed={0.3} color="#E8C97A" />
        </Canvas>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center">
        {/* The "18" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
          viewport={{ once: false, amount: 0.4 }}
          className="font-display text-[10rem] md:text-[18rem] leading-none text-moonlight-gold glow-text-gold mb-6"
        >
          18
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="font-display text-3xl md:text-5xl text-moonlight-gold glow-text-gold mb-3"
        >
          {content.eighteen.header.en}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="font-arabic text-xl md:text-2xl text-lilac-glow opacity-80 mb-8"
        >
          {content.eighteen.header.ar}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="italic-serif text-xl md:text-2xl text-soft-lavender max-w-2xl leading-relaxed mb-6"
        >
          {content.eighteen.body.en}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="font-arabic text-lg text-lilac-glow/70 mb-12"
        >
          {content.eighteen.body.ar}
        </motion.p>

        {/* Du'a */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="glass-strong rounded-2xl px-8 py-6 max-w-2xl"
        >
          <p className="font-arabic text-2xl md:text-3xl text-moonlight-gold glow-text-gold leading-relaxed text-center">
            {content.eighteen.dua}
          </p>
          <p className="text-xs text-soft-lavender/60 mt-4 italic text-center leading-relaxed">
            {content.eighteen.duaTranslation}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
