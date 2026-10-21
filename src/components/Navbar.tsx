import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, FileText, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';
import { Language } from '../types';
import { I18N_STRINGS } from '../data/content';
import { FlagIcon } from './FlagIcon';

interface NavbarProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  onOpenDonate: () => void;
  activePage: string;
  onNavigatePage: (page: string) => void;
}

const LANGUAGES_META: { code: Language; name: string; label: string }[] = [
  { code: 'fr', name: 'Français', label: 'FR' },
  { code: 'pt', name: 'Português', label: 'PT' },
  { code: 'en', name: 'English', label: 'EN' },
  { code: 'es', name: 'Español', label: 'ES' },
  { code: 'ar', name: 'العربية', label: 'AR' },
  { code: 'zh', name: '中文', label: 'ZH' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onSelectLang,
  onOpenDonate,
  activePage,
  onNavigatePage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const t = I18N_STRINGS[currentLang].nav;
  const currentLangMeta = LANGUAGES_META.find((l) => l.code === currentLang) || LANGUAGES_META[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { id: 'accueil', label: t.home, isPage: false, targetId: '#accueil' },
    { id: 'apropos', label: t.about, isPage: false, targetId: '#apropos' },
    { id: 'programmes', label: t.programs, isPage: false, targetId: '#programmes' },
    { id: 'projets', label: t.projects, isPage: false, targetId: '#projets' },
    { id: 'soutien', label: t.supporters, isPage: false, targetId: '#partenaires' },
    { id: 'other-ways', label: t.otherWaysToDonate, isPage: true, pageId: 'donate-ways' },
    { id: 'contact', label: t.contact, isPage: false, targetId: '#contact' },
  ];

  const handleItemClick = (item: typeof navItems[0]) => {
    setMobileMenuOpen(false);
    if (item.isPage && item.pageId) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      onNavigatePage(item.pageId);
    } else {
      if (activePage !== 'home') {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        onNavigatePage('home');
        if (item.targetId && item.targetId !== '#accueil') {
          setTimeout(() => {
            const el = document.querySelector(item.targetId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      } else {
        if (!item.targetId || item.targetId === '#accueil') {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
          document.documentElement.scrollTop = 0;
        } else {
          const el = document.querySelector(item.targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-2.5 sm:py-3.5 ${
          mobileMenuOpen
            ? 'bg-[#0A1938] border-b border-white/15 shadow-xl'
            : isScrolled
            ? 'bg-[#071026]/95 backdrop-blur-md border-b border-white/10 shadow-lg'
            : 'bg-[#0A1938]/95 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none border-b border-white/10 lg:border-transparent shadow-md lg:shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Zone 1: Official KM Logo */}
            <button
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                document.documentElement.scrollTop = 0;
                onNavigatePage('home');
              }}
              className="shrink-0 focus:outline-hidden rounded-xl text-left cursor-pointer transition-transform hover:scale-[1.02]"
              aria-label="ETS KAMBALE MACHOZI - Accueil"
            >
              <Logo size="sm" variant="dark" showContainer={false} />
            </button>

            {/* Zone 2: Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-semibold tracking-normal text-white"
              aria-label="Navigation principale"
            >
              {navItems.map((item) => {
                const isCurrentActive =
                  (item.isPage && activePage === item.pageId) ||
                  (!item.isPage && activePage === 'home' && item.id === 'accueil' && !isScrolled);

                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    className={`transition-all whitespace-nowrap py-1 relative cursor-pointer text-white/90 hover:text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] ${
                      isCurrentActive ? 'text-[#F7C600] font-bold' : ''
                    }`}
                  >
                    {item.label}
                    {isCurrentActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#F7C600] rounded-full shadow-[0_0_8px_rgba(247,198,0,0.8)]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Actions (Language Dropdown + Primary Quote CTA) */}
            <div className="flex items-center gap-3">
              {/* Language Selector Dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setLangDropdownOpen(true)}
                onMouseLeave={() => setLangDropdownOpen(false)}
              >
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border border-white/25 bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-all cursor-pointer shadow-xs"
                  aria-expanded={langDropdownOpen}
                  aria-label="Sélectionner la langue"
                >
                  <FlagIcon code={currentLangMeta.code} className="w-5 h-3.5 shadow-xs" />
                  <span className="uppercase tracking-wider text-xs font-extrabold">{currentLangMeta.label}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-slate-300 transition-transform duration-200 ${
                      langDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {langDropdownOpen && (
                  <div className="absolute right-0 mt-1.5 w-36 rounded-2xl bg-slate-900/95 border border-white/15 backdrop-blur-xl shadow-2xl py-2 text-white animate-[fadeIn_0.15s_ease-out] z-50">
                    <div className="space-y-0.5 px-1.5">
                      {LANGUAGES_META.map((lang) => {
                        const isSelected = currentLang === lang.code;
                        return (
                          <button
                            key={lang.code}
                            onClick={() => {
                              onSelectLang(lang.code);
                              setLangDropdownOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                              isSelected
                                ? 'bg-white/15 text-[#F7C600]'
                                : 'text-slate-200 hover:bg-white/10'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <FlagIcon code={lang.code} className="w-5 h-3.5 shadow-xs" />
                              <span className="uppercase tracking-wider text-xs">{lang.label}</span>
                            </div>
                            {isSelected && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#F7C600]" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Red Request Quote CTA */}
              <button
                onClick={onOpenDonate}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#D71920] hover:bg-[#b81218] active:scale-95 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl shadow-[0_4px_16px_rgba(215,25,32,0.45)] transition-all cursor-pointer whitespace-nowrap"
              >
                <FileText className="w-4 h-4" />
                <span>{t.donate}</span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 rounded-xl transition-all cursor-pointer border ${
                  mobileMenuOpen
                    ? 'bg-white/20 text-white border-white/30 shadow-inner'
                    : 'bg-white/10 text-white hover:bg-white/20 border-white/20'
                }`}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu de navigation'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-[#0A1938] bg-gradient-to-b from-[#071330] via-[#0A1938] to-[#081535] backdrop-blur-2xl lg:hidden pt-20 px-5 sm:px-8 pb-8 flex flex-col justify-between overflow-y-auto text-white shadow-2xl animate-[fadeIn_0.2s_ease-out]"
          role="dialog"
          aria-modal="true"
        >
          <div className="space-y-1.5 pt-3">
            {navItems.map((item) => {
              const isCurrentActive =
                (item.isPage && activePage === item.pageId) ||
                (!item.isPage && activePage === 'home' && item.id === 'accueil');

              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className={`w-full text-left text-base font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                    isCurrentActive
                      ? 'bg-white/15 text-[#F7C600] border border-white/20 shadow-xs'
                      : 'text-white/95 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    {isCurrentActive && <span className="w-2 h-2 rounded-full bg-[#F7C600]" />}
                    <span>{item.label}</span>
                  </span>
                  {item.isPage && (
                    <span className="text-[11px] bg-[#D71920]/25 text-[#FF858A] border border-[#D71920]/50 px-2.5 py-0.5 rounded-full font-extrabold uppercase tracking-wider">
                      B2B
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/15 space-y-4">
            {/* Mobile Language Switcher */}
            <div>
              <div className="text-xs font-bold uppercase text-slate-300 tracking-wider mb-2.5 flex items-center justify-between">
                <span>Langue / Idioma</span>
                <span className="text-[10px] text-slate-400">{currentLangMeta.name}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {LANGUAGES_META.map((lang) => {
                  const isSelected = currentLang === lang.code;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onSelectLang(lang.code);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center justify-center gap-2 py-2.5 px-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#2A3EB1] text-white border-white/40 ring-2 ring-[#F7C600] shadow-md'
                          : 'bg-white/10 text-white/90 border-white/15 hover:bg-white/20 hover:text-white'
                      }`}
                    >
                      <FlagIcon code={lang.code} className="w-4 h-3 shadow-xs" />
                      <span>{lang.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDonate();
              }}
              className="w-full py-4 bg-[#D71920] hover:bg-[#b81218] active:scale-[0.98] text-white font-extrabold text-sm text-center uppercase tracking-wider rounded-xl shadow-[0_4px_20px_rgba(215,25,32,0.5)] flex items-center justify-center gap-2.5 cursor-pointer transition-all border border-red-400/30"
            >
              <FileText className="w-5 h-5 text-white" />
              <span>{t.donate}</span>
            </button>
            <div className="text-center text-xs text-slate-300 font-medium pt-1">
              ETS KAMBALE MACHOZI (KM) — RCCM: 14-A-01204
            </div>
          </div>
        </div>
      )}
    </>
  );
};
