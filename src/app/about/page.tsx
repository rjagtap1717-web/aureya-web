'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <motion.main
      initial="hidden"
      animate="show"
      exit={{ opacity: 0 }}
      variants={containerVariants}
      className="min-h-[100dvh] bg-background text-foreground pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        
        <motion.div variants={itemVariants} className="mb-24 md:mb-32">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4">The Standard</p>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground leading-tight max-w-4xl">
            We built what we couldn&apos;t find. <br />
            <span className="italic text-foreground/70">No compromises.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Founder Note */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <h2 className="font-serif text-3xl mb-8">A Note on Intent</h2>
            <div className="font-sans text-sm leading-loose text-foreground/70 space-y-6">
              <p>
                The wellness industry is flooded with mycelium grown on grain: mostly starch, devoid of active compounds, packaged in unsealed containers that degrade whatever potency remains.
              </p>
              <p>
                We grew tired of the dilution. We wanted the pure fruiting body. We wanted a clinical dose. We wanted a vessel that respected the molecule.
              </p>
              <p>
                Yora was born from an obsession with setting a new standard. We source only strictly cultivated Cordyceps militaris to ensure a hyper-consistent cordycepin concentration. Every bottle is hermetically sealed to preserve the active compounds from humidity and light.
              </p>
              <p>
                It is not for everyone. It is for those who demand their baseline be elevated, systematically and scientifically.
              </p>
              
              <div className="pt-8 flex flex-col sm:flex-row gap-8">
                {/* Aditya Jadhav */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border border-foreground/15 shadow-md bg-foreground/5 shrink-0">
                    <img 
                      src="/aditya.jpeg" 
                      alt="Aditya Jadhav" 
                      className="w-full h-full object-cover object-center" 
                    />
                  </div>
                  <div>
                    <span className="font-serif text-xl italic text-foreground block">Aditya Jadhav</span>
                    <span className="font-sans text-[10px] tracking-widest uppercase text-accent">Co-Founder</span>
                  </div>
                </div>
                
                {/* Rushikesh Jagtap */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border border-foreground/15 shadow-md bg-foreground/5 shrink-0">
                    <img 
                      src="/rushikesh.jpeg" 
                      alt="Rushikesh Jagtap" 
                      className="w-full h-full object-cover object-center" 
                    />
                  </div>
                  <div>
                    <span className="font-serif text-xl italic text-foreground block">Rushikesh Jagtap</span>
                    <span className="font-sans text-[10px] tracking-widest uppercase text-accent">Co-Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Editorial Product Vessel Showcase */}
          <motion.div variants={itemVariants} className="lg:col-span-5 w-full aspect-[4/5] rounded-3xl relative overflow-hidden group border border-foreground/10 bg-gradient-to-b from-foreground/[0.03] to-foreground/[0.08] p-8 flex flex-col justify-between shadow-2xl">
            <div className="absolute inset-0 bg-accent/5 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="font-sans text-[10px] tracking-widest uppercase text-foreground/40 font-mono">
                The Flagship
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-sans tracking-wider uppercase">
                First Edition
              </span>
            </div>

            <div className="relative z-10 my-auto py-4 flex items-center justify-center">
              <img
                src="/cordybotmkup.jpeg"
                alt="Yora Cordyceps Luxury Bottle"
                className="w-full max-h-[320px] object-contain filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="relative z-10 pt-4 border-t border-foreground/5 flex items-center justify-between text-xs font-sans text-foreground/50">
              <span>Guaranteed 10+ mg/g</span>
              <span className="text-accent font-mono text-[11px]">100% Pure Fruiting Body</span>
            </div>
          </motion.div>

        </div>

        {/* Closing Action */}
        <motion.div variants={itemVariants} className="mt-32 border-t border-foreground/10 pt-20 text-center">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4">Experience Yora</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-8">Ready to elevate your baseline?</h2>
          <Link
            href="/shop"
            className="inline-block bg-foreground text-background hover:bg-accent hover:text-white transition-all duration-300 px-12 py-5 font-sans text-xs tracking-widest uppercase shadow-xl"
          >
            Shop The Cellular Reset ↗
          </Link>
        </motion.div>

      </div>
    </motion.main>
  );
}
