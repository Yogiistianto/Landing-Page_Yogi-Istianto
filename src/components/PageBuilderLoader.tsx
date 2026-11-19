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
            className="relative w-[320px] sm:w-[420px] rounded-xl bg-white border border-slate-300/90 p-4 shadow-[0_4px_6px_-1px_rgba(15,23,42,0.06),0_16px_28px_-4px_rgba(15,23,42,0.1)] overflow-hidden"
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

              {/* Right Column: Blueprint Portrait Frame miniature */}
              <div className="col-span-5 flex flex-col items-center relative">
                {/* Miniature Architectural Frame */}
                <motion.div
                  variants={itemVariants}
                  className="w-full rounded-lg bg-neutral-50 border border-slate-300 p-1.5 flex flex-col gap-1 shadow-sm relative"
                >
                  {/* Top metadata line */}
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-0.5">
                    <div className="h-1 w-8 bg-slate-400 rounded-full" />
                    <div className="h-1 w-4 bg-slate-300 rounded-full" />
                  </div>

                  {/* Portrait picture skeleton */}
                  <div className="aspect-[4/5] w-full rounded bg-blue-100/60 border border-blue-200/60 flex items-center justify-center relative overflow-hidden">
                    <div className="w-6 h-6 rounded-full bg-[#0F2C59]/20" />
                  </div>

                  {/* Miniature Floating Annotation Badges */}
                  <div className="absolute -top-1.5 -left-1.5 h-2.5 w-10 bg-white rounded border border-slate-300 shadow-xs flex items-center px-1">
                    <div className="w-1 h-1 rounded-full bg-emerald-500" />
                  </div>
                  <div className="absolute -bottom-1.5 -right-1.5 h-3 w-8 bg-white rounded border border-slate-300 shadow-xs flex items-center justify-center">
                    <div className="h-1 w-5 bg-[#0F2C59] rounded" />
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
