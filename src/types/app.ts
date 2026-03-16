export type NavItem = {
  label: string;
  to: string;
  end?: boolean;
};

export type LanguageCode = 'it' | 'en' | 'es' | 'fr' | 'de';

export type LanguageOption = {
  code: LanguageCode;
  label: string;
  flag: string;
  locale: string;
};
