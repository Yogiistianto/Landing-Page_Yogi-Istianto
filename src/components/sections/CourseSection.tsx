'use client';

import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2 } from 'lucide-react';
import { courseModules, courseIncluded } from '@/data/portfolioData';

export default function CourseSection() {
  return (
    <section id="course" className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4"
          >
            <span>💎</span>
            Fasilitas Eksklusif
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.08 }}
            className="text-3xl md:text-5xl font-black tracking-tight mb-4"
          >
            Dukungan Penuh & Ekosistem Belajar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.16 }}
            className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Bukan sekadar materi biasa. Dapatkan fasilitas lengkap yang dirancang khusus agar kamu tidak berjuang sendirian dalam membangun aset digital.
          </motion.p>
        </div>

        {/* 6 Modules Grid (Fasilitas) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {courseModules.map((mod, i) => (
            <motion.div
              key={mod.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 120, damping: 20, delay: i * 0.08 }}
              whileHover={{ scale: 1.01, y: -3 }}
              className="p-7 bg-[#13131A] border border-[#1E1E2E] hover:border-emerald-500/30 card-glow rounded-2xl transition-colors group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl font-black text-emerald-500/40 group-hover:text-emerald-400 transition-colors leading-none tracking-tight">
                  {mod.num}
                </div>
                <div>
                  <p className="font-bold text-white mb-2 tracking-tight text-lg">{mod.title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{mod.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What's Included & Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          className="bg-gradient-to-br from-emerald-950/70 via-[#13131A] to-[#0A0A0F] border border-emerald-500/30 rounded-3xl p-8 md:p-12 card-glow"
        >
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">Penawaran Spesial: Bundle Super Affiliate</h3>
              <p className="text-slate-300 mb-8 leading-relaxed text-base">
                Lebih hemat, lebih berdampak. Spesial untuk Anda, investasi di Super Affiliate hari ini otomatis membuka akses ke DUA produk premium lainnya tanpa biaya tambahan. Beli 1, dapat 3!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {courseIncluded.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                    <span className="text-slate-200 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#13131A] border border-[#1E1E2E] rounded-2xl p-8 text-center shadow-xl">
              <p className="text-slate-500 text-sm mb-2 line-through font-mono">Rp 750.000</p>
              <p className="text-5xl font-black text-white mb-2 tracking-tight">Rp 250.000</p>
              <p className="text-yellow-400 font-bold text-sm mb-6 flex items-center justify-center gap-1.5">
                <span>⚡</span> Promo Bundle Terbatas!
              </p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="https://instagram.com/bankerdapatcuan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black py-4 rounded-xl transition text-base md:text-lg glow-green tracking-tight"
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

