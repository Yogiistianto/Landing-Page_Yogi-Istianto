'use client';

import { motion } from 'framer-motion';
import { Target, Play } from 'lucide-react';
import { features, reelsMockups } from '@/data/portfolioData';

export default function FeatureSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Text & Features List */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200/90 text-[#0F2C59] text-xs font-bold mb-6"
          >
            <Target size={13} />
            Kenapa Perlu Punya Aset Digital?
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.08 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 text-slate-950"
          >
            Gaji utama aman,{' '}
            <span className="text-[#1D4ED8]">income tambahan</span> jalan terus.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.16 }}
            className="text-slate-700 text-base md:text-lg leading-relaxed mb-8 font-normal"
          >
            Sebagai pekerja profesional, waktumu sangat berharga. Saatnya mengubah waktu luang menjadi aset digital yang bekerja 24/7, bahkan saat kamu tidur.
          </motion.p>
          <div className="space-y-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ type: 'spring', stiffness: 120, damping: 20, delay: i * 0.08 }}
                className="flex gap-4 p-5 rounded-2xl card-depth card-depth-hover cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/70 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition">
                  <f.icon size={18} className="text-[#0F2C59]" />
                </div>
                <div>
                  <p className="font-bold text-slate-950 mb-1 tracking-tight">{f.title}</p>
                  <p className="text-slate-700 text-sm leading-relaxed font-normal">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Instagram Reels Grid Mockup */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" />
          </div>
          <div className="relative grid grid-cols-2 gap-5 md:gap-6">
            {reelsMockups.map((reel, i) => (
              <motion.div
                key={reel.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ type: 'spring', stiffness: 120, damping: 20, delay: i * 0.08 }}
                className={`aspect-[9/16] rounded-2xl bg-gradient-to-b ${reel.color} border border-slate-300/80 shadow-[0_4px_12px_rgba(15,23,42,0.08)] hover:shadow-[0_20px_32px_-8px_rgba(15,23,42,0.16)] hover:-translate-y-1 relative overflow-hidden group cursor-pointer transition-all duration-200`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/25 backdrop-blur-xs flex items-center justify-center group-hover:scale-110 transition shadow-sm">
                    <Play size={16} className="text-white ml-0.5" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3.5 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent">
                  <p className="text-amber-300 text-xs font-black">{reel.views} views</p>
                  <p className="text-white text-xs font-medium leading-tight mt-0.5">{reel.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
