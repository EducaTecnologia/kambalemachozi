import React from 'react';
import { MapPin, CheckCircle2, FileText } from 'lucide-react';
import { getTranslation } from '../data/content';
import { ProjectItem, Language } from '../types';

interface ProjectsCardsProps {
  currentLang?: Language;
  onOpenProjectDetail?: (project: ProjectItem) => void;
  onOpenDonate?: (amount?: number) => void;
}

export const ProjectsCards: React.FC<ProjectsCardsProps> = ({
  currentLang = 'fr',
  onOpenDonate,
}) => {
  const t = getTranslation(currentLang).projects;

  return (
    <section id="projets" className="relative py-20 sm:py-28 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#D71920]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#1B2A6B]">
              {t.sectionKicker}
            </span>
            <span className="w-8 h-[2px] bg-[#D71920]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display text-balance">
            {t.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            {t.sub}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.items.map((project, idx) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image banner with location & number */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Location Pill */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-slate-900 shadow-sm">
                    <MapPin className="w-3.5 h-3.5 text-[#D71920]" />
                    <span>{project.location}</span>
                  </div>

                  {/* Badge Number */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md shadow-sm flex items-center justify-center text-xs font-mono font-bold text-slate-900">
                    0{idx + 1}
                  </div>

                  {/* Title overlay on bottom of banner */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#F7C600] mb-1">
                      {project.subtitle}
                    </div>
                    <h3 className="text-2xl font-bold font-display leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Body details */}
                <div className="p-6 sm:p-8 space-y-5">
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Impact Highlight Box */}
                  <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1B2A6B] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#1B2A6B]">
                        {t.benefitLabel}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                        {project.impactDetail}
                      </p>
                    </div>
                  </div>

                  {/* Stats 3-column row */}
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    {project.stats.map((s, i) => (
                      <div key={i} className="text-center">
                        <div className="text-base sm:text-lg font-black text-slate-900 font-display tabular-nums">
                          {s.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5 font-medium leading-tight">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                  {t.supervisedBy}
                </span>
                <button
                  onClick={() => onOpenDonate?.(50)}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#D71920] hover:bg-[#b81218] active:scale-95 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ml-auto whitespace-nowrap"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{t.supportBtn}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
