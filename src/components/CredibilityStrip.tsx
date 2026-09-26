'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const facts = [
  { value: '98.3%', label: 'Polysaccharide Purity' },
  { value: '3rd Party', label: 'Lab Verified COA' },
  { value: 'Borosilicate', label: 'Zero-Leach Glass' },
  { value: 'India Made', label: 'GMP Certified Facility' },
];

export default function CredibilityStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section ref={ref} className="relative w-full py-20 px-6 border-y border-foreground/8 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-y md:divide-y-0 divide-foreground/8">
        {facts.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center py-10 px-6 text-center gap-2"
          >
            <span className="font-serif text-2xl md:text-3xl text-accent">{f.value}</span>
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-foreground/40">{f.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
