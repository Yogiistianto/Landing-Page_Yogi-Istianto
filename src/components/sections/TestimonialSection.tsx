'use client';

import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';
import { testimonials } from '@/data/portfolioData';

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section id="testimoni" className="py-20 md:py-24 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200/90 text-[#0F2C59] text-xs font-bold mb-4"
          >
            <Award size={13} />
            Bukti Nyata Komunitas
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

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 120, damping: 20, delay: i * 0.08 }}
              className="card-depth card-depth-hover p-7 rounded-2xl cursor-pointer flex flex-col justify-between"
            >
              <div>
                <StarRow count={t.stars} />
                <p className="text-slate-700 leading-relaxed my-5 text-sm md:text-base font-normal">&ldquo;{t.text}&rdquo;</p>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-slate-200/80">
                <div className="w-10 h-10 rounded-full bg-[#0F2C59] flex items-center justify-center font-bold text-white shrink-0 shadow-xs">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-slate-950 text-sm tracking-tight">{t.name}</p>
                  <p className="text-slate-600 text-xs font-medium mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
