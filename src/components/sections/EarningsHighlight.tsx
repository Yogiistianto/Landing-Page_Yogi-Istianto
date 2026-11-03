'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BarChart3, ArrowRight } from 'lucide-react';
import { earningsItems } from '@/data/portfolioData';

export default function EarningsHighlight() {
  return (
    <section className="bg-yellow-400 py-20 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Dark Mockup Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          className="relative order-2 md:order-1"
        >
          <div className="bg-black rounded-3xl p-6 md:p-8 shadow-2xl border border-black/10">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-white/50 text-xs font-mono">Yogi Istianto — Katalog Produk</span>
            </div>
            <div className="space-y-3.5">
              {earningsItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ type: 'spring', stiffness: 120, damping: 20, delay: i * 0.08 }}
                  whileHover={{ scale: 1.01, y: -2 }}
                  className="flex items-center justify-between p-3.5 bg-white/5 hover:bg-white/[0.08] rounded-xl border border-white/5 cursor-pointer transition-colors"
                >
                  <div>
                    <p className="text-white text-sm font-semibold tracking-tight">{item.label}</p>
                    <p className="text-white/60 text-xs mt-0.5">{item.sales}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-black text-sm tracking-tight">{item.revenue}</p>
                  </div>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.3 }}
                whileHover={{ scale: 1.01, y: -2 }}
                className="mt-5 p-4 bg-emerald-500/15 rounded-xl border border-emerald-500/30 cursor-pointer"
              >
                <p className="text-emerald-300 text-xs font-semibold uppercase tracking-wider">Investasi Ilmu Mulai Dari</p>
                <p className="text-emerald-400 text-2xl font-black tracking-tight mt-0.5">Rp 129.000</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Text & CTA */}
        <div className="order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/10 text-black text-xs font-bold mb-6"
          >
            <BarChart3 size={12} />
            Rekomendasi Produk Digital
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.08 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight tracking-tight mb-6"
          >
            Mulai Perjalananmu dengan Panduan yang Tepat
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.16 }}
            className="text-black/80 text-base md:text-lg leading-relaxed mb-8"
          >
            Saya telah menyeleksi kelas dan panduan digital terbaik yang terbukti membantu ribuan member di komunitas. Pilih materi yang paling sesuai dengan kebutuhanmu saat ini, dan mulai bangun aset digitalmu tanpa harus coba-coba dari nol.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.24 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link
              href="#course"
              className="inline-flex items-center gap-2 bg-black text-yellow-400 font-bold text-base px-7 py-4 rounded-xl hover:bg-black/85 transition shadow-lg shadow-black/10"
            >
              Pilih Produk Sekarang <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

