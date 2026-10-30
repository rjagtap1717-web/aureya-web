'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const comparison = [
  {
    metric: 'Energy Mechanism',
    caffeine: 'Blocks adenosine receptors, tricking your brain into ignoring fatigue without creating energy.',
    yora: 'Directly up-regulates mitochondrial ATP synthesis to generate authentic cellular fuel.',
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

const faqs = [
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
    a: 'Acute cognitive clarity is typically felt within 45 to 60 minutes of the morning dose. Deep cellular adaptations (such as improved VO2 max, balanced cortisol, and zero afternoon slumps) compound across 14 to 30 days of consistent use.',
  },
  {
    q: 'How should I take my daily serving?',
    a: 'Take 2 capsules daily in the morning on an empty stomach with water. This delivers the full clinical 1200mg dose of standardized Cordyceps militaris extract for sustained all-day mitochondrial energy output.',
  },
];

export default function RitualPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start end', 'end start'] });
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.08, 0.95]);

  return (
    <main className="min-h-[100dvh] bg-background text-foreground pt-28 sm:pt-32 pb-20 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">

        {/* Hero */}
        <div ref={heroRef} className="relative flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-24 md:mb-28">
          <motion.div
            style={{ scale: glowScale }}
            className="absolute inset-0 bg-accent/4 rounded-full blur-[160px] pointer-events-none"
          />
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-xs tracking-[0.35em] uppercase text-accent mb-4 font-medium"
          >
            The Caffeine-Free Standard
          </motion.p>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl sm:text-5xl md:text-7xl text-foreground leading-tight mb-6 sm:mb-8"
            >
              The Anti-Caffeine <br />
              <span className="italic text-foreground/70">Reset.</span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-xs sm:text-sm md:text-base leading-relaxed text-foreground/60 max-w-2xl"
          >
            Caffeine is a loan against tomorrow. It does not produce energy. It masks biological exhaustion while taxing your adrenals. Yora was engineered to replace synthetic stimulation with pure mitochondrial ATP.
          </motion.p>
        </div>

        {/* Comparison Matrix */}
        <FadeUp delay={0} className="mb-20 sm:mb-32">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-accent block mb-2">Biological Distinction</span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl">Stimulation vs. Cellular Energy</h2>
          </div>

          <div className="rounded-2xl sm:rounded-3xl border border-foreground/15 bg-foreground/[0.02] overflow-hidden shadow-2xl">
            <div className="hidden md:grid grid-cols-12 border-b border-foreground/10 bg-foreground/[0.03] p-6 text-xs font-sans tracking-widest uppercase">
              <div className="col-span-3 text-foreground/40 font-mono">Metric</div>
              <div className="col-span-4 text-foreground/40">The Caffeine Loop</div>
              <div className="col-span-5 text-accent font-medium">Yora Cordyceps Standard</div>
            </div>

            {comparison.map((row, i) => {
              const rowRef = useRef(null);
              const rowInView = useInView(rowRef, { once: true, margin: '-4%' });
              return (
                <motion.div
                  ref={rowRef}
                  key={row.metric}
                  initial={{ opacity: 0, x: -30 }}
                  animate={rowInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="p-5 sm:p-6 border-b border-foreground/5 md:grid md:grid-cols-12 gap-4 md:gap-0 items-start hover:bg-foreground/[0.02] transition-colors"
                >
                  <div className="md:col-span-3 font-serif text-lg text-foreground/90 mb-3 md:mb-0">
                    {row.metric}
                  </div>
                  <div className="md:col-span-4 font-sans text-xs sm:text-sm text-foreground/60 leading-relaxed pr-0 md:pr-4 mb-3 md:mb-0">
                    <span className="md:hidden font-mono text-[10px] tracking-widest uppercase text-foreground/40 block mb-1">
                      The Caffeine Loop:
                    </span>
                    {row.caffeine}
                  </div>
                  <div className="md:col-span-5 font-sans text-xs sm:text-sm text-foreground/95 leading-relaxed font-medium">
                    <span className="md:hidden font-mono text-[10px] tracking-widest uppercase text-accent block mb-1">
                      Yora Standard:
                    </span>
                    {row.yora}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </FadeUp>

        {/* Daily Protocol Cards */}
        <FadeUp delay={0} className="mb-20 sm:mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 border-b border-foreground/10 pb-6 gap-6">
            <div>
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-2">Daily Architecture</p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl">The Caffeine-Free Morning Protocol</h2>
            </div>
            <p className="font-sans text-xs text-foreground/50 max-w-sm">
              Strictly maintained timings to align natural cortisol rhythms with cellular ATP uptake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { time: '07:00 AM • Step 01', title: 'Awaken & Prime', desc: 'Consume 2 capsules on an empty stomach with 300ml of pure room-temperature water. Step into direct morning sunlight for 5 to 10 minutes to set your circadian master clock.', note: 'Biological Purpose: Optimal enteric absorption before gastrointestinal enzyme saturation.' },
              { time: '07:45 AM • Step 02', title: 'Cellular Uptake', desc: '45 minutes of hydration and calm baseline breathing. Instead of shocking your nervous system with coffee, allow active cordycepin to bind cleanly to receptors without stimulant competition.', note: 'Biological Purpose: Prevents artificial cortisol spikes and preserves adrenal reserves.' },
              { time: '08:30 AM • Step 03', title: 'Sustained Output', desc: 'Transition directly into deep cognitive focus or physical training. Experience a steady, calm baseline where focus is effortless and cardiovascular rate remains completely balanced.', note: 'Biological Purpose: High mitochondrial oxygen saturation without physical tremors or anxiety.' },
            ].map((step, i) => {
              const cardRef = useRef(null);
              const cardInView = useInView(cardRef, { once: true, margin: '-6%' });
              const xStart = i === 0 ? -35 : i === 2 ? 35 : 0;
              return (
                <motion.div
                  ref={cardRef}
                  key={i}
                  initial={{ opacity: 0, y: 40, x: xStart }}
                  animate={cardInView ? { opacity: 1, y: 0, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-foreground/10 bg-foreground/[0.02] relative group hover:border-accent/30 transition-all"
                >
                  <span className="font-mono text-xs tracking-widest text-accent uppercase block mb-4 font-semibold">{step.time}</span>
                  <h3 className="font-serif text-xl sm:text-2xl mb-3 sm:mb-4 text-foreground">{step.title}</h3>
                  <p className="font-sans text-xs sm:text-sm text-foreground/70 leading-relaxed mb-6">{step.desc}</p>
                  <div className="pt-4 border-t border-foreground/5 text-[11px] font-sans text-foreground/45">{step.note}</div>
                </motion.div>
              );
            })}
          </div>
        </FadeUp>

        {/* 30-Day Curve */}
        <FadeUp delay={0} className="mb-20 sm:mb-32 max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-accent block mb-2">The Transition Curve</span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl">Replacing Stimulants with Biological Fuel</h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {[
              { title: 'Week 1: The Adenosine Clearance', period: 'Day 01 to 07', desc: 'As you step away from caffeine, your adenosine receptors begin resetting to natural sensitivity. Yora provides the cellular ATP backbone to prevent debilitating brain fog and ease the transition.' },
              { title: 'Week 2: Mitochondrial Upregulation', period: 'Day 08 to 14', desc: 'Cordycepin accumulates at therapeutic baselines. You will notice the afternoon 3 PM slump vanishes entirely. Energy feels level, clear, and quiet, like an engine running on optimal octane.' },
              { title: 'Week 3 to 4: Permanent Baseline Elevation', period: 'Day 15 to 30', desc: 'Your sleep latency drops, deep sleep stages lengthen, and waking up no longer requires a chemical crutch. Your natural cellular output is restored to peak human baseline.' },
            ].map((week, i) => {
              const weekRef = useRef(null);
              const weekInView = useInView(weekRef, { once: true, margin: '-6%' });
              return (
                <motion.div
                  ref={weekRef}
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  animate={weekInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="p-5 sm:p-8 rounded-2xl border border-foreground/10 bg-foreground/[0.02]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 sm:mb-3 gap-1">
                    <span className="font-serif text-lg sm:text-xl text-foreground">{week.title}</span>
                    <span className="font-mono text-xs text-accent">{week.period}</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-foreground/60 leading-relaxed">{week.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </FadeUp>

        {/* FAQs */}
        <FadeUp delay={0} className="mt-20 sm:mt-32 max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl mb-8 sm:mb-12 text-center">Protocol Inquiries</h2>
          <div className="space-y-6 sm:space-y-8">
            {faqs.map((faq, i) => {
              const faqRef = useRef(null);
              const faqInView = useInView(faqRef, { once: true, margin: '-4%' });
              return (
                <motion.div
                  ref={faqRef}
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  animate={faqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-foreground/10 pb-5 sm:pb-6"
                >
                  <h4 className="font-serif text-lg sm:text-xl mb-2 sm:mb-3">{faq.q}</h4>
                  <p className="font-sans text-xs sm:text-sm text-foreground/60 leading-relaxed">{faq.a}</p>
                </motion.div>
              );
            })}
          </div>
        </FadeUp>

        {/* Closing CTA */}
        <FadeUp delay={0} className="mt-20 sm:mt-32 text-center border-t border-foreground/10 pt-16 sm:pt-20">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-3 sm:mb-4">The Clean Baseline</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8">Begin the 30-Day Reset.</h2>
          <Link
            href="/shop"
            className="inline-block w-full sm:w-auto bg-foreground text-background hover:bg-accent hover:text-white transition-all duration-300 px-8 sm:px-12 py-4 sm:py-5 font-sans text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase shadow-2xl text-center"
          >
            Acquire The Cellular Reset • ₹1,499 ↗
          </Link>
        </FadeUp>

      </div>
    </main>
  );
}
