'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/science', label: 'The Science' },
  { href: '/ritual', label: 'The Ritual' },
  { href: '/about', label: 'About' },
  { href: '/reviews', label: 'Reviews' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-foreground/5 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="font-serif text-xl tracking-[0.3em] uppercase text-foreground hover:text-accent transition-colors duration-300">
            AUREYA
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-xs tracking-[0.18em] uppercase transition-colors duration-300 relative group ${
                  pathname === link.href ? 'text-foreground' : 'text-foreground/50 hover:text-foreground'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-accent transition-all duration-300 ${
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Shop CTA */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/shop"
              className="font-sans text-xs tracking-[0.2em] uppercase px-6 py-2.5 bg-foreground text-background hover:bg-accent hover:text-white transition-all duration-300"
            >
              Shop ↗
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-foreground/70 hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-serif text-4xl tracking-tight transition-colors ${
                    pathname === link.href ? 'text-accent' : 'text-foreground/70 hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.06, duration: 0.4 }}
            >
              <Link
                href="/shop"
                onClick={() => setMenuOpen(false)}
                className="font-sans text-sm tracking-[0.2em] uppercase px-8 py-4 bg-foreground text-background mt-4 inline-block hover:bg-accent hover:text-white transition-all duration-300"
              >
                Shop ↗
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
