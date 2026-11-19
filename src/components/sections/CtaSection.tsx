'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import InstagramIcon from '@/components/icons/InstagramIcon';

export default function CtaSection() {
  return (
    <section data-dark-section="true" className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          className="bg-gradient-to-br from-[#0B1F3F] via-[#102D5C] to-[#163A70] border border-white/15 rounded-xl p-8 sm:p-10 md:p-14 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-blue-200 border border-white/20 font-mono text-xs uppercase tracking-wider font-semibold mb-4"
            >
              <Sparkles size={13} />
              [ FINAL STEP ]
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.08 }}
              className="text-3xl md:text-5xl font-black text-white mb-3 leading-tight tracking-tight"
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
              className="text-slate-200 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed font-normal"
            >
              Bergabunglah bersama 2.000+ member di komunitas kami yang sudah membuktikan bahwa membangun sumber penghasilan kedua dari internet itu sangat mungkin dilakukan.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://lynk.id/richstianto/8xe41e44yej2"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark-cta inline-flex items-center justify-center gap-2 text-base md:text-lg px-8 py-4 rounded-lg tracking-tight w-full sm:w-auto active:scale-[0.98] transition-all duration-150 ease-out group"
              >
                <span>Ambil Bundle Sekarang</span>
                <ArrowRight size={18} className="transition-transform duration-150 ease-out group-hover:translate-x-1" />
              </a>
              <a
                href="https://instagram.com/bankerdapatcuan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium text-base md:text-lg px-8 py-4 rounded-lg border border-white/20 transition-all duration-150 ease-out w-full sm:w-auto active:scale-[0.98] group"
              >
                <InstagramIcon size={18} className="text-white/80 group-hover:text-white transition-colors shrink-0" />
                <span>Follow Instagram</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
