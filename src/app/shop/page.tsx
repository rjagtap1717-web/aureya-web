'use client';

import { motion } from 'framer-motion';
import Checkout from '@/components/Checkout';

export default function ShopPage() {
  return (
    <motion.main
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-[100dvh] bg-background text-foreground pt-28 sm:pt-32 pb-20 sm:pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-foreground/40 mb-3 sm:mb-4">Acquire</p>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl text-foreground mb-10 sm:mb-16">The Standard.</h1>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Visual Asset Side */}
          <div className="flex-1 w-full flex items-center justify-center bg-foreground/5 rounded-2xl aspect-[4/5] sm:aspect-square md:aspect-auto md:h-[600px] relative overflow-hidden border border-foreground/10 shadow-2xl">
            <motion.img
              src="/cordybotmkup.jpeg"
              alt="Yora Cordyceps Militaris Capsules (60 Capsules)"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Checkout Side */}
          <div className="flex-1 w-full max-w-lg">
            <p className="font-sans text-xs sm:text-sm leading-relaxed text-foreground/70 mb-8 sm:mb-10">
              Pure Cordyceps militaris extract, built for steady energy and focus throughout the day. Every capsule is hermetically sealed to keep the active compounds perfectly stable.
            </p>

            {/* Single Product Card */}
            <div className="p-5 sm:p-8 border border-accent/40 bg-accent/5 rounded-2xl mb-8 sm:mb-10 relative spotlight-card">
              <div className="flex items-start justify-between mb-4 gap-2">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold block mb-1">
                    Single Flagship Edition
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-foreground">The Cellular Reset</h2>
                  <p className="font-sans text-xs tracking-wider text-foreground/60 mt-1">
                    60 Capsules • 30-Day Protocol (2 Daily)
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-sans text-xl sm:text-2xl font-semibold text-foreground">₹1,499</span>
                  <span className="block font-sans text-[10px] sm:text-[11px] text-foreground/40 mt-0.5">Free Delivery</span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-foreground/10 flex items-center justify-between text-xs font-sans">
                <span className="text-foreground/70">Potency Guarantee</span>
                <span className="text-accent font-medium">10+ mg/g Cordycepin</span>
              </div>
            </div>

            <div className="mb-8 font-sans text-xs tracking-wide text-foreground/50 flex flex-col gap-2">
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" /> Free shipping across India.</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" /> Dispatch within 24 hours.</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" /> Third-party lab verified HPLC potency.</span>
            </div>

            <Checkout />

            <div className="mt-8 pt-8 border-t border-foreground/10 flex flex-wrap items-center gap-4 sm:gap-6 opacity-60 grayscale">
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
