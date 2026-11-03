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
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-semibold mb-6"
          >
            <Target size={12} />
            Kenapa Perlu Punya Aset Digital?
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.08 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6"
          >
            Gaji utama aman,{' '}
            <span className="text-gradient-yellow">income tambahan</span>
            <br />
            jalan terus.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.16 }}
            className="text-slate-300 text-base md:text-lg leading-relaxed mb-8"
          >
            Sebagai pekerja profesional, waktumu sangat berharga. Saatnya mengubah waktu luang menjadi aset digital yang bekerja 24/7 — bahkan saat kamu tidur.
          </motion.p>
          <div className="space-y-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ type: 'spring', stiffness: 120, damping: 20, delay: i * 0.08 }}
                whileHover={{ scale: 1.01, y: -3 }}
                className="flex gap-4 p-5 rounded-2xl bg-[#13131A] border border-[#1E1E2E] hover:border-emerald-500/30 card-glow transition-colors group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition">
                  <f.icon size={18} className="text-emerald-400" />
                </div>
                <div>
                  <p className="font-bold text-white mb-1 tracking-tight">{f.title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Instagram Reels Grid Mockup */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 rounded-full bg-yellow-400/5 blur-3xl" />
          </div>
          <div className="relative grid grid-cols-2 gap-5 md:gap-6">
            {reelsMockups.map((reel, i) => (
              <motion.div
                key={reel.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ type: 'spring', stiffness: 120, damping: 20, delay: i * 0.08 }}
                whileHover={{ scale: 1.01, y: -3 }}
                className={`aspect-[9/16] rounded-2xl bg-gradient-to-b ${reel.color} border border-[#1E1E2E] hover:border-white/20 card-glow relative overflow-hidden group cursor-pointer transition-colors`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition">
                    <Play size={16} className="text-white" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3.5 bg-gradient-to-t from-black/80">
                  <p className="text-yellow-400 text-xs font-black">{reel.views} views</p>
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

