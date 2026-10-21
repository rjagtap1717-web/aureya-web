import HeroCanvas from '@/components/HeroCanvas';
import ThePromise from '@/components/ThePromise';
import BenefitPillars from '@/components/BenefitPillars';
import CredibilityStrip from '@/components/CredibilityStrip';
import ClosingCTA from '@/components/ClosingCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'yora | Do What Is Right',
  description:
    'yora Cordyceps militaris. Lab-verified 12.75 mg/g cordycepin potency, 100% pure fruiting body, third-party tested and sealed for ultimate freshness. Your cellular reset begins here.',
};

export default function HomePage() {
  return (
    <main className="min-h-[100dvh] bg-background text-foreground">
      {/* Section 1: Hero + Scroll Animation */}
      <HeroCanvas />

      {/* Section 2: The Promise */}
      <ThePromise />

      {/* Section 3: Six Benefit Pillars */}
      <BenefitPillars />

      {/* Section 4: Credibility Fact Strip */}
      <CredibilityStrip />

      {/* Section 5: Option A — Singular Closing CTA */}
      <ClosingCTA />

      {/* Footer */}
      <footer className="w-full py-12 px-6 lg:px-24 flex flex-col md:flex-row items-center justify-between border-t border-foreground/5 font-sans text-xs tracking-widest uppercase text-foreground/30">
        <span className="flex items-center gap-2">
          © {new Date().getFullYear()}
          <span className="inline-flex items-center gap-1.5 font-brand font-bold lowercase tracking-normal text-foreground/60 text-sm">
            <img src="/yora-emblem.png" alt="yora" className="w-4 h-4 object-contain inline-block" />
            yora
          </span>. All rights reserved.
        </span>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-foreground transition-colors duration-300">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors duration-300">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors duration-300">Contact</a>
        </div>
      </footer>
    </main>
  );
}
