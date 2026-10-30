'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

export default function ScienceTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const glowY = useTransform(scrollYProgress, [0, 1], ['-25px', '25px']);

  return (
    <section ref={ref} className="relative w-full py-16 sm:py-24 md:py-36 px-4 sm:px-6 lg:px-24 bg-background border-t border-foreground/5 overflow-hidden">
      {/* Parallax background radial glow */}
      <motion.div
        style={{ y: glowY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[700px] h-[340px] sm:h-[500px] bg-accent/4 rounded-full blur-[120px] sm:blur-[180px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Science explanation on the LEFT — slides in from left */}
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4"
            >
              Mechanism of Action
            </motion.p>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-3xl sm:text-5xl text-foreground leading-tight mb-4 sm:mb-6"
              >
                The Science of <br />
                <span className="italic text-foreground/60">ATP Upregulation.</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, x: -25 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-xs sm:text-sm md:text-base text-foreground/70 leading-relaxed mb-6"
            >
              Cordycepin (3&apos;-deoxyadenosine) is structurally analogous to adenosine, the primary cellular signaling molecule. Once consumed, it integrates directly into your mitochondrial energy cycle, upregulating Adenosine Triphosphate (ATP) production by up to 28%.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.97 }}
              animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 0.65, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="p-4 sm:p-6 rounded-2xl bg-foreground/[0.03] border border-foreground/10 mb-6 sm:mb-8 space-y-2 sm:space-y-3"
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span className="font-sans text-[11px] sm:text-xs uppercase tracking-wider text-foreground font-medium">Standardized Cordycepin: 10+ mg/g</span>
              </div>
              <p className="font-sans text-xs text-foreground/60 leading-relaxed pl-4 sm:pl-5">
                While standard market cordyceps rarely verify active levels, Yora is the first to guarantee 10+ mg/g active cordycepin in every single batch via third-party HPLC testing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/science"
                className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.25em] uppercase text-accent hover:text-foreground transition-colors group"
              >
                <span>Explore the Clinical Research</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          </div>

          {/* Graphic on the RIGHT — slides in from right */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.96 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl overflow-hidden border border-foreground/15 bg-black/60 shadow-2xl p-2 sm:p-4 group">
              <img
                src="/Cellular%20Energetics_%20Before%20and%20After.png"
                alt="Cellular Energetics: Before and After Mechanism of Action"
                className="w-full h-auto object-contain rounded-2xl transition-transform duration-700 group-hover:scale-[1.01]"
              />
              <div className="p-4 flex items-center justify-between text-xs font-sans text-foreground/40">
                <span>Figure 1.0: Mitochondrial Oxygen Kinetics</span>
                <span className="text-accent font-mono text-[11px]">COA Verified</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
