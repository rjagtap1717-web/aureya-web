'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SporeParticle {
  // Dispersed starting coordinates
  initX: number;
  initY: number;

  // Polar coordinates for final coalesced aura around rosette
  targetRadiusRatio: number; // Multiple of emblem radius
  targetAngle: number;       // Base angle [0, 2π)

  // Motion physics
  spiralCurl: number;        // Vortex deflection magnitude & direction
  curlPhase: number;
  floatSpeed: number;        // Ambient float frequency
  floatAmp: number;          // Ambient float amplitude in px
  orbitSpeed: number;        // Gentle continuous rotation when gathered
  pulseSpeed: number;        // Twinkle frequency
  phase: number;             // Random unique phase

  // Visuals
  size: number;
  baseAlpha: number;
  color: string;
  glowColor: string;
  hasGlow: boolean;
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const emblemRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let dpr = 1;

    // Palette: rich Cordyceps golden spore tones
    const sporeColors = [
      { fill: 'rgba(247, 206, 107,', glow: 'rgba(247, 206, 107, 0.45)' }, // Radiant gold
      { fill: 'rgba(224, 168, 72,', glow: 'rgba(224, 168, 72, 0.35)' },  // Warm amber
      { fill: 'rgba(255, 230, 150,', glow: 'rgba(255, 230, 150, 0.5)' },  // Sunlit champagne
      { fill: 'rgba(202, 138, 48,', glow: 'rgba(202, 138, 48, 0.25)' },  // Deep saffron
    ];

    // Helper to calculate exact center and radius of the rosette emblem
    const getEmblemMetrics = () => {
      if (emblemRef.current && canvas) {
        const emblemRect = emblemRef.current.getBoundingClientRect();
        const canvasRect = canvas.getBoundingClientRect();
        return {
          cx: emblemRect.left + emblemRect.width / 2 - canvasRect.left,
          cy: emblemRect.top + emblemRect.height / 2 - canvasRect.top,
          radius: Math.max(emblemRect.width / 2, 40),
        };
      }
      return {
        cx: window.innerWidth / 2,
        cy: window.innerHeight / 2 - 60,
        radius: 70,
      };
    };

    let metrics = getEmblemMetrics();

    // High-DPI Canvas Resizing
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
      ctx.scale(dpr, dpr);

      metrics = getEmblemMetrics();
    };

    resize();
    window.addEventListener('resize', resize);

    // Particle Generation: Organic radial spore cloud (750 particles)
    const numParticles = 750;
    const particles: SporeParticle[] = [];

    for (let i = 0; i < numParticles; i++) {
      // 1. Initial Dispersed Coordinates: scattered across full viewport with natural depth
      const initX = (Math.random() - 0.5) * window.innerWidth * 1.3 + window.innerWidth / 2;
      const initY = (Math.random() - 0.5) * window.innerHeight * 1.5 + window.innerHeight / 2;

      // 2. Target Polar Distribution around Rosette:
      // Zone distribution:
      // - 30% Core: within inner and mid petals (r: 0.15R - 0.85R)
      // - 50% Corona: luminous ring hugging the outer emblem rim (r: 0.85R - 1.5R)
      // - 20% Ethereal Veil: soft outer dispersion with quadratic fade (r: 1.5R - 2.8R)
      const randZone = Math.random();
      let targetRadiusRatio: number;

      if (randZone < 0.30) {
        // Inner petals / core
        targetRadiusRatio = 0.15 + Math.sqrt(Math.random()) * 0.70;
      } else if (randZone < 0.80) {
        // Primary luminous corona
        targetRadiusRatio = 0.85 + Math.random() * 0.65;
      } else {
        // Outer halo feathering out softly
        targetRadiusRatio = 1.50 + Math.pow(Math.random(), 1.7) * 1.30;
      }

      const targetAngle = Math.random() * Math.PI * 2;

      // Color selection
      const colorScheme = sporeColors[Math.floor(Math.random() * sporeColors.length)];
      const size = Math.random() < 0.18 ? Math.random() * 1.4 + 2.0 : Math.random() * 1.4 + 0.7; // Mix of tiny dust and glowing spores
      const hasGlow = size > 2.0 || Math.random() < 0.15;

      particles.push({
        initX,
        initY,
        targetRadiusRatio,
        targetAngle,
        spiralCurl: (Math.random() * 90 + 50) * (Math.random() > 0.3 ? 1 : -1), // Curved vortex path
        curlPhase: Math.random() * Math.PI,
        floatSpeed: Math.random() * 0.8 + 0.6,
        floatAmp: Math.random() * 4 + 2,
        orbitSpeed: (Math.random() * 0.0004 + 0.00015) * (Math.random() > 0.5 ? 1 : -1),
        pulseSpeed: Math.random() * 1.5 + 0.8,
        phase: Math.random() * Math.PI * 2,
        size,
        baseAlpha: Math.random() * 0.55 + 0.35,
        color: colorScheme.fill,
        glowColor: colorScheme.glow,
        hasGlow,
      });
    }

    // Interactive mouse tracking for subtle organic breeze
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let smoothMouseX = mouseX;
    let smoothMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Scroll progress tracker handled smoothly by GSAP ScrollTrigger
    const scrollState = { progress: 0 };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=1600",
        scrub: 1.2,
        pin: true,
        onUpdate: () => {
          // Re-measure emblem metrics dynamically during pin & scroll
          metrics = getEmblemMetrics();
        }
      }
    });

    tl.to(scrollState, {
      progress: 1,
      duration: 2,
      ease: "power2.inOut",
    });

    // Subtle scale & elevation of logo text
    if (logoRef.current) {
      tl.to(logoRef.current, {
        scale: 1.06,
        y: -12,
        duration: 2,
        ease: "power1.out",
      }, 0);
    }

    // Rosette wheel rotation linked directly to scroll
    if (emblemRef.current) {
      tl.to(emblemRef.current, {
        rotation: 360, // Smooth wheel spin as you scroll
        duration: 2,
        ease: "none",
      }, 0);
    }

    // Continuous 60fps render loop for living ambient motion
    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      const p = scrollState.progress;
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Mouse smoothing
      smoothMouseX += (mouseX - smoothMouseX) * 0.04;
      smoothMouseY += (mouseY - smoothMouseY) * 0.04;
      const mouseOffsetX = (smoothMouseX - w / 2) * 0.025;
      const mouseOffsetY = (smoothMouseY - h / 2) * 0.025;

      ctx.clearRect(0, 0, w, h);

      // Gold dots disappear smoothly just before scroll ends (between p: 0.65 and 0.90)
      // leaving the logo completely clear and pristine
      const fadeFactor = p < 0.65 ? 1 : Math.max(0, 1 - (p - 0.65) / 0.25);

      // Render Soft Radial Warm Aura behind center (dissolves alongside particles)
      if (p > 0.05 && fadeFactor > 0.01) {
        const auraAlpha = Math.min(p * 0.16, 0.16) * fadeFactor;
        const auraGrad = ctx.createRadialGradient(
          metrics.cx, metrics.cy, 0,
          metrics.cx, metrics.cy, metrics.radius * 2.2
        );
        auraGrad.addColorStop(0, `rgba(235, 175, 75, ${auraAlpha})`);
        auraGrad.addColorStop(0.5, `rgba(202, 138, 48, ${auraAlpha * 0.4})`);
        auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = auraGrad;
        ctx.beginPath();
        ctx.arc(metrics.cx, metrics.cy, metrics.radius * 2.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // If particles have dissolved completely, skip drawing them
      if (fadeFactor <= 0.005) {
        animId = requestAnimationFrame(render);
        return;
      }

      // Render each spore particle
      const tSec = time * 0.001;

      for (let i = 0; i < particles.length; i++) {
        const pt = particles[i];

        // 1. Target coordinate calculation (Polar around rosette center)
        const currentAngle = pt.targetAngle + tSec * pt.orbitSpeed;
        const currentTargetRadius = pt.targetRadiusRatio * metrics.radius;
        const targetX = metrics.cx + Math.cos(currentAngle) * currentTargetRadius;
        const targetY = metrics.cy + Math.sin(currentAngle) * currentTargetRadius;

        // 2. Vortex Curved Path Interpolation:
        const linearX = pt.initX + (targetX - pt.initX) * p;
        const linearY = pt.initY + (targetY - pt.initY) * p;

        // Spiral curl deflection (orthogonal tangent curl that vanishes at p = 0 and p = 1)
        const curlBell = Math.sin(p * Math.PI); // 0 at edges, 1 at middle
        const dx = targetX - pt.initX;
        const dy = targetY - pt.initY;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const normX = -dy / dist;
        const normY = dx / dist;

        const vortexOffset = curlBell * pt.spiralCurl;
        const currentX = linearX + normX * vortexOffset;
        const currentY = linearY + normY * vortexOffset;

        // 3. Living Ambient Float & Shimmer
        const ambientFloatX = Math.sin(tSec * pt.floatSpeed + pt.phase) * pt.floatAmp;
        const ambientFloatY = Math.cos(tSec * pt.floatSpeed * 0.85 + pt.phase) * pt.floatAmp;

        // Mouse breeze influence decreases as particles lock into the emblem core
        const breezeFactor = 1 - p * 0.65;
        const finalX = currentX + ambientFloatX + mouseOffsetX * breezeFactor;
        const finalY = currentY + ambientFloatY + mouseOffsetY * breezeFactor;

        // Opacity with gentle twinkle pulse multiplied by the exit fadeFactor
        const twinkle = 0.8 + 0.2 * Math.sin(tSec * pt.pulseSpeed + pt.phase);
        const currentAlpha = Math.min(Math.max(pt.baseAlpha * twinkle * fadeFactor, 0.0), 0.95);

        if (currentAlpha <= 0.01) continue;

        // 4. Draw particle
        ctx.fillStyle = `${pt.color} ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(finalX, finalY, pt.size, 0, Math.PI * 2);
        ctx.fill();

        // Optional luminous glow halo on larger bioluminescent particles
        if (pt.hasGlow && currentAlpha > 0.4) {
          ctx.fillStyle = pt.glowColor;
          ctx.beginPath();
          ctx.arc(finalX, finalY, pt.size * 2.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
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
        className="relative z-10 flex flex-col items-center px-6 text-center select-none max-w-2xl"
      >
        {/* Soft ambient backlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 md:w-[450px] h-72 sm:h-96 md:h-[450px] bg-accent/8 rounded-full blur-[90px] pointer-events-none" />

        {/* Product Eyebrow */}
        <span className="font-sans text-[10px] sm:text-xs tracking-[0.35em] uppercase text-accent/90 mb-4 inline-block font-medium">
          100% Pure Fruiting Body • Cordyceps Militaris
        </span>

        {/* Botanical Rosette Emblem */}
        <img 
          ref={emblemRef}
          src="/yora-emblem.png" 
          alt="yora emblem" 
          className="w-24 sm:w-32 md:w-36 lg:w-44 h-auto object-contain will-change-transform drop-shadow-[0_4px_24px_rgba(45,106,79,0.35)]" 
        />

        {/* Wordmark */}
        <h1 className="font-brand text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight lowercase text-foreground mt-3 md:mt-4 leading-none">
          yora
        </h1>

        {/* Tagline - Generous spacing below 'y' descender */}
        <p className="mt-6 md:mt-7 font-sans text-xs sm:text-sm tracking-[0.4em] uppercase text-foreground/50">
          Do What Is Right
        </p>

        {/* One-line product hook */}
        <p className="mt-4 font-sans text-xs sm:text-sm tracking-wide text-foreground/70 max-w-md">
          Natural Cellular Energy. Zero Caffeine. Zero Crashes.
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

