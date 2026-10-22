import React from 'react';
import { ShieldCheck, Award, Truck, Clock, Shield } from 'lucide-react';
import { Language } from '../types';
import { getTranslation, IMAGES } from '../data/content';

interface MissionVisionProps {
  currentLang: Language;
}

export const MissionVision: React.FC<MissionVisionProps> = ({ currentLang }) => {
  const t = getTranslation(currentLang).mission;

  const valueIcons = [ShieldCheck, Award, Truck, Clock];
  const valueAccents = [
    'border-l-4 border-l-[#D71920]',
    'border-l-4 border-l-[#F7C600]',
    'border-l-4 border-l-[#1B2A6B]',
    'border-l-4 border-l-emerald-500',
  ];
  const valueIconBgs = [
    'bg-red-50 text-[#D71920]',
    'bg-amber-50 text-amber-700',
    'bg-blue-50 text-[#1B2A6B]',
    'bg-emerald-50 text-emerald-700',
  ];

  const coreValues = t.values.map((val, idx) => ({
    icon: valueIcons[idx % valueIcons.length],
    title: val.title,
    desc: val.desc,
    accent: valueAccents[idx % valueAccents.length],
    iconBg: valueIconBgs[idx % valueIconBgs.length],
  }));

  return (
    <section id="apropos" className="relative py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Block: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Left Column: Full Unobstructed Executive Leader Portrait (Matching Governance section) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/4.8] sm:aspect-[4/4.5] max-w-sm sm:max-w-md lg:max-w-none mx-auto border-2 border-slate-200/90 shadow-xl bg-slate-100 group">
              <img
                src={IMAGES.leaderPortrait}
                alt="M. Bertrand Kambale Machozi — Direction Générale ETS KAMBALE MACHOZI"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Elegant subtle badge matching Governance card */}
              <div className="absolute bottom-4 left-4 bg-[#0A1938]/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-[#F7C600] flex items-center gap-2 shadow-lg border border-white/10">
                <Shield className="w-3.5 h-3.5 text-[#F7C600]" />
                <span>{currentLang === 'pt' ? 'Direção Geral' : currentLang === 'en' ? 'General Management' : 'Direction Générale'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Corporate Narrative & Leader Profile */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-2.5">
                <span className="w-8 h-[3px] bg-[#D71920]" />
                <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#1B2A6B]">
                  {t.sectionKicker}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-display leading-snug text-balance">
                {t.title}
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p className="border-l-2 border-[#D71920] pl-4 font-semibold text-slate-800">
                {t.p1}
              </p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
            </div>

            {/* Strategic Leadership & Executive Bio Box (inserted right after p3) */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-2.5 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#D71920]">
                  <Award className="w-4 h-4 text-[#F7C600]" />
                  <span>{t.leaderName || 'Sr. Bertrand Kambale Machozi'}</span>
                </div>
                <span className="text-[11px] font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                  {currentLang === 'pt' ? 'Liderança Executiva' : currentLang === 'en' ? 'Executive Leadership' : 'Leadership Exécutif'}
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                {t.leaderTitle || 'ETS KAMBALE MACHOZI (KM) — Liderança & Visão Estratégica'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {t.leaderBio}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Block: 4 Strategic Strengths ("Nos Atouts" from PDF Page 9) */}
        <div className="pt-4">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              {t.valuesTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all ${val.accent}`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${val.iconBg}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 font-display mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
