import React, { useEffect, useState, useRef } from 'react';
import { getTranslation } from '../data/content';
import { Fuel, Award, Truck, Clock } from 'lucide-react';
import { Language } from '../types';

interface ImpactNumbersProps {
  currentLang?: Language;
}

export const ImpactNumbers: React.FC<ImpactNumbersProps> = ({ currentLang = 'fr' }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const t = getTranslation(currentLang).impactStats;
  const icons = [Fuel, Award, Truck, Clock];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 2000;
          const frameDuration = 1000 / 60;
          const totalFrames = Math.round(duration / frameDuration);
          let frame = 0;

          const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const easeProgress = 1 - Math.pow(1 - progress, 4);

            setCounts(
              t.items.map((stat) => Math.round(stat.value * easeProgress))
            );

            if (frame === totalFrames) {
              clearInterval(timer);
              setCounts(t.items.map((stat) => stat.value));
            }
          }, frameDuration);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, t.items]);

  const formatNumber = (val: number) => {
    if (currentLang === 'en') return val.toLocaleString('en-US');
    if (currentLang === 'pt') return val.toLocaleString('pt-BR');
    return val.toLocaleString('fr-FR');
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 bg-slate-50 border-b border-slate-200"
      aria-label="Capacités opérationnelles de ETS KAMBALE MACHOZI"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#D71920]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#1B2A6B]">
              {t.sectionKicker}
            </span>
            <span className="w-6 h-[2px] bg-[#D71920]" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
            {t.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            {t.sub}
          </p>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            const currentCount = counts[idx] || stat.value;
            return (
              <div
                key={stat.id}
                className="group relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1B2A6B] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1B2A6B] group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight tabular-nums">
                    {formatNumber(currentCount)}
                    <span className="text-[#D71920]">{stat.suffix}</span>
                  </div>
                  <h3 className="mt-2 text-sm sm:text-base font-bold text-slate-800 font-display">{stat.label}</h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
