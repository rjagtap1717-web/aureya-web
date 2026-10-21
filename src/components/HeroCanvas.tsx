'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

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
        targetX: canvas.width / 2 + (Math.random() - 0.5) * 140,
        targetY: canvas.height / 2 - 30 + (Math.random() - 0.5) * 140,
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

    // Particles coalesce toward the logo center
    tl.to(particles, {
      progress: 1,
      duration: 1.5,
      ease: "power2.inOut",
      onUpdate: render
    });

    // Logo gentle floating zoom
    if (logoRef.current) {
      tl.to(logoRef.current, {
        scale: 1.08,
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

      {/* Centerpiece Brand Logo - Seamlessly Blended */}
      <div 
        ref={logoRef} 
        className="relative z-10 flex flex-col items-center pointer-events-none px-6 text-center select-none"
      >
        {/* Soft ambient backlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 md:w-[450px] h-72 sm:h-96 md:h-[450px] bg-accent/8 rounded-full blur-[90px] pointer-events-none" />

        {/* Botanical Rosette Emblem */}
        <img 
          src="/yora-emblem.png" 
          alt="yora emblem" 
          className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto object-contain transition-transform duration-700 drop-shadow-[0_4px_24px_rgba(45,106,79,0.35)]" 
        />

        {/* Wordmark */}
        <h1 className="font-brand text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight lowercase text-foreground mt-4 md:mt-6">
          yora
        </h1>

        {/* Tagline */}
        <p className="mt-4 font-sans text-xs md:text-sm tracking-[0.35em] uppercase text-foreground/50">
          Do What Is Right
        </p>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-sans tracking-widest uppercase opacity-40 flex flex-col items-center animate-pulse pointer-events-none z-20">
        <span>Scroll to Experience</span>
        <div className="w-[1px] h-8 bg-current mt-2" />
      </div>
    </div>
  );
}
