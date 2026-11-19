'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

interface PageBuilderLoaderProps {
  onComplete?: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.07,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 350,
      damping: 28,
    },
  },
};

export default function PageBuilderLoader({ onComplete }: PageBuilderLoaderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [phase, setPhase] = useState<'Layouting...' | 'Styling...' | 'Ready'>('Layouting...');
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    // Skip loader if user already saw it in this session or prefers reduced motion
    const alreadySeen = typeof window !== 'undefined' && sessionStorage.getItem('page_builder_assembled');
    const prefersReducedMotion =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (alreadySeen || prefersReducedMotion) {
      onComplete?.();
      return;
    }

    // Activate the loader
    setIsVisible(true);

    // Choreographed fast transitions (total lifecycle <= 1.3s)
    const t1 = setTimeout(() => setPhase('Styling...'), 380);
    const t2 = setTimeout(() => setPhase('Ready'), 760);
    const t3 = setTimeout(() => {
      // Trigger exit transition
      setIsVisible(false);
      try {
        sessionStorage.setItem('page_builder_assembled', 'true');
      } catch {
        // Safe fallback if sessionStorage is restricted
      }
    }, 1020);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  // Avoid SSR hydration flash
  if (!hasMounted) return null;

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          key="page-builder-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[200] bg-[#F1F5F9] flex flex-col items-center justify-center select-none overflow-hidden"
          role="status"
          aria-live="polite"
          aria-label="Merakit landing page..."
        >
          {/* Subtle Grid Backdrop (Editorial Slate) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(203,213,225,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(203,213,225,0.35)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,44,89,0.06)_0,transparent_70%)] pointer-events-none" />

          {/* Miniature Blueprint Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative w-[320px] sm:w-[420px] rounded-2xl bg-white border border-slate-300/80 p-4 shadow-[0_4px_6px_-1px_rgba(15,23,42,0.06),0_16px_28px_-4px_rgba(15,23,42,0.1)] overflow-hidden"
          >
            {/* Shimmer sweep effect with light blue highlight */}
            <motion.div
              initial={{ x: '-150%' }}
              animate={{ x: '250%' }}
              transition={{ duration: 0.45, delay: 0.72, ease: 'easeInOut' }}
              className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-[#BFDBFE]/70 to-transparent pointer-events-none z-30"
            />

            {/* Glowing border sweep on completion */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.45, delay: 0.74 }}
              className="absolute inset-0 rounded-2xl border border-[#1D4ED8]/40 pointer-events-none z-30"
            />

            {/* Blueprint Header (Mini Floating Capsule Navbar) */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-between px-2.5 py-1.5 mb-3.5 mx-auto w-full max-w-[280px] sm:max-w-[340px] rounded-full bg-slate-50 border border-slate-200/90 shadow-xs"
            >
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0F2C59]" />
                <div className="h-1.5 w-14 bg-slate-300 rounded" />
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-5 bg-slate-200 rounded" />
                <div className="h-1.5 w-5 bg-slate-200 rounded" />
                <div className="h-1.5 w-7 bg-[#0F2C59] rounded-full" />
              </div>
            </motion.div>

            {/* Blueprint Body: 2 Columns (Hero Text vs ID Pass Card) */}
            <div className="grid grid-cols-12 gap-3 items-center">
              {/* Left Column: Headline & CTA skeleton */}
              <div className="col-span-7 flex flex-col justify-center">
                {/* Mini category badge */}
                <motion.div
                  variants={itemVariants}
                  className="h-2 w-14 rounded-full bg-blue-100 mb-2.5"
                />

                {/* Headline skeleton lines */}
                <motion.div
                  variants={itemVariants}
                  className="h-2.5 w-full rounded bg-[#0F2C59]/80 mb-1.5"
                />
                <motion.div
                  variants={itemVariants}
                  className="h-2.5 w-4/5 rounded bg-[#0F2C59]/80 mb-1.5"
                />
                <motion.div
                  variants={itemVariants}
                  className="h-2.5 w-3/5 rounded bg-[#BFDBFE] border-l border-r border-[#1D4ED8] mb-2.5"
                />

                {/* Subtitle skeleton line */}
                <motion.div
                  variants={itemVariants}
                  className="h-1.5 w-5/6 rounded bg-slate-200 mb-3"
                />

                {/* CTA Button skeleton */}
                <motion.div
                  variants={itemVariants}
                  className="h-5 w-24 rounded-md bg-[#0F2C59] flex items-center justify-center shadow-sm"
                >
                  <div className="h-1 w-12 bg-white/60 rounded-full" />
                </motion.div>
              </div>

              {/* Right Column: Lanyard Hanging Card miniature */}
              <div className="col-span-5 flex flex-col items-center">
                {/* Lanyard Top Ring & Clip */}
                <motion.div
                  variants={itemVariants}
                  className="w-2.5 h-2.5 rounded-full border border-slate-300 bg-slate-100 mb-0.5"
                />
                <motion.div
                  variants={itemVariants}
                  className="w-1.5 h-1 bg-slate-300 rounded-sm mb-0.5"
                />

                {/* Miniature Acrylic ID Pass */}
                <motion.div
                  variants={itemVariants}
                  className="w-full rounded-xl bg-neutral-50 border border-neutral-200 p-2 flex flex-col gap-1.5 shadow-sm"
                >
                  {/* Top ribbon */}
                  <div className="flex items-center justify-between border-b border-neutral-200/60 pb-1">
                    <div className="h-1 w-10 bg-[#BFDBFE] rounded-full" />
                    <div className="h-1 w-5 bg-slate-300 rounded-full" />
                  </div>

                  {/* Profile info miniature */}
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-md bg-blue-100 border border-blue-200 shrink-0" />
                    <div className="flex flex-col gap-1 w-full">
                      <div className="h-1.5 w-3/4 bg-slate-700 rounded" />
                      <div className="h-1 w-1/2 bg-[#0F2C59] rounded" />
                    </div>
                  </div>

                  {/* Stat miniature grid */}
                  <div className="grid grid-cols-2 gap-1 pt-0.5">
                    <div className="bg-white rounded p-1 border border-neutral-200/80">
                      <div className="h-1.5 w-2/3 bg-[#0F2C59] rounded mb-0.5" />
                      <div className="h-1 w-full bg-slate-300 rounded" />
                    </div>
                    <div className="bg-white rounded p-1 border border-neutral-200/80">
                      <div className="h-1.5 w-2/3 bg-blue-500 rounded mb-0.5" />
                      <div className="h-1 w-full bg-slate-300 rounded" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Minimalist Monospace Status Indicator */}
          <div className="mt-4 flex items-center gap-2 font-mono text-[11px] sm:text-xs text-slate-600 tracking-wider">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                phase === 'Ready' ? 'bg-[#0F2C59]' : 'bg-[#1D4ED8] animate-pulse'
              }`}
            />
            <span>{phase}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
