'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BarChart3, ArrowRight, ArrowUpRight } from 'lucide-react';
import { earningsItems } from '@/data/portfolioData';

export default function EarningsHighlight() {
  return (
    <section id="course" className="bg-slate-100/70 border-y border-slate-200/90 py-12 md:py-16 overflow-hidden scroll-mt-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column: Architectural Product Catalog Panel */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          className="relative order-2 md:order-1"
        >
          <div className="border border-slate-300/90 rounded-xl overflow-hidden bg-white shadow-xs">
            {/* Header Architectural Meta Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-900 font-bold">
                Katalog Produk Pilihan
              </span>
              <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">
                [VERIFIED SYLLABUS]
              </span>
            </div>

            {/* Architectural Rows without nested rounded cards */}
            <div className="divide-y divide-slate-200">
              {earningsItems.map((item, i) => {
                const isFlagship = i === 0;
                return (
                  <motion.a
                    key={item.label}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ type: 'spring', stiffness: 120, damping: 20, delay: i * 0.08 }}
                    className={
                      isFlagship
                        ? 'p-6 bg-blue-50/35 hover:bg-slate-50 border-t-2 border-t-[#0F2C59] relative transition-colors duration-150 block group cursor-pointer'
                        : 'p-5 hover:bg-slate-50 transition-colors duration-150 flex items-center justify-between block group cursor-pointer'
                    }
                  >
                    {isFlagship ? (
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-[10px] uppercase tracking-widest font-bold bg-[#0F2C59] text-white px-2 py-0.5 rounded-xs">
                            FLAGSHIP BUNDLE
                          </span>
                          <div className="flex items-center gap-1.5">
                            <span className="font-mono text-lg font-black text-[#0F2C59]">
                              {item.revenue}
                            </span>
                            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#0F2C59] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 shrink-0" />
                          </div>
                        </div>
                        <p className="text-slate-950 font-bold text-base tracking-tight group-hover:text-[#0F2C59] transition-colors">{item.label}</p>
                        <p className="text-slate-600 text-xs mt-0.5">{item.sales}</p>
                      </div>
                    ) : (
                      <>
                        <div>
                          <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-0.5">
                            STANDALONE // 0{i + 1}
                          </span>
                          <p className="text-slate-900 font-semibold text-sm tracking-tight group-hover:text-[#0F2C59] transition-colors">{item.label}</p>
                          <p className="text-slate-500 text-xs mt-0.5">{item.sales}</p>
                        </div>
                        <div className="flex items-center gap-1.5 text-right shrink-0 ml-4">
                          <span className="font-mono text-sm font-bold text-slate-800">{item.revenue}</span>
                          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#0F2C59] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 shrink-0" />
                        </div>
                      </>
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* Footer Pricing Summary */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-600 font-medium">
                Investasi Mulai Dari
              </span>
              <span className="font-mono text-xl font-black text-[#0F2C59]">Rp 129.000</span>
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
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/70 border border-blue-200/90 text-[#0F2C59] font-mono text-xs uppercase tracking-wider font-bold mb-4"
          >
            <BarChart3 size={13} />
            [ REKOMENDASI PRODUK DIGITAL ]
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.08 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 leading-tight tracking-tight mb-4"
          >
            Mulai Perjalananmu dengan Panduan yang Tepat
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.16 }}
            className="text-slate-700 text-base md:text-lg leading-relaxed mb-6 font-normal"
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
              className="btn-primary inline-flex items-center gap-2 font-medium text-base px-7 py-3.5 rounded-lg group active:scale-[0.98] transition-all duration-150 ease-out"
            >
              <span>Pilih Produk Sekarang</span>
              <ArrowRight size={16} className="transition-transform duration-150 ease-out group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
