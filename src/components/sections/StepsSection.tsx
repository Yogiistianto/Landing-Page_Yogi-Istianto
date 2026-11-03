import { BookOpen, Zap, TrendingUp } from 'lucide-react';
import { steps } from '@/data/portfolioData';

const stepIcons = [BookOpen, Zap, TrendingUp];

export default function StepsSection() {
  return (
    <section className="bg-[#13131A] border-y border-[#1E1E2E] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            Mulai dalam{' '}
            <span className="text-gradient-green">3 Langkah Sederhana</span>
          </h2>
          <p className="text-slate-400">Tidak perlu pusing bikin produk sendiri. Cukup pelajari sistemnya, praktikkan, dan mulai hasilkan komisi.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => {
            const Icon = stepIcons[i];
            return (
              <div key={s.step} className="relative text-center group">
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] border-t-2 border-dashed border-[#1E1E2E]" />
                )}
                <div className="relative inline-flex w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 items-center justify-center mb-5 group-hover:bg-emerald-500/20 transition">
                  <Icon size={24} className="text-emerald-400" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                    <span className="text-black text-xs font-black">{i + 1}</span>
                  </div>
                </div>
                <h3 className="font-black text-lg mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

