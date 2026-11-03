import { stats } from '@/data/portfolioData';

export default function StatsBar() {
  return (
    <div className="border-y border-[#1E1E2E] bg-[#13131A]">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map(({ value, label, icon: Icon }) => (
          <div key={label} className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Icon size={18} className="text-emerald-400" />
              <p className="text-2xl md:text-3xl font-black text-white">{value}</p>
            </div>
            <p className="text-slate-500 text-sm">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

