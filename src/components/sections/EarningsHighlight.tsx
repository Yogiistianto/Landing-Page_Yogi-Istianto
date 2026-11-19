'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BarChart3, ArrowRight } from 'lucide-react';
import { earningsItems } from '@/data/portfolioData';

export default function EarningsHighlight() {
  return (
    <section id="course" className="bg-slate-100/70 border-y border-slate-200/90 py-20 md:py-24 overflow-hidden scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Product Catalog Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          className="relative order-2 md:order-1"
        >
          <div className="card-depth rounded-3xl p-6 md:p-8">
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-200/80">
              <span className="text-xs font-mono uppercase tracking-wider text-[#1D4ED8] font-bold">Katalog Produk Pilihan</span>
              <span className="text-xs text-slate-600 font-medium">Verified Curriculum</span>
            </div>
            <div className="space-y-3.5">
              {earningsItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ type: 'spring', stiffness: 120, damping: 20, delay: i * 0.08 }}
                  className="flex items-center justify-between p-3.5 recessed-box rounded-xl hover:border-slate-300 transition-colors"
                >
                  <div>
                    <p className="text-slate-950 text-sm font-bold tracking-tight">{item.label}</p>
                    <p className="text-slate-600 font-medium text-xs mt-0.5">{item.sales}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#0F2C59] font-black text-sm tracking-tight">{item.revenue}</p>
                  </div>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.3 }}
                className="mt-5 p-4 bg-blue-50/90 rounded-xl border border-blue-200/90 shadow-inner"
              >
                <p className="text-[#0F2C59] text-xs font-bold uppercase tracking-wider">Investasi Ilmu Mulai Dari</p>
                <p className="text-[#0F2C59] text-2xl font-black tracking-tight mt-0.5">Rp 129.000</p>
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
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200/90 text-[#0F2C59] text-xs font-bold mb-6"
          >
            <BarChart3 size={13} />
            Rekomendasi Produk Digital
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.08 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 leading-tight tracking-tight mb-6"
          >
            Mulai Perjalananmu dengan Panduan yang Tepat
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.16 }}
            className="text-slate-700 text-base md:text-lg leading-relaxed mb-8 font-normal"
          >
            Saya telah menyeleksi kelas dan panduan digital terbaik yang terbukti membantu ribuan member di komunitas. Pilih materi yang paling sesuai dengan kebutuhanmu saat ini, dan mulai bangun aset digitalmu tanpa harus coba-coba dari nol.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.24 }}
            className="inline-block"
          >
            <Link
              href="#penawaran"
              className="btn-tactile-primary inline-flex items-center gap-2 font-bold text-base px-7 py-4 rounded-xl"
            >
              Pilih Produk Sekarang <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
