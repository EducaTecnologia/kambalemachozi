import React from 'react';
import { MapPin, Quote, Shield, CheckCircle2, Globe, Award } from 'lucide-react';
import { getTranslation } from '../data/content';
import { Language } from '../types';

interface TeamSectionProps {
  currentLang?: Language;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ currentLang = 'fr' }) => {
  const t = getTranslation(currentLang).team;
  const president = t.members[0];
  const directors = t.members.slice(1);

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

        {/* 1. Featured Executive Card (M. Bertrand Kambale Machozi) */}
        {president && (
          <div className="mb-10 sm:mb-14 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-xl shadow-slate-200/50 hover:border-slate-300 transition-all duration-300">
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

        {/* 2. Operational Divisions */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{t.directorsHeader}</span>
            <div className="h-[1px] flex-1 bg-slate-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {directors.map((member, idx) => (
              <div
                key={idx}
                className="group rounded-3xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Portrait Container */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/4.3] w-full mb-5 bg-slate-100 border border-slate-100 shadow-sm">
                    <img
                      src={member.image}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#0A1938]/85 backdrop-blur-md px-3 py-1.5 rounded-xl text-[11px] font-semibold text-white flex items-center justify-between border border-white/10 shadow-md">
                      <div className="flex items-center gap-1.5 truncate">
                        <MapPin className="w-3.5 h-3.5 text-[#F7C600] shrink-0" />
                        <span className="truncate">{member.location}</span>
                      </div>
                      <Globe className="w-3 h-3 text-slate-300 shrink-0 ml-1" />
                    </div>
                  </div>

                  <div className="mb-2">
                    <span className="inline-block text-xs font-black uppercase tracking-wider text-[#D71920] bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-md">
                      {member.role}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-black text-slate-900 font-display mb-2.5 group-hover:text-[#1B2A6B] transition-colors">
                    {member.name}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                    {member.bio}
                  </p>
                </div>

                {member.quote && (
                  <div className="pt-3.5 mt-auto border-t border-slate-100 text-xs text-slate-600 italic bg-slate-50/70 p-3 rounded-xl flex items-start gap-2">
                    <Quote className="w-3.5 h-3.5 text-[#1B2A6B] shrink-0 mt-0.5" />
                    <span className="leading-snug">« {member.quote} »</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
