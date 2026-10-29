'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

export default function RitualPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const comparison = [
    {
      metric: 'Energy Mechanism',
      caffeine: 'Blocks adenosine receptors — tricks your brain into ignoring fatigue without creating energy.',
      yora: 'Directly up-regulates mitochondrial ATP synthesis — generates authentic cellular fuel.',
    },
    {
      metric: 'Hormonal Stress',
      caffeine: 'Spikes systemic cortisol and adrenaline, triggering a fight-or-flight cardiovascular state.',
      yora: 'Adaptogenic compounds modulate the HPA-axis, stabilizing baseline stress response.',
    },
    {
      metric: 'Blood Flow & Oxygen',
      caffeine: 'Constricts cerebral blood vessels by up to 27%, causing rebound headaches.',
      yora: 'Enhances microvascular blood flow and increases cellular oxygen uptake (VO2 max).',
    },
    {
      metric: 'The 3:00 PM Afternoon',
      caffeine: 'Hard crash when adenosine backlog floods receptors, demanding another cup.',
      yora: 'Smooth, continuous plateau. No afternoon slump, no jitters, no tremors.',
    },
    {
      metric: 'Sleep Architecture',
      caffeine: '6-hour half-life dismantles restorative slow-wave sleep and deep REM cycles.',
      yora: 'Zero stimulant residue. Supports natural melatonin onset and deep cellular recovery.',
    },
  ];

  return (
    <motion.main
      initial="hidden"
      animate="show"
      exit={{ opacity: 0 }}
      variants={containerVariants}
      className="min-h-[100dvh] bg-background text-foreground pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        
        {/* Editorial Header */}
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center max-w-3xl mx-auto mb-28">
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-accent mb-4 font-medium">
            The Caffeine-Free Standard
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground leading-tight mb-8">
            The Anti-Caffeine <br />
            <span className="italic text-foreground/70">Reset.</span>
          </h1>
          <p className="font-sans text-sm md:text-base leading-relaxed text-foreground/60 max-w-2xl">
            Caffeine is a loan against tomorrow. It does not produce energy—it masks biological exhaustion while taxing your adrenals. Yora was engineered to replace synthetic stimulation with pure mitochondrial ATP.
          </p>
        </motion.div>

        {/* The Comparison Matrix: Caffeine vs Yora */}
        <motion.div variants={itemVariants} className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-accent block mb-2">Biological Distinction</span>
            <h2 className="font-serif text-3xl md:text-4xl">Stimulation vs. Cellular Energy</h2>
          </div>

          <div className="rounded-3xl border border-foreground/15 bg-foreground/[0.02] overflow-hidden shadow-2xl">
            {/* Header Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 border-b border-foreground/10 bg-foreground/[0.03] p-6 text-xs font-sans tracking-widest uppercase">
              <div className="md:col-span-3 text-foreground/40 font-mono">Metric</div>
              <div className="md:col-span-4 text-foreground/40 mt-2 md:mt-0">The Caffeine Loop</div>
              <div className="md:col-span-5 text-accent mt-2 md:mt-0 font-medium">Yora Cordyceps Standard</div>
            </div>

            {/* Comparison Rows */}
            {comparison.map((row, i) => (
              <div
                key={row.metric}
                className="grid grid-cols-1 md:grid-cols-12 p-6 border-b border-foreground/5 gap-4 md:gap-0 items-start hover:bg-foreground/[0.02] transition-colors"
              >
                <div className="md:col-span-3 font-serif text-lg text-foreground/90">{row.metric}</div>
                <div className="md:col-span-4 font-sans text-xs sm:text-sm text-foreground/50 leading-relaxed pr-4">
                  {row.caffeine}
                </div>
                <div className="md:col-span-5 font-sans text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
                  {row.yora}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* The Daily Protocol - Harmonized Timings */}
        <motion.div variants={itemVariants} className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-foreground/10 pb-6 gap-6">
            <div>
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-2">Daily Architecture</p>
              <h2 className="font-serif text-3xl md:text-4xl">The Caffeine-Free Morning Protocol</h2>
            </div>
            <p className="font-sans text-xs text-foreground/50 max-w-sm">
              Strictly maintained timings to align natural cortisol rhythms with cellular ATP uptake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 md:p-10 rounded-3xl border border-foreground/10 bg-foreground/[0.02] relative group hover:border-accent/30 transition-all">
              <span className="font-mono text-xs tracking-widest text-accent uppercase block mb-4 font-semibold">
                07:00 AM • Step 01
              </span>
              <h3 className="font-serif text-2xl mb-4 text-foreground">Awaken & Prime</h3>
              <p className="font-sans text-xs sm:text-sm text-foreground/70 leading-relaxed mb-6">
                Consume 2 capsules on an empty stomach with 300ml of pure room-temperature water. Step into direct morning sunlight for 5–10 minutes to set your circadian master clock.
              </p>
              <div className="pt-4 border-t border-foreground/5 text-[11px] font-sans text-foreground/45">
                Biological Purpose: Optimal enteric absorption before gastrointestinal enzyme saturation.
              </div>
            </div>

            <div className="p-8 md:p-10 rounded-3xl border border-foreground/10 bg-foreground/[0.02] relative group hover:border-accent/30 transition-all">
              <span className="font-mono text-xs tracking-widest text-accent uppercase block mb-4 font-semibold">
                07:45 AM • Step 02
              </span>
              <h3 className="font-serif text-2xl mb-4 text-foreground">Cellular Uptake</h3>
              <p className="font-sans text-xs sm:text-sm text-foreground/70 leading-relaxed mb-6">
                45 minutes of hydration and calm baseline breathing. Instead of shocking your nervous system with coffee, allow active cordycepin to bind cleanly to receptors without stimulant competition.
              </p>
              <div className="pt-4 border-t border-foreground/5 text-[11px] font-sans text-foreground/45">
                Biological Purpose: Prevents artificial cortisol spikes and preserves adrenal reserves.
              </div>
            </div>

            <div className="p-8 md:p-10 rounded-3xl border border-foreground/10 bg-foreground/[0.02] relative group hover:border-accent/30 transition-all">
              <span className="font-mono text-xs tracking-widest text-accent uppercase block mb-4 font-semibold">
                08:30 AM • Step 03
              </span>
              <h3 className="font-serif text-2xl mb-4 text-foreground">Sustained Output</h3>
              <p className="font-sans text-xs sm:text-sm text-foreground/70 leading-relaxed mb-6">
                Transition directly into deep cognitive focus or physical training. Experience a steady, calm baseline where focus is effortless and cardiovascular rate remains completely balanced.
              </p>
              <div className="pt-4 border-t border-foreground/5 text-[11px] font-sans text-foreground/45">
                Biological Purpose: High mitochondrial oxygen saturation without physical tremors or anxiety.
              </div>
            </div>
          </div>
        </motion.div>

        {/* The 30-Day Transition Curve */}
        <motion.div variants={itemVariants} className="mb-32 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-accent block mb-2">The Transition Curve</span>
            <h2 className="font-serif text-3xl md:text-4xl">Replacing Stimulants with Biological Fuel</h2>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
              <div className="flex items-center justify-between mb-3">
                <span className="font-serif text-xl text-foreground">Week 1: The Adenosine Clearance</span>
                <span className="font-mono text-xs text-accent">Day 01 — 07</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-foreground/60 leading-relaxed">
                As you step away from caffeine, your adenosine receptors begin resetting to natural sensitivity. Yora provides the cellular ATP backbone to prevent debilitating brain fog and ease the transition.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
              <div className="flex items-center justify-between mb-3">
                <span className="font-serif text-xl text-foreground">Week 2: Mitochondrial Upregulation</span>
                <span className="font-mono text-xs text-accent">Day 08 — 14</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-foreground/60 leading-relaxed">
                Cordycepin accumulates at therapeutic baselines. You will notice the afternoon 3 PM slump vanishes entirely. Energy feels level, clear, and quiet—like an engine running on optimal octane.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
              <div className="flex items-center justify-between mb-3">
                <span className="font-serif text-xl text-foreground">Week 3–4: Permanent Baseline Elevation</span>
                <span className="font-mono text-xs text-accent">Day 15 — 30</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-foreground/60 leading-relaxed">
                Your sleep latency drops, deep sleep stages lengthen, and waking up no longer requires a chemical crutch. Your natural cellular output is restored to peak human baseline.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Frequently Asked Inquiries - Anti-Caffeine Focused */}
        <motion.div variants={itemVariants} className="mt-32 max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl mb-12 text-center">Protocol Inquiries</h2>
          <div className="space-y-8">
            {[
              {
                q: 'Why does Yora advocate against daily caffeine?',
                a: 'Caffeine does not generate ATP. It temporarily blocks adenosine receptors, giving a synthetic perception of alertness while elevating cortisol and exhausting adrenal pathways. Yora works at the mitochondrial level to synthesize authentic cellular energy.',
              },
              {
                q: 'Can I use Yora to quit coffee entirely?',
                a: 'Yes. Many high-performers use Yora as their primary morning protocol to transition away from caffeine dependence. By providing sustained cellular energy without receptor blockade, Yora smooths the withdrawal curve.',
              },
              {
                q: 'When should I expect the transition shift?',
                a: 'Acute cognitive clarity is typically felt within 45 to 60 minutes of the morning dose. Deep cellular adaptations—such as improved VO2 max, balanced cortisol, and zero afternoon slumps—compound across 14 to 30 days of consistent use.',
              },
              {
                q: 'How should I take my daily serving?',
                a: 'Take 2 capsules daily in the morning on an empty stomach with water. This delivers the full clinical 1200mg dose of standardized Cordyceps militaris extract for sustained all-day mitochondrial energy output.',
              },
            ].map((faq, i) => (
              <div key={i} className="border-b border-foreground/10 pb-6">
                <h4 className="font-serif text-xl mb-3">{faq.q}</h4>
                <p className="font-sans text-xs sm:text-sm text-foreground/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Closing Shop CTA Bridge */}
        <motion.div variants={itemVariants} className="mt-32 text-center border-t border-foreground/10 pt-20">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4">The Clean Baseline</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-8">Begin the 30-Day Reset.</h2>
          <Link
            href="/shop"
            className="inline-block bg-foreground text-background hover:bg-accent hover:text-white transition-all duration-300 px-12 py-5 font-sans text-xs tracking-[0.25em] uppercase shadow-2xl"
          >
            Acquire The Discovery Ritual — ₹999 ↗
          </Link>
        </motion.div>

      </div>
    </motion.main>
  );
}
