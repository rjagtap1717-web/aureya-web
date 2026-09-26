'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const benefits = [
  {
    glyph: '⚡',
    title: 'ATP Energy',
    desc: 'Elevates cellular energy production at the mitochondrial level for sustained, crash-free output.',
  },
  {
    glyph: '🛡',
    title: 'Immunity',
    desc: 'Beta-glucans activate natural killer cells, priming your innate immune defence.',
  },
  {
    glyph: '◈',
    title: 'Cognitive Clarity',
    desc: 'Improves cerebral blood flow and reduces mental fatigue — sharper thinking, longer.',
  },
  {
    glyph: '≋',
    title: 'Cortisol Control',
    desc: 'Adaptogenic compounds modulate the HPA axis, lowering stress response over 30 days.',
  },
  {
    glyph: '○',
    title: 'Gut Integrity',
    desc: 'Prebiotic polysaccharides support a resilient gut microbiome and nutrient absorption.',
  },
  {
    glyph: '∞',
    title: 'Cellular Longevity',
    desc: 'Activates AMPK pathways — the same cellular switch targeted by leading longevity research.',
  },
];

export default function BenefitPillars() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section ref={ref} className="relative w-full py-32 px-6 lg:px-24 overflow-hidden">
      {/* Label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="font-sans text-xs tracking-[0.3em] uppercase text-foreground/40 mb-20 text-center"
      >
        Six Pillars of Action
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/8 border border-foreground/8">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-background p-10 lg:p-14 group hover:bg-accent/4 transition-colors duration-500"
          >
            <div className="mb-8 text-2xl text-accent/70 group-hover:text-accent transition-colors duration-500 font-sans">
              {b.glyph}
            </div>
            <h3 className="font-serif text-2xl text-foreground mb-4">{b.title}</h3>
            <p className="font-sans text-sm leading-relaxed text-foreground/50">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
