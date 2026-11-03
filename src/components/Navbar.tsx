'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0F]/95 backdrop-blur-xl border-b border-[#1E1E2E]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-3">
          <Image
            src="/logo-profil.jpg"
            alt="Profil Yogi Istianto"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover border border-gray-700"
          />
          <span className="font-bold text-lg tracking-tight text-white">
            Yogi Istianto | Digital Creator
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#tentang" className="text-sm text-slate-400 hover:text-white transition">Tentang</Link>
          <Link href="#course" className="text-sm text-slate-400 hover:text-white transition">Course</Link>
          <Link href="#testimoni" className="text-sm text-slate-400 hover:text-white transition">Testimoni</Link>
          <Link href="#faq" className="text-sm text-slate-400 hover:text-white transition">FAQ</Link>
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="#course"
            className="hidden md:inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm px-5 py-2.5 rounded-xl transition"
          >
            Mulai Sekarang <ArrowRight size={14} />
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#13131A] border-t border-[#1E1E2E] px-6 py-4 flex flex-col gap-4">
          {['tentang', 'course', 'testimoni', 'faq'].map((href) => (
            <Link
              key={href}
              href={`#${href}`}
              onClick={() => setMenuOpen(false)}
              className="text-slate-300 hover:text-white capitalize py-2 transition"
            >
              {href}
            </Link>
          ))}
          <Link
            href="#course"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-emerald-500 text-black font-bold text-center py-3 rounded-xl"
          >
            Mulai Sekarang
          </Link>
        </div>
      )}
    </nav>
  );
}

