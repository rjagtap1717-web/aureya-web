'use client';

import { motion, Variants } from 'framer-motion';

export default function RitualPage() {
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
        
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center max-w-3xl mx-auto mb-32">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4">The Ritual</p>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground leading-tight mb-8">
            The Act of <span className="italic text-foreground/70">Intention.</span>
          </h1>
          <p className="font-sans text-sm leading-relaxed text-foreground/60 max-w-xl">
            The unscrewing of the heavy gold cap. The subtle sound of glass. Taking Aureya is not a habit; it is a daily commitment to your own standard.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div className="aspect-[4/5] bg-foreground/5 rounded-2xl relative overflow-hidden group">
            <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
          </div>
          <div className="pl-0 md:pl-12">
            <h2 className="font-serif text-3xl mb-12">The Morning Protocol</h2>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-[5px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-foreground/10 before:to-transparent">
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-3 h-3 rounded-full border border-accent bg-background text-foreground/50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow" />
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] p-4">
                  <span className="font-sans text-xs tracking-widest text-accent mb-2 block">07:00 AM</span>
                  <h4 className="font-serif text-lg mb-2">Awaken</h4>
                  <p className="font-sans text-sm text-foreground/60">Consume on an empty stomach with 300ml of room temperature water.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-3 h-3 rounded-full border border-accent bg-background text-foreground/50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow" />
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] p-4 md:text-right">
                  <span className="font-sans text-xs tracking-widest text-accent mb-2 block">07:45 AM</span>
                  <h4 className="font-serif text-lg mb-2">The Onset</h4>
                  <p className="font-sans text-sm text-foreground/60">Wait 45 minutes before consuming coffee or heavy fats to maximize absorption.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-3 h-3 rounded-full border border-accent bg-background text-foreground/50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow" />
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] p-4">
                  <span className="font-sans text-xs tracking-widest text-accent mb-2 block">08:00 AM</span>
                  <h4 className="font-serif text-lg mb-2">Output</h4>
                  <p className="font-sans text-sm text-foreground/60">Proceed to deep work or physical training. Expect sustained, jitter-free energy.</p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="max-w-4xl mx-auto border-t border-foreground/10 pt-24">
          <h2 className="font-serif text-3xl mb-12 text-center">Dosage Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10 rounded-xl overflow-hidden">
            <div className="bg-background p-12 text-center">
              <span className="font-serif text-4xl block mb-2">1 Capsule</span>
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-accent mb-6 block">The Discovery Ritual</span>
              <p className="font-sans text-sm text-foreground/60">Ideal for maintenance, gentle cognitive enhancement, and baseline immune support.</p>
            </div>
            <div className="bg-background p-12 text-center">
              <span className="font-serif text-4xl block mb-2">2 Capsules</span>
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-accent mb-6 block">The Cellular Reset</span>
              <p className="font-sans text-sm text-foreground/60">Recommended for athletes, periods of high stress, or intensive focus requirements.</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-32 max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Can I take it with coffee?', a: 'Yes, but for optimal absorption, we recommend taking Aureya 45 minutes prior to your first coffee. Cordyceps naturally modulates cortisol, which coffee spikes.' },
              { q: 'Is it vegetarian?', a: 'Absolutely. We use 100% vegan capsules and our Cordyceps Militaris is cultivated on organic grain substrates, never insects.' },
              { q: 'When will I feel it?', a: 'Acute cognitive clarity is often felt within 60 minutes. Deep cellular shifts—like increased VO2 max and lower stress—compound over 14 to 30 days of consistent use.' }
            ].map((faq, i) => (
              <div key={i} className="border-b border-foreground/10 pb-6">
                <h4 className="font-serif text-xl mb-4">{faq.q}</h4>
                <p className="font-sans text-sm text-foreground/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.main>
  );
}
