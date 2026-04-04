import { productImageFilenames } from './generatedProductImageFilenames';

type ProductImageFilename = (typeof productImageFilenames)[number];

export type ProductBaseData = {
  price: number;
  size: string;
  currency: 'EUR';
};

const defaultProductBaseData: ProductBaseData = {
  price: 0,
  size: 'Da definire',
  currency: 'EUR',
};

export const productBaseDataByFilename: Record<ProductImageFilename, ProductBaseData> =
  Object.fromEntries(
    productImageFilenames.map((filename) => [filename, { ...defaultProductBaseData }]),
  ) as Record<ProductImageFilename, ProductBaseData>;
