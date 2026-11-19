'use client';

import { motion } from 'framer-motion';
import { stats } from '@/data/portfolioData';

export default function StatsBar() {
  return (
    <div className="border-y border-slate-300/80 bg-white/95 backdrop-blur-sm shadow-[0_2px_4px_rgba(15,23,42,0.03)] relative z-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-10 md:py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map(({ value, label, icon: Icon }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: i * 0.08 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <Icon size={20} className="text-[#0F2C59] shrink-0" />
              <p className="text-2xl md:text-3xl font-black tracking-tight text-slate-950">{value}</p>
            </div>
            <p className="text-slate-600 text-sm font-semibold">{label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
