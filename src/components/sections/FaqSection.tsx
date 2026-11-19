'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/data/portfolioData';

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const numStr = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ type: 'spring', stiffness: 140, damping: 22, delay: index * 0.05 }}
      className="transition-colors group"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between py-5 md:py-6 text-left transition-colors group-hover:text-blue-900"
        aria-expanded={open}
      >
        <div className="flex items-start gap-4 sm:gap-6 pr-4">
          <span className="font-mono text-xs text-slate-400 font-semibold tracking-wider pt-1 shrink-0">
            [{numStr}]
          </span>
          <span className="font-bold text-slate-950 tracking-tight text-base sm:text-lg leading-snug group-hover:text-blue-900 transition-colors">
            {q}
          </span>
        </div>
        <div className="shrink-0 pt-1 text-slate-400 group-hover:text-blue-900 transition-colors">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-out ${
          open ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pl-9 sm:pl-12 pr-4 text-slate-700 leading-relaxed text-sm sm:text-base font-normal">
          {a}
        </div>
      </div>
    </motion.div>
  );
}

export default function FaqSection() {
  return (
    <section id="faq" className="py-12 md:py-16 border-t border-slate-300/60 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/70 border border-blue-200/90 text-[#0F2C59] font-mono text-xs uppercase tracking-wider font-bold mb-4"
            >
              [ KONSULTASI & FAQ ]
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-slate-950"
            >
              Pertanyaan yang Sering Ditanyakan
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.08 }}
              className="text-slate-700 text-base md:text-lg leading-relaxed font-normal max-w-xl mx-auto"
            >
              Transparansi penuh tentang kurikulum, waktu belajar, dan mekanisme komisi.
            </motion.p>
          </div>

          {/* Clean Editorial Horizontal Rule List */}
          <div className="border-y border-slate-300/80 divide-y divide-slate-300/80">
            {faqs.map((faq, i) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
