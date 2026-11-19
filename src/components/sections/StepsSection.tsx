'use client';

import { motion } from 'framer-motion';
import { BookOpen, Zap, TrendingUp } from 'lucide-react';
import { steps } from '@/data/portfolioData';

const stepIcons = [BookOpen, Zap, TrendingUp];

export default function StepsSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-slate-950"
          >
            Mulai dalam{' '}
            <span className="text-[#1D4ED8]">3 Langkah Sederhana</span>
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

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((s, i) => {
            const Icon = stepIcons[i];
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ type: 'spring', stiffness: 120, damping: 20, delay: i * 0.08 }}
                className="card-depth card-depth-hover relative text-center p-7 rounded-2xl cursor-pointer group"
              >
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 left-[calc(100%)] w-8 lg:w-10 border-t-2 border-dashed border-slate-300 z-10" />
                )}
                <div className="relative inline-flex w-16 h-16 rounded-2xl bg-blue-50/90 border border-blue-200/80 items-center justify-center mb-6 group-hover:bg-blue-100 transition shadow-xs">
                  <Icon size={24} className="text-[#0F2C59]" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0F2C59] flex items-center justify-center shadow-sm">
                    <span className="text-white text-xs font-black">{i + 1}</span>
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-3 text-slate-950 tracking-tight">{s.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed font-normal">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
