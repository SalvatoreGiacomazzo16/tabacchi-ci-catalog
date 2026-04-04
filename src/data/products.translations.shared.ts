import { productImageFilenames } from './generatedProductImageFilenames';

export type ProductImageFilename = (typeof productImageFilenames)[number];

export type ProductContentTranslation = {
  title: string;
  description: string;
};

export type ProductContentTranslationByFilename = Record<
  ProductImageFilename,
  ProductContentTranslation
>;
