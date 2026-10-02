import React from 'react';
import { ShieldCheck, Award, Truck, Clock, CheckCircle2 } from 'lucide-react';
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
          {/* Left Column: Executive Vision Card & Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl">
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src={IMAGES.leaderPortrait}
                  alt="M. Bertrand Kambale Machozi — Direction Générale ETS KAMBALE MACHOZI"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-900 shadow-md">
                  {t.badgeRdc}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#F7C600] block mb-1">
                    ETS KAMBALE MACHOZI (KM)
                  </span>
                  <blockquote className="text-sm sm:text-base font-bold text-white font-display leading-snug">
                    {t.manifestoQuote}
                  </blockquote>
                </div>
              </div>

              {/* Legal & Executive details underneath image */}
              <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200">
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  {t.oathDesc}
                </p>
                <div className="mt-3 pt-3 border-t border-slate-200 flex items-start gap-2 text-xs font-mono font-bold text-[#1B2A6B]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{t.ngoLegalCert}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Corporate Narrative */}
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
