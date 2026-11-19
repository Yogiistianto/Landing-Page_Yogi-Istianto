'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

const sections = [
  { id: 'tentang', label: 'Tentang' },
  { id: 'course', label: 'Katalog' },
  { id: 'penawaran', label: 'Bundle' },
  { id: 'testimoni', label: 'Testimoni' },
  { id: 'faq', label: 'FAQ' },
];

export default function ScrollProgressSidebar() {
  const [percent, setPercent] = useState(0);
  const [isOverDark, setIsOverDark] = useState(false);
  const [activeSection, setActiveSection] = useState('tentang');

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(smoothProgress, 'change', (latest) => {
    setPercent(Math.min(100, Math.max(0, Math.round(latest * 100))));
  });

  useEffect(() => {
    const handleScroll = () => {
      // 1. Check if the vertical center of viewport is over a dark section
      const darkSections = document.querySelectorAll('[data-dark-section="true"]');
      const checkY = window.innerHeight / 2;
      let overDark = false;
      darkSections.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= checkY && rect.bottom >= checkY) {
          overDark = true;
        }
      });
      setIsOverDark(overDark);

      // 2. Active section detection based on viewport center
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= checkY + 60 && rect.bottom >= checkY - 60) {
            setActiveSection(sec.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const formattedPercent = String(percent).padStart(2, '0') + '%';

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Scroll Progress and Section Navigation"
      className="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 pointer-events-auto select-none"
    >
      {/* Top Monospace Percentage Indicator */}
      <span
        className={`font-mono text-[10px] tracking-widest tabular-nums transition-colors duration-300 font-semibold ${
          isOverDark ? 'text-white/80' : 'text-slate-600'
        }`}
      >
        {formattedPercent}
      </span>

      {/* Vertical Rail Track & Spring Fill Line */}
      <div
        className={`w-[2px] h-36 rounded-full relative overflow-hidden transition-colors duration-300 ${
          isOverDark ? 'bg-white/20' : 'bg-slate-300/70'
        }`}
      >
        <motion.div
          style={{ scaleY: smoothProgress }}
          className={`absolute inset-x-0 top-0 h-full origin-top rounded-full transition-colors duration-300 ${
            isOverDark ? 'bg-white' : 'bg-[#0F2C59]'
          }`}
        />
      </div>

      {/* Interactive Section Dots */}
      <nav className="flex flex-col items-center gap-2 pt-1" aria-label="Section Quick Jump">
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              aria-label={`Scroll to ${sec.label}`}
              className="group relative flex items-center justify-center p-1 focus:outline-none"
            >
              {/* Tooltip on Hover */}
              <span
                className={`absolute right-7 px-2 py-0.5 rounded font-mono text-[9px] uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-150 -translate-x-1 group-hover:translate-x-0 shadow-md ${
                  isOverDark
                    ? 'bg-slate-900/90 text-white border border-white/20'
                    : 'bg-white text-slate-900 border border-slate-200'
                }`}
              >
                {sec.label}
              </span>

              {/* Dot Indicator */}
              <span
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? isOverDark
                      ? 'bg-white ring-2 ring-white/40 scale-125'
                      : 'bg-[#0F2C59] ring-2 ring-[#0F2C59]/30 scale-125'
                    : isOverDark
                    ? 'bg-white/40 group-hover:bg-white'
                    : 'bg-slate-400/80 group-hover:bg-slate-800'
                }`}
              />
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
