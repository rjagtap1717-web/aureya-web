'use client';

import { motion } from 'framer-motion';
import Checkout from '@/components/Checkout';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

export default function ShopPage() {
  const [variant, setVariant] = useState<'variant-a' | 'variant-b'>('variant-a');

  const pricing = {
    'variant-a': { price: '₹2,500', label: 'The Discovery Ritual', size: '20 Capsules' },
    'variant-b': { price: '₹6,500', label: 'The Cellular Reset', size: '60 Capsules' },
  };

  return (
    <motion.main
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-[100dvh] bg-background text-foreground pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-foreground/40 mb-4">Acquire</p>
        <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-16">The Standard.</h1>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Visual Asset Side */}
          <div className="flex-1 w-full flex items-center justify-center bg-foreground/5 rounded-2xl aspect-square md:aspect-auto md:h-[600px] relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={variant}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  scale: variant === 'variant-a' ? 0.8 : 1.1,
                  y: 0 
                }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-48 h-64 bg-[#111] rounded-2xl relative shadow-2xl flex flex-col items-center justify-end pb-8 z-10"
              >
                <div className="absolute top-0 w-44 h-12 bg-accent rounded-t-2xl shadow-inner border-b-2 border-[#111]" />
                <div className="w-32 h-24 border border-white/20 flex flex-col items-center justify-center p-2 text-center text-white/70">
                  <span className="font-serif text-sm tracking-widest">AUREYA</span>
                  <div className="w-4 h-[1px] bg-white/20 my-2" />
                  <span className="text-[10px] uppercase font-sans tracking-widest">{pricing[variant].size}</span>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent pointer-events-none" />
          </div>

          {/* Checkout Side */}
          <div className="flex-1 w-full max-w-lg">
            <p className="font-sans text-sm leading-relaxed text-foreground/60 mb-12">
              Pure Cordyceps Militaris extract. Engineered for peak cellular respiration and sustained energy. Formulated in custom glass to preserve absolute potency.
            </p>

            <div className="space-y-4 mb-12">
              <button
                onClick={() => setVariant('variant-a')}
                className={`w-full flex items-center justify-between p-6 border transition-all duration-500 ease-out ${
                  variant === 'variant-a' 
                    ? 'border-accent bg-accent/5' 
                    : 'border-foreground/10 hover:border-foreground/30'
                }`}
              >
                <div className="flex flex-col items-start">
                  <span className="font-serif text-xl">{pricing['variant-a'].label}</span>
                  <span className="font-sans text-xs tracking-widest text-foreground/50 mt-1">{pricing['variant-a'].size}</span>
                </div>
                <span className="font-sans text-sm tracking-wide">{pricing['variant-a'].price}</span>
              </button>

              <button
                onClick={() => setVariant('variant-b')}
                className={`w-full flex items-center justify-between p-6 border transition-all duration-500 ease-out ${
                  variant === 'variant-b' 
                    ? 'border-accent bg-accent/5' 
                    : 'border-foreground/10 hover:border-foreground/30'
                }`}
              >
                <div className="flex flex-col items-start">
                  <span className="font-serif text-xl">{pricing['variant-b'].label}</span>
                  <span className="font-sans text-xs tracking-widest text-foreground/50 mt-1">{pricing['variant-b'].size}</span>
                </div>
                <span className="font-sans text-sm tracking-wide">{pricing['variant-b'].price}</span>
              </button>
            </div>

            <div className="mb-8 font-sans text-xs tracking-wide text-foreground/40 flex flex-col gap-2">
              <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent" /> Free shipping across India.</span>
              <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent" /> Dispatch within 24 hours.</span>
            </div>

            <Checkout variant={variant} />

            <div className="mt-8 pt-8 border-t border-foreground/10 flex items-center gap-6 opacity-60 grayscale">
              <span className="font-sans text-[10px] tracking-widest uppercase">Lab Tested</span>
              <span className="font-sans text-[10px] tracking-widest uppercase">India Made</span>
              <span className="font-sans text-[10px] tracking-widest uppercase">Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
