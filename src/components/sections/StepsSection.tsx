'use client';

import { motion } from 'framer-motion';
import { BookOpen, Zap, TrendingUp } from 'lucide-react';
import { steps } from '@/data/portfolioData';

const stepIcons = [BookOpen, Zap, TrendingUp];

export default function StepsSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-8 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/70 border border-blue-200/90 text-[#0F2C59] font-mono text-xs uppercase tracking-wider font-bold mb-4"
          >
            [ WORKFLOW ]
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-slate-950"
          >
            Mulai dalam <span className="text-[#1D4ED8]">3 Langkah Sederhana</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.08 }}
            className="text-slate-700 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-normal"
          >
            Tidak perlu pusing bikin produk sendiri. Cukup pelajari sistemnya, praktikkan, dan mulai hasilkan komisi.
          </motion.p>
        </div>

        {/* 3-Step Architectural Hairline Panel */}
        <div className="border border-slate-300 rounded-xl overflow-hidden bg-slate-300 grid md:grid-cols-3 gap-px shadow-xs">
          {steps.map((s, i) => {
            const Icon = stepIcons[i];
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ type: 'spring', stiffness: 120, damping: 20, delay: i * 0.08 }}
                className="p-6 sm:p-7 md:p-8 bg-white hover:bg-slate-50 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-slate-200">
                    <span className="font-mono text-3xl font-black text-[#0F2C59] tracking-tight">
                      0{i + 1}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-slate-400">
                      PHASE // 0{i + 1}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center mb-4 text-[#0F2C59] group-hover:bg-[#0F2C59] group-hover:text-white transition-colors">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-slate-950 tracking-tight">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
