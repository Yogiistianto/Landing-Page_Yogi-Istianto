import Image from 'next/image';
import { Camera, Film, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#1E1E2E] bg-[#13131A]">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-profil.jpg"
            alt="Profil Yogi Istianto"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover border border-gray-700"
          />
          <span className="font-bold text-white">Yogi Istianto | Digital Creator</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#tentang" className="text-slate-500 hover:text-white text-sm transition">Tentang</a>
          <a href="#course" className="text-slate-500 hover:text-white text-sm transition">Produk</a>
          <a href="#faq" className="text-slate-500 hover:text-white text-sm transition">FAQ</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com/bankerdapatcuan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @bankerdapatcuan"
            className="w-9 h-9 rounded-xl bg-[#0A0A0F] border border-[#1E1E2E] flex items-center justify-center hover:border-emerald-500/50 transition"
          >
            <Camera size={16} className="text-slate-400" />
          </a>
          <a
            href="#"
            aria-label="Video Channel"
            className="w-9 h-9 rounded-xl bg-[#0A0A0F] border border-[#1E1E2E] flex items-center justify-center hover:border-emerald-500/50 transition"
          >
            <Film size={16} className="text-slate-400" />
          </a>
          <a
            href="#"
            aria-label="Chat Community"
            className="w-9 h-9 rounded-xl bg-[#0A0A0F] border border-[#1E1E2E] flex items-center justify-center hover:border-emerald-500/50 transition"
          >
            <MessageCircle size={16} className="text-slate-400" />
          </a>
        </div>
      </div>
      <div className="border-t border-[#1E1E2E] py-4 text-center">
        <p className="text-slate-600 text-xs">
          © {new Date().getFullYear()} Yogi Istianto — @bankerdapatcuan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

