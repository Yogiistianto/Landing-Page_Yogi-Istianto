import { BarChart3, ArrowRight } from 'lucide-react';
import { earningsItems } from '@/data/portfolioData';

export default function EarningsHighlight() {
  return (
    <section className="bg-yellow-400 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column: Dark Mockup Card */}
        <div className="relative order-2 md:order-1">
          <div className="bg-black rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-white/40 text-xs">Yogi Istianto — Katalog Produk</span>
            </div>
            <div className="space-y-3">
              {earningsItems.map((item) => (
                <div key={item.label} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <div>
                    <p className="text-white text-sm font-semibold">{item.label}</p>
                    <p className="text-white/50 text-xs">{item.sales}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-black text-sm">{item.revenue}</p>
                  </div>
                </div>
              ))}
              <div className="mt-4 p-3 bg-emerald-500/20 rounded-xl border border-emerald-500/30">
                <p className="text-emerald-300 text-xs font-medium">Investasi Ilmu Mulai Dari</p>
                <p className="text-emerald-400 text-2xl font-black">Rp 129.000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Text & CTA */}
        <div className="order-1 md:order-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/10 text-black text-xs font-bold mb-6">
            <BarChart3 size={12} />
            Rekomendasi Produk Digital
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-black leading-tight mb-6">
            Mulai Perjalananmu dengan Panduan yang Tepat
          </h2>
          <p className="text-black/70 leading-relaxed mb-8">
            Saya telah menyeleksi kelas dan panduan digital terbaik yang terbukti membantu ribuan member di komunitas. Pilih materi yang paling sesuai dengan kebutuhanmu saat ini, dan mulai bangun aset digitalmu tanpa harus coba-coba dari nol.
          </p>
          <a
            href="#course"
            className="inline-flex items-center gap-2 bg-black text-yellow-400 font-bold px-7 py-4 rounded-xl hover:bg-black/80 transition"
          >
            Pilih Produk Sekarang <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

