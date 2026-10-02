import React, { useState } from 'react';
import { FileText, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { I18N_STRINGS, IMAGES } from '../data/content';

interface AerialSupportSectionProps {
  currentLang: Language;
  onOpenDonate: (amount?: number) => void;
  onNavigateToOtherWays: () => void;
}

export const AerialSupportSection: React.FC<AerialSupportSectionProps> = ({
  currentLang,
  onOpenDonate,
  onNavigateToOtherWays,
}) => {
  const [frequency, setFrequency] = useState<'monthly' | 'once'>('monthly');
  const t = I18N_STRINGS[currentLang].aerialSupport;
  const tWays = I18N_STRINGS[currentLang].otherWaysToDonate;

  return (
    <section className="relative w-full min-h-[460px] sm:min-h-[540px] flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Background Image: Fuel fleet & industrial depot */}
      <img
        src={IMAGES.aidDistributionAerial}
        alt="Flotte logistique et dépôt de carburant certifié SGS de ETS KAMBALE MACHOZI"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark tint overlay for maximum contrast and legibility */}
      <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 border border-white/25 text-xs font-mono font-bold uppercase tracking-wider mb-6 text-[#F7C600]">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>RCCM: 14-A-01204 • ID.NAT: 3-93-N55476A • ARSP/CD/0000018850</span>
        </div>

        {/* Big Impact Title */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight font-display mb-4 drop-shadow-md text-balance">
          {t.title}
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-100 max-w-2xl mx-auto font-medium mb-8 leading-relaxed drop-shadow">
          {t.subtitle}
        </p>

        {/* Contract selector (Contrat Cadre vs Commande Spot) */}
        <div className="inline-flex items-center p-1 bg-black/60 backdrop-blur-md rounded-xl border border-white/20 mb-8">
          <button
            onClick={() => setFrequency('monthly')}
            className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              frequency === 'monthly'
                ? 'bg-[#2A3EB1] text-white shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            {tWays.monthly}
          </button>
          <button
            onClick={() => setFrequency('once')}
            className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              frequency === 'once'
                ? 'bg-[#2A3EB1] text-white shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            {tWays.once}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <button
            onClick={() => onOpenDonate(frequency === 'monthly' ? 35 : 50)}
            className="w-full sm:w-auto px-8 py-4 bg-[#D71920] hover:bg-[#b81218] active:scale-95 text-white font-black text-sm sm:text-base uppercase tracking-wider rounded-xl shadow-[0_6px_25px_rgba(215,25,32,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <FileText className="w-5 h-5" />
            <span>{t.donateBtn}</span>
          </button>

          <button
            onClick={onNavigateToOtherWays}
            className="w-full sm:w-auto px-6 py-4 bg-white/15 hover:bg-white/25 active:scale-95 border border-white/30 text-white font-bold text-sm uppercase tracking-wider rounded-xl backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <span>{t.otherWaysBtn}</span>
            <ArrowRight className="w-4 h-4 text-[#F7C600]" />
          </button>
        </div>

        <div className="mt-6 text-xs text-slate-300 flex items-center justify-center gap-4 flex-wrap">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Carburant certifié SGS sans mélange
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Livraison 24/48h Lualaba (Kolwezi, Kisanfu)
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            5 Licences Officielles RDC
          </span>
        </div>
      </div>
    </section>
  );
};
