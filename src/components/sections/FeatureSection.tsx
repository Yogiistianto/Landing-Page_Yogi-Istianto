'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Play } from 'lucide-react';
import { features, FEATURED_REELS } from '@/data/portfolioData';

export default function FeatureSection() {
  return (
    <section id="reels" className="py-12 md:py-16 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column: Text & Features List */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/70 border border-blue-200/90 text-[#0F2C59] font-mono text-xs uppercase tracking-wider font-bold mb-4"
          >
            <Target size={13} />
            [ VALUE PROPOSITION ]
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.08 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-4 text-slate-950"
          >
            Gaji utama aman,{' '}
            <span className="text-[#1D4ED8]">income tambahan</span> jalan terus.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.16 }}
            className="text-slate-700 text-base md:text-lg leading-relaxed mb-6 font-normal"
          >
            Sebagai pekerja profesional, waktumu sangat berharga. Saatnya mengubah waktu luang menjadi aset digital yang bekerja 24/7, bahkan saat kamu tidur.
          </motion.p>

          {/* Architectural Feature Divide List */}
          <div className="border border-slate-300 rounded-xl overflow-hidden divide-y divide-slate-200 bg-white shadow-xs">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ type: 'spring', stiffness: 120, damping: 20, delay: i * 0.08 }}
                className="p-5 sm:p-6 hover:bg-slate-50/80 transition-colors flex items-start gap-4 cursor-pointer group"
              >
                <div className="w-9 h-9 rounded-md bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0 group-hover:bg-[#0F2C59] group-hover:text-white transition-colors text-[#0F2C59] mt-0.5">
                  <f.icon size={18} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[10px] text-slate-400 font-semibold tracking-wider">
                      [0{i + 1}]
                    </span>
                    <p className="font-bold text-slate-950 tracking-tight text-base">{f.title}</p>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Instagram Featured Reels Grid */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" />
          </div>
          <div className="relative grid grid-cols-2 gap-4 md:gap-5">
            {FEATURED_REELS.map((reel, i) => (
              <motion.a
                key={reel.instagramUrl || i}
                href={reel.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ type: 'spring', stiffness: 120, damping: 20, delay: i * 0.08 }}
                className="aspect-[9/16] rounded-lg border border-slate-300 overflow-hidden bg-slate-900 relative group block shadow-sm hover:border-slate-500 hover:shadow-md active:scale-[0.98] transition-all duration-150 ease-out"
              >
                {/* Thumbnail Image */}
                <Image
                  src={reel.thumbnail}
                  alt={reel.title || `Featured Reel ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 220px"
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-95"
                />

                {/* Minimalist Center Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-9 h-9 rounded-full bg-slate-950/50 backdrop-blur-xs border border-white/30 flex items-center justify-center text-white shadow-sm transition-transform duration-200 group-hover:scale-110">
                    <Play size={14} className="ml-0.5 fill-white text-white" />
                  </div>
                </div>

                {/* Dark Gradient Overlay & Views Badge */}
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent flex items-center justify-between pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/70 border border-white/10 backdrop-blur-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <p className="text-amber-300 font-mono text-[11px] font-bold uppercase tracking-wider leading-none">
                      {reel.views} views
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
