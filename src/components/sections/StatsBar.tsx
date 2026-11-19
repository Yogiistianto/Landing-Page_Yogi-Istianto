'use client';

import { motion } from 'framer-motion';
import { stats } from '@/data/portfolioData';

export default function StatsBar() {
  return (
    <div className="border-y border-slate-300 bg-white relative z-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200">
        {stats.map(({ value, label, icon: Icon }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: i * 0.08 }}
            className="text-center py-6 md:py-7 px-4"
          >
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <Icon size={18} className="text-[#0F2C59] shrink-0" />
              <p className="text-2xl md:text-3xl font-black tracking-tight text-slate-950 font-mono">{value}</p>
            </div>
            <p className="text-slate-600 font-mono text-xs uppercase tracking-wider font-semibold">{label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
