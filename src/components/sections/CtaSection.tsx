'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Camera } from 'lucide-react';

export default function CtaSection() {
  return (
    <section data-dark-section="true" className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          className="bg-gradient-to-br from-[#0B1F3F] via-[#102D5C] to-[#163A70] border border-white/10 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-blue-200 border border-white/20 text-xs font-semibold mb-6"
            >
              <Sparkles size={13} />
              Investasi Cerdas untuk Masa Depan
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.08 }}
              className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight tracking-tight"
            >
              Siap Bangun Aset Digital
              <br />
              Pertamamu?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.16 }}
              className="text-slate-200 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed font-normal"
            >
              Bergabunglah bersama 2.000+ member di komunitas kami yang sudah membuktikan bahwa membangun sumber penghasilan kedua dari internet itu sangat mungkin dilakukan.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#penawaran"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#0F2C59] font-black text-base md:text-lg px-8 py-4 rounded-xl transition w-full sm:w-auto tracking-tight shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_20px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 active:translate-y-0"
              >
                Ambil Bundle Sekarang <ArrowRight size={20} />
              </Link>
              <a
                href="https://instagram.com/bankerdapatcuan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base md:text-lg px-8 py-4 rounded-xl border border-white/25 transition w-full sm:w-auto hover:-translate-y-0.5 active:translate-y-0"
              >
                <Camera size={20} />
                Follow Instagram
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
