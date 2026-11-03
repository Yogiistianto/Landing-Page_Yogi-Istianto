'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/portfolioData';

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ type: 'spring', stiffness: 120, damping: 20, delay: index * 0.08 }}
      className="border border-[#1E1E2E] bg-[#13131A]/40 rounded-2xl overflow-hidden hover:border-[#2E2E3E] transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/[0.02] transition"
        aria-expanded={open}
      >
        <span className="font-semibold text-white tracking-tight pr-4 text-base md:text-lg">{q}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-emerald-400 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="px-6 pb-6 text-slate-300 leading-relaxed text-sm md:text-base font-normal">{a}</p>
      </div>
    </motion.div>
  );
}

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4"
          >
            Pertanyaan yang Sering Ditanyakan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.08 }}
            className="text-slate-300 text-base md:text-lg leading-relaxed"
          >
            Ada yang mengganjal? Cek dulu di sini.
          </motion.p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

