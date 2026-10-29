'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const slides = [
  {
    category: 'ENVIRONMENT',
    title: 'Class 100 Mycology Cleanrooms',
    desc: 'Sterile microclimates regulating humidity, air filtration, and organic substrates for pure fruiting bodies.',
    status: 'Cleanroom Archive Coming Soon',
    badge: 'ISO Class 5 // Sterile Air',
    gradient: 'from-emerald-950/60 via-background/90 to-black',
  },
  {
    category: 'ANALYTICAL CHEMISTRY',
    title: 'HPLC Chromatography Laboratory',
    desc: 'High-performance liquid chromatography testing verifying guaranteed 10+ mg/g cordycepin potency in every batch.',
    status: 'Spectrometry Video Archive Coming Soon',
    badge: '10+ mg/g Guaranteed',
    gradient: 'from-amber-950/50 via-background/90 to-black',
  },
  {
    category: 'BIOACTIVE INTEGRITY',
    title: 'Hermetic Induction Sealing',
    desc: 'BPA-free light-shielded vessels induction-sealed immediately post-encapsulation to prevent oxidative potency loss.',
    status: 'Packaging Line Footage Coming Soon',
    badge: 'Oxygen & Moisture Barrier',
    gradient: 'from-neutral-900/70 via-background/90 to-black',
  },
  {
    category: 'EXTRACTION PURITY',
    title: 'Zero-Grain Fruiting Harvest',
    desc: '100% pure mature fruiting bodies harvested by hand without mycelial starch or agricultural fillers.',
    status: 'Harvest Archive Coming Soon',
    badge: '100% Pure Fruiting Body',
    gradient: 'from-emerald-950/50 via-amber-950/30 to-black',
  },
];

export default function LabSourcingPlaceholder() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[current];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 280, damping: 28 },
        opacity: { duration: 0.45 },
        scale: { duration: 0.45 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring' as const, stiffness: 280, damping: 28 },
        opacity: { duration: 0.35 },
      },
    }),
  };

  return (
    <section ref={ref} className="relative w-full py-28 md:py-36 px-6 lg:px-24 bg-background border-t border-foreground/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent/4 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Editorial Header matching Reference UI */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-sans text-[11px] sm:text-xs tracking-[0.35em] uppercase text-accent mb-3 block font-medium"
          >
            Sanctuary of Science
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground font-normal tracking-tight"
          >
            Gallery
          </motion.h2>

          {/* Golden accent bar underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="w-12 h-[2px] bg-accent mx-auto mt-4"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-xs sm:text-sm text-foreground/50 mt-6 max-w-md mx-auto leading-relaxed"
          >
            Inside our partner mycology laboratories in India. Sterile cleanroom cultivation, chromatography quantification, and bioactive preservation.
          </motion.p>
        </div>

        {/* Gallery Slider Card */}
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="relative w-full h-[360px] sm:h-[420px] md:h-[460px] rounded-[28px] md:rounded-[36px] overflow-hidden border border-foreground/15 bg-neutral-950 shadow-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} p-8 sm:p-12 md:p-16 flex flex-col justify-between`}
              >
                {/* Subtle technical background grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

                {/* Card Top: Status / Badges */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-[10px] sm:text-xs tracking-widest uppercase text-foreground/40">
                    Archive // 0{current + 1}
                  </span>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] sm:text-xs font-sans tracking-wider uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    <span>{slide.badge}</span>
                  </div>
                </div>

                {/* Card Center: Visual Placeholder Glyph */}
                <div className="relative z-10 my-auto flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-foreground/10 bg-foreground/[0.03] backdrop-blur-md flex items-center justify-center text-foreground/30 hover:text-accent hover:border-accent/40 transition-colors">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <polygon points="23 7 16 12 23 17 23 7" />
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                    </svg>
                  </div>
                </div>

                {/* Card Bottom: Overlay text matching Image 1 layout */}
                <div className="relative z-10 max-w-2xl">
                  <span className="font-sans text-[10px] sm:text-xs tracking-[0.25em] uppercase text-accent font-semibold block mb-2">
                    {slide.category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground font-normal tracking-tight mb-3">
                    {slide.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-foreground/70 leading-relaxed max-w-xl">
                    {slide.desc}
                  </p>
                  <span className="font-sans text-[10px] sm:text-[11px] text-foreground/40 tracking-wider uppercase block mt-3 font-mono">
                    {slide.status}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls Below the Card matching Image 1 */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-11 h-11 rounded-full border border-foreground/20 bg-background/50 hover:bg-foreground hover:text-background hover:border-foreground text-foreground/70 flex items-center justify-center transition-all duration-300"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Slide Dots / Counter */}
            <div className="flex items-center gap-2 px-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    current === i ? 'w-6 bg-accent' : 'w-1.5 bg-foreground/20 hover:bg-foreground/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-11 h-11 rounded-full border border-foreground/20 bg-background/50 hover:bg-foreground hover:text-background hover:border-foreground text-foreground/70 flex items-center justify-center transition-all duration-300"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
