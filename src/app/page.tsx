import HeroCanvas from '@/components/HeroCanvas';
import ProductReveal from '@/components/ProductReveal';
import ThePromise from '@/components/ThePromise';
import BenefitPillars from '@/components/BenefitPillars';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ScienceTeaser from '@/components/ScienceTeaser';
import TheRitualSection from '@/components/TheRitualSection';
import LabSourcingPlaceholder from '@/components/LabSourcingPlaceholder';
import InstagramFeed from '@/components/InstagramFeed';
import ClosingCTA from '@/components/ClosingCTA';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'yora | Do What Is Right — Pure Cordyceps Militaris',
  description:
    'yora Cordyceps militaris. Lab-verified 12.75 mg/g cordycepin potency, 100% pure fruiting body, third-party tested and sealed for ultimate freshness. Natural cellular energy with zero crashes.',
};

export default function HomePage() {
  const instagramUrl = 'https://www.instagram.com/yora.wellness?vrfl=cjFkc2kxZnl5NG1j&utm_source=qr';

  return (
    <main className="min-h-[100dvh] bg-background text-foreground">
      {/* Section 1: Hero Canvas + Golden Spore Animation + Product Context */}
      <HeroCanvas />

      {/* Section 2: Product Reveal (Bottle on Left, Key Specs on Right) */}
      <ProductReveal />

      {/* Section 3: The Promise */}
      <ThePromise />

      {/* Section 4: Six Benefit Pillars */}
      <BenefitPillars />

      {/* Section 5: The 30-Day Experience Timeline */}
      <ExperienceTimeline />

      {/* Section 6: The Science Teaser (Mechanism of Action) */}
      <ScienceTeaser />

      {/* Section 7: The Ritual Steps (1 Capsule Protocol) */}
      <TheRitualSection />

      {/* Section 8: Laboratory & Cultivation Archives (Frosted Glass Placeholders) */}
      <LabSourcingPlaceholder />

      {/* Section 9: Instagram Community Feed (@yora.wellness) */}
      <InstagramFeed />

      {/* Section 10: Closing CTA */}
      <ClosingCTA />

      {/* Section 11: Luxury Minimalist Footer */}
      <footer className="w-full py-16 px-6 lg:px-24 border-t border-foreground/10 font-sans text-xs tracking-widest uppercase text-foreground/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span className="inline-flex items-center gap-2 font-brand font-bold lowercase tracking-normal text-foreground text-lg">
              <img src="/yora-emblem.png" alt="yora emblem" className="w-5 h-5 object-contain" />
              yora
            </span>
            <span className="text-foreground/30 hidden sm:inline">•</span>
            <span>Do What Is Right</span>
            <span className="text-foreground/30 hidden sm:inline">•</span>
            <span>© {new Date().getFullYear()} All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-[11px]">
            <Link href="/science" className="hover:text-foreground transition-colors duration-300">The Science</Link>
            <Link href="/about" className="hover:text-foreground transition-colors duration-300">About</Link>
            <Link href="/shop" className="hover:text-foreground transition-colors duration-300">Shop</Link>
            <a 
              href={instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-accent hover:text-foreground transition-colors duration-300 flex items-center gap-1.5"
            >
              <span>Instagram</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
