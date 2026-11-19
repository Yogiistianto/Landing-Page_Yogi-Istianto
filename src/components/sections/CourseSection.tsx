'use client';

import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import { courseModules, courseIncluded } from '@/data/portfolioData';

export default function CourseSection() {
  return (
    <section id="fasilitas" data-dark-section="true" className="py-12 md:py-20 lg:py-24 bg-[#0B1F3F] text-white relative overflow-hidden border-y border-[#163366] shadow-2xl scroll-mt-28">
      {/* Deep Navy Subtle Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#143566]/80 via-[#0B1F3F] to-[#071326] pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-400/25 text-blue-300 font-mono text-xs uppercase tracking-wider mb-4"
          >
            <BookOpen size={13} />
            [ FASILITAS EKSKLUSIF ]
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

        {/* 6 Modules: Architectural Hairline Grid */}
        <div className="border border-white/15 rounded-xl overflow-hidden bg-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px mb-12 md:mb-16 shadow-2xl">
          {courseModules.map((mod, i) => (
            <motion.div
              key={mod.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ type: 'spring', stiffness: 120, damping: 20, delay: i * 0.05 }}
              className="p-6 sm:p-7 md:p-8 bg-[#0B1F3F] hover:bg-[#102952] transition-colors duration-200 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <span className="font-mono text-sm tracking-wider font-bold text-blue-400">MOD-{mod.num}</span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-slate-400">CORE MODULE</span>
                </div>
                <h3 className="font-bold text-white mb-2 tracking-tight text-lg group-hover:text-blue-200 transition-colors">
                  {mod.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed font-normal">{mod.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What's Included & Pricing: Split Architectural Panel */}
        <motion.div
          id="penawaran"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          className="border border-white/15 bg-[#0F274F]/60 rounded-xl overflow-hidden shadow-2xl scroll-mt-28 grid md:grid-cols-12"
        >
          {/* Left Panel: Details & Benefits */}
          <div className="md:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-blue-300 font-semibold mb-3">
                <span>// SPECIAL ACCESS BUNDLE</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-3 tracking-tight text-white">
                Penawaran Spesial: Bundle Super Affiliate
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed text-base font-normal">
                Lebih hemat, lebih berdampak. Spesial untuk Anda, investasi di Super Affiliate hari ini otomatis membuka akses ke DUA produk premium lainnya tanpa biaya tambahan. Beli 1, dapat 3!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-white/10">
                {courseIncluded.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                    <span className="text-slate-200 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Focused Pricing & CTA */}
          <div className="md:col-span-5 p-6 sm:p-8 md:p-10 border-t md:border-t-0 md:border-l border-white/15 bg-[#081730]/80 flex flex-col justify-center">
            <div className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-2">OFFICIAL ENROLLMENT</div>
            <p className="text-slate-400 text-sm line-through font-mono mb-1">Rp 750.000</p>
            <p className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tight font-mono">Rp 250.000</p>
            <div className="flex items-center gap-1.5 text-blue-300 font-mono text-xs uppercase tracking-wider mb-6">
              <span>⚡</span> Promo Bundle Terbatas
            </div>
            <a
              href="https://lynk.id/richstianto/8xe41e44yej2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark-cta w-full py-4 rounded-lg text-base md:text-lg tracking-tight active:scale-[0.98] transition-all duration-150 ease-out group inline-flex items-center justify-center gap-2"
            >
              <span>Ambil Bundle Sekarang (Beli 1 Dapat 3)</span>
              <ArrowRight size={18} className="transition-transform duration-150 ease-out group-hover:translate-x-1" />
            </a>
            <p className="text-slate-400 text-xs mt-4 font-mono text-center">Akses instan seumur hidup ke member area.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
