import Image from 'next/image';
import Link from 'next/link';
import { Film } from 'lucide-react';
import InstagramIcon from '@/components/icons/InstagramIcon';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import { WA_URL } from '@/data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-slate-300/80 bg-white shadow-[0_-2px_4px_rgba(15,23,42,0.02)] pt-10 md:pt-12 pb-24 md:pb-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pb-8 flex flex-col md:flex-row items-center justify-between gap-6">
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
          {/* Tombol 1: Profil Instagram */}
          <a
            href="https://www.instagram.com/bankerdapatcuan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Yogi Istianto"
            className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-300 flex items-center justify-center text-slate-700 hover:border-slate-900 hover:text-[#0F2C59] hover:bg-slate-100 transition-colors duration-150 active:scale-[0.96] shadow-xs"
          >
            <InstagramIcon size={16} />
          </a>

          {/* Tombol 2: Instagram Reels */}
          <a
            href="https://www.instagram.com/bankerdapatcuan/reels/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Reels Yogi Istianto"
            className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-300 flex items-center justify-center text-slate-700 hover:border-slate-900 hover:text-[#0F2C59] hover:bg-slate-100 transition-colors duration-150 active:scale-[0.96] shadow-xs"
          >
            <Film size={16} />
          </a>

          {/* Tombol 3: Chat WhatsApp Langsung */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat WhatsApp"
            className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-300 flex items-center justify-center text-slate-700 hover:border-slate-900 hover:text-[#0F2C59] hover:bg-slate-100 transition-colors duration-150 active:scale-[0.96] shadow-xs"
          >
            <WhatsAppIcon size={16} />
          </a>
        </div>
      </div>
      <div className="border-t border-slate-200/80 pt-4 text-center max-w-6xl mx-auto px-5 sm:px-8">
        <p className="text-slate-600 text-xs font-medium">
          © {new Date().getFullYear()} Yogi Istianto | @bankerdapatcuan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
