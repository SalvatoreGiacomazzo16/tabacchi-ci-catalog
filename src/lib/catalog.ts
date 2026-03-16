import { languageOptions } from '../app/config';
import type { LanguageCode } from '../types/app';
import type { Product } from '../types/product';

const localeMap = languageOptions.reduce<Record<LanguageCode, string>>((map, language) => {
  map[language.code] = language.locale;
  return map;
}, {} as Record<LanguageCode, string>);

export function formatProductPrice(product: Product, language: LanguageCode) {
  return new Intl.NumberFormat(localeMap[language], {
    style: 'currency',
    currency: product.currency,
  }).format(product.price);
}
