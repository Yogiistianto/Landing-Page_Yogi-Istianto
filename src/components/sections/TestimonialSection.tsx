import { Award, Star } from 'lucide-react';
import { testimonials } from '@/data/portfolioData';

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section id="testimoni" className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-semibold mb-4">
          <Award size={12} />
          Bukti Nyata Komunitas
        </div>
        <h2 className="text-3xl md:text-4xl font-black">Hasil Nyata dari Member Kami</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="p-6 bg-[#13131A] border border-[#1E1E2E] rounded-2xl hover:border-yellow-400/30 transition"
          >
            <StarRow count={t.stars} />
            <p className="text-slate-300 leading-relaxed my-4 text-sm">&ldquo;{t.text}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-black text-black">
                {t.avatar}
              </div>
              <div>
                <p className="font-bold text-white text-sm">{t.name}</p>
                <p className="text-slate-500 text-xs">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

