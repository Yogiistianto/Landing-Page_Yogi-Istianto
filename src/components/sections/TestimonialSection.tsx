'use client';

import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';
import { testimonials } from '@/data/portfolioData';

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section id="testimoni" className="py-12 md:py-16 border-t border-slate-300/60 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-8 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/70 border border-blue-200/90 text-[#0F2C59] font-mono text-xs uppercase tracking-wider font-bold mb-4"
          >
            <Award size={13} />
            [ BUKTI NYATA KOMUNITAS ]
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.08 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-950"
          >
            Hasil Nyata dari Member Kami
          </motion.h2>
        </div>

        {/* Architectural Hairline Grid */}
        <div className="border border-slate-300 rounded-xl overflow-hidden bg-slate-300 grid md:grid-cols-3 gap-px shadow-xs">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 120, damping: 20, delay: i * 0.08 }}
              className="p-6 sm:p-7 md:p-8 bg-white hover:bg-slate-50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-slate-200">
                  <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
                    [RECORD // 0{i + 1}]
                  </span>
                  <StarRow count={t.stars} />
                </div>
                <p className="text-slate-700 leading-relaxed text-sm md:text-base font-normal">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-100">
                <div className="w-9 h-9 rounded-md bg-[#0F2C59] flex items-center justify-center font-bold text-white font-mono text-xs shrink-0 shadow-xs">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-slate-950 text-sm tracking-tight">{t.name}</p>
                  <p className="text-slate-500 font-mono text-xs uppercase mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
