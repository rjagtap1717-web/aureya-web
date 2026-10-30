'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

export default function ThePromise() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-12%' });

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const glowY = useTransform(scrollYProgress, [0, 1], ['-30px', '30px']);
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.95]);

  const lines = [
    { text: 'The limit is', style: 'normal' },
    { text: 'biological.', style: 'italic accent' },
    { text: 'We moved', style: 'normal' },
    { text: 'the limit.', style: 'normal' },
  ];

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center py-20 sm:py-32 px-4 sm:px-6 overflow-hidden"
    >
      {/* Parallax ambient glow */}
      <motion.div
        style={{ y: glowY, scale: glowScale }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-accent/5 rounded-full blur-[100px] sm:blur-[120px]" />
      </motion.div>

      <div className="relative max-w-4xl w-full">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-[11px] sm:text-xs tracking-[0.3em] uppercase text-foreground/60 mb-10 sm:mb-16 text-center font-medium"
        >
          The Promise
        </motion.p>

        {/* Animated reveal underline */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-6 h-[1px] bg-accent/40 mb-8 origin-left"
        />

        <div className="space-y-1 md:space-y-2">
          {lines.map((line, i) => (
            <motion.h2
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.18 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`font-serif text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-[1.02] tracking-tight ${
                line.style.includes('italic') ? 'italic' : ''
              } ${line.style.includes('accent') ? 'text-accent' : 'text-foreground'}`}
            >
              {line.text}
            </motion.h2>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-16 font-sans text-xs sm:text-sm md:text-base leading-relaxed tracking-wide text-foreground/85 max-w-sm"
        >
          Pure Cordyceps militaris, engineered to elevate your daily baseline and restore sustained, jitter-free cellular energy.
        </motion.p>
      </div>
    </section>
  );
}
