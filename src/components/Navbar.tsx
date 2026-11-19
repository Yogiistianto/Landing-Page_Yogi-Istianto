'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home, BookOpen, Star, Sparkles, ArrowRight } from 'lucide-react';

const navLinks = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#course', label: 'Course' },
  { href: '#testimoni', label: 'Testimoni' },
  { href: '#faq', label: 'FAQ' },
];

export default function Navbar() {
  const [isOverDark, setIsOverDark] = useState(false);

  useEffect(() => {
    const checkDarkSection = () => {
      const darkSections = document.querySelectorAll('[data-dark-section="true"]');
      let overDark = false;
      const navCheckY = 48; // Y-coordinate line of top floating navbar
      darkSections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= navCheckY && rect.bottom >= navCheckY) {
          overDark = true;
        }
      });
      setIsOverDark(overDark);
    };

    window.addEventListener('scroll', checkDarkSection, { passive: true });
    window.addEventListener('resize', checkDarkSection, { passive: true });
    checkDarkSection();
    return () => {
      window.removeEventListener('scroll', checkDarkSection);
      window.removeEventListener('resize', checkDarkSection);
    };
  }, []);

  return (
    <>
      {/* ========================================================= */}
      {/* 1. DESKTOP & TABLET: Top Floating Liquid Glass Capsule Nav */}
      {/* ========================================================= */}
      <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto w-full max-w-3xl rounded-full px-3.5 py-2 flex items-center justify-between backdrop-blur-2xl backdrop-saturate-[180%] border relative overflow-hidden transition-all duration-300 ${
            isOverDark
              ? 'bg-white/15 border-white/35 ring-1 ring-white/15 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.6),inset_0_-1.5px_2px_rgba(255,255,255,0.15),0_12px_32px_rgba(0,0,0,0.35)]'
              : 'bg-white/40 border-white/60 ring-1 ring-slate-900/5 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.95),inset_0_-1.5px_2px_rgba(255,255,255,0.35),0_12px_32px_rgba(15,23,42,0.12)]'
          }`}
        >
          {/* Top Convex Lens Refraction Sheen (3D Specular Highlight) */}
          <div className="absolute top-0 inset-x-6 h-[45%] rounded-t-full bg-gradient-to-b from-white/60 via-white/20 to-transparent pointer-events-none" />

          {/* Left: Brand Identity */}
          <Link href="#" className="flex items-center gap-2.5 shrink-0 relative z-10 group">
            <Image
              src="/logo-profil.jpg"
              alt="Profil Yogi Istianto"
              width={32}
              height={32}
              className={`w-8 h-8 rounded-full object-cover shadow-xs transition-all duration-300 ${
                isOverDark ? 'ring-1 ring-white/40' : 'ring-1 ring-slate-900/10'
              }`}
            />
            <span
              className={`text-sm font-semibold tracking-tight transition-colors duration-300 ${
                isOverDark ? 'text-white' : 'text-slate-950'
              }`}
            >
              Yogi Istianto{' '}
              <span
                className={`font-normal hidden sm:inline text-xs transition-colors duration-300 ${
                  isOverDark ? 'text-blue-200/80' : 'text-slate-500'
                }`}
              >
                | Digital Creator
              </span>
            </span>
          </Link>

          {/* Center: Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 relative z-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isOverDark
                    ? 'text-white/90 hover:text-white hover:bg-white/15'
                    : 'text-slate-800 hover:text-slate-950 hover:bg-slate-900/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: CTA Button */}
          <div className="relative z-10 flex items-center">
            <Link
              href="#penawaran"
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-sm rounded-full transition-all duration-300 tracking-tight hover:-translate-y-0.5 active:translate-y-0 ${
                isOverDark
                  ? 'bg-blue-400 text-slate-950 font-black hover:bg-blue-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_2px_12px_rgba(96,165,250,0.4)]'
                  : 'bg-[#0F2C59] text-white font-bold hover:bg-[#163A70] shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_2px_8px_rgba(15,44,89,0.25)]'
              }`}
            >
              Mulai Sekarang <ArrowRight size={13} />
            </Link>
          </div>
        </nav>
      </header>

      {/* ========================================================= */}
      {/* 2. MOBILE: Floating Bottom Liquid Glass Dock               */}
      {/* ========================================================= */}
      <aside
        aria-label="Mobile Navigation"
        className="fixed bottom-4 inset-x-4 z-50 mx-auto max-w-sm md:hidden pointer-events-auto"
      >
        <nav className="relative rounded-full p-1.5 bg-white/75 backdrop-blur-2xl backdrop-saturate-[180%] border border-white/80 ring-1 ring-slate-900/5 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.95),inset_0_-1px_1px_rgba(255,255,255,0.3),0_12px_36px_rgba(15,23,42,0.18)] overflow-hidden">
          {/* Top Specular Lens Refraction Sheen */}
          <div className="absolute top-0 inset-x-4 h-[42%] rounded-t-full bg-gradient-to-b from-white/75 via-white/25 to-transparent pointer-events-none" />

          <div className="relative z-10 grid grid-cols-4 items-center gap-1">
            {/* 1. Home */}
            <Link
              href="#tentang"
              className="flex flex-col items-center justify-center py-1.5 rounded-full text-slate-700 hover:text-slate-950 active:scale-95 transition-all group"
            >
              <Home size={18} className="group-hover:text-[#0F2C59] transition-colors" />
              <span className="text-[10px] font-semibold tracking-tight mt-0.5">Home</span>
            </Link>

            {/* 2. Course */}
            <Link
              href="#course"
              className="flex flex-col items-center justify-center py-1.5 rounded-full text-slate-700 hover:text-slate-950 active:scale-95 transition-all group"
            >
              <BookOpen size={18} className="group-hover:text-[#0F2C59] transition-colors" />
              <span className="text-[10px] font-semibold tracking-tight mt-0.5">Course</span>
            </Link>

            {/* 3. Testimoni */}
            <Link
              href="#testimoni"
              className="flex flex-col items-center justify-center py-1.5 rounded-full text-slate-700 hover:text-slate-950 active:scale-95 transition-all group"
            >
              <Star size={18} className="group-hover:text-[#0F2C59] transition-colors" />
              <span className="text-[10px] font-semibold tracking-tight mt-0.5">Testimoni</span>
            </Link>

            {/* 4. Beli */}
            <Link
              href="#penawaran"
              className="flex flex-col items-center justify-center py-1.5 rounded-full bg-[#0F2C59] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_2px_8px_rgba(15,44,89,0.3)] active:scale-95 hover:bg-[#163A70] transition-all"
            >
              <Sparkles size={16} className="text-blue-300" />
              <span className="text-[10px] font-bold tracking-tight mt-0.5">Beli</span>
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}
