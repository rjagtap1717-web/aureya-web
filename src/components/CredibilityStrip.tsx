'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const facts = [
  { value: '10+ mg/g', label: 'Guaranteed Cordycepin' },
  { value: '3rd Party', label: 'Lab Verified COA' },
  { value: 'Food-Grade', label: 'BPA-Free PET Bottle' },
  { value: 'India Made', label: 'GMP Certified Facility' },
];

export default function CredibilityStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const lineScale = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <section ref={ref} className="relative w-full py-12 sm:py-20 px-4 sm:px-6 border-y border-foreground/8 overflow-hidden">
      {/* Scroll-driven top reveal line */}
      <motion.div
        style={{ scaleX: lineScale }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent origin-left"
      />

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-y md:divide-y-0 divide-foreground/8 border border-foreground/8">
        {facts.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center py-6 sm:py-10 px-3 sm:px-6 text-center gap-1.5 sm:gap-2 group"
          >
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: 'backOut' }}
              className="font-serif text-xl sm:text-2xl md:text-3xl text-accent"
            >
              {f.value}
            </motion.span>
            <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.2em] uppercase text-foreground/50">{f.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Scroll-driven bottom reveal line */}
      <motion.div
        style={{ scaleX: lineScale }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent origin-right"
      />
    </section>
  );
}
