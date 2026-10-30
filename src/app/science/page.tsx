'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

export default function SciencePage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.main
      initial="hidden"
      animate="show"
      exit={{ opacity: 0 }}
      variants={containerVariants}
      className="min-h-[100dvh] bg-background text-foreground pt-28 sm:pt-32 pb-20 sm:pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
        <motion.p variants={itemVariants} className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4">
          The Science
        </motion.p>
        <motion.h1 variants={itemVariants} className="font-serif text-3xl sm:text-5xl md:text-7xl text-foreground max-w-3xl leading-tight">
          Engineered for <br/>
          <span className="italic text-foreground/70">Mitochondrial Optimization.</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-3 block">Mechanism of Action</span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">The Compound</h2>
            <p className="font-sans text-xs sm:text-sm leading-relaxed text-foreground/70 mb-4 sm:mb-6">
              Yora uses only cultivated Cordyceps militaris, grown in strictly controlled environments. Wild cordyceps can be unpredictable, but our strain guarantees an industry-first 10+ mg/g cordycepin potency. While standard market alternatives rarely verify active levels, Yora guarantees 10+ mg/g in every batch.
            </p>
            <p className="font-sans text-xs sm:text-sm leading-relaxed text-foreground/70 mb-4 sm:mb-6">
              The primary active molecule, Cordycepin (3'-deoxyadenosine), directly interacts with your cellular ATP cycle.
            </p>
            <div className="p-4 rounded-xl bg-foreground/5 border border-foreground/10 text-xs font-sans text-foreground/60 leading-relaxed">
              <span className="text-accent font-semibold block mb-1">Mitochondrial Up-regulation:</span>
              Increases cellular oxygen uptake and accelerates ATP regeneration, delivering sustained daily energy without caffeine crashes.
            </div>
          </div>
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-foreground/15 bg-black shadow-2xl relative group">
            <img 
              src="/Cellular%20Energetics_%20Before%20and%20After.png" 
              alt="Cellular Energetics: Before and After Mechanism of Action" 
              className="w-full h-auto object-contain rounded-2xl transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-20 sm:mt-32">
          <h2 className="font-serif text-2xl sm:text-3xl mb-8 sm:mb-12 border-b border-foreground/10 pb-4 sm:pb-6">Clinical Verification</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: 'ATP Production', desc: 'Increases intracellular ATP levels by up to 18%, directly improving physical stamina and endurance capabilities.' },
              { title: 'Oxygen Utilization', desc: 'Enhances VO2 max and cellular oxygen uptake, delaying the onset of lactic acid accumulation during exertion.' },
              { title: 'Immunomodulation', desc: 'Stimulates macrophage activity and upregulates natural killer (NK) cells without triggering autoimmune inflammation.' }
            ].map((study, i) => (
              <div key={i} className="border border-foreground/10 p-6 sm:p-8 hover:border-accent transition-colors duration-500 rounded-xl sm:rounded-none">
                <span className="font-sans text-xs tracking-widest uppercase text-accent mb-3 sm:mb-4 block">Study 0{i+1}</span>
                <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4">{study.title}</h3>
                <p className="font-sans text-xs sm:text-sm text-foreground/60 leading-relaxed">{study.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-20 sm:mt-32 flex flex-col lg:flex-row items-center lg:items-start justify-between bg-foreground text-background p-6 sm:p-12 md:p-24 rounded-2xl gap-10 lg:gap-16">
          <div className="flex-1 w-full">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4">Verification</p>
            <h2 className="font-serif text-3xl sm:text-4xl mb-8 sm:mb-12">Purity & Provenance</h2>
            
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="font-serif text-lg sm:text-xl text-accent mb-2">Maximum Bioavailability</h3>
                <p className="font-sans text-xs sm:text-sm leading-relaxed opacity-70">
                  Guaranteed 10+ mg/g cordycepin potency alongside active beta-glucans and polysaccharides, setting a market-first potency benchmark confirmed through third-party HPLC testing.
                </p>
              </div>
              
              <div>
                <h3 className="font-serif text-lg sm:text-xl text-accent mb-2">Potency Preservation</h3>
                <p className="font-sans text-xs sm:text-sm leading-relaxed opacity-70">
                  Freshness-locked in food-grade, BPA-free PET packaging to ensure the active compounds remain at absolute peak efficacy from the first capsule to the last.
                </p>
              </div>
              
              <div>
                <h3 className="font-serif text-lg sm:text-xl text-accent mb-2">Absolute Transparency</h3>
                <p className="font-sans text-xs sm:text-sm leading-relaxed opacity-70 mb-6">
                  Every batch is rigorously third-party tested for active compounds, purity levels, and heavy metals.
                </p>
                <a href="/latestcordyreport" target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto text-center font-sans text-xs tracking-widest uppercase border border-background/20 px-6 sm:px-8 py-3.5 sm:py-4 hover:bg-background hover:text-foreground transition-all duration-300">
                  View Latest Lab COA
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 border-4 border-background/10 rounded-full items-center justify-center relative shrink-0 mt-6 lg:mt-8">
            <div className="absolute inset-0 border border-accent rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="text-center px-4">
              <span className="font-serif text-2xl sm:text-3xl text-accent block">10+ mg/g</span>
              <span className="font-sans text-[9px] sm:text-[10px] tracking-widest uppercase opacity-50 mt-1.5 sm:mt-2 block">Guaranteed Potency</span>
            </div>
          </div>
        </motion.div>

        {/* Third-Party Analytical Breakdown Table */}
        <motion.div variants={itemVariants} className="mt-16 sm:mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 pb-4 border-b border-foreground/10 gap-3 sm:gap-4">
            <div>
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-2">HPLC Verified</p>
              <h3 className="font-serif text-xl sm:text-2xl">Official Certificate of Analysis (COA)</h3>
            </div>
            <p className="font-sans text-xs text-foreground/50">
              Tested by Opal Research & Analytical Services • ISO 9001 / 14001 / 45001 Certified
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              { parameter: 'Cordycepin Content', value: '10+ mg/g', protocol: 'HPLC Verified', highlight: true },
              { parameter: 'Beta-Glucans', value: '4.85%', protocol: 'HPLC', highlight: false },
              { parameter: 'Active Polysaccharides', value: '4.17%', protocol: 'ITS/LAB/SOP', highlight: false },
              { parameter: 'Adenosine Content', value: '2.84 mg/g', protocol: 'HPLC', highlight: false },
            ].map((item, idx) => (
              <div 
                key={idx}
                className={`p-4 sm:p-6 border transition-colors rounded-lg sm:rounded-none ${
                  item.highlight 
                    ? 'border-accent/40 bg-accent/5' 
                    : 'border-foreground/10 bg-foreground/[0.02]'
                }`}
              >
                <span className="font-sans text-[9px] sm:text-[10px] tracking-widest uppercase text-foreground/40 block mb-1.5 sm:mb-2">{item.protocol}</span>
                <span className="font-serif text-xl sm:text-2xl text-accent block mb-1">{item.value}</span>
                <span className="font-sans text-[11px] sm:text-xs text-foreground/70">{item.parameter}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      <motion.div variants={itemVariants} className="mt-20 sm:mt-32 max-w-3xl mx-auto text-center px-4 sm:px-6">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-foreground/40 mb-3 sm:mb-4">Zero Fillers</p>
        <h2 className="font-serif text-2xl sm:text-3xl mb-4 sm:mb-6">100% Fruiting Body Extract</h2>
        <p className="font-sans text-xs sm:text-sm leading-relaxed text-foreground/70 mb-8 sm:mb-10">
          A lot of cordyceps supplements on the market are just mycelium grown on grain, which means you&apos;re mostly paying for inactive starch and oats. Yora uses nothing but 100% pure fruiting bodies. This gives you the absolute maximum concentration of active beta-glucans and cordycepin, without any cheap fillers.
        </p>
        <Link
          href="/shop"
          className="inline-block w-full sm:w-auto bg-foreground text-background hover:bg-accent hover:text-white transition-all duration-300 px-8 sm:px-10 py-4 font-sans text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase shadow-xl text-center"
        >
          Acquire The Cellular Reset ↗
        </Link>
      </motion.div>
    </motion.main>
  );
}
