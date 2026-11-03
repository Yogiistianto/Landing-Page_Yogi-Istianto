'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/portfolioData';

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#1E1E2E] rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition"
        aria-expanded={open}
      >
        <span className="font-semibold text-white pr-4">{q}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-emerald-400 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="px-6 pb-5 text-slate-400 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  return (
    <section id="faq" className="max-w-3xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-black mb-3">Pertanyaan yang Sering Ditanyakan</h2>
        <p className="text-slate-400">Ada yang mengganjal? Cek dulu di sini.</p>
      </div>
      <div className="space-y-3">
        {faqs.map((faq) => (
          <FaqItem key={faq.q} q={faq.q} a={faq.a} />
        ))}
      </div>
    </section>
  );
}

