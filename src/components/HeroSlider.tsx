import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, FileText, ArrowRight, Pause, Play, Phone, Mail } from 'lucide-react';
import { Language } from '../types';
import { I18N_STRINGS, IMAGES } from '../data/content';
import { WHATSAPP_DISPLAY, createWhatsAppUrl, sendToWhatsApp } from '../utils/whatsapp';

interface HeroSliderProps {
  currentLang: Language;
  onOpenDonate: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  currentLang,
  onOpenDonate,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const t = I18N_STRINGS[currentLang].hero;
  const isPt = currentLang === 'pt';
  const isEn = currentLang === 'en';

  const slides = [
    {
      id: 0,
      kicker: isPt ? 'SETOR 1 : CONSTRUIR O FUTURO NA RDC' : isEn ? 'SECTOR 1 : BUILDING THE FUTURE IN DRC' : 'SECTEUR 1 : CONSTRUIRE L’AVENIR EN RDC',
      title: isPt ? 'Construção & reabilitação de estradas (ITPR)' : isEn ? 'Road Construction & Rehabilitation (ITPR)' : 'Construction & réhabilitation des routes (ITPR)',
      subtitle: isPt
        ? 'Engenharia civil, terraplenagem, pontes, bueiros e canais de drenagem em toda a extensão da República Democrática do Congo.'
        : isEn
        ? 'Civil engineering, earthworks, bridges, culverts and drainage channels throughout the Democratic Republic of the Congo.'
        : 'Ingénierie civile, terrassement, ponts, ponceaux et caniveaux sur toute l’étendue de la République Démocratique du Congo.',
      cta1Text: isPt ? 'Conhecer o setor 1' : isEn ? 'Explore Sector 1' : 'Découvrir le secteur 1',
      cta1Link: '#programmes',
      cta1Variant: 'navy',
      cta2Text: t.slide1Cta2,
      cta2Action: onOpenDonate,
      image: IMAGES.heroPeople,
      alt: 'Construction et réhabilitation des routes et infrastructures par ETS KAMBALE MACHOZI en RDC',
    },
    {
      id: 1,
      kicker: isPt ? 'SETOR 2 : COMBUSTÍVEIS & LOGÍSTICA MINERAL' : isEn ? 'SECTOR 2 : FUELS & MINERAL LOGISTICS' : 'SECTEUR 2 : CARBURANT & LOGISTIQUE PÉTROLIÈRE',
      title: isPt ? '30+ anos de experiência: Importação, Armazenamento, Distribuição' : isEn ? '30+ Years Experience: Import, Storage, Distribution' : 'Plus de 30 ans d’expérience : Import, Stockage, Distribution',
      subtitle: isPt
        ? 'Diesel AGO/DDO, Gasolina PMS, Lubrificantes e Jet A1 certificados pela SGS. Estoque estratégico de +150.000L e entrega em 24/48h.'
        : isEn
        ? 'Diesel AGO/DDO, PMS Gasoline, Lubricants and SGS-certified Jet A1. Strategic stock of +150,000L and 24/48h delivery.'
        : 'Diesel AGO/DDO, Essence PMS, Lubrifiants et Jet A1 certifiés SGS. Stock stratégique de +150 000L et livraison sous 24/48h.',
      cta1Text: isPt ? 'Conhecer o setor 2' : isEn ? 'Explore Sector 2' : 'Découvrir le secteur 2',
      cta1Link: '#programmes',
      cta1Variant: 'primary',
      cta2Text: t.slide1Cta2,
      cta2Action: onOpenDonate,
      image: IMAGES.heroAction,
      alt: 'Flotte de camions-citernes en acier inoxydable et dépôt de carburant certifié SGS de KAMBALE MACHOZI',
    },
    {
      id: 2,
      kicker: isPt ? 'SETOR 3 : DEFESA NACIONAL & SOBERANIA' : isEn ? 'SECTOR 3 : NATIONAL DEFENSE & SOVEREIGNTY' : 'SECTEUR 3 : DÉFENSE NATIONALE & SOUVERAINETÉ',
      title: isPt ? 'Fornecedor oficial de gêneros alimentícios e rações às FARDC' : isEn ? 'Official Supplier of Food & Rations to FARDC' : 'Fournisseur officiel de denrées alimentaires et rations aux FARDC',
      subtitle: isPt
        ? 'Abastecimento estratégico de mantimentos, vivres e rações de combate para as Forças Armadas da RDC em todas as frentes.'
        : isEn
        ? 'Strategic supply of food provisions, fresh/dry supplies and combat rations for the Armed Forces of the DRC on all fronts.'
        : 'Approvisionnement stratégique en vivres frais, secs et rations de combat pour les Forces Armées de la RDC sur tous les fronts.',
      cta1Text: isPt ? 'Conhecer o setor 3' : isEn ? 'Explore Sector 3' : 'Découvrir le secteur 3',
      cta1Link: '#programmes',
      cta1Variant: 'primary',
      cta2Text: t.slide1Cta2,
      cta2Action: onOpenDonate,
      image: IMAGES.fardcRations,
      alt: 'Fourniture officielle de denrées alimentaires et rations aux FARDC par KAMBALE MACHOZI',
    },
    {
      id: 3,
      kicker: isPt ? 'SETOR 4 : AGROINDÚSTRIA & EXPORTAÇÃO' : isEn ? 'SECTOR 4 : AGRO-INDUSTRY & EXPORT' : 'SECTEUR 4 : AGRO-INDUSTRIE & EXPORTATION',
      title: isPt ? 'Agricultura, fabricação de sabões & exportação de café/cacau' : isEn ? 'Agriculture, Soap Manufacturing & Coffee/Cocoa Export' : 'Agriculture, fabrication de savons & export café/cacao',
      subtitle: isPt
        ? 'Valorização dos terroirs congoleses, fabricação local de sabões e exportação internacional para a Europa, Dubai e EUA.'
        : isEn
        ? 'Valorization of Congolese terroirs, local soap manufacturing, and international export to Europe, Dubai and the USA.'
        : 'Valorisation des terroirs congolais, fabrication locale de savons et exportation internationale vers l’Europe, Dubaï et les USA.',
      cta1Text: isPt ? 'Conhecer o setor 4' : isEn ? 'Explore Sector 4' : 'Découvrir le secteur 4',
      cta1Link: '#programmes',
      cta1Variant: 'primary',
      cta2Text: t.slide1Cta2,
      cta2Action: onOpenDonate,
      image: IMAGES.projectAgri,
      alt: 'Exportation de café et cacao et agro-industrie par ETS KAMBALE MACHOZI',
    },
    {
      id: 4,
      kicker: isPt ? 'SETOR 5 : MINERAÇÃO & SUBCONTRATAÇÃO ARSP' : isEn ? 'SECTOR 5 : MINING & ARSP SUBCONTRACTING' : 'SECTEUR 5 : MINES & SOUS-TRAITANCE ARSP',
      title: isPt ? 'Mineração & Subcontratação Especializada no Lualaba' : isEn ? 'Specialized Mining & Subcontracting in Lualaba' : 'L’Exploitation Minière & Sous-Traitance au Lualaba',
      subtitle: isPt
        ? 'Parceiro estratégico de confiança de grandes mineradoras (Kisanfu, Mutanda, Kamoto) sob credenciamento ARSP/CD/0000018850.'
        : isEn
        ? 'Trusted strategic partner of major mining companies (Kisanfu, Mutanda, Kamoto) under ARSP/CD/0000018850.'
        : 'Partenaire de confiance des géants miniers (Kisanfu, Mutanda, Kamoto) en RDC sous agrément ARSP/CD/0000018850.',
      cta1Text: isPt ? 'Conhecer o setor 5' : isEn ? 'Explore Sector 5' : 'Découvrir le secteur 5',
      cta1Link: '#programmes',
      cta1Variant: 'primary',
      cta2Text: t.slide1Cta2,
      cta2Action: onOpenDonate,
      image: IMAGES.heroHealth,
      alt: 'Exploitation et sous-traitance minière à Kolwezi et Lualaba en RDC',
    },
    {
      id: 5,
      kicker: isPt ? 'SETOR 6 : TRÂNSITO & ALFÂNDEGA' : isEn ? 'SECTOR 6 : CUSTOMS & TRANSIT' : 'SECTEUR 6 : TRANSIT & DOUANE',
      title: isPt ? 'Agência Aduaneira — Rwenzori Transit Agency' : isEn ? 'Customs Agency — Rwenzori Transit Agency' : 'Agence en douane — Rwenzori Transit Agency',
      subtitle: isPt
        ? 'Especialista em trânsito, desembaraço aduaneiro e logística nas fronteiras da RDC para assegurar e acelerar os fluxos import-export.'
        : isEn
        ? 'Specialist in transit, customs clearance, and logistics at DRC borders to secure and accelerate import-export flows.'
        : 'Spécialiste du transit, dédouanement et logistique aux frontières de la RDC pour sécuriser et accélérer vos flux import-export.',
      cta1Text: isPt ? 'Conhecer o setor 6' : isEn ? 'Explore Sector 6' : 'Découvrir le secteur 6',
      cta1Link: '#programmes',
      cta1Variant: 'primary',
      cta2Text: t.slide1Cta2,
      cta2Action: onOpenDonate,
      image: IMAGES.aidDistributionAerial,
      alt: 'Rwenzori Transit Agency — Agence en douane et logistique frontalière',
    },
    {
      id: 6,
      kicker: isPt ? 'TRABALHO SOCIAL & COMUNITÁRIO' : isEn ? 'SOCIAL & COMMUNITY WORK' : 'TRAVAUX SOCIAUX & COMMUNAUTAIRES',
      title: isPt ? 'Rádio Televisão Rwanzururu (RTR) & Educação da Juventude' : isEn ? 'Rwanzururu Radio Television (RTR) & Youth Education' : 'Rádio Televisão Rwanzururu (RTR) & Éducation de la Jeunesse',
      subtitle: isPt
        ? 'Viabilização da comunicação comunitária e apoio ao ensino primário e secundário para a formação e o futuro da juventude congolesa.'
        : isEn
        ? 'Enabling community communication and supporting primary and secondary education for the training and future of Congolese youth.'
        : 'Viabilisation de la communication communautaire et soutien à l’enseignement primaire et secondaire pour l’avenir de la jeunesse congolaise.',
      cta1Text: isPt ? 'Ver trabalho social' : isEn ? 'View Social Work' : 'Voir les travaux sociaux',
      cta1Link: '#travail-social',
      cta1Variant: 'primary',
      cta2Text: t.slide1Cta2,
      cta2Action: onOpenDonate,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjtPvXGRLx9asmvlzwG063ZOYTHCccozQfAG9G0p16yFOUVXd7ei4TG5gW&s=10',
      alt: 'Travaux sociaux et communautaires : Rádio Televisão Rwanzururu et éducation',
    },
  ];

  const totalSlides = slides.length;
  const slideDurationMs = 6500;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = 50;
    const step = (interval / slideDurationMs) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, slideDurationMs, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  const scrollToAnchor = (anchor: string) => {
    const el = document.querySelector(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="accueil"
      className="relative w-full h-[100svh] min-h-[640px] max-h-[1080px] bg-[#0B1030] overflow-hidden select-none flex items-center"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="ETS KAMBALE MACHOZI (KM) — Construire l'Avenir en RDC"
    >
      {/* Background Slides */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
            aria-hidden={!isActive}
          >
            {/* Ken Burns Animated Background Image */}
            <div
              className={`absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-10000 ease-linear ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
              role="img"
              aria-label={slide.alt}
            />

            {/* Measured contrast scrim */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/55 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-black/25" />
          </div>
        );
      })}

      {/* Main Content Layer */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-3xl">
          {slides.map((slide, index) => {
            if (index !== currentSlide) return null;
            return (
              <div key={slide.id} className="space-y-6 animate-[fadeInUp_0.8s_ease-out]">
                {/* Kicker with Red line */}
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-[3px] bg-[#D71920]" />
                  <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#F7C600]">
                    {slide.kicker}
                  </span>
                </div>

                {/* H1 Heading */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] text-balance font-display">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-xl text-slate-100/90 leading-relaxed font-normal max-w-2xl">
                  {slide.subtitle}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => scrollToAnchor(slide.cta1Link)}
                    className="px-6 py-3.5 bg-[#1B2A6B] hover:bg-[#2A3EB1] active:scale-95 text-white font-bold text-sm rounded-xl shadow-lg transition-all inline-flex items-center gap-2.5 cursor-pointer whitespace-nowrap"
                  >
                    <span>{slide.cta1Text}</span>
                    <ArrowRight className="w-4 h-4 text-[#F7C600]" />
                  </button>

                  {slide.cta2Text && (
                    <button
                      onClick={slide.cta2Action}
                      className="px-7 py-3.5 bg-[#D71920] hover:bg-[#b81218] active:scale-95 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-[0_4px_24px_rgba(215,25,32,0.45)] transition-all flex items-center gap-2.5 cursor-pointer whitespace-nowrap"
                    >
                      <FileText className="w-4 h-4" />
                      <span>{slide.cta2Text}</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Official PDF Footer Bar (Bottom Left) — RCCM, ID.NAT, Phone, Email */}
      <div className="hidden lg:flex items-center gap-4 absolute bottom-7 left-8 z-30 text-xs text-slate-200/90 bg-slate-950/65 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15 font-mono">
        <span>RCCM: CD/KNG/RCCM/20-A-01815</span>
        <span aria-hidden="true">·</span>
        <span>ARSP: 3914908074</span>
        <span aria-hidden="true">·</span>
        <a
          href={createWhatsAppUrl()}
          onClick={(e) => {
            e.preventDefault();
            sendToWhatsApp('Bonjour ETS KAMBALE MACHOZI, je souhaite des renseignements.');
          }}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
        >
          <Phone className="w-3 h-3 text-emerald-400" />
          <span>{WHATSAPP_DISPLAY}</span>
        </a>
        <span aria-hidden="true">·</span>
        <a href="mailto:contact@kambalemachozi.com" className="hover:text-[#F7C600] transition-colors inline-flex items-center gap-1">
          <Mail className="w-3 h-3 text-[#D71920]" />
          <span>contact@kambalemachozi.com</span>
        </a>
      </div>

      {/* Yellow Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-30">
        <div
          className="h-full bg-[#F7C600] transition-all duration-75 ease-linear shadow-[0_0_8px_rgba(247,198,0,0.8)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Carousel Controls (Bottom Right) */}
      <div className="absolute bottom-7 right-6 sm:right-12 z-30 flex items-center gap-3">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 transition-colors cursor-pointer"
          aria-label={isPlaying ? 'Mettre en pause' : 'Reprendre le défilement'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>

        <div className="flex items-center gap-1.5 px-2 overflow-x-auto max-w-[200px] sm:max-w-none">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-2 transition-all rounded-full cursor-pointer shrink-0 ${
                i === currentSlide
                  ? 'w-7 bg-[#F7C600]'
                  : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Aller au slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-1.5 ml-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-lg bg-[#1B2A6B]/80 hover:bg-[#2A3EB1] text-white border border-white/10 transition-colors cursor-pointer"
            aria-label="Slide précédent"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-lg bg-[#1B2A6B]/80 hover:bg-[#2A3EB1] text-white border border-white/10 transition-colors cursor-pointer"
            aria-label="Slide suivant"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};
