import React from 'react';
import { MapPin, Quote, Shield, CheckCircle2, Award } from 'lucide-react';
import { getTranslation } from '../data/content';
import { Language } from '../types';

interface TeamSectionProps {
  currentLang?: Language;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ currentLang = 'fr' }) => {
  const t = getTranslation(currentLang).team;
  const president = t.members[0];

  return (
    <section id="equipe" className="relative py-20 sm:py-28 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1B2A6B_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2.5px] bg-[#D71920] rounded-full" />
            <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-[#1B2A6B]">
              {t.sectionKicker}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
            {t.title}
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.sub}
          </p>
        </div>

        {/* Featured Executive Card (M. Bertrand Kambale Machozi) */}
        {president && (
          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-xl shadow-slate-200/50 hover:border-slate-300 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Leader Photo */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/4.5] sm:aspect-square max-w-sm sm:max-w-md mx-auto border-2 border-slate-100 shadow-md bg-slate-100 group">
                  <img
                    src={president.image}
                    alt={president.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#0A1938]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#F7C600] flex items-center gap-2 shadow-lg border border-white/10">
                    <Shield className="w-3.5 h-3.5 text-[#F7C600]" />
                    <span>{t.presidentCardBadge}</span>
                  </div>
                </div>
              </div>

              {/* Leader Content */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-3.5 py-1 rounded-full bg-[#D71920] text-white font-extrabold uppercase tracking-wider shadow-xs">
                    {president.role}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-700 bg-slate-100 px-3 py-1 rounded-full font-semibold border border-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-[#1B2A6B]" />
                    <span>{president.location}</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full font-semibold border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t.activeMandate}</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-display">
                    {president.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-sm font-semibold text-[#1B2A6B]">
                    <Award className="w-4 h-4 text-[#F7C600]" />
                    <span>{t.strategicVisionSubtitle}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {president.bio}
                </p>

                {president.quote && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/90 border-l-4 border-[#1B2A6B] text-xs sm:text-sm text-slate-700 italic flex items-start gap-3 shadow-xs">
                    <Quote className="w-5 h-5 text-[#1B2A6B] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">« {president.quote} »</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
