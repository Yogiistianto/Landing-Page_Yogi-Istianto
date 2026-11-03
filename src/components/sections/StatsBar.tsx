'use client';

import { motion } from 'framer-motion';
import { stats } from '@/data/portfolioData';

export default function StatsBar() {
  return (
    <div className="border-y border-[#1E1E2E] bg-[#13131A]/80 backdrop-blur-sm">
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
            <div className="flex items-center justify-center gap-2 mb-1">
              <Icon size={18} className="text-emerald-400" />
              <p className="text-2xl md:text-3xl font-black tracking-tight text-white">{value}</p>
            </div>
            <p className="text-slate-400 text-sm mt-1">{label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

