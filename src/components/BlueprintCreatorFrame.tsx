'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

interface BlueprintCreatorFrameProps {
  isLoaded?: boolean;
}

export default function BlueprintCreatorFrame({ isLoaded = true }: BlueprintCreatorFrameProps) {
  return (
    <div className="relative w-full max-w-[360px] sm:max-w-[380px] mx-auto select-none">
      {/* 4 Corner Crosshairs (Blueprint Technical Marks) */}
      <span className="absolute -top-3.5 -left-3.5 font-mono text-sm text-slate-400 font-bold pointer-events-none select-none z-10">
        +
      </span>
      <span className="absolute -top-3.5 -right-3.5 font-mono text-sm text-slate-400 font-bold pointer-events-none select-none z-10">
        +
      </span>
      <span className="absolute -bottom-3.5 -left-3.5 font-mono text-sm text-slate-400 font-bold pointer-events-none select-none z-10">
        +
      </span>
      <span className="absolute -bottom-3.5 -right-3.5 font-mono text-sm text-slate-400 font-bold pointer-events-none select-none z-10">
        +
      </span>

      {/* Main Architectural Editorial Portrait Frame */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-xl border border-slate-300 bg-white p-2 sm:p-2.5 shadow-[0_20px_40px_-15px_rgba(15,23,42,0.12)] group"
      >
        {/* Top Technical Metadata Header */}
        <div className="flex items-center justify-between px-2 pt-1 pb-2 border-b border-slate-200/80 mb-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
            FIG. 01 // CREATOR SPEC
          </span>
          <span className="font-mono text-[10px] text-slate-400 tracking-wider">
            SCALE 1:1
          </span>
        </div>

        {/* Inner Portrait Image Container */}
        <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border border-slate-200/90 bg-slate-100">
          <Image
            src="/logo-profil.jpg"
            alt="Yogi Istianto - Banker & Growth Digital Creator"
            fill
            priority
            sizes="(max-width: 640px) 340px, 380px"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
          {/* Subtle bottom gradient to enhance depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* ======================================================== */}
        {/* Floating Annotation Badges (Consistently Padded & Spaced)  */}
        {/* ======================================================== */}

        {/* 1. Top-Left Badge: Identity & Status */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -top-3.5 left-2 sm:-left-5 z-20 bg-white/90 backdrop-blur-md border border-slate-300/90 shadow-[0_8px_20px_rgba(15,23,42,0.08)] rounded-lg px-3.5 py-2.5 whitespace-nowrap transition-transform duration-300 group-hover:-translate-y-1"
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-sm font-bold text-slate-950 tracking-tight font-mono leading-none">
              @bankerdapatcuan
            </span>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-medium mt-1">
            DIGITAL CREATOR // LIVE
          </p>
        </motion.div>

        {/* 2. Middle-Left Badge: Audience & Engagement Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-20 left-2 sm:-left-5 z-20 bg-white/90 backdrop-blur-md border border-slate-300/90 shadow-[0_8px_20px_rgba(15,23,42,0.08)] rounded-lg px-3.5 py-2.5 whitespace-nowrap transition-transform duration-300 group-hover:-translate-y-1"
        >
          <div className="flex items-center gap-3.5 divide-x divide-slate-200">
            <div>
              <span className="text-lg font-bold text-slate-950 font-mono leading-none tracking-tight block">
                3.000+
              </span>
              <span className="text-[11px] text-slate-600 font-medium mt-1 block">
                Followers
              </span>
            </div>
            <div className="pl-3.5">
              <span className="text-lg font-bold text-slate-950 font-mono leading-none tracking-tight block">
                500K+
              </span>
              <span className="text-[11px] text-slate-600 font-medium mt-1 block">
                Avg. Views
              </span>
            </div>
          </div>
        </motion.div>

        {/* 3. Bottom-Right Badge: Monthly Reach */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -bottom-3.5 right-2 sm:-right-5 z-20 bg-white/90 backdrop-blur-md border border-slate-300/90 shadow-[0_8px_20px_rgba(15,23,42,0.08)] rounded-lg px-3.5 py-2.5 whitespace-nowrap transition-transform duration-300 group-hover:-translate-y-1 text-right"
        >
          <div className="flex items-center justify-end gap-1.5">
            <TrendingUp size={15} className="text-blue-600 shrink-0" />
            <span className="text-lg font-bold text-[#0F2C59] font-mono leading-none tracking-tight">
              2M+
            </span>
          </div>
          <p className="text-[11px] text-slate-600 font-medium mt-1">
            Reach Bulanan Organik
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
