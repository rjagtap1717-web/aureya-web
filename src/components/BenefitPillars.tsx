'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const benefits = [
  {
    glyph: '⚡',
    title: 'ATP Energy',
    desc: 'Elevates cellular energy production at the mitochondrial level for clean, sustained output without crashes.',
  },
  {
    glyph: '🛡',
    title: 'Immunity',
    desc: 'Beta-glucans activate natural killer cells, priming your innate immune defence.',
  },
  {
    glyph: '◈',
    title: 'Cognitive Clarity',
    desc: 'Improves cerebral blood flow and reduces mental fatigue for sharper, sustained focus.',
  },
  {
    glyph: '≋',
    title: 'Cortisol Control',
    desc: 'Adaptogenic compounds modulate the HPA axis, helping lower your stress response over 30 days.',
  },
  {
    glyph: '○',
    title: 'Gut Integrity',
    desc: 'Prebiotic polysaccharides support a resilient gut microbiome and nutrient absorption.',
  },
  {
    glyph: '∞',
    title: 'Cellular Longevity',
    desc: 'Activates AMPK pathways, the key cellular mechanism highlighted in longevity science.',
  },
];

export default function BenefitPillars() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const glowY = useTransform(scrollYProgress, [0, 1], ['-20px', '20px']);

  return (
    <section ref={ref} className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-24 overflow-hidden">
      {/* Parallax ambient glow */}
      <motion.div
        style={{ y: glowY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/4 rounded-full blur-[140px]" />
      </motion.div>

      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-sans text-xs tracking-[0.3em] uppercase text-foreground/40 mb-4 text-center"
      >
        Six Pillars of Action
      </motion.p>

      {/* Animated underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-8 h-[1px] bg-accent/50 mx-auto mb-12 sm:mb-20 origin-left"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/8 border border-foreground/8">
        {benefits.map((b, i) => {
          // Alternate: first row slides from bottom, second from sides for visual variety
          const xOffset = i % 2 === 0 ? -30 : 30;
          return (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 40, x: xOffset }}
              animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="bg-background p-6 sm:p-10 lg:p-14 group hover:bg-accent/4 transition-colors duration-500 spotlight-card"
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.09, ease: 'backOut' }}
                className="mb-6 sm:mb-8 text-2xl text-accent/70 group-hover:text-accent transition-colors duration-500 font-sans"
              >
                {b.glyph}
              </motion.div>
              <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-3 sm:mb-4">{b.title}</h3>
              <p className="font-sans text-xs sm:text-sm leading-relaxed text-foreground/50">{b.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
