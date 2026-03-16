import type { LanguageCode } from './app';

export type ProductTranslation = {
  title: string;
  description: string;
  category: string;
};

export type Product = {
  id: string;
  price: number;
  size: string;
  image: string | null;
  currency: 'EUR';
  translations: Record<LanguageCode, ProductTranslation>;
};