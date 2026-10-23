'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const steps = [
  {
    time: '07:00 AM',
    title: 'Awaken & Prime',
    desc: 'Consume 1 capsule on an empty stomach with 300ml of room temperature water.',
    detail: 'Optimal uptake occurs before metabolic breakdown of heavy meals.',
  },
  {
    time: '07:45 AM',
    title: 'Cellular Uptake',
    desc: 'Hydration and calm baseline breathing while bioactives absorb into systemic circulation without stimulant interference.',
    detail: 'Allows cordycepin to bind cleanly to receptors, replacing chemical caffeine with authentic mitochondrial ATP.',
  },
  {
    time: '08:30 AM',
    title: 'Sustained Output',
    desc: 'Transition into deep cognitive work or physical exertion with clean, steady focus.',
    detail: 'Zero nervous tremors. Natural mitochondrial energy output that lasts all day.',
  },
];

export default function TheRitualSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section ref={ref} className="relative w-full py-28 md:py-36 px-6 lg:px-24 bg-background border-t border-foreground/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4"
            >
              The Daily Protocol
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground leading-tight"
            >
              The Morning Ritual. <br />
              <span className="italic text-foreground/60">One capsule. Pure intent.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              href="/ritual"
              className="font-sans text-xs tracking-[0.2em] uppercase text-foreground/60 hover:text-accent transition-colors flex items-center gap-2 group"
            >
              <span>Read Full Dosage Deep Dive</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.time}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 md:p-10 rounded-2xl border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.04] hover:border-accent/30 transition-all duration-300 relative group"
            >
              <span className="font-mono text-xs tracking-widest text-accent uppercase block mb-6 font-semibold">
                {s.time} • Step 0{i + 1}
              </span>
              <h3 className="font-serif text-2xl text-foreground mb-4">{s.title}</h3>
              <p className="font-sans text-sm text-foreground/70 leading-relaxed mb-6">{s.desc}</p>
              <div className="pt-4 border-t border-foreground/5 text-xs font-sans text-foreground/45">
                {s.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
