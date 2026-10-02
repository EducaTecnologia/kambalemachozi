import { Language } from '../../types';
import { TranslationSchema } from './types';
import { frTranslations } from './fr';
import { enTranslations } from './en';
import { ptTranslations } from './pt';
import { esTranslations } from './es';
import { arTranslations } from './ar';
import { zhTranslations } from './zh';

export * from './types';

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  fr: frTranslations,
  en: enTranslations,
  pt: ptTranslations,
  es: esTranslations,
  ar: arTranslations,
  zh: zhTranslations,
};

export const getTranslation = (lang: Language): TranslationSchema => {
  return TRANSLATIONS[lang] || TRANSLATIONS.fr;
};
