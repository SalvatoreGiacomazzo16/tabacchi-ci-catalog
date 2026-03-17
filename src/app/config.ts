import type { LanguageCode, LanguageOption } from '../types/app';

export const siteTitle = 'Tabacchi CI Catalog';

export const languageOptions: LanguageOption[] = [
  { code: 'it', label: 'Italian', flag: '🇮🇹', locale: 'it-IT' },
  { code: 'en', label: 'English', flag: '🇬🇧', locale: 'en-GB' },
  { code: 'es', label: 'Spanish', flag: '🇪🇸', locale: 'es-ES' },
  { code: 'fr', label: 'French', flag: '🇫🇷', locale: 'fr-FR' },
  { code: 'de', label: 'German', flag: '🇩🇪', locale: 'de-DE' },
];

export const defaultLanguage: LanguageCode = 'it';
