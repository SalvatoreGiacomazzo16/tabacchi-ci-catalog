import type { LanguageCode } from '../types/app';
import type { Product, ProductTranslation } from '../types/product';
import { productImageFilenames } from './generatedProductImageFilenames';

const PLACEHOLDER_SIZE = 'Da definire';
const ITALIAN_LOWERCASE_WORDS = new Set([
  'a',
  'ad',
  'con',
  'da',
  'dei',
  'degli',
  'del',
  'della',
  'delle',
  'dello',
  'di',
  'e',
  'fra',
  'in',
  'per',
  'su',
  'tra',
]);

const placeholderCopy: Record<LanguageCode, Omit<ProductTranslation, 'title'>> = {
  it: {
    description: 'Descrizione da definire.',
    category: 'Categoria da definire',
  },
  en: {
    description: 'Description to define.',
    category: 'Category to define',
  },
  es: {
    description: 'Descripcion por definir.',
    category: 'Categoria por definir',
  },
  fr: {
    description: 'Description a definir.',
    category: 'Categorie a definir',
  },
  de: {
    description: 'Beschreibung offen.',
    category: 'Kategorie offen',
  },
};

function formatProductTitle(filename: string) {
  const normalizedName = filename
    .replace(/\.[^/.]+$/, '')
    .replace(/\u2560\u00c7/g, '\u0300')
    .normalize('NFC')
    .replace(/[-_]+/g, ' ')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return normalizedName
    .split(' ')
    .filter(Boolean)
    .map((word, index) => {
      const lowercaseWord = word.toLocaleLowerCase('it-IT');

      if (index > 0 && ITALIAN_LOWERCASE_WORDS.has(lowercaseWord)) {
        return lowercaseWord;
      }

      return lowercaseWord.charAt(0).toLocaleUpperCase('it-IT') + lowercaseWord.slice(1);
    })
    .join(' ');
}

function buildTranslations(title: string): Record<LanguageCode, ProductTranslation> {
  return {
    it: {
      title,
      ...placeholderCopy.it,
    },
    en: {
      title,
      ...placeholderCopy.en,
    },
    es: {
      title,
      ...placeholderCopy.es,
    },
    fr: {
      title,
      ...placeholderCopy.fr,
    },
    de: {
      title,
      ...placeholderCopy.de,
    },
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
  const title = formatProductTitle(filename);

  return {
    id: createProductId(filename, index),
    price: 0,
    size: PLACEHOLDER_SIZE,
    image: `/product-images/${filename}`,
    currency: 'EUR',
    translations: buildTranslations(title),
  };
});
