import { Sparkles, ArrowRight, Camera } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 pb-28">
      <div className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden glow-green">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold mb-6">
            <Sparkles size={12} />
            Investasi Cerdas untuk Masa Depan
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
            Siap Bangun Aset Digital
            <br />
            Pertamamu?
          </h2>
          <p className="text-emerald-100 text-lg mb-10 max-w-xl mx-auto">
            Bergabunglah bersama 2.000+ member di komunitas kami yang sudah membuktikan bahwa membangun sumber penghasilan kedua dari internet itu sangat mungkin dilakukan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#course"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-lg px-8 py-4 rounded-xl transition"
            >
              Ambil Bundle Sekarang <ArrowRight size={20} />
            </a>
            <a
              href="https://instagram.com/bankerdapatcuan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-xl border border-white/20 transition"
            >
              <Camera size={20} />
              Follow Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

