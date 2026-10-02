import React from 'react';
import { Handshake, ShieldCheck, HardHat, Fuel, Pickaxe, Globe } from 'lucide-react';
import { getTranslation } from '../data/content';
import { Language } from '../types';

interface PartnersMarqueeProps {
  currentLang?: Language;
  onOpenPartnerModal?: () => void;
}

export const PartnersMarquee: React.FC<PartnersMarqueeProps> = ({ currentLang = 'fr', onOpenPartnerModal }) => {
  const t = getTranslation(currentLang).partners;

  const partners = [
    {
      name: 'Ministère de l’ITPR — RDC',
      subtitle: 'Autorisation Travaux Publics',
      renderLogo: () => (
        <div className="flex flex-col items-center text-center gap-1.5">
          <div className="flex items-center gap-2 text-[#1B2A6B] group-hover:text-[#D71920] transition-colors">
            <HardHat className="w-6 h-6 shrink-0" />
            <span className="font-black text-base sm:text-lg tracking-wider uppercase font-display">MINISTÈRE ITPR</span>
          </div>
          <span className="text-[11px] font-semibold text-slate-500">Infrastructures & Routes RDC</span>
        </div>
      ),
    },
    {
      name: 'Ministère de la Défense Nationale — FARDC',
      subtitle: 'Fournisseur Officiel Rations',
      renderLogo: () => (
        <div className="flex flex-col items-center text-center gap-1.5">
          <div className="flex items-center gap-2 text-emerald-800 group-hover:text-emerald-600 transition-colors">
            <ShieldCheck className="w-6 h-6 shrink-0" />
            <span className="font-black text-base sm:text-lg tracking-wider uppercase font-display">DÉFENSE • FARDC</span>
          </div>
          <span className="text-[11px] font-semibold text-slate-500">Fournisseur Officiel Agréé</span>
        </div>
      ),
    },
    {
      name: 'ARSP RDC — Sous-Traitance',
      subtitle: 'ARSP/CD/0000018850',
      renderLogo: () => (
        <div className="flex flex-col items-center text-center gap-1.5">
          <div className="px-3 py-1 bg-[#D71920] text-white rounded-lg font-black tracking-widest text-sm sm:text-base font-display shadow-xs">
            ARSP RDC
          </div>
          <span className="text-[11px] font-mono font-bold text-slate-600">ARSP/CD/0000018850</span>
        </div>
      ),
    },
    {
      name: 'SGS Certified Fuel Quality',
      subtitle: 'Densité • Eau • Soufre',
      renderLogo: () => (
        <div className="flex flex-col items-center text-center gap-1.5">
          <div className="flex items-center gap-2 text-amber-600 group-hover:text-amber-500 transition-colors">
            <Fuel className="w-6 h-6 shrink-0" />
            <span className="font-black text-lg sm:text-xl tracking-widest uppercase font-display">SGS CERTIFIED</span>
          </div>
          <span className="text-[11px] font-semibold text-slate-500">Carburant Pur Sans Mélange</span>
        </div>
      ),
    },
    {
      name: 'Kisanfu Mining — Lualaba',
      subtitle: 'Logistique 24/48h & Mines',
      renderLogo: () => (
        <div className="flex flex-col items-center text-center gap-1.5">
          <div className="flex items-center gap-2 text-slate-900 group-hover:text-[#1B2A6B] transition-colors">
            <Pickaxe className="w-5 h-5 text-[#D71920] shrink-0" />
            <span className="font-black text-sm sm:text-base tracking-wider uppercase font-display">KISANFU MINING</span>
          </div>
          <span className="text-[11px] font-semibold text-slate-500">Corridor Minier Lualaba</span>
        </div>
      ),
    },
    {
      name: 'Mutanda Mining (MUMI)',
      subtitle: 'Approvisionnement & BTP Minier',
      renderLogo: () => (
        <div className="flex flex-col items-center text-center gap-1.5">
          <div className="font-black text-base sm:text-lg tracking-[0.15em] uppercase font-display text-slate-900 group-hover:text-[#1B2A6B] transition-colors">
            MUTANDA
          </div>
          <span className="text-[11px] font-semibold text-slate-500">Sous-Traitance Kolwezi</span>
        </div>
      ),
    },
    {
      name: 'Kamoto Copper Company (KCC)',
      subtitle: 'Cuivre & Cobalt Lualaba',
      renderLogo: () => (
        <div className="flex flex-col items-center text-center gap-1.5">
          <div className="font-black text-base sm:text-lg tracking-[0.15em] uppercase font-display text-[#1B2A6B] group-hover:text-[#D71920] transition-colors">
            KAMOTO • KCC
          </div>
          <span className="text-[11px] font-semibold text-slate-500">Partenariat Opérationnel</span>
        </div>
      ),
    },
    {
      name: 'Hubs Export Rotterdam • Anvers • Dubaï',
      subtitle: 'Café Arabica/Robusta & Cacao',
      renderLogo: () => (
        <div className="flex flex-col items-center text-center gap-1.5">
          <div className="flex items-center gap-1.5 text-slate-900 group-hover:text-emerald-700 transition-colors">
            <Globe className="w-5 h-5 text-emerald-600 shrink-0" />
            <span className="font-black text-xs sm:text-sm tracking-wider uppercase font-display">ANVERS • DUBAÏ • USA</span>
          </div>
          <span className="text-[11px] font-semibold text-slate-500">Export Café & Cacao 60kg</span>
        </div>
      ),
    },
  ];

  return (
    <section id="partenaires" className="relative py-20 sm:py-28 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#D71920]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#1B2A6B]">
                {t.sectionKicker}
              </span>
              <span className="w-8 h-[2px] bg-[#D71920]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
              {t.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {t.sub}
            </p>
          </div>

          <button
            onClick={onOpenPartnerModal}
            className="self-start sm:self-auto px-6 py-3.5 rounded-xl bg-[#1B2A6B] hover:bg-[#2A3EB1] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm shrink-0 whitespace-nowrap"
          >
            <Handshake className="w-4 h-4 text-[#F7C600]" />
            <span>{t.becomePartnerBtn}</span>
          </button>
        </div>
      </div>

      {/* Grid of Official Licenses & Target Ecosystem */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              onClick={onOpenPartnerModal}
              className="h-28 sm:h-32 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex items-center justify-center p-5 group cursor-pointer"
              title={partner.name}
              aria-label={partner.name}
            >
              <div className="transform group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                {partner.renderLogo()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
