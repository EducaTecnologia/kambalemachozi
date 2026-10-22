import React from 'react';
import { Logo } from './Logo';
import { FileText, ShieldCheck, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { Language } from '../types';
import { getTranslation } from '../data/content';
import { WHATSAPP_DISPLAY, createWhatsAppUrl, sendToWhatsApp } from '../utils/whatsapp';

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

            {/* Social Media Links */}
            <div className="pt-3 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                {currentLang === 'pt' ? 'Redes Sociais' : currentLang === 'en' ? 'Social Media' : 'Réseaux Sociaux'}
              </h4>
              <div className="flex items-center gap-2.5 flex-wrap">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all hover:scale-105 shadow-sm"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#E4405F] text-white flex items-center justify-center transition-all hover:scale-105 shadow-sm"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#FF0000] text-white flex items-center justify-center transition-all hover:scale-105 shadow-sm"
                  aria-label="YouTube"
                  title="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                {/* X (Twitter) */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-black text-white flex items-center justify-center transition-all hover:scale-105 shadow-sm border border-white/20"
                  aria-label="X (Twitter)"
                  title="X (Twitter)"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                {/* TikTok */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#000000] text-white flex items-center justify-center transition-all hover:scale-105 shadow-sm border border-white/20"
                  aria-label="TikTok"
                  title="TikTok"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
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
                  <a href="#territoire" className="hover:text-white transition-colors block py-0.5 leading-snug">{tNav.locations}</a>
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
