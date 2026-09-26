'use client';

import { motion } from 'framer-motion';

export default function SciencePage() {
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
              Aureya utilizes exclusively Cordyceps Militaris, cultivated in sterile, light-controlled environments. Unlike wild Ophiocordyceps Sinensis which varies wildly in active compound concentration, our Militaris strain guarantees a 98.3% polysaccharide purity.
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

        <motion.div variants={itemVariants} className="mt-32 flex flex-col md:flex-row items-center justify-between bg-foreground text-background p-12 md:p-24 rounded-2xl">
          <div className="max-w-md">
            <h2 className="font-serif text-3xl mb-6">Certificate of Analysis</h2>
            <p className="font-sans text-sm leading-relaxed opacity-70 mb-8">
              We operate with absolute transparency. Every batch is rigorously tested for heavy metals, microbial contaminants, and precise active compound verification.
            </p>
            <button className="font-sans text-xs tracking-widest uppercase border border-background/20 px-8 py-4 hover:bg-background hover:text-foreground transition-all duration-300">
              Download Latest COA (PDF)
            </button>
          </div>
          <div className="mt-12 md:mt-0 w-48 h-48 border-4 border-background/10 rounded-full flex items-center justify-center relative">
            <div className="absolute inset-0 border border-accent rounded-full animate-[spin_10s_linear_infinite]" />
            <span className="font-serif text-2xl text-accent">98.3%</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-32 max-w-3xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-foreground/40 mb-4">Packaging Integrity</p>
          <h2 className="font-serif text-3xl mb-6">Why Glass Matters</h2>
          <p className="font-sans text-sm leading-relaxed text-foreground/70">
            Active biological compounds degrade when exposed to plasticizers and UV light. We use strictly heavy, dark-tinted borosilicate glass. Zero plastic leaching. Complete molecular preservation.
          </p>
        </motion.div>

      </div>
    </motion.main>
  );
}
