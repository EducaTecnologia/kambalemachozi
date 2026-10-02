import kmHeroRoadsImg from '../assets/images/km_hero_roads_construction_1790912438335.jpg';
import kmFuelFleetImg from '../assets/images/km_fuel_logistics_fleet_1790912449357.jpg';
import kmMiningLualabaImg from '../assets/images/km_mining_lualaba_operations_1790912459813.jpg';
import kmCoffeeCocoaImg from '../assets/images/km_coffee_cocoa_export_1790912469517.jpg';
import kmFardcRationsImg from '../assets/images/km_fardc_rations_warehouse_1790912480385.jpg';
import kmBertrandCeoImg from '../assets/images/km_bertrand_ceo_portrait_1790912489891.jpg';
import placideBaundjaImg from '../assets/images/placide_baundja_portrait.jpg';
import maxDeCastroImg from '../assets/images/doudou_nzanga_executive_1790216344257.jpg';
import sandroMonteiroImg from '../assets/images/felix_tshimanga_portrait_1790214209611.jpg';

import { ProjectItem, TeamMember, NewsItem, ImpactStat } from '../types';
import { TRANSLATIONS, getTranslation } from './i18n';

export { TRANSLATIONS, getTranslation };
export * from './i18n/types';

export const IMAGES = {
  // Mapped semantic keys used across components
  heroPeople: kmHeroRoadsImg,
  heroAction: kmFuelFleetImg,
  heroHealth: kmMiningLualabaImg,
  projectAgri: kmCoffeeCocoaImg,
  fardcRations: kmFardcRationsImg,
  leaderPortrait: kmBertrandCeoImg,
  communityAction: kmMiningLualabaImg,
  aidDistributionAerial: kmFuelFleetImg,
  placideBaundja: placideBaundjaImg,
  maxDeCastro: maxDeCastroImg,
  sandroMonteiro: sandroMonteiroImg,
};

export const IMPACT_STATS: ImpactStat[] = TRANSLATIONS.fr.impactStats.items;
export const PROJECTS_DATA: ProjectItem[] = TRANSLATIONS.fr.projects.items;
export const TEAM_MEMBERS: TeamMember[] = TRANSLATIONS.fr.team.members;
export const NEWS_DATA: NewsItem[] = TRANSLATIONS.fr.news.items;

export interface PartnerOrg {
  name: string;
  category: string;
  role: string;
  logoText: string;
  badgeColor: string;
}

export const PARTNERS_LIST: PartnerOrg[] = [
  {
    name: 'Ministère de l’ITPR RDC',
    category: 'Autorisation Officielle',
    role: 'Infrastructures, Routes, Ponts & Travaux Publics',
    logoText: 'ITPR RDC',
    badgeColor: 'bg-blue-700 text-white'
  },
  {
    name: 'Ministère de la Défense Nationale',
    category: 'Fournisseur Officiel FARDC',
    role: 'Approvisionnement Stratégique & Rations Militaires',
    logoText: 'FARDC',
    badgeColor: 'bg-emerald-700 text-white'
  },
  {
    name: 'ARSP République Démocratique du Congo',
    category: 'Sous-Traitance Agréée',
    role: 'Licence Officielle ARSP/CD/0000018850',
    logoText: 'ARSP',
    badgeColor: 'bg-red-700 text-white'
  },
  {
    name: 'SGS Testing & Certification',
    category: 'Norme Qualité Pétrolière',
    role: 'Carburant Certifié (Densité, Eau, Soufre — Sans Mélange)',
    logoText: 'SGS',
    badgeColor: 'bg-amber-500 text-slate-900'
  },
  {
    name: 'Kisanfu Mining (CMOC)',
    category: 'Secteur Minier Lualaba',
    role: 'Logistique Pétrolière 24/48h & Sous-Traitance',
    logoText: 'KISANFU',
    badgeColor: 'bg-slate-800 text-white'
  },
  {
    name: 'Mutanda Mining (MUMI)',
    category: 'Ceinture Cuivre-Cobalt',
    role: 'Approvisionnement d’Équipements & Génie Civil Minier',
    logoText: 'MUTANDA',
    badgeColor: 'bg-blue-900 text-white'
  },
  {
    name: 'Kamoto Copper Company (KCC)',
    category: 'Opérations Kolwezi',
    role: 'Partenariat Logistique & Préparation de Sites',
    logoText: 'KAMOTO',
    badgeColor: 'bg-red-600 text-white'
  },
  {
    name: 'Corridors Export Anvers • Rotterdam • Dubaï',
    category: 'Agro-Industrie Internationale',
    role: 'Exportation Café Arabica, Robusta & Cacao Certifié',
    logoText: 'EXPORT',
    badgeColor: 'bg-emerald-800 text-white'
  }
];

export const I18N_STRINGS = TRANSLATIONS;
