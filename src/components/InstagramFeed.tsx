'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const posts = [
  {
    tag: '@yora.wellness',
    caption: '10+ mg/g guaranteed cordycepin. An industry-first benchmark measured down to the milligram.',
    type: 'Potency Study',
    bg: 'bg-gradient-to-br from-emerald-950/40 via-background to-black',
  },
  {
    tag: '@yora.wellness',
    caption: 'The morning ritual: 2 capsules, empty stomach, natural cellular ATP reset.',
    type: 'The Daily Protocol',
    bg: 'bg-gradient-to-br from-amber-950/30 via-background to-black',
  },
  {
    tag: '@yora.wellness',
    caption: 'Pure fruiting bodies only. Why mycelium-on-grain was rejected from day one.',
    type: 'The Standard',
    bg: 'bg-gradient-to-br from-emerald-950/30 via-background to-black',
  },
  {
    tag: '@yora.wellness',
    caption: 'Cellular energy is not nervous stimulation. Elevate the baseline, not the heart rate.',
    type: 'Philosophy',
    bg: 'bg-gradient-to-br from-neutral-900/40 via-background to-black',
  },
];

export default function InstagramFeed() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });
  const instagramUrl = 'https://www.instagram.com/yora.wellness?psln=cjFkc2kxZnl5NG1j&utm_source=qr';

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10px', '10px']);

  return (
    <section ref={ref} className="relative w-full py-16 sm:py-24 md:py-36 px-4 sm:px-6 lg:px-24 bg-background border-t border-foreground/5 overflow-hidden">
      {/* Subtle parallax ambient */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-accent/[0.02] to-transparent pointer-events-none"
      />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 md:mb-20 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4"
            >
              The Collective
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-3xl sm:text-5xl md:text-6xl text-foreground leading-tight"
              >
                Follow the Journey. <br />
                <span className="italic text-foreground/60">@yora.wellness</span>
              </motion.h2>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-foreground/15 bg-foreground/[0.03] hover:bg-foreground hover:text-background font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300 group"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              <span>Join on Instagram</span>
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </a>
          </motion.div>
        </div>

        {/* Post Grid — staggered fan-in from bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50, scale: 0.97 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.65, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`p-6 sm:p-8 rounded-3xl border border-foreground/10 ${post.bg} flex flex-col justify-between group hover:border-accent/40 hover:-translate-y-1 transition-all duration-500 min-h-[250px] sm:min-h-[300px] shadow-lg`}
            >
              <div className="flex items-center justify-between">
                <span className="font-sans text-[10px] tracking-widest uppercase text-accent font-mono">
                  {post.type}
                </span>
                <span className="text-foreground/30 group-hover:text-foreground/70 transition-colors">↗</span>
              </div>

              <div>
                <p className="font-serif text-lg text-foreground/90 leading-snug mb-6 group-hover:text-accent transition-colors duration-300">
                  &ldquo;{post.caption}&rdquo;
                </p>
                <span className="font-sans text-xs tracking-wider text-foreground/40 block">
                  {post.tag}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
