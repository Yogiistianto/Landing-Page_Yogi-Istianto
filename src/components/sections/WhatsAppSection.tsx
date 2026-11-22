'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import { WA_DISPLAY_NAME, WA_URL } from '@/data/portfolioData';

export default function WhatsAppSection() {
  return (
    <section id="konsultasi" className="py-12 md:py-16 border-t border-slate-300/60 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          className="rounded-xl border border-slate-300 bg-white overflow-hidden shadow-xs grid md:grid-cols-12"
        >
          {/* Sisi Kiri: Informasi & Value */}
          <div className="md:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
            <div className="mb-3">
              <span className="font-mono text-xs tracking-wider uppercase text-slate-500 font-medium">
                [ KONSULTASI LANGSUNG ]
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-950 tracking-tight leading-tight">
              Masih Ragu atau Ingin Tanya Langsung?
            </h2>
            <p className="text-slate-700 mt-3 text-base leading-relaxed font-normal">
              Diskusikan langsung kebutuhanmu bersama saya lewat WhatsApp sebelum bergabung ke komunitas Super Affiliate.
            </p>
          </div>

          {/* Sisi Kanan: Action Panel */}
          <div className="md:col-span-5 p-6 sm:p-8 md:p-10 bg-slate-50/80 border-t md:border-t-0 md:border-l border-slate-300/80 flex flex-col justify-center gap-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">Direct WhatsApp</span>
              <span className="font-mono text-sm font-semibold text-slate-900">{WA_DISPLAY_NAME}</span>
            </div>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#0F2C59] hover:bg-[#163A70] text-white font-medium px-5 py-3.5 transition-all duration-150 ease-out active:scale-[0.98] flex items-center justify-center gap-2.5 group border border-[#0B1F3F] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_1px_2px_rgba(15,23,42,0.15)]"
            >
              <WhatsAppIcon className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors shrink-0" />
              <span>Chat via WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
