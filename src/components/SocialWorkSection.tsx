import React from 'react';
import { Radio, GraduationCap, CheckCircle2, HeartHandshake } from 'lucide-react';
import { Language } from '../types';
import { getTranslation } from '../data/content';

interface SocialWorkSectionProps {
  currentLang: Language;
}

export const SocialWorkSection: React.FC<SocialWorkSectionProps> = ({ currentLang }) => {
  const isPt = currentLang === 'pt';
  const isEn = currentLang === 'en';

  const title = isPt
    ? 'Trabalho Social & Comunitário'
    : isEn
    ? 'Social & Community Work'
    : 'Travail Social & Communautaire';

  const subtitle = isPt
    ? 'Rádio Televisão Rwanzururu (RTR) & Educação Infantil e Juvenil na RDC'
    : isEn
    ? 'Rwanzururu Radio Television (RTR) & Youth Education in DRC'
    : 'Rádio Televisão Rwanzururu (RTR) & Éducation Infantile et Juvénile en RDC';

  const kicker = isPt ? 'IMPACTO SOCIAL & DESENVOLVIMENTO HUMANO' : isEn ? 'SOCIAL IMPACT & HUMAN DEVELOPMENT' : 'IMPACT SOCIAL & DÉVELOPPEMENT HUMAIN';

  const descText = isPt
    ? 'A ETS KAMBALE MACHOZI (KM) vai além do desenvolvimento industrial e das infraestruturas, investindo fortemente no bem-estar social das comunidades locais através de pilares essenciais de comunicação e educação.'
    : isEn
    ? 'ETS KAMBALE MACHOZI (KM) goes beyond industrial development and infrastructure, heavily investing in the social well-being of local communities through vital communication and education pillars.'
    : 'L’établissement KAMBALE MACHOZI (KM) va au-delà du développement industriel et des infrastructures en investissant durablement dans le bien-être social des communautés locales à travers des piliers essentiels de communication et d’éducation.';

  const items = [
    {
      id: 'rtr',
      title: isPt ? 'Rádio Comunitária (RTR)' : isEn ? 'Community Radio (RTR)' : 'Rádio Communautaire (RTR)',
      subtitle: 'Rádio Televisão Rwanzururu (RTR)',
      description: isPt
        ? 'Viabilização da comunicação e da informação de proximidade através da Rádio Televisão Rwanzururu (RTR), promovendo o diálogo comunitário, a educação cívica e o acesso a notícias confiáveis.'
        : isEn
        ? 'Enabling local communication and information through Rwanzururu Radio Television (RTR), promoting community dialogue, civic education, and access to reliable news.'
        : 'Viabilisation de la communication et de l’information de proximité à travers la Rádio Televisão Rwanzururu (RTR), favorisant le dialogue communautaire, l’éducation civique et l’accès à l’information.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc7fjKvc96kPwBcLBEhKXliRE1-2NUwMxb1VhKWHF5PATAvCjAQUH2sGE&s=10',
      icon: Radio,
      badge: isPt ? 'Comunicação & Informação' : isEn ? 'Communication & News' : 'Communication & Information',
      keyPoints: isPt ? [
        'Transmissão de informativos locais e programas educativos',
        'Inclusão digital e informativa das comunidades rurais e urbanas',
        'Canal de diálogo transparente e engajamento cívico'
      ] : [
        'Diffusion d’informations locales et programmes éducatifs',
        'Inclusion informative des communautés rurales et urbaines',
        'Canal de dialogue transparent et d’engagement civique'
      ]
    },
    {
      id: 'education',
      title: isPt ? 'Educação Infantil e Juvenil' : isEn ? 'Youth & Child Education' : 'Éducation Infantile & Juvénile',
      subtitle: isPt ? 'Ensino Primário e Secundário' : isEn ? 'Primary & Secondary School' : 'Enseignement Primaire et Secondaire',
      description: isPt
        ? 'Investimento contínuo na formação e no futuro da juventude congolesa através do apoio a estabelecimentos de ensino primário e secundário, garantindo acesso à educação de qualidade.'
        : isEn
        ? 'Continuous investment in the training and future of Congolese youth by supporting primary and secondary educational institutions to ensure quality access to learning.'
        : 'Investissement continu dans la formation et l’avenir de la jeunesse congolaise à travers le soutien aux établissements d’enseignement primaire et secondaire.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjtPvXGRLx9asmvlzwG063ZOYTHCccozQfAG9G0p16yFOUVXd7ei4TG5gW&s=10',
      icon: GraduationCap,
      badge: isPt ? 'Educação & Futuro' : isEn ? 'Education & Future' : 'Éducation & Avenir',
      keyPoints: isPt ? [
        'Apoio a escolas de ensino primário e secundário',
        'Bolsas e infraestruturas escolares para crianças e jovens',
        'Capacitação técnica e pedagógica para o desenvolvimento local'
      ] : [
        'Soutien aux structures d’enseignement primaire et secondaire',
        'Infrastructures scolaires et équipements pour la jeunesse',
        'Formation et encadrement pédagogique pour l’avenir local'
      ]
    }
  ];

  return (
    <section id="travail-social" className="relative py-20 sm:py-28 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#D71920]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#1B2A6B]">
              {kicker}
            </span>
            <span className="w-8 h-[2px] bg-[#D71920]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display text-balance">
            {title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            {descText}
          </p>
        </div>

        {/* Grid of Social Initiatives */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Image Banner */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border border-white/20 bg-black/40 text-white backdrop-blur-md shadow-sm">
                      <Icon className="w-3.5 h-3.5 text-[#F7C600]" />
                      <span>{item.badge}</span>
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-mono text-[#F7C600] font-bold uppercase tracking-wider">{item.subtitle}</span>
                    <h3 className="text-xl sm:text-2xl font-black font-display tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      {item.keyPoints.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#1B2A6B] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <HeartHandshake className="w-4 h-4 text-[#D71920]" />
                      <span>ETS KAMBALE MACHOZI — RDC</span>
                    </span>
                    <span className="font-bold text-[#1B2A6B]">SOCIÉTÉ CIVILE</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
