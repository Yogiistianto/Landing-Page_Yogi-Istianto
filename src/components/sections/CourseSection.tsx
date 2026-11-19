'use client';

import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2 } from 'lucide-react';
import { courseModules, courseIncluded } from '@/data/portfolioData';

export default function CourseSection() {
  return (
    <section id="fasilitas" data-dark-section="true" className="py-20 md:py-28 bg-[#0B1F3F] text-white relative overflow-hidden border-y border-[#163366] shadow-2xl scroll-mt-28">
      {/* Deep Navy Subtle Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#143566]/80 via-[#0B1F3F] to-[#071326] pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-semibold mb-4"
          >
            <BookOpen size={13} />
            Fasilitas Eksklusif
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.08 }}
            className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white"
          >
            Dukungan Penuh & Ekosistem Belajar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.16 }}
            className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Bukan sekadar materi biasa. Dapatkan fasilitas lengkap yang dirancang khusus agar kamu tidak berjuang sendirian dalam membangun aset digital.
          </motion.p>
        </div>

        {/* 6 Modules Grid (Elevated Dark Cards) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {courseModules.map((mod, i) => (
            <motion.div
              key={mod.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 120, damping: 20, delay: i * 0.08 }}
              whileHover={{ scale: 1.01, y: -2 }}
              className="p-7 bg-[#122B54] border border-white/10 shadow-2xl rounded-2xl hover:border-blue-400/40 hover:shadow-blue-900/30 transition-all duration-200 group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl font-black text-blue-400/80 group-hover:text-blue-300 transition-colors leading-none tracking-tight">
                  {mod.num}
                </div>
                <div>
                  <p className="font-bold text-white mb-2 tracking-tight text-lg">{mod.title}</p>
                  <p className="text-slate-300 text-sm leading-relaxed font-normal">{mod.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What's Included & Pricing Card */}
        <motion.div
          id="penawaran"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          className="bg-gradient-to-br from-[#163668] via-[#10274B] to-[#0A1A35] border border-white/15 rounded-3xl p-8 md:p-12 shadow-2xl scroll-mt-28"
        >
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight text-white">Penawaran Spesial: Bundle Super Affiliate</h3>
              <p className="text-slate-300 mb-8 leading-relaxed text-base font-normal">
                Lebih hemat, lebih berdampak. Spesial untuk Anda, investasi di Super Affiliate hari ini otomatis membuka akses ke DUA produk premium lainnya tanpa biaya tambahan. Beli 1, dapat 3!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {courseIncluded.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 size={18} className="text-blue-400 shrink-0" />
                    <span className="text-slate-200 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0B1F3F] border border-white/15 rounded-2xl p-8 text-center shadow-2xl">
              <p className="text-slate-400 text-sm mb-2 line-through font-mono">Rp 750.000</p>
              <p className="text-5xl font-black text-white mb-2 tracking-tight">Rp 250.000</p>
              <p className="text-blue-300 font-bold text-sm mb-6 flex items-center justify-center gap-1.5">
                <span>⚡</span> Promo Bundle Terbatas!
              </p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="https://instagram.com/bankerdapatcuan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-400 hover:bg-blue-300 text-slate-950 font-black py-4 rounded-xl transition text-base md:text-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_4px_16px_rgba(96,165,250,0.3)] tracking-tight hover:-translate-y-0.5 active:translate-y-0"
                >
                  Ambil Bundle Sekarang (Beli 1 Dapat 3)
                </a>
              </motion.div>
              <p className="text-slate-400 text-xs mt-4">Transaksi aman. Akses instan langsung ke member area.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
