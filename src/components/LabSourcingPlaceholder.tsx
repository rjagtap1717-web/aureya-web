'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const archives = [
  {
    title: 'Sterile Cultivation Lab',
    badge: 'Facility Footage Coming Soon',
    category: 'Controlled Mycology',
    desc: 'Sterile cleanroom incubation under monitored microclimates to ensure consistent mushroom fruiting body development.',
  },
  {
    title: 'HPLC Chromatography Testing',
    badge: 'Video Archive Coming Soon',
    category: 'Analytical Verification',
    desc: 'Precision high-performance liquid chromatography verifying exact 12.75 mg/g cordycepin yield before extraction.',
  },
  {
    title: 'Hermetic Clean Packaging',
    badge: 'Lab Documentation Coming Soon',
    category: 'Bioactive Preservation',
    desc: 'BPA-free light-shielded vessels induction-sealed immediately to protect sensitive active compounds against oxidation.',
  },
];

export default function LabSourcingPlaceholder() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section ref={ref} className="relative w-full py-28 md:py-36 px-6 lg:px-24 bg-background border-t border-foreground/5 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent/4 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4"
          >
            Sourcing & Cultivation
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground leading-tight"
          >
            Inside the Laboratory. <br />
            <span className="italic text-foreground/60">Strictly verified origins.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-sm md:text-base text-foreground/60 mt-6 max-w-xl mx-auto leading-relaxed"
          >
            We partner with certified mycology cleanrooms in India. Direct lab footage, batch records, and chromatography footage are being cataloged for public inspection.
          </motion.p>
        </div>

        {/* 3 Frosted-Glass Placeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {archives.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl overflow-hidden border border-foreground/10 bg-foreground/[0.02] p-8 flex flex-col justify-between group hover:border-accent/40 transition-all duration-500 min-h-[380px]"
            >
              {/* Frosted Glass Background with Subtle Grid Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              {/* Status Header */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-sans text-[10px] tracking-widest uppercase text-foreground/40 font-mono">
                    {item.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-sans tracking-wider uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    Archive In Prep
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-foreground/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Frosted Glass Visual Placeholder Area */}
              <div className="relative z-10 mt-8 pt-6 border-t border-foreground/5 flex flex-col items-center justify-center py-8 rounded-2xl bg-foreground/[0.02] border border-dashed border-foreground/10 group-hover:border-accent/30 transition-colors">
                <svg className="w-8 h-8 text-foreground/30 mb-3 group-hover:text-accent/60 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
                <span className="font-sans text-[11px] tracking-widest uppercase text-foreground/50">
                  {item.badge}
                </span>
                <span className="font-sans text-[9px] text-foreground/30 mt-1">
                  Partner Cleanroom Documentation
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
