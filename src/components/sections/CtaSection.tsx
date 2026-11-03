'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Camera } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden glow-green shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold mb-6"
            >
              <Sparkles size={12} />
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
              className="text-emerald-100/90 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
            >
              Bergabunglah bersama 2.000+ member di komunitas kami yang sudah membuktikan bahwa membangun sumber penghasilan kedua dari internet itu sangat mungkin dilakukan.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#course"
                  className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-base md:text-lg px-8 py-4 rounded-xl transition w-full sm:w-auto tracking-tight shadow-lg shadow-black/15"
                >
                  Ambil Bundle Sekarang <ArrowRight size={20} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="https://instagram.com/bankerdapatcuan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base md:text-lg px-8 py-4 rounded-xl border border-white/20 transition w-full sm:w-auto"
                >
                  <Camera size={20} />
                  Follow Instagram
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

