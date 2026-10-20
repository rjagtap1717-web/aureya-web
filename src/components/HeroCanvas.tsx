'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const bottleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Particle system
    const particles: any[] = [];
    const numParticles = 700;
    
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 2 - canvas.height,
        size: Math.random() * 2 + 0.5,
        targetX: canvas.width / 2 + (Math.random() - 0.5) * 160,
        targetY: canvas.height / 2 + (Math.random() - 0.5) * 220,
        color: `rgba(216, 170, 83, ${Math.random() * 0.7 + 0.3})`, // Amber powder
        progress: 0,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach(p => {
        const currentX = p.x + (p.targetX - p.x) * p.progress;
        const currentY = p.y + (p.targetY - p.y) * p.progress;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(currentX, currentY, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    // Animation timeline linked to scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=1600",
        scrub: 1,
        pin: true,
      }
    });

    // Particles coalesce toward the bottle
    tl.to(particles, {
      progress: 1,
      duration: 1.5,
      ease: "power2.inOut",
      onUpdate: render
    });

    // Bottle gentle floating zoom
    if (bottleRef.current) {
      tl.to(bottleRef.current, {
        scale: 1.06,
        y: -10,
        duration: 1.5,
        ease: "power1.out",
      }, 0);
    }

    // Initial render
    render();

    return () => {
      window.removeEventListener('resize', resize);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[100dvh] bg-transparent z-0 overflow-hidden flex flex-col items-center justify-center">
      {/* Ambient Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Top Logo */}
      <div className="absolute top-10 md:top-14 flex flex-col items-center pointer-events-none z-20 mix-blend-difference text-white">
        <img src="/yora-logo.png" alt="YORA" className="h-12 md:h-16 lg:h-20 object-contain opacity-90" />
      </div>

      {/* Hero Centerpiece Bottle */}
      <div 
        ref={bottleRef} 
        className="relative z-10 flex flex-col items-center pointer-events-none mt-12 md:mt-16"
      >
        <div className="relative w-44 sm:w-52 md:w-60 lg:w-68 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-foreground/10 ring-1 ring-accent/30 bg-foreground/5 backdrop-blur-sm">
          <img 
            src="/cordybotmkup.jpeg" 
            alt="YORA Cordyceps Capsules" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
        </div>
        
        {/* Specs pill badge */}
        <div className="mt-4 flex items-center gap-3 px-4 py-1.5 rounded-full bg-foreground/5 backdrop-blur-md border border-foreground/10 text-[10px] md:text-xs font-sans tracking-widest uppercase text-foreground/70">
          <span>600mg</span>
          <span className="w-1 h-1 rounded-full bg-accent" />
          <span>Veg. Capsules</span>
          <span className="w-1 h-1 rounded-full bg-accent" />
          <span>12.75 mg/g Cordycepin</span>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-sans tracking-widest uppercase opacity-40 flex flex-col items-center animate-pulse pointer-events-none z-20">
        <span>Scroll to Experience</span>
        <div className="w-[1px] h-8 bg-current mt-2" />
      </div>
    </div>
  );
}
