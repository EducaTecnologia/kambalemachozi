import React from 'react';
import { Logo } from './Logo';
import { FileText, ShieldCheck, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { Language } from '../types';
import { getTranslation } from '../data/content';

interface FooterProps {
  currentLang: Language;
  onOpenDonate: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenDonate }) => {
  const trans = getTranslation(currentLang);
  const tNav = trans.nav;
  const tFoot = trans.footer;
  const tPillars = trans.pillars.items;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#04161B] border-t border-white/10 text-slate-300 pt-16 pb-12 select-none">
      {/* Top Accent Tricolor line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2A3EB1] via-[#D71920] to-[#F7C600]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Legal Credentials */}
          <div className="md:col-span-12 lg:col-span-4 space-y-4">
            <div className="space-y-3 max-w-sm">
              <Logo variant="dark" size="md" />
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {tFoot.desc}
              </p>
              <div className="pt-1 flex items-center gap-2 text-xs text-[#F7C600] font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{tFoot.certText}</span>
              </div>
            </div>

            {/* Direct Corporate Coordinates */}
            <div className="pt-2 space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D71920] shrink-0" />
                <span>Av. Colonel Ebeya n°1746/A, C/Gombe, Kinshasa, RDC</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#F7C600] shrink-0" />
                <a href="tel:+243817170622" className="hover:text-white transition-colors font-semibold">
                  +243 817 170 622
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href="mailto:direction@kambalemachozi.com" className="hover:text-white transition-colors">
                  direction@kambalemachozi.com
                </a>
                <span className="text-slate-600">•</span>
                <a href="mailto:etsmachozi@gmail.com" className="hover:text-white transition-colors">
                  etsmachozi@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Menus: Navigation Links + 5 Strategic Sectors */}
          <div className="md:col-span-7 lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Col 2: Navigation Links */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                {tFoot.quickLinksTitle}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a href="#accueil" className="hover:text-white transition-colors block py-0.5 leading-snug">{tNav.home}</a>
                </li>
                <li>
                  <a href="#apropos" className="hover:text-white transition-colors block py-0.5 leading-snug">{tNav.about}</a>
                </li>
                <li>
                  <a href="#programmes" className="hover:text-white transition-colors block py-0.5 leading-snug">{tNav.programs}</a>
                </li>
                <li>
                  <a href="#projets" className="hover:text-white transition-colors block py-0.5 leading-snug">{tNav.projects}</a>
                </li>
                <li>
                  <a href="#territoire" className="hover:text-white transition-colors block py-0.5 leading-snug">{tNav.locations}</a>
                </li>
                <li>
                  <a href="#equipe" className="hover:text-white transition-colors block py-0.5 leading-snug">{tNav.team}</a>
                </li>
                <li>
                  <a href="#actualites" className="hover:text-white transition-colors block py-0.5 leading-snug">{tNav.news}</a>
                </li>
              </ul>
            </div>

            {/* Col 3: 5 Sectors */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                {tFoot.programsTitle}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                {tPillars.map((p) => (
                  <li key={p.id}>
                    <a href="#programmes" className="hover:text-white transition-colors block py-0.5 leading-snug">
                      {p.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 4: Quick Action (B2B / B2G Quote & Dossier) */}
          <div className="md:col-span-5 lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {tFoot.donateBoxTitle}
            </h4>
            <button
              onClick={onOpenDonate}
              className="w-full py-3 bg-[#D71920] hover:bg-[#b81218] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{tFoot.donateBoxBtn}</span>
            </button>
            <p className="text-[11px] text-slate-400 leading-tight">
              {tFoot.donateBoxDesc}
            </p>
          </div>
        </div>

        {/* Legal Identifiers Bar */}
        <div className="py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
          <span>RCCM: <strong className="text-slate-200">CD/KNG/RCCM/20-A-01815</strong></span>
          <span>ID.NAT: <strong className="text-slate-200">01-F4300-N63029P</strong></span>
          <span>NIF (DGI): <strong className="text-slate-200">A2161439L</strong></span>
          <span>ARSP/CD: <strong className="text-[#F7C600]">3914908074</strong></span>
          <span>CNSS: <strong className="text-slate-200">1012867900</strong></span>
        </div>

        {/* Bottom Line: Copyright, Tagline & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            {tFoot.copyright}
          </div>

          <div className="font-display font-bold text-[#F7C600] text-sm tracking-tight">
            « {trans.brandTagline} »
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label={tFoot.backToTop}
          >
            <span>{tFoot.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#F7C600]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
