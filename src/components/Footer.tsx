import Image from 'next/image';
import Link from 'next/link';
import { Camera, Film, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-300/80 bg-white shadow-[0_-2px_4px_rgba(15,23,42,0.02)]">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-profil.jpg"
            alt="Profil Yogi Istianto"
            width={34}
            height={34}
            className="w-8 h-8 rounded-full object-cover border border-slate-300 shadow-xs"
          />
          <span className="font-bold text-slate-950">Yogi Istianto | Digital Creator</span>
        </div>

        <div className="flex items-center gap-6">
          <Link href="#tentang" className="text-slate-700 hover:text-slate-950 text-sm transition font-semibold">Tentang</Link>
          <Link href="#course" className="text-slate-700 hover:text-slate-950 text-sm transition font-semibold">Produk</Link>
          <Link href="#faq" className="text-slate-700 hover:text-slate-950 text-sm transition font-semibold">FAQ</Link>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com/bankerdapatcuan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @bankerdapatcuan"
            className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-300/90 flex items-center justify-center hover:border-slate-500 hover:bg-slate-100 transition shadow-xs"
          >
            <Camera size={16} className="text-slate-700" />
          </a>
          <a
            href="https://instagram.com/bankerdapatcuan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Video Channel"
            className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-300/90 flex items-center justify-center hover:border-slate-500 hover:bg-slate-100 transition shadow-xs"
          >
            <Film size={16} className="text-slate-700" />
          </a>
          <a
            href="https://instagram.com/bankerdapatcuan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat Community"
            className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-300/90 flex items-center justify-center hover:border-slate-500 hover:bg-slate-100 transition shadow-xs"
          >
            <MessageCircle size={16} className="text-slate-700" />
          </a>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center">
        <p className="text-slate-600 text-xs font-medium">
          © {new Date().getFullYear()} Yogi Istianto | @bankerdapatcuan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
