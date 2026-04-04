import type { LanguageCode } from '../types/app';
import type { Product, ProductTranslation } from '../types/product';
import { productImageFilenames } from './generatedProductImageFilenames';
import { productBaseDataByFilename } from './products.base';
import {
  italianProductContentByFilename,
  type ItalianProductContent,
} from './products.translations.it';

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

function buildTranslations(content: ItalianProductContent): Record<LanguageCode, ProductTranslation> {
  return {
    it: {
      title: content.title,
      description: content.description,
      category: placeholderCopy.it.category,
    },
    en: {
      title: content.title,
      ...placeholderCopy.en,
    },
    es: {
      title: content.title,
      ...placeholderCopy.es,
    },
    fr: {
      title: content.title,
      ...placeholderCopy.fr,
    },
    de: {
      title: content.title,
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
  const baseData = productBaseDataByFilename[filename];
  const italianContent = italianProductContentByFilename[filename];

  return {
    id: createProductId(filename, index),
    price: baseData.price,
    size: baseData.size,
    image: `/product-images/${filename}`,
    currency: baseData.currency,
    translations: buildTranslations(italianContent),
  };
});
