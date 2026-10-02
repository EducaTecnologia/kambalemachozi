import React, { useState } from 'react';
import {
  FileText,
  ShieldCheck,
  Building2,
  Check,
  Copy,
  ArrowLeft,
  Phone,
  Mail,
  Fuel,
  HardHat,
  Pickaxe,
  Sprout,
  Shield
} from 'lucide-react';
import { IMAGES, getTranslation } from '../data/content';
import { Language } from '../types';

interface OtherWaysToDonatePageProps {
  currentLang: Language;
  onBackHome: () => void;
  onOpenDonateModal: (amount?: number) => void;
}

export const OtherWaysToDonatePage: React.FC<OtherWaysToDonatePageProps> = ({
  currentLang,
  onBackHome,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [selectedSimSector, setSelectedSimSector] = useState<number>(1);
  const [simContractType, setSimContractType] = useState<'monthly' | 'once'>('monthly');

  const t = getTranslation(currentLang).otherWaysToDonate;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const sectorsSim = [
    {
      id: 1,
      code: '01 • BTP & Ponts',
      icon: HardHat,
      fr: 'Génie Civil, réhabilitation de routes nationales, pistes minières et construction de ponts en béton armé (100% conformité technique).',
      pt: 'Engenharia Civil, reabilitação de estradas nacionais, pistas de acesso mineiro e construção de pontes em betão armado (100% conformidade técnica).',
      en: 'Civil Engineering, rehabilitation of national highways, mining haul roads and reinforced concrete bridge construction (100% technical compliance).',
    },
    {
      id: 2,
      code: '02 • Hydrocarbures',
      icon: Fuel,
      fr: 'Fourniture industrielle d’Essence, Gasoil (AGO) et Jet A-1. Capacité installée de 12 000 m³/mois avec camions-citernes de 40 m³ sous suivi GPS 24/7.',
      pt: 'Fornecimento industrial de Gasolina, Gasóleo (AGO) e Jet A-1. Capacidade instalada de 12.000 m³/mês com camiões-cisterna de 40 m³ sob rastreamento GPS 24/7.',
      en: 'Industrial supply of Gasoline, Diesel (AGO) and Jet A-1. Installed capacity of 12,000 m³/month with 40 m³ tanker trucks under 24/7 GPS tracking.',
    },
    {
      id: 3,
      code: '03 • Rations FARDC',
      icon: Shield,
      fr: 'Approvisionnement stratégique du Ministère de la Défense et des FARDC : riz, farine de maïs, haricots, huile végétale, poisson salé, sucre, sel et kits MRE.',
      pt: 'Abastecimento estratégico ao Ministério da Defesa e às FARDC: arroz, farinha de milho, feijão, óleo vegetal, peixe salgado, açúcar, sal e kits MRE.',
      en: 'Strategic supply to the Ministry of Defense and FARDC: rice, maize flour, beans, vegetable oil, salted fish, sugar, salt and MRE operational kits.',
    },
    {
      id: 4,
      code: '04 • Café & Cacao',
      icon: Sprout,
      fr: 'Exportation directe de Café Arabica du Kivu, Café Robusta et Cacao Forastero fermenté & séché (sacs jute 60 kg) vers l’Europe, l’Asie et les Amériques.',
      pt: 'Exportação direta de Café Arábica do Kivu, Café Robusta e Cacau Forastero fermentado e seco (sacos de juta de 60 kg) para a Europa, Ásia e Américas.',
      en: 'Direct export of Kivu Arabica Coffee, Robusta Coffee and fermented & dried Forastero Cocoa (60 kg jute bags) to Europe, Asia and the Americas.',
    },
    {
      id: 5,
      code: '05 • Mines (Lualaba)',
      icon: Pickaxe,
      fr: 'Exploitation et sous-traitance minière certifiée ARSP à Kolwezi (Lualaba) et dans le Grand Katanga pour le Cuivre et le Cobalt.',
      pt: 'Exploração e subcontratação mineira certificada pela ARSP em Kolwezi (Lualaba) e no Grande Katanga para o Cobre e o Cobalto.',
      en: 'ARSP-certified mining exploration and subcontracting in Kolwezi (Lualaba) and Greater Katanga for Copper and Cobalt.',
    },
  ];

  const getActiveSectorDesc = () => {
    const found = sectorsSim.find((s) => s.id === selectedSimSector) || sectorsSim[0];
    if (currentLang === 'pt') return found.pt;
    if (currentLang === 'en') return found.en;
    return found.fr;
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-0">
      {/* 1. Hero Banner */}
      <div className="relative w-full min-h-[500px] sm:min-h-[560px] flex items-center justify-center overflow-hidden">
        <img
          src={IMAGES.heroPeople}
          alt="ETS KAMBALE MACHOZI (KM) — République Démocratique du Congo"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/75 to-slate-950/85 backdrop-blur-[1px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-28 pb-20">
          <button
            onClick={onBackHome}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full mb-6 transition-colors cursor-pointer backdrop-blur-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backHome}</span>
          </button>

          <div className="inline-block px-3.5 py-1 rounded-full bg-[#D71920]/90 text-white text-xs font-bold uppercase tracking-wider mb-4">
            {t.badge}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            {t.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            {t.sub}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => scrollToSection('simulateur-don')}
              className="px-8 py-3.5 bg-[#D71920] hover:bg-[#b81218] text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>{t.simBtn}</span>
            </button>
            <button
              onClick={() => scrollToSection('mobile-money')}
              className="px-6 py-3.5 bg-white/15 hover:bg-white/25 text-white font-bold text-sm uppercase tracking-wider rounded-xl border border-white/20 backdrop-blur-sm transition-all cursor-pointer"
            >
              {t.exploreBtn}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Interactive Sectoral Scope Simulator */}
      <div id="simulateur-don" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 mb-16">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D71920]">
                {t.simTitle}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
                {t.simSub}
              </h2>
            </div>

            {/* Contract Mode Tab */}
            <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto">
              <button
                onClick={() => setSimContractType('monthly')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  simContractType === 'monthly'
                    ? 'bg-[#1B2A6B] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.monthly}
              </button>
              <button
                onClick={() => setSimContractType('once')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  simContractType === 'once'
                    ? 'bg-[#1B2A6B] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.once}
              </button>
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* 5 Sector Selectors */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {sectorsSim.map((sec) => {
                const IconComp = sec.icon;
                return (
                  <button
                    key={sec.id}
                    onClick={() => setSelectedSimSector(sec.id)}
                    className={`p-3 rounded-xl font-bold font-display text-xs transition-all cursor-pointer border flex flex-col items-center justify-center gap-1.5 text-center ${
                      selectedSimSector === sec.id
                        ? 'bg-[#F7C600] border-[#F7C600] text-slate-900 shadow-sm scale-[1.02]'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <IconComp className="w-4 h-4" />
                    <span>{sec.code}</span>
                  </button>
                );
              })}
            </div>

            {/* Technical Specification Output */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-4 border border-slate-200 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm text-slate-700">
                <strong className="text-slate-900 block mb-0.5">
                  {t.impactLabel} — {simContractType === 'monthly' ? t.monthly : t.once}
                </strong>
                {getActiveSectorDesc()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Official Legal & Fiscal Compliance Grid (PDF Page 2) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-12">
        {/* Modality 1: Registre Officiel de Conformité Légale & Fiscale */}
        <div id="mobile-money" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                Conformité Légale, Fiscale & Sociale 100% en RDC
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                {t.mobileMoneyTitle}
              </h3>
            </div>
          </div>

          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            {t.mobileMoneyDesc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* RCCM & ID.NAT */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-slate-900">RCCM & ID. Nationale</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">GUCE RDC</span>
                </div>
                <div className="text-xs text-slate-500 mb-1">Registre du Commerce :</div>
                <div className="font-mono font-bold text-sm text-slate-800 select-all mb-2">
                  CD/KNG/RCCM/20-A-01815
                </div>
                <div className="text-[11px] text-slate-600">
                  ID.NAT : <strong>01-F4300-N63029P</strong> (Ministère de l’Économie Nationale)
                </div>
              </div>
              <button
                onClick={() => handleCopy('CD/KNG/RCCM/20-A-01815 | ID.NAT: 01-F4300-N63029P', 'rccm')}
                className="mt-4 w-full py-2 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedKey === 'rccm' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'rccm' ? t.copiedLabel : t.copyLabel}</span>
              </button>
            </div>

            {/* ARSP & NIF DGI */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-slate-900">ARSP & Fiscalité DGI</span>
                  <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">SOUS-TRAITANCE</span>
                </div>
                <div className="text-xs text-slate-500 mb-1">Attestation ARSP/CD :</div>
                <div className="font-mono font-bold text-base text-slate-800 select-all mb-2">
                  3914908074
                </div>
                <div className="text-[11px] text-slate-600">
                  N° Impôt (NIF DGI) : <strong>A2161439L</strong> (Quitus Fiscal Actif)
                </div>
              </div>
              <button
                onClick={() => handleCopy('ARSP/CD: 3914908074 | NIF DGI: A2161439L', 'arsp')}
                className="mt-4 w-full py-2 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedKey === 'arsp' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'arsp' ? t.copiedLabel : t.copyLabel}</span>
              </button>
            </div>

            {/* CNSS, INPP & ONEM */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-slate-900">Conformité Sociale</span>
                  <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold">CNSS • INPP</span>
                </div>
                <div className="text-xs text-slate-500 mb-1">Affiliation CNSS :</div>
                <div className="font-mono font-bold text-base text-slate-800 select-all mb-2">
                  1012867900
                </div>
                <div className="text-[11px] text-slate-600">
                  INPP : <strong>125073.40</strong> • ONEM : <strong>024888/E1/21</strong>
                </div>
              </div>
              <button
                onClick={() => handleCopy('CNSS: 1012867900 | INPP: 125073.40 | ONEM: 024888/E1/21', 'cnss')}
                className="mt-4 w-full py-2 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedKey === 'cnss' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'cnss' ? t.copiedLabel : t.copyLabel}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modality 2: Appel d'Offres & Cotations Directes */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Cellule des Marchés Publics & Contrats Privés
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                {t.cardsTitle}
              </h3>
            </div>
          </div>

          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            {t.cardsDesc}
          </p>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#071026] to-[#1B2A6B] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-lg font-bold">BTP • Hydrocarbures (12 000 m³/mois) • Rations • Café/Cacao • Mines</div>
              <div className="text-xs text-blue-200">{t.secureNote}</div>
            </div>
            <a
              href="mailto:direction@kambalemachozi.com?subject=Demande%20de%20Cotation%20-%20ETS%20KAMBALE%20MACHOZI"
              className="px-8 py-3.5 bg-[#D71920] hover:bg-[#b81218] text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-lg transition-all cursor-pointer whitespace-nowrap"
            >
              {t.donateNowBtn}
            </a>
          </div>
        </div>

        {/* Modality 3: Coordonnées Officielles & Siège Social (PDF Page 7) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#D71920] flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D71920]">
                Direction Générale — Kinshasa, RDC
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                {t.bankTransferTitle}
              </h3>
            </div>
          </div>

          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            {t.bankTransferDesc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Siège Social Kinshasa */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <div className="font-bold text-slate-900 text-base">Siège Social — Kinshasa / Gombe</div>
                <span className="text-[10px] bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded font-bold font-mono">
                  DIRECTION GÉNÉRALE
                </span>
              </div>
              <div className="text-xs text-slate-600 space-y-1.5">
                <div><strong>Entité :</strong> ETS KAMBALE MACHOZI (KM)</div>
                <div><strong>Directeur Général :</strong> M. Bertrand Kambale Machozi</div>
                <div><strong>Adresse :</strong> Av. Colonel Ebeya n°1746/A, C/Gombe, Kinshasa, RDC</div>
                <div><strong>Téléphone Direct :</strong> +243 817 170 622</div>
              </div>
              <button
                onClick={() => handleCopy('ETS KAMBALE MACHOZI (KM) - Av. Colonel Ebeya n°1746/A, C/Gombe, Kinshasa, RDC - Tel: +243 817 170 622', 'hq')}
                className="w-full py-2 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedKey === 'hq' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'hq' ? t.copiedLabel : `${t.copyLabel} (Siège Kinshasa)`}</span>
              </button>
            </div>

            {/* Bureaux de Liaison & Emails Officiels */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <div className="font-bold text-slate-900 text-base">Canaux Officiels & Hubs</div>
                <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold font-mono">
                  B2B • B2G • EXPORT
                </span>
              </div>
              <div className="text-xs text-slate-600 space-y-1.5">
                <div><strong>Email Institutionnel :</strong> direction@kambalemachozi.com</div>
                <div><strong>Email Commercial :</strong> etsmachozi@gmail.com</div>
                <div><strong>Hub Minier :</strong> Kolwezi (Lualaba) & Grand Katanga</div>
                <div><strong>Hub Agro-Export :</strong> Goma (Nord-Kivu), Beni & Port de Matadi</div>
              </div>
              <button
                onClick={() => handleCopy('direction@kambalemachozi.com | etsmachozi@gmail.com | +243 817 170 622', 'emails')}
                className="w-full py-2 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedKey === 'emails' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'emails' ? t.copiedLabel : `${t.copyLabel} (Contacts Officiels)`}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modality 4 & 5: Certificat Environnemental & Sous-Traitance ARSP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-display mb-2">
                {t.taxReceiptTitle}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {t.taxReceiptDesc}
              </p>
            </div>
            <a
              href="mailto:direction@kambalemachozi.com"
              className="py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold text-center transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>direction@kambalemachozi.com</span>
            </a>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-display mb-2">
                {t.inKindTitle}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {t.inKindDesc}
              </p>
            </div>
            <a
              href="tel:+243817170622"
              className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 rounded-xl text-xs font-bold text-center transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#D71920]" />
              <span>{t.inKindBtn} (+243 817 170 622)</span>
            </a>
          </div>
        </div>

        {/* Back to Home CTA */}
        <div className="pt-8 text-center">
          <button
            onClick={onBackHome}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backHome}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
