export type Language = 'fr' | 'en' | 'es' | 'pt' | 'ar' | 'zh';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  image: string;
  category: 'assainissement' | 'sante' | 'agriculture' | 'social';
  description: string;
  stats: { label: string; value: string }[];
  impactDetail: string;
}

export interface TeamMember {
  name: string;
  role: string;
  location: string;
  image: string;
  bio: string;
  quote?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
}

export interface ImpactStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}
