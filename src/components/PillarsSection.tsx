import React from 'react';
import {
  HardHat,
  Fuel,
  Shield,
  Sprout,
  Pickaxe,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import { Language } from '../types';
import { getTranslation, IMAGES } from '../data/content';

interface PillarsSectionProps {
  currentLang: Language;
  onSelectPillar?: (pillarId: string) => void;
  onOpenDonate?: (amount?: number) => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({
  currentLang,
}) => {
  const t = getTranslation(currentLang).pillars;

  const pillarMeta = [
    {
      icon: HardHat,
      image: IMAGES.heroPeople,
      accentColor: 'text-amber-600',
      badgeBg: 'bg-amber-50 text-amber-900 border-amber-200',
      borderAccent: 'hover:border-amber-400',
    },
    {
      icon: Fuel,
      image: IMAGES.heroAction,
      accentColor: 'text-red-600',
      badgeBg: 'bg-red-50 text-red-900 border-red-200',
      borderAccent: 'hover:border-red-400',
    },
    {
      icon: Shield,
      image: IMAGES.fardcRations,
      accentColor: 'text-emerald-700',
      badgeBg: 'bg-emerald-50 text-emerald-900 border-emerald-200',
      borderAccent: 'hover:border-emerald-400',
    },
    {
      icon: Sprout,
      image: IMAGES.projectAgri,
      accentColor: 'text-amber-800',
      badgeBg: 'bg-amber-50 text-amber-900 border-amber-200',
      borderAccent: 'hover:border-amber-500',
    },
    {
      icon: Pickaxe,
      image: IMAGES.heroHealth,
      accentColor: 'text-blue-700',
      badgeBg: 'bg-blue-50 text-blue-900 border-blue-200',
      borderAccent: 'hover:border-blue-400',
    },
    {
      icon: Building2,
      image: IMAGES.aidDistributionAerial,
      accentColor: 'text-indigo-700',
      badgeBg: 'bg-indigo-50 text-indigo-900 border-indigo-200',
      borderAccent: 'hover:border-indigo-400',
    },
  ];

  return (
    <section id="programmes" className="relative py-20 sm:py-28 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#D71920]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#1B2A6B]">
              {t.sectionKicker}
            </span>
            <span className="w-8 h-[2px] bg-[#D71920]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display text-balance">
            {t.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {t.sub}
          </p>
        </div>

        {/* 6 Strategic Sectors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {t.items.map((item, idx) => {
            const meta = pillarMeta[idx % pillarMeta.length];
            const Icon = meta.icon;

            return (
              <div
                key={item.id}
                className={`group rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between ${meta.borderAccent}`}
              >
                {/* Card Banner Image */}
                <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-slate-100">
                  <img
                    src={meta.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                  {/* Tag badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md shadow-sm ${meta.badgeBg}`}>
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.tag}</span>
                    </span>
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md shadow-sm flex items-center justify-center text-xs font-mono font-bold text-slate-900">
                    0{idx + 1}
                  </div>

                  {/* Title overlay on image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl sm:text-2xl font-black font-display tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content + Footer */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="p-6 sm:p-8 space-y-4">
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>

                    {/* Key points checklist */}
                    <div className="space-y-2.5 pt-2">
                      {item.keyPoints.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#1B2A6B] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Label (No Quote Button) */}
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-slate-500">
                      ETS KAMBALE MACHOZI • SECTEUR 0{idx + 1}
                    </span>
                    <span className="text-xs font-bold text-[#1B2A6B] uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
