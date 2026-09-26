'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

export default function ClosingCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[70vh] flex flex-col items-center justify-center py-40 px-6 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/8 rounded-full blur-[150px]" />
      </div>

      <div className="relative flex flex-col items-center text-center max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-sans text-xs tracking-[0.3em] uppercase text-foreground/35 mb-12"
        >
          Begin
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight text-foreground"
        >
          The Cellular Reset
          <br />
          <span className="italic text-accent">begins here.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16"
        >
          <Link
            href="/shop"
            className="group inline-flex items-center gap-4 font-sans text-sm tracking-[0.25em] uppercase px-12 py-5 bg-foreground text-background hover:bg-accent hover:text-white transition-all duration-500 ease-out"
          >
            Shop AUREYA
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
