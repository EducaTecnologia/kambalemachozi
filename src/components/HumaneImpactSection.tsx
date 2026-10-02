import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { I18N_STRINGS, IMAGES } from '../data/content';

interface HumaneImpactSectionProps {
  currentLang: Language;
  onOpenVolunteer: () => void;
}

export const HumaneImpactSection: React.FC<HumaneImpactSectionProps> = ({
  currentLang,
  onOpenVolunteer,
}) => {
  const t = I18N_STRINGS[currentLang].humaneImpact;

  return (
    <section className="relative bg-white overflow-hidden py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full Background Image Card Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[500px] sm:min-h-[540px] flex items-center border border-slate-200/20">
          {/* Background Image covering 100% of the section */}
          <img
            src={IMAGES.communityAction}
            alt="Opérations minières et génie civil de ETS KAMBALE MACHOZI en République Démocratique du Congo"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="lazy"
          />

          {/* High-Impact Gradient Overlay for pristine text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1030]/95 via-[#0B1030]/85 to-[#0B1030]/40 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1030]/90 via-transparent to-[#0B1030]/40 lg:hidden" />

          {/* Content Block */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl text-white">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-[#F7C600]" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#F7C600]">
                {t.kicker}
              </span>
            </div>

            {/* Big 3-word typographic punch */}
            <div className="space-y-1 mb-6">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase font-display leading-none text-white">
                {t.word1}
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase font-display leading-none text-white">
                {t.word2}
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-serif italic tracking-tight leading-none text-[#F7C600] font-normal">
                {t.word3}
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal mb-8 max-w-xl">
              {t.body}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenVolunteer}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F7C600] hover:bg-[#e5b700] active:scale-95 text-[#0B1030] font-black text-sm uppercase tracking-wider rounded-xl shadow-xl transition-all cursor-pointer group whitespace-nowrap"
              >
                <span>{t.cta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Floating Location Tag */}
          <div className="absolute bottom-6 right-6 z-10 hidden sm:flex items-center gap-2 bg-black/75 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold text-white border border-white/20 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#F7C600]" />
            <span>🇨🇩 Kinshasa • Kolwezi (Lualaba) • Goma</span>
          </div>
        </div>
      </div>

      {/* Decorative Ribbon underneath */}
      <div className="w-full h-3 mt-12 sm:mt-16 bg-gradient-to-r from-[#1B2A6B] via-[#D71920] to-[#F7C600]" />
    </section>
  );
};
