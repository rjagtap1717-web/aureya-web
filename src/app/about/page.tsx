'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
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
        
        <motion.div variants={itemVariants} className="mb-32">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4">The Standard</p>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground leading-tight max-w-4xl">
            We built what we couldn't find. <br/>
            <span className="italic text-foreground/70">No compromises.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Founder Note */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <h2 className="font-serif text-3xl mb-8">A Note on Intent</h2>
            <div className="font-sans text-sm leading-loose text-foreground/70 space-y-6">
              <p>
                The wellness industry is flooded with mycelium grown on grain—mostly starch, devoid of active compounds, packaged in cheap plastic that degrades whatever potency remains.
              </p>
              <p>
                We grew tired of the dilution. We wanted the pure fruiting body. We wanted a clinical dose. We wanted a vessel that respected the molecule.
              </p>
              <p>
                Aureya is the result of an obsession with the absolute standard. We source only strictly cultivated Cordyceps Militaris to ensure hyper-consistent polysaccharide concentration. We encapsulate it in borosilicate glass to block UV degradation and plasticizer leaching.
              </p>
              <p>
                It is not for everyone. It is for those who demand their baseline be elevated, systematically and scientifically.
              </p>
              <div className="pt-8">
                <span className="font-serif text-2xl italic text-foreground block mb-2">The Aureya Team</span>
                <span className="font-sans text-xs tracking-widest uppercase text-accent">Founders</span>
              </div>
            </div>
          </motion.div>

          {/* Sourcing Visual */}
          <motion.div variants={itemVariants} className="lg:col-span-5 w-full aspect-[3/4] bg-foreground/5 rounded-2xl relative overflow-hidden group">
            <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1618330769399-56360c733f1f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:scale-105 transition-all duration-1000" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-sans text-[10px] tracking-widest uppercase text-white/70 mb-2">Cultivation</p>
              <p className="font-serif text-xl text-white">Sterile Environment. 100% Fruiting Body.</p>
            </div>
          </motion.div>

        </div>

        <motion.div variants={itemVariants} className="mt-40 border-t border-foreground/10 pt-24 text-center">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-foreground/40 mb-12">As Seen In (Coming Soon)</p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-30 grayscale">
            {/* Placeholders for press logos */}
            <span className="font-serif text-2xl font-bold italic tracking-tighter">VOGUE</span>
            <span className="font-sans text-xl font-bold tracking-widest">GQ</span>
            <span className="font-serif text-2xl tracking-widest uppercase">Forbes</span>
            <span className="font-sans text-xl font-medium tracking-tight">TechCrunch</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-40 bg-foreground text-background rounded-2xl p-16 md:p-24 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-8">Ready to elevate?</h2>
          <Link
            href="/shop"
            className="inline-block border border-background/30 hover:bg-background hover:text-foreground transition-colors duration-300 px-12 py-5 font-sans text-xs tracking-widest uppercase"
          >
            Explore The Ritual
          </Link>
        </motion.div>

      </div>
    </motion.main>
  );
}
