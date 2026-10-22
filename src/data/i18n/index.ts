import { Language } from '../../types';
import { TranslationSchema } from './types';
import { frTranslations } from './fr';
import { enTranslations } from './en';
import { ptTranslations } from './pt';

export * from './types';

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  fr: frTranslations,
  pt: ptTranslations,
  en: enTranslations,
};

export const getTranslation = (lang: Language): TranslationSchema => {
  return TRANSLATIONS[lang] || TRANSLATIONS.fr;
};
