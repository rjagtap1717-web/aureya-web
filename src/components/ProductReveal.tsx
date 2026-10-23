'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

export default function ProductReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  const specs = [
    {
      label: 'Cordycepin Potency',
      value: '12.75 mg/g',
      detail: 'Lab-verified standardized active compound that upregulates cellular ATP.',
    },
    {
      label: '100% Fruiting Body',
      value: 'Pure Bioactives',
      detail: 'Zero grain filler, zero starch dilution, zero mycelium-on-grain waste.',
    },
    {
      label: 'Third-Party Verified',
      value: 'Certified COA',
      detail: 'Every single batch tested for heavy metals, microbials, and purity.',
    },
  ];

  return (
    <section 
      ref={ref}
      id="product-reveal"
      className="relative w-full py-28 md:py-36 px-6 lg:px-24 bg-background border-t border-foreground/5 overflow-hidden"
    >
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4"
        >
          The Flagship Vessel
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground max-w-3xl leading-tight mb-16 md:mb-24"
        >
          Cordyceps Militaris Capsules. <br />
          <span className="italic text-foreground/60">Designed for cellular optimization.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Bottle on the LEFT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 w-full"
          >
            <div className="relative aspect-[4/5] sm:aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-b from-foreground/[0.04] to-foreground/[0.08] border border-foreground/10 shadow-2xl group flex items-center justify-center p-8">
              {/* Soft center backlight */}
              <div className="absolute inset-0 bg-accent/8 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
              
              <img
                src="/cordybotmkup.jpeg"
                alt="Yora Cordyceps Capsules Luxury Bottle"
                className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover:scale-105"
              />

              {/* Minimal dosage tag */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between px-5 py-3 rounded-2xl bg-background/80 backdrop-blur-md border border-foreground/10 text-xs font-sans">
                <span className="text-foreground/80 font-medium">Daily Serving</span>
                <span className="text-accent font-mono tracking-wider">1 Capsule Daily • 30 or 60 Count</span>
              </div>
            </div>
          </motion.div>

          {/* Copy + Key Specs on the RIGHT */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-sans text-base md:text-lg leading-relaxed text-foreground/70 mb-12"
            >
              Yora extract is derived exclusively from cultivated, sterile fruiting bodies of{' '}
              <span className="text-foreground font-medium">Cordyceps militaris</span>. Unlike wild harvest or grain-based powders, our strain delivers guaranteed active cordycepin at a clinical baseline.
            </motion.p>

            {/* 3 Core Highlight Specs */}
            <div className="space-y-6 mb-12">
              {specs.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.35 + i * 0.1 }}
                  className="p-6 rounded-2xl border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.04] hover:border-accent/30 transition-all duration-300"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-sans text-xs tracking-widest uppercase text-foreground/50">
                      {spec.label}
                    </span>
                    <span className="font-serif text-xl sm:text-2xl text-accent font-semibold">
                      {spec.value}
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-foreground/60 leading-relaxed">
                    {spec.detail}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <Link
                href="/shop"
                className="w-full sm:w-auto px-10 py-4 bg-foreground text-background font-sans text-xs tracking-[0.25em] uppercase hover:bg-accent hover:text-white transition-all duration-300 text-center shadow-lg"
              >
                Acquire The Ritual ↗
              </Link>
              <span className="font-sans text-xs tracking-wider text-foreground/40">
                Starting at ₹999 • Free Delivery Across India
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
