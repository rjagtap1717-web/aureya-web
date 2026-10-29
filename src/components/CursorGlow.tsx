'use client';

import { useEffect, useRef, useState } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only activate for devices with fine pointer controls (mouse / trackpad)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;
    
    setEnabled(true);

    let animId: number;
    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;
    let isVisible = false;

    const LERP_FACTOR = 0.09; // Silky fluid momentum

    const handlePointerMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!isVisible && glowRef.current) {
        isVisible = true;
        glowRef.current.style.opacity = '1';
        // Initialize position on first move
        if (currentX === -1000) {
          currentX = targetX;
          currentY = targetY;
        }
      }

      // Delegate spotlight coordinates to any nearby/hovered spotlight card
      const card = (e.target as HTMLElement)?.closest?.('.spotlight-card') as HTMLElement | null;
      if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--spotlight-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--spotlight-y', `${e.clientY - rect.top}px`);
      }
    };

    const handlePointerLeave = () => {
      isVisible = false;
      if (glowRef.current) {
        glowRef.current.style.opacity = '0';
      }
    };

    const render = () => {
      if (glowRef.current && isVisible) {
        currentX += (targetX - currentX) * LERP_FACTOR;
        currentY += (targetY - currentY) * LERP_FACTOR;
        glowRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      animId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);
    window.addEventListener('blur', handlePointerLeave);

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
      window.removeEventListener('blur', handlePointerLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-20 overflow-hidden"
    >
      <div
        ref={glowRef}
        style={{ opacity: 0 }}
        className="absolute top-0 left-0 w-[600px] h-[600px] -mt-[300px] -ml-[300px] rounded-full pointer-events-none transition-opacity duration-500 ease-out will-change-transform bg-[radial-gradient(circle_at_center,rgba(180,133,48,0.075)_0%,rgba(223,188,119,0.025)_40%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(216,170,83,0.12)_0%,rgba(202,138,48,0.035)_40%,transparent_70%)] after:content-[''] after:absolute after:inset-[220px] after:rounded-full after:bg-[radial-gradient(circle_at_center,rgba(180,133,48,0.04)_0%,transparent_70%)] dark:after:bg-[radial-gradient(circle_at_center,rgba(247,206,107,0.08)_0%,transparent_70%)] after:blur-md"
      />
    </div>
  );
}
