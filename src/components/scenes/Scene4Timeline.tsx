"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";
import { useSceneProgress } from "@/hooks/useSceneProgress";
import { ScrollHint } from "@/components/ui/ScrollHint";

export function Scene4Timeline() {
  useSceneProgress(4);

  return (
    <section className="scene bg-royal-night py-24" id="scene-4">
      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-moonlight-gold glow-text-gold mb-3">
            {content.timeline.header.en}
          </h2>
          <p className="font-arabic text-2xl text-lilac-glow/80">
            {content.timeline.header.ar}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-moonlight-gold/60 to-transparent hidden md:block" />

          {content.timeline.cards.map((card, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                viewport={{ once: false, amount: 0.4 }}
                className={`relative mb-12 md:mb-16 flex ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Center dot */}
                <div className="absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-moonlight-gold glow-box-purple hidden md:block animate-pulse-glow" />

                {/* Card */}
                <div
                  className={`glass-strong rounded-2xl p-6 md:p-8 max-w-md w-full ${
                    isLeft ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"
                  }`}
                >
                  <h3 className="font-display text-2xl text-moonlight-gold mb-2">
                    {card.title.en}
                  </h3>
                  <p className="font-arabic text-sm text-lilac-glow/70 mb-4">
                    {card.title.ar}
                  </p>
                  <p className="italic-serif text-soft-lavender leading-relaxed">
                    {card.body.en}
                  </p>
                  <p className="font-arabic text-sm text-soft-lavender/70 mt-3 leading-relaxed">
                    {card.body.ar}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <ScrollHint />
    </section>
  );
}
