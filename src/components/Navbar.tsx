'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import YoraWordmark from './YoraWordmark';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/science', label: 'The Science' },
  { href: '/about', label: 'About' },
  { href: '/shop', label: 'Shop' },
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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-16 md:h-20">
          {/* Logo Lockup */}
          <Link href="/" className="flex items-center gap-2.5 group py-2">
            <img src="/yora-emblem.png" alt="yora logo" className="w-7 h-7 md:w-8 md:h-8 object-contain transition-transform duration-300 group-hover:rotate-12" />
            <YoraWordmark className="h-6 md:h-7 w-auto text-foreground group-hover:text-accent transition-colors duration-300" />
            <span className="sr-only">yora</span>
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

          {/* Mobile hamburger (Touch Target >= 44x44px) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-11 h-11 -mr-2 flex items-center justify-center text-foreground/80 hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-background/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between w-full h-16 border-b border-foreground/10 pb-4">
              <Link 
                href="/" 
                onClick={() => setMenuOpen(false)} 
                className="flex items-center gap-2.5"
              >
                <img src="/yora-emblem.png" alt="yora logo" className="w-7 h-7 object-contain" />
                <YoraWordmark className="h-6 w-auto text-foreground" />
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-11 h-11 flex items-center justify-center -mr-2 text-foreground/80 hover:text-foreground"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col items-center justify-center gap-6 my-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.35 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`font-serif text-3xl sm:text-4xl tracking-tight transition-colors py-2 px-4 block text-center ${
                      pathname === link.href ? 'text-accent' : 'text-foreground/80 hover:text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.35 }}
              className="flex flex-col items-center gap-4 w-full pt-6 border-t border-foreground/10"
            >
              <Link
                href="/shop"
                onClick={() => setMenuOpen(false)}
                className="w-full max-w-xs font-sans text-xs tracking-[0.2em] uppercase py-4 bg-foreground text-background text-center hover:bg-accent hover:text-white transition-all duration-300"
              >
                Shop The Cellular Reset ↗
              </Link>
              <a
                href="https://www.instagram.com/yora.wellness?psln=cjFkc2kxZnl5NG1j&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="font-sans text-xs tracking-[0.2em] uppercase text-foreground/50 hover:text-accent transition-colors duration-300 flex items-center gap-1.5 py-2"
              >
                <span>@yora.wellness</span>
                <span>↗</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
