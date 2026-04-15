import type { LanguageCode } from '../types/app';
import type { Product, ProductTranslation } from '../types/product';
import { productImageFilenames } from './generatedProductImageFilenames';
import { productBaseDataByFilename } from './products.base';
import { germanProductContentByFilename } from './products.translations.de';
import { englishProductContentByFilename } from './products.translations.en';
import { spanishProductContentByFilename } from './products.translations.es';
import { frenchProductContentByFilename } from './products.translations.fr';
import { italianProductContentByFilename } from './products.translations.it';
import type { ProductImageFilename } from './products.translations.shared';

const categoryCopy: Record<LanguageCode, ProductTranslation['category']> = {
  it: 'Categoria da definire',
  en: 'Category to define',
  es: 'Categoria por definir',
  fr: 'Categorie a definir',
  de: 'Kategorie offen',
};

function buildTranslations(filename: ProductImageFilename): Record<LanguageCode, ProductTranslation> {
  const italianContent = italianProductContentByFilename[filename];
  const englishContent = englishProductContentByFilename[filename];
  const spanishContent = spanishProductContentByFilename[filename];
  const frenchContent = frenchProductContentByFilename[filename];
  const germanContent = germanProductContentByFilename[filename];

  return {
    it: {
      title: italianContent.title,
      description: italianContent.description,
      longDescription: italianContent.longDescription,
      category: categoryCopy.it,
    },
    en: {
      title: englishContent.title,
      description: englishContent.description,
      longDescription: englishContent.longDescription,
      category: categoryCopy.en,
    },
    es: {
      title: spanishContent.title,
      description: spanishContent.description,
      longDescription: spanishContent.longDescription,
      category: categoryCopy.es,
    },
    fr: {
      title: frenchContent.title,
      description: frenchContent.description,
      longDescription: frenchContent.longDescription,
      category: categoryCopy.fr,
    },
    de: {
      title: germanContent.title,
      description: germanContent.description,
      longDescription: germanContent.longDescription,
      category: categoryCopy.de,
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
