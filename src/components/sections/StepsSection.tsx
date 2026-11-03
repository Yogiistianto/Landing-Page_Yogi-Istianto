'use client';

import { motion } from 'framer-motion';
import { BookOpen, Zap, TrendingUp } from 'lucide-react';
import { steps } from '@/data/portfolioData';

const stepIcons = [BookOpen, Zap, TrendingUp];

export default function StepsSection() {
  return (
    <section className="bg-[#13131A] border-y border-[#1E1E2E] py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4"
          >
            Mulai dalam{' '}
            <span className="text-gradient-green">3 Langkah Sederhana</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.08 }}
            className="text-slate-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
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
                whileHover={{ scale: 1.01, y: -3 }}
                className="relative text-center p-7 rounded-2xl bg-[#0A0A0F]/50 border border-[#1E1E2E] hover:border-emerald-500/30 card-glow transition-colors group cursor-pointer"
              >
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 left-[calc(100%)] w-8 lg:w-10 border-t-2 border-dashed border-[#1E1E2E] z-10" />
                )}
                <div className="relative inline-flex w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition">
                  <Icon size={24} className="text-emerald-400" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center shadow">
                    <span className="text-black text-xs font-black">{i + 1}</span>
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-3 text-white tracking-tight">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

