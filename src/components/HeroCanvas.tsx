'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
    const numParticles = 800;
    
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 2 - canvas.height, // Spread out initially
        size: Math.random() * 2 + 0.5,
        targetX: canvas.width / 2 + (Math.random() - 0.5) * 60,
        targetY: canvas.height / 2 + (Math.random() - 0.5) * 150,
        color: `rgba(216, 170, 83, ${Math.random() * 0.8 + 0.2})`, // Amber powder
        progress: 0,
      });
    }

    let jarAlpha = { value: 0 };
    let jarY = { value: canvas.height / 2 + 100 };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw jar base
      if (jarAlpha.value > 0.01) {
        ctx.save();
        ctx.globalAlpha = jarAlpha.value;
        ctx.fillStyle = '#111';
        // Jar Body
        ctx.beginPath();
        ctx.roundRect(canvas.width / 2 - 80, jarY.value, 160, 200, 20);
        ctx.fill();
        // Gold Cap
        ctx.fillStyle = '#d8aa53';
        ctx.beginPath();
        ctx.roundRect(canvas.width / 2 - 70, jarY.value - 40, 140, 40, 10);
        ctx.fill();
        
        ctx.restore();
      }

      // Draw particles
      particles.forEach(p => {
        const currentX = p.x + (p.targetX - p.x) * p.progress;
        // The Y target goes down as it drops into the jar
        const finalY = jarY.value + 40 + Math.random() * 120;
        const currentY = p.y + (finalY - p.y) * p.progress;

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
        end: "+=2000", // 2000px of scrolling for the animation
        scrub: 1,
        pin: true,
      }
    });

    // Phase 1: Particles coalesce into capsule shape
    tl.to(particles, {
      progress: 0.6,
      duration: 1,
      ease: "power2.inOut",
      onUpdate: render
    });

    // Phase 2: Jar appears, capsule drops in
    tl.to(jarAlpha, { value: 1, duration: 0.5 }, "-=0.2");
    tl.to(particles, {
      progress: 1,
      duration: 1,
      ease: "power4.in",
      onUpdate: render
    }, "-=0.3");

    // Phase 3: Final settle
    tl.to(jarY, { value: canvas.height / 2, duration: 0.5, ease: "back.out(1.2)", onUpdate: render });

    // Initial render
    render();

    return () => {
      window.removeEventListener('resize', resize);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[100dvh] bg-transparent z-0">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-32 pointer-events-none z-10 mix-blend-difference text-white">
        <h1 className="text-6xl md:text-8xl font-serif tracking-tight opacity-80">AUREYA</h1>
        <p className="mt-4 text-sm font-sans tracking-[0.3em] uppercase opacity-70">The Absolute Standard</p>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs font-sans tracking-widest uppercase opacity-50 flex flex-col items-center animate-pulse">
        <span>Scroll to Experience</span>
        <div className="w-[1px] h-12 bg-current mt-2" />
      </div>
    </div>
  );
}
