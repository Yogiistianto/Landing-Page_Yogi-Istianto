import { BookOpen, CheckCircle2 } from 'lucide-react';
import { courseModules, courseIncluded } from '@/data/portfolioData';

export default function CourseSection() {
  return (
    <section id="course" className="max-w-7xl mx-auto px-6 py-24">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4">
          <span>💎</span>
          Fasilitas Eksklusif
        </div>
        <h2 className="text-3xl md:text-5xl font-black mb-4">
          Dukungan Penuh & Ekosistem Belajar
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Bukan sekadar materi biasa. Dapatkan fasilitas lengkap yang dirancang khusus agar kamu tidak berjuang sendirian dalam membangun aset digital.
        </p>
      </div>

      {/* 6 Modules Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {courseModules.map((mod) => (
          <div
            key={mod.num}
            className="p-6 bg-[#13131A] border border-[#1E1E2E] rounded-2xl hover:border-emerald-500/40 transition group"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-emerald-500/30 group-hover:text-emerald-500/60 transition leading-none">
                {mod.num}
              </div>
              <div>
                <p className="font-bold text-white mb-2">{mod.title}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{mod.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* What's Included & Pricing Card */}
      <div className="bg-gradient-to-br from-emerald-950 to-[#0A0A0F] border border-emerald-500/30 rounded-3xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-black mb-3">Penawaran Spesial: Bundle Super Affiliate</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Lebih hemat, lebih berdampak. Spesial untuk Anda, investasi di Super Affiliate hari ini otomatis membuka akses ke DUA produk premium lainnya tanpa biaya tambahan. Beli 1, dapat 3!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {courseIncluded.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span className="text-slate-300 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#13131A] border border-[#1E1E2E] rounded-2xl p-8 text-center">
            <p className="text-slate-500 text-sm mb-2 line-through">Rp 750.000</p>
            <p className="text-5xl font-black text-white mb-1">Rp 250.000</p>
            <p className="text-yellow-400 font-bold text-sm mb-6 flex items-center justify-center gap-1.5">
              <span>⚡</span> Promo Bundle Terbatas!
            </p>
            <a
              href="https://instagram.com/bankerdapatcuan"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black py-4 rounded-xl transition text-base md:text-lg glow-green"
            >
              Ambil Bundle Sekarang (Beli 1 Dapat 3)
            </a>
            <p className="text-slate-400 text-xs mt-4">Transaksi aman. Akses instan langsung ke member area.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

