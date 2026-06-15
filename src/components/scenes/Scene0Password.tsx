"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scene3D } from "@/components/three/Scene3D";
import { Doors } from "@/components/three/Doors";
import { PostFX } from "@/components/three/PostFX";
import { Sparkles } from "@react-three/drei";
import { config } from "@/lib/config";
import { content } from "@/data/content";
import { useBirthdayStore } from "@/lib/store";
import { playChime } from "@/lib/audio";
import { scrollToScene } from "@/lib/lenis";

export function Scene0Password() {
  const setUnlocked = useBirthdayStore((s) => s.setUnlocked);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (success) return;

    if (input.trim().toLowerCase() === config.password.toLowerCase()) {
      setSuccess(true);
      setError(false);
      playChime();
      setTimeout(() => {
        setUnlocked(true);
        scrollToScene(1); // Begin Scene 1
      }, 1500);
    } else {
      setError(true);
      setShake(true);
      playChime(); // soft error tone
      setTimeout(() => setShake(false), 600);
      setInput("");
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  return (
    <section className="scene relative" id="scene-0">
      {/* 3D background — closed doors */}
      <div className="canvas-container">
        <Scene3D cameraPosition={[0, 0, 5]} effects={<PostFX />}>
          <Doors open={success} />
          <Sparkles
            count={80}
            scale={[10, 8, 4]}
            size={3}
            speed={0.4}
            color="#C9A8FF"
          />
          <Sparkles
            count={30}
            scale={[6, 6, 2]}
            size={2}
            speed={0.6}
            color="#E8C97A"
          />
        </Scene3D>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-night/60 via-transparent to-deep-night/80 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-md px-6 text-center flex flex-col items-center">
        <AnimatePresence>
          {!success ? (
            <motion.div
              key="locked"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <p className="text-soft-lavender/70 text-sm tracking-[0.3em] font-body uppercase mb-2">
                {content.gate.hintTop}
              </p>

              <h1 className="font-display text-5xl md:text-6xl text-moonlight-gold glow-text-gold mb-8 mt-4">
                For Basmala
              </h1>

              <p className="italic-serif text-lilac-glow text-lg mb-12 opacity-80">
                {content.gate.prompt}
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
                <input
                  ref={inputRef}
                  type="password"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    setError(false);
                  }}
                  className={`password-input ${shake ? "shake" : ""}`}
                  placeholder="• • • • • • • •"
                  maxLength={32}
                  autoComplete="off"
                  aria-label="Password"
                />

                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-velvet-purple to-royal-purple text-moonlight-gold font-display tracking-widest text-lg transition-all duration-300 hover:scale-105 hover:shadow-glow-gold border border-moonlight-gold/30"
                >
                  {content.gate.buttonLabel}
                </button>

                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="font-arabic text-rose-pink text-sm italic"
                    >
                      {content.gate.wrong}
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>

              {/* Subtle paw print watermark */}
              <div className="absolute -bottom-20 right-0 text-rose-pink/20 text-3xl select-none pointer-events-none">
                🐾
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="unlocked"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center"
            >
              <p className="font-display text-3xl md:text-4xl text-moonlight-gold glow-text-gold">
                {content.gate.correct}
              </p>
              <p className="font-arabic text-lilac-glow text-2xl mt-3 opacity-80">
                أهلًا بكِ يا بسملة
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
