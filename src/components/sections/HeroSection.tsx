'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Camera, Play } from 'lucide-react';
import { profileStats } from '@/data/portfolioData';

export default function HeroSection() {
  return (
    <section id="tentang" className="min-h-[88vh] flex items-center pt-24 pb-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        {/* Left Column: Text Content */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-6"
          >
            <Sparkles size={12} />
            Digital Creator • Edukasi Aset Digital
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-tight lg:leading-[1.12] tracking-tight mb-6 text-balance"
          >
            Bangun{' '}
            <span className="text-gradient-green">Aset Digital</span>{' '}
            Tanpa Meninggalkan{' '}
            <span className="underline decoration-yellow-500 decoration-4 underline-offset-[10px]">
              <span className="text-gradient-yellow">Pekerjaan Utama</span>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.16 }}
            className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
          >
            Yogi Istianto membantu Anda membangun penghasilan sampingan terukur lewat produk digital — tanpa resign, tanpa modal besar, dan tanpa mengganggu jam kerja.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.24 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#course"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-base px-7 py-4 rounded-xl transition glow-green w-full sm:w-auto"
              >
                Lihat Course Digital <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href="https://instagram.com/bankerdapatcuan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#1E1E2E] hover:border-emerald-500/50 text-white font-semibold text-base px-7 py-4 rounded-xl transition hover:bg-white/5 w-full sm:w-auto"
              >
                <Camera size={18} />
                Kunjungi Instagram
              </a>
            </motion.div>
          </motion.div>

          {/* Mini social proof */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.32 }}
            className="flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              {['B', 'K', 'A', 'D'].map((initial, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full border-2 border-[#0A0A0F] flex items-center justify-center text-xs font-bold ${
                    ['bg-emerald-500', 'bg-yellow-400', 'bg-blue-500', 'bg-purple-500'][i]
                  } text-black`}
                >
                  {initial}
                </div>
              ))}
            </div>
            <p className="text-slate-400 text-sm">
              Bergabung bersama <span className="text-white font-semibold">2.000+ member</span> komunitas kami
            </p>
          </motion.div>
        </div>

        {/* Right Column: Visual Card */}
        <div className="relative">
          {/* Subtle Glow backdrop */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl" />
          </div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.2 }}
            whileHover={{ scale: 1.01, y: -3 }}
            className="relative bg-[#13131A] border border-[#1E1E2E] hover:border-emerald-500/30 rounded-3xl p-7 md:p-8 card-glow transition-colors"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-2xl font-black text-white shrink-0">
                YI
              </div>
              <div>
                <p className="font-bold text-lg text-white">Yogi Istianto</p>
                <p className="text-emerald-400 text-sm font-medium">@bankerdapatcuan</p>
              </div>
              <div className="ml-auto">
                <div className="flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  Live
                </div>
              </div>
            </div>

            {/* Stats preview grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {profileStats.map((item) => (
                <div key={item.label} className="bg-[#0A0A0F] rounded-xl p-4 border border-[#1E1E2E]/60">
                  <p className={`text-xl font-black ${item.color}`}>{item.val}</p>
                  <p className="text-slate-400 text-xs mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Recent reel row */}
            <div className="bg-[#0A0A0F] rounded-xl p-4 border border-[#1E1E2E]/60">
              <p className="text-slate-500 text-xs mb-3 font-semibold uppercase tracking-wider">Reel Terbaru</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-14 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-900 flex items-center justify-center shrink-0">
                  <Play size={14} className="text-white" fill="white" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-snug">Cara Mulai Bikin Produk Digital dari Nol</p>
                  <p className="text-emerald-400 text-xs mt-1">1.2M views · 3 hari lalu</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, type: 'spring', stiffness: 180, damping: 15 }}
            className="absolute -top-3 -right-3 bg-yellow-400 text-black text-xs font-black px-3.5 py-1.5 rounded-xl shadow-lg rotate-3 pointer-events-none"
          >
            📈 Growth Creator
          </motion.div>
        </div>
      </div>
    </section>
  );
}

