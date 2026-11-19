'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Camera, Play } from 'lucide-react';
import { profileStats } from '@/data/portfolioData';
import InteractiveLanyardCard from '@/components/InteractiveLanyardCard';

interface HeroSectionProps {
  isLoaded?: boolean;
}

export default function HeroSection({ isLoaded = true }: HeroSectionProps) {
  return (
    <section id="tentang" className="min-h-[88vh] flex items-center pt-28 md:pt-32 pb-20 md:pb-24 relative scroll-mt-28">
      {/* Soft Window Light & Shadow Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(15,44,89,0.05),transparent_80%),linear-gradient(135deg,rgba(0,0,0,0.015)_0%,transparent_50%,rgba(0,0,0,0.02)_100%)]" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full relative z-10">
        {/* Left Column: Text Content */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#1D4ED8] text-xs font-semibold mb-6"
          >
            <Sparkles size={12} />
            Digital Creator • Edukasi Aset Digital
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.22] lg:leading-[1.25] tracking-tight mb-6 text-balance text-slate-950"
          >
            Bangun{' '}
            <span className="text-[#0F2C59]">Aset Digital</span>{' '}
            Tanpa Meninggalkan{' '}
            <span className="relative inline-block mx-1 mt-2 align-bottom">
              <span className="relative z-10 bg-[#BFDBFE]/80 text-[#0F2C59] px-2.5 py-0.5 rounded-sm border-l-2 border-r-2 border-[#1D4ED8] font-bold inline-block">
                {/* Top-left pin */}
                <span className="absolute -top-1 -left-[5px] w-2.5 h-2.5 rounded-full bg-[#1D4ED8] shadow-sm" />
                Pekerjaan Utama
                {/* Bottom-right pin */}
                <span className="absolute -bottom-1 -right-[5px] w-2.5 h-2.5 rounded-full bg-[#1D4ED8] shadow-sm" />
              </span>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.16 }}
            className="text-slate-700 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal"
          >
            Yogi Istianto membantu Anda membangun penghasilan sampingan terukur lewat produk digital, tanpa resign, tanpa modal besar, dan tanpa mengganggu jam kerja.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.24 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <motion.div whileTap={{ scale: 0.98 }}>
              <Link
                href="#course"
                className="btn-tactile-primary font-bold text-base px-7 py-4 rounded-xl inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Lihat Course Digital <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div whileTap={{ scale: 0.98 }}>
              <a
                href="https://instagram.com/bankerdapatcuan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 hover:text-slate-950 font-bold text-base px-7 py-4 rounded-xl border border-slate-300/90 shadow-[0_1px_3px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 active:translate-y-0 transition-all w-full sm:w-auto"
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
                  className={`w-8 h-8 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-xs font-bold ${
                    ['bg-blue-600 text-white', 'bg-amber-400 text-neutral-900', 'bg-emerald-500 text-white', 'bg-indigo-600 text-white'][i]
                  }`}
                >
                  {initial}
                </div>
              ))}
            </div>
            <p className="text-slate-700 text-sm">
              Bergabung bersama <span className="text-slate-950 font-bold">2.000+ member</span> komunitas kami
            </p>
          </motion.div>
        </div>

        {/* Right Column: Visual Card (Interactive Hanging Lanyard ID Card) */}
        <div className="relative">
          {/* Subtle Glow backdrop */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 rounded-full bg-blue-500/5 blur-3xl" />
          </div>

          <InteractiveLanyardCard isLoaded={isLoaded}>
            {/* Matte White Acrylic VIP ID Card with Multi-layered Depth */}
            <div className="relative bg-white border border-slate-300/80 hover:border-slate-400 rounded-3xl p-6 md:p-7 shadow-[0_2px_4px_rgba(15,23,42,0.04),0_16px_32px_-4px_rgba(15,23,42,0.1)] transition-colors">
              {/* Subtle Plastic Specular Sheen (Pantulan Cahaya Akrilik) */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/50 to-neutral-100/40 pointer-events-none" />

              {/* Badge Top Header Ribbon */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100 relative z-10">
                <span className="text-[11px] font-mono tracking-widest text-[#1D4ED8] font-bold uppercase">
                  Digital Asset Pass
                </span>
                <span className="text-[10px] font-mono text-slate-500 font-medium tracking-wider">
                  NO. 0824-YI
                </span>
              </div>

              {/* Header Profil dengan Foto Asli */}
              <div className="flex items-center gap-4 mb-5 relative z-10">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-sm shrink-0">
                  <Image
                    src="/logo-profil.jpg"
                    alt="Yogi Istianto"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div>
                  <p className="font-black text-lg text-slate-950 tracking-tight">Yogi Istianto</p>
                  <p className="text-[#0F2C59] text-xs font-semibold">@bankerdapatcuan</p>
                </div>
                <div className="ml-auto">
                  <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold border border-emerald-200">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    Live
                  </div>
                </div>
              </div>

              {/* Grid Statistik (Recessed Box Depth) */}
              <div className="grid grid-cols-2 gap-3 mb-4 relative z-10">
                {profileStats.map((item) => (
                  <div key={item.label} className="recessed-box rounded-xl p-3.5">
                    <p className="text-xl font-black tracking-tight text-slate-950">{item.val}</p>
                    <p className="text-slate-600 text-[11px] mt-0.5 font-medium">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* Barcode & Reel Row Mini Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2">
                  <Play size={12} className="text-[#1D4ED8] fill-[#1D4ED8]" />
                  <span className="text-slate-800 text-xs font-semibold truncate max-w-[190px]">
                    Produk Digital dari Nol
                  </span>
                </div>
                <span className="text-[#1D4ED8] text-[11px] font-mono font-bold">
                  1.2M views
                </span>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-3 -right-3 bg-[#0F2C59] text-white text-xs font-bold px-3.5 py-1.5 rounded-xl shadow-[0_4px_12px_rgba(15,44,89,0.3)] rotate-3 pointer-events-none z-30">
                📈 Growth Creator
              </div>
            </div>
          </InteractiveLanyardCard>
        </div>
      </div>
    </section>
  );
}

