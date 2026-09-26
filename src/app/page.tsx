import HeroCanvas from '@/components/HeroCanvas';
import ThePromise from '@/components/ThePromise';
import BenefitPillars from '@/components/BenefitPillars';
import CredibilityStrip from '@/components/CredibilityStrip';
import ClosingCTA from '@/components/ClosingCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AUREYA | The Absolute Standard in Cordyceps',
  description:
    'Aureya Cordyceps Militaris — 98.3% polysaccharide purity, third-party verified, encapsulated in borosilicate glass. The cellular reset begins here.',
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
        <span>© {new Date().getFullYear()} AUREYA. All rights reserved.</span>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-foreground transition-colors duration-300">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors duration-300">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors duration-300">Contact</a>
        </div>
      </footer>
    </main>
  );
}
