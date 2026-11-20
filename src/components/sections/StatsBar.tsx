'use client';

import { motion } from 'framer-motion';
import { stats } from '@/data/portfolioData';

// Duplikasi list agar loop horizontal mulus dan tanpa jeda kosong di semua resolusi
const marqueeList = [...stats, ...stats, ...stats, ...stats];

export default function StatsBar() {
  return (
    <div className="border-y border-slate-300 bg-white relative z-20 py-3.5 sm:py-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          ease: 'linear',
          duration: 22,
          repeat: Infinity,
        }}
        className="flex w-max items-center gap-10 md:gap-12"
      >
        {marqueeList.map(({ value, label, icon: Icon }, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 shrink-0 whitespace-nowrap select-none"
          >
            <div className="w-8 h-8 rounded-md bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#0F2C59] shrink-0">
              <Icon size={16} />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 font-mono">
                {value}
              </span>
              <span className="text-slate-600 font-mono text-xs uppercase tracking-wider font-semibold">
                {label}
              </span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 ml-4 shrink-0" aria-hidden="true" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
