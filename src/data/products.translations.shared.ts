import { productImageFilenames } from './generatedProductImageFilenames';

export type ProductImageFilename = (typeof productImageFilenames)[number];

export type ProductContentTranslation = {
  title: string;
  description: string;
  longDescription?: string[];
};

export type ProductContentTranslationByFilename = Partial<Record<
  ProductImageFilename,
  ProductContentTranslation
>>;
