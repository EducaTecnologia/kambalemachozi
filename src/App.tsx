/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import { MessageSquare, PhoneCall } from 'lucide-react';

import { Language } from './types';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { MissionVision } from './components/MissionVision';
import { ImpactNumbers } from './components/ImpactNumbers';
import { PillarsSection } from './components/PillarsSection';
import { HumaneImpactSection } from './components/HumaneImpactSection';
import { ProjectsCards } from './components/ProjectsCards';
import { InteractiveMap } from './components/InteractiveMap';
import { TeamSection } from './components/TeamSection';
import { PartnersMarquee } from './components/PartnersMarquee';
import { AerialSupportSection } from './components/AerialSupportSection';
import { NewsSection } from './components/NewsSection';
import { NewsDetailPage } from './components/NewsDetailPage';
import { ContactNewsletter } from './components/ContactNewsletter';
import { Footer } from './components/Footer';
import { OtherWaysToDonatePage } from './components/OtherWaysToDonatePage';

import { VolunteerModal } from './components/VolunteerModal';
import { PartnerModal } from './components/PartnerModal';
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from './utils/whatsapp';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('fr');
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<string>('news-1');
  const [volunteerModalOpen, setVolunteerModalOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

  const lenisRef = useRef<Lenis | null>(null);

  // Global robust instant scroll-to-top handler
  const scrollToTopInstant = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (lenisRef.current) {
      try {
        lenisRef.current.scrollTo(0, { immediate: true, force: true });
      } catch {
        // Fallback already handled by window.scrollTo
      }
    }
  }, []);

  // Force scroll to top on initial page load / refresh
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    scrollToTopInstant();
  }, [scrollToTopInstant]);

  // Force scroll to top whenever the active page changes
  useEffect(() => {
    scrollToTopInstant();
  }, [activePage, scrollToTopInstant]);

  // Set document language and direction
  useEffect(() => {
    document.documentElement.lang = currentLang;
    if (currentLang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [currentLang]);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let animationId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationId = requestAnimationFrame(raf);
    }

    animationId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const handleOpenDonate = (_amount?: number) => {
    setActivePage('donate-ways');
    scrollToTopInstant();
  };

  const handleNavigatePage = (page: string) => {
    setActivePage(page);
    scrollToTopInstant();
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#D71920] selection:text-white relative">
      {/* 1. Preloader with Tricolor DRC Map Contour */}
      <Preloader currentLang={currentLang} onFinish={scrollToTopInstant} />

      {/* 2. Top Navigation Bar */}
      <Navbar
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
        onOpenDonate={() => handleOpenDonate(35)}
        activePage={activePage}
        onNavigatePage={handleNavigatePage}
      />

      {/* Conditional Rendering: Home vs Other Ways to Donate Page vs News Detail Page */}
      {activePage === 'donate-ways' ? (
        <main className="flex-1 w-full">
          <OtherWaysToDonatePage
            currentLang={currentLang}
            onBackHome={() => handleNavigatePage('home')}
            onOpenDonateModal={handleOpenDonate}
          />
        </main>
      ) : activePage === 'news-detail' ? (
        <main className="flex-1 w-full">
          <NewsDetailPage
            articleId={selectedArticleId}
            currentLang={currentLang}
            onBackToNews={() => {
              handleNavigatePage('home');
              setTimeout(() => {
                const el = document.getElementById('actualites');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 120);
            }}
            onSelectArticle={(id) => {
              setSelectedArticleId(id);
              scrollToTopInstant();
            }}
            onOpenDonate={handleOpenDonate}
          />
        </main>
      ) : (
        <main className="flex-1 w-full overflow-hidden">
          {/* 3. Hero Banner: 3 Impact Slides Fullscreen with Navigation Overlay */}
          <HeroSlider
            currentLang={currentLang}
            onOpenDonate={() => handleOpenDonate(50)}
          />

          {/* 4. Notre Engagement en RDC / 4 Piliers d'intégrité */}
          <MissionVision currentLang={currentLang} />

          {/* 5. Quantitative Impact Numbers */}
          <ImpactNumbers currentLang={currentLang} />

          {/* 6. Domaines d'Intervention */}
          <PillarsSection
            currentLang={currentLang}
            onOpenDonate={handleOpenDonate}
          />

          {/* 7. Frontline Activism Impact Block */}
          <HumaneImpactSection
            currentLang={currentLang}
            onOpenVolunteer={() => setVolunteerModalOpen(true)}
          />

          {/* 8. Featured Projects Cards */}
          <ProjectsCards
            currentLang={currentLang}
            onOpenDonate={handleOpenDonate}
          />

          {/* 9. Interactive Real Leaflet Map */}
          <InteractiveMap currentLang={currentLang} />

          {/* 10. Leadership & Governance Team */}
          <TeamSection currentLang={currentLang} />

          {/* 11. Quem Nos Apoia */}
          <PartnersMarquee
            currentLang={currentLang}
            onOpenPartnerModal={() => setPartnerModalOpen(true)}
          />

          {/* 12. Aerial Support CTA Section */}
          <AerialSupportSection
            currentLang={currentLang}
            onOpenDonate={handleOpenDonate}
            onNavigateToOtherWays={() => handleNavigatePage('donate-ways')}
          />

          {/* 13. News & Dispatches from the ground */}
          <NewsSection
            currentLang={currentLang}
            onSelectArticle={(id) => {
              setSelectedArticleId(id);
              setActivePage('news-detail');
              scrollToTopInstant();
            }}
          />

          {/* 14. Contact & Newsletter */}
          <ContactNewsletter currentLang={currentLang} />
        </main>
      )}

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenDonate={() => handleOpenDonate(35)}
      />

      {/* Floating WhatsApp Quick Action Button (Available on all pages) */}
      <aside aria-label="Contact rapide WhatsApp" className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Bonjour ETS KAMBALE MACHOZI, je souhaite entrer en contact direct avec vous.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/30 backdrop-blur-sm"
          title={`WhatsApp Direct: ${WHATSAPP_DISPLAY}`}
        >
          {/* Pulsing indicator */}
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <MessageSquare className="w-5 h-5 fill-white text-emerald-600" />
          <div className="hidden sm:flex flex-col text-left leading-none">
            <span className="text-[10px] font-medium text-emerald-100 uppercase tracking-wider">WhatsApp Direct</span>
            <span className="text-xs font-bold font-mono tracking-tight">{WHATSAPP_DISPLAY}</span>
          </div>
        </a>
      </aside>

      {/* Interactive Modals */}
      <VolunteerModal
        isOpen={volunteerModalOpen}
        onClose={() => setVolunteerModalOpen(false)}
        currentLang={currentLang}
      />

      <PartnerModal
        isOpen={partnerModalOpen}
        onClose={() => setPartnerModalOpen(false)}
        currentLang={currentLang}
      />
    </div>
  );
}
