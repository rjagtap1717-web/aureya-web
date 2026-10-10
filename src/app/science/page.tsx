'use client';

import { motion, Variants } from 'framer-motion';

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
      className="min-h-[100dvh] bg-background text-foreground pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <motion.p variants={itemVariants} className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4">
          The Science
        </motion.p>
        <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-7xl text-foreground max-w-3xl leading-tight">
          Engineered for <br/>
          <span className="italic text-foreground/70">Mitochondrial Optimization.</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-3xl mb-6">The Compound</h2>
            <p className="font-sans text-sm leading-relaxed text-foreground/70 mb-6">
              Yora uses only cultivated Cordyceps militaris, grown in strictly controlled environments. Wild cordyceps can be incredibly inconsistent, but our strain guarantees 98.3% polysaccharide purity every single time.
            </p>
            <p className="font-sans text-sm leading-relaxed text-foreground/70">
              The primary active molecule, Cordycepin (3'-deoxyadenosine), directly interacts with your cellular ATP cycle.
            </p>
          </div>
          <div className="bg-foreground/5 rounded-2xl aspect-square md:aspect-auto md:h-full p-8 flex items-center justify-center relative overflow-hidden">
            {/* Placeholder for Mechanism Diagram */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1530213786676-415b699c2d15?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay grayscale" />
            <div className="text-center z-10">
              <span className="font-serif text-lg text-foreground/50 tracking-widest block mb-4">MECHANISM OF ACTION</span>
              <div className="h-[1px] w-12 bg-accent/50 mx-auto" />
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-32">
          <h2 className="font-serif text-3xl mb-12 border-b border-foreground/10 pb-6">Clinical Verification</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'ATP Production', desc: 'Increases intracellular ATP levels by up to 18%, directly improving physical stamina and endurance capabilities.' },
              { title: 'Oxygen Utilization', desc: 'Enhances VO2 max and cellular oxygen uptake, delaying the onset of lactic acid accumulation during exertion.' },
              { title: 'Immunomodulation', desc: 'Stimulates macrophage activity and upregulates natural killer (NK) cells without triggering autoimmune inflammation.' }
            ].map((study, i) => (
              <div key={i} className="border border-foreground/10 p-8 hover:border-accent transition-colors duration-500">
                <span className="font-sans text-xs tracking-widest uppercase text-accent mb-4 block">Study 0{i+1}</span>
                <h3 className="font-serif text-xl mb-4">{study.title}</h3>
                <p className="font-sans text-sm text-foreground/60 leading-relaxed">{study.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-32 flex flex-col lg:flex-row items-start justify-between bg-foreground text-background p-12 md:p-24 rounded-2xl gap-16">
          <div className="flex-1">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4">Verification</p>
            <h2 className="font-serif text-4xl mb-12">Purity & Provenance</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl text-accent mb-2">Maximum Bioavailability</h3>
                <p className="font-sans text-sm leading-relaxed opacity-70">
                  98.3% active polysaccharide purity—delivering higher potency per dose than standard commercial extracts.
                </p>
              </div>
              
              <div>
                <h3 className="font-serif text-xl text-accent mb-2">Potency Preservation</h3>
                <p className="font-sans text-sm leading-relaxed opacity-70">
                  Freshness-locked in premium UV-protective packaging to ensure the active compounds remain at absolute peak efficacy from the first capsule to the last.
                </p>
              </div>
              
              <div>
                <h3 className="font-serif text-xl text-accent mb-2">Absolute Transparency</h3>
                <p className="font-sans text-sm leading-relaxed opacity-70 mb-6">
                  Every batch is rigorously third-party tested for heavy metals, microbial contaminants, and precise active compound verification.
                </p>
                <a href="/latestcordyreport" target="_blank" rel="noopener noreferrer" className="inline-block font-sans text-xs tracking-widest uppercase border border-background/20 px-8 py-4 hover:bg-background hover:text-foreground transition-all duration-300">
                  Download Latest COA (PDF)
                </a>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex w-64 h-64 border-4 border-background/10 rounded-full items-center justify-center relative shrink-0 mt-8">
            <div className="absolute inset-0 border border-accent rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="text-center">
              <span className="font-serif text-4xl text-accent block">98.3%</span>
              <span className="font-sans text-[10px] tracking-widest uppercase opacity-50 mt-2 block">Purity Threshold</span>
            </div>
          </div>
        </motion.div>

      </div>

      <motion.div variants={itemVariants} className="mt-32 max-w-3xl mx-auto text-center">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-foreground/40 mb-4">Zero Fillers</p>
        <h2 className="font-serif text-3xl mb-6">100% Fruiting Body Extract</h2>
        <p className="font-sans text-sm leading-relaxed text-foreground/70">
          A lot of cordyceps supplements on the market are just mycelium grown on grain, which means you're mostly paying for inactive starch and oats. Yora uses nothing but 100% pure fruiting bodies. This gives you the absolute maximum concentration of active beta-glucans and cordycepin, without any cheap fillers.
        </p>
      </motion.div>
    </motion.main>
  );
}
