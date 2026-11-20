'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import BlueprintCreatorFrame from '@/components/BlueprintCreatorFrame';
import InstagramIcon from '@/components/icons/InstagramIcon';

interface HeroSectionProps {
  isLoaded?: boolean;
}

export default function HeroSection({ isLoaded = true }: HeroSectionProps) {
  return (
    <section id="tentang" className="pt-28 pb-16 md:pt-32 md:pb-20 relative scroll-mt-28">
      {/* Soft Window Light & Shadow Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(15,44,89,0.05),transparent_80%),linear-gradient(135deg,rgba(0,0,0,0.015)_0%,transparent_50%,rgba(0,0,0,0.02)_100%)]" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full relative z-10">
        {/* Left Column: Text Content */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/70 border border-blue-200/90 text-[#0F2C59] font-mono text-xs uppercase tracking-wider font-bold mb-6 whitespace-nowrap"
          >
            <Sparkles size={13} />
            <span>[ DIGITAL CREATOR ]</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.22] lg:leading-[1.25] tracking-tight mb-6 text-balance text-slate-950"
          >
            Bangun{' '}
            <span className="text-[#1D4ED8]">Aset Digital</span>{' '}
            Tanpa Meninggalkan{' '}
            <span className="relative inline-block mx-1 mt-2 align-bottom">
              <span className="relative z-10 bg-[#BFDBFE]/80 text-[#0F2C59] px-2.5 py-0.5 rounded-sm border-l-2 border-r-2 border-[#1D4ED8] font-bold inline-block">
                {/* Top-left pin */}
                <span className="absolute -top-1 -left-[5px] w-2.5 h-2.5 rounded-full bg-[#1D4ED8] shadow-sm" />
                Pekerjaan Utama
                {/* Bottom-right pin */}
                <span className="absolute -bottom-1 -right-[5px] w-2.5 h-2.5 rounded-full bg-[#1D4ED8] shadow-sm" />
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.16 }}
            className="text-slate-700 text-lg md:text-xl leading-relaxed mb-6 md:mb-8 font-normal max-w-xl"
          >
            Yogi Istianto membantu Anda membangun penghasilan sampingan terukur lewat produk digital, tanpa resign, tanpa modal besar, dan tanpa mengganggu jam kerja.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.24 }}
            className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-10"
          >
            <Link
              href="#course"
              className="btn-primary font-medium text-base px-7 py-3.5 rounded-lg inline-flex items-center justify-center gap-2 w-full sm:w-auto group active:scale-[0.98] transition-all duration-150 ease-out"
            >
              <span>Lihat Course Digital</span>
              <ArrowRight size={16} className="transition-transform duration-150 ease-out group-hover:translate-x-1" />
            </Link>
            <a
              href="https://instagram.com/bankerdapatcuan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary font-medium text-base px-7 py-3.5 rounded-lg inline-flex items-center justify-center gap-2 w-full sm:w-auto group active:scale-[0.98] transition-all duration-150 ease-out"
            >
              <InstagramIcon size={16} className="text-slate-700 group-hover:text-slate-950 transition-colors shrink-0" />
              <span>Kunjungi Instagram</span>
            </a>
          </motion.div>

          {/* Clean Editorial Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.32 }}
            className="flex items-center gap-2.5"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <p className="text-slate-700 text-sm font-normal">
              Bergabung bersama <span className="text-slate-950 font-semibold font-mono">2.000+ member</span> komunitas kami
            </p>
          </motion.div>
        </div>

        {/* Right Column: Visual Frame (Editorial Blueprint Annotation Frame) */}
        <div className="relative">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 rounded-full bg-blue-500/5 blur-3xl" />
          </div>

          <BlueprintCreatorFrame isLoaded={isLoaded} />
        </div>
      </div>
    </section>
  );
}
