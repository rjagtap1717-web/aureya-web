'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const phases = [
  {
    period: 'Day 1 to 7',
    headline: 'The Mitochondrial Lift',
    bioactive: 'ATP Synthesis',
    description:
      'Cordycepin directly up-regulates cellular ATP generation. Within days, you experience smooth, jitter-free energy without the cortisol spike or 3 PM crash of caffeine.',
    indicator: 'Clean Focus',
  },
  {
    period: 'Day 7 to 14',
    headline: 'Oxygenation & Stamina',
    bioactive: 'VO2 Max Modulation',
    description:
      'Adenosine and active polysaccharides promote microvascular blood flow and cellular oxygen uptake. Mental endurance extends during deep work, and physical stamina noticeably rebounds.',
    indicator: 'Sustained Output',
  },
  {
    period: 'Day 21 to 30',
    headline: 'The Baseline Reset',
    bioactive: 'HPA-Axis Regulation',
    description:
      'Adaptogenic pathways normalize your baseline stress response. Sleep latency decreases, innate immunity primes, and your standard energy floor is permanently elevated.',
    indicator: 'Cellular Equilibrium',
  },
];

export default function ExperienceTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section ref={ref} className="relative w-full py-16 sm:py-24 md:py-36 px-4 sm:px-6 lg:px-24 bg-background border-t border-foreground/5 overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-accent/4 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20 md:mb-28">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4"
          >
            The 30-Day Arc
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-foreground leading-tight"
          >
            How your cells adapt. <br />
            <span className="italic text-foreground/60">Compounding daily.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-xs sm:text-sm md:text-base text-foreground/60 mt-4 sm:mt-6 max-w-xl mx-auto leading-relaxed"
          >
            Natural botanicals work through biological adaptation, not central nervous stimulants. Here is what happens as active compounds accumulate in your system.
          </motion.p>
        </div>

        {/* 3-phase progression cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.period}
              initial={{ opacity: 0, y: 35 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 sm:p-8 md:p-10 rounded-2xl border border-foreground/10 bg-foreground/[0.02] flex flex-col justify-between group hover:bg-foreground/[0.04] transition-all duration-500 spotlight-card"
            >
              <div>
                <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-foreground/5">
                  <span className="font-mono text-xs tracking-widest text-accent uppercase font-medium">
                    {phase.period}
                  </span>
                  <span className="font-sans text-[10px] tracking-widest uppercase text-foreground/40 px-3 py-1 rounded-full border border-foreground/10 bg-background/50">
                    {phase.indicator}
                  </span>
                </div>

                <span className="font-sans text-[11px] tracking-wider uppercase text-foreground/40 block mb-2">
                  Target: {phase.bioactive}
                </span>

                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground mb-3 sm:mb-4 group-hover:text-accent transition-colors duration-300">
                  {phase.headline}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-foreground/60 leading-relaxed">
                  {phase.description}
                </p>
              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-foreground/5 flex items-center justify-between text-xs font-sans text-foreground/40">
                <span>Phase 0{i + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:scale-150 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
