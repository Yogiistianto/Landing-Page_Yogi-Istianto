import { Target, Play } from 'lucide-react';
import { features, reelsMockups } from '@/data/portfolioData';

export default function FeatureSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text & Features List */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-semibold mb-6">
            <Target size={12} />
            Kenapa Perlu Punya Aset Digital?
          </div>
          <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6">
            Gaji utama aman,{' '}
            <span className="text-gradient-yellow">income tambahan</span>
            <br />
            jalan terus.
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Sebagai pekerja profesional, waktumu sangat berharga. Saatnya mengubah waktu luang menjadi aset digital yang bekerja 24/7 — bahkan saat kamu tidur.
          </p>
          <div className="space-y-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex gap-4 p-4 rounded-2xl bg-[#13131A] border border-[#1E1E2E] hover:border-emerald-500/30 transition group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition">
                  <f.icon size={18} className="text-emerald-400" />
                </div>
                <div>
                  <p className="font-bold text-white mb-1">{f.title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Instagram Reels Grid Mockup */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 rounded-full bg-yellow-400/5 blur-3xl" />
          </div>
          <div className="relative grid grid-cols-2 gap-4">
            {reelsMockups.map((reel) => (
              <div
                key={reel.label}
                className={`aspect-[9/16] rounded-2xl bg-gradient-to-b ${reel.color} border border-[#1E1E2E] relative overflow-hidden group cursor-pointer`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition">
                    <Play size={16} className="text-white" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80">
                  <p className="text-yellow-400 text-xs font-black">{reel.views} views</p>
                  <p className="text-white text-xs font-medium leading-tight mt-0.5">{reel.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

