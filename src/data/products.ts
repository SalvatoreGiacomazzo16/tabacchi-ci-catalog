import type { LanguageCode } from '../types/app';
import type { Product, ProductTranslation } from '../types/product';
import { productImageFilenames } from './generatedProductImageFilenames';
import { productBaseDataByFilename } from './products.base';
import { germanProductContentByFilename } from './products.translations.de';
import { englishProductContentByFilename } from './products.translations.en';
import { spanishProductContentByFilename } from './products.translations.es';
import { frenchProductContentByFilename } from './products.translations.fr';
import { italianProductContentByFilename } from './products.translations.it';
import type {
  ProductContentTranslation,
  ProductImageFilename,
} from './products.translations.shared';

const categoryCopy: Record<LanguageCode, ProductTranslation['category']> = {
  it: 'Categoria da definire',
  en: 'Category to define',
  es: 'Categoria por definir',
  fr: 'Categorie a definir',
  de: 'Kategorie offen',
};

const lowercaseTitleWords = new Set([
  'a',
  'con',
  'da',
  'de',
  'del',
  'della',
  'di',
  'e',
  'in',
  'of',
  'su',
]);

function deriveTitleFromFilename(filename: string) {
  const extensionlessFilename = filename.replace(/\.[^.]+$/, '');
  const normalizedFilename = extensionlessFilename
    .normalize('NFC')
    .replace(/[_-]+/g, ' ')
    .replace(/\((\d+)\)/g, ' $1 ')
    .replace(/\bremovebg preview\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim();

  return normalizedFilename
    .split(' ')
    .map((word, index) => {
      const lowercasedWord = word.toLocaleLowerCase();

      if (/^img$/i.test(word)) {
        return 'IMG';
      }

      if (index > 0 && lowercaseTitleWords.has(lowercasedWord)) {
        return lowercasedWord;
      }

      return `${lowercasedWord.charAt(0).toLocaleUpperCase()}${lowercasedWord.slice(1)}`;
    })
    .join(' ');
}

function createTranslation(
  filename: ProductImageFilename,
  localizedContent: ProductContentTranslation | undefined,
  language: LanguageCode,
): ProductTranslation {
  return {
    title: localizedContent?.title ?? deriveTitleFromFilename(filename),
    description: localizedContent?.description ?? '',
    longDescription: localizedContent?.longDescription,
    category: categoryCopy[language],
  };
}

function buildTranslations(filename: ProductImageFilename): Record<LanguageCode, ProductTranslation> {
  const italianContent = italianProductContentByFilename[filename];
  const englishContent = englishProductContentByFilename[filename];
  const spanishContent = spanishProductContentByFilename[filename];
  const frenchContent = frenchProductContentByFilename[filename];
  const germanContent = germanProductContentByFilename[filename];

  return {
    it: createTranslation(filename, italianContent, 'it'),
    en: createTranslation(filename, englishContent, 'en'),
    es: createTranslation(filename, spanishContent, 'es'),
    fr: createTranslation(filename, frenchContent, 'fr'),
    de: createTranslation(filename, germanContent, 'de'),
  };
}

function createProductId(filename: string, index: number) {
  const normalizedId = filename
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return normalizedId || `product-${index + 1}`;
}

export const products: Product[] = productImageFilenames.map((filename, index) => {
  const baseData = productBaseDataByFilename[filename];

  return {
    id: createProductId(filename, index),
    price: baseData.price,
    size: baseData.size,
    image: `/product-images/${filename}`,
    currency: baseData.currency,
    translations: buildTranslations(filename),
  };
});
