import { Link } from 'react-router-dom';
import { formatProductPrice } from '../../lib/catalog';
import type { LanguageCode } from '../../types/app';
import type { Product } from '../../types/product';
import { ProductMedia } from './ProductMedia';

type ProductCardProps = {
  product: Product;
  selectedLanguage: LanguageCode;
};

export function ProductCard({ product, selectedLanguage }: ProductCardProps) {
  const content = product.translations[selectedLanguage];

  return (
    <article className="flex h-full flex-col gap-4 rounded-[1.75rem] border border-line bg-[#C6C6C6]/75 p-4 shadow-[var(--shadow-card)] transition hover:border-brand-muted hover:shadow-[var(--shadow-floating)]">
      <ProductMedia
        category={content.category}
        className="aspect-[4/3]"
        size={product.size}
        src={product.image}
        title={content.title}
      />

      <div className="flex flex-1 flex-col gap-3 px-1 pb-1">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-500">
            {content.category}
          </p>
          <h2 className="text-xl font-semibold text-ink">{content.title}</h2>
          <p className="text-sm leading-6 text-black">{content.description}</p>
          <p className="text-sm font-medium text-black">Size: {product.size}</p>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <p className="text-lg font-semibold text-brand-700">
            {formatProductPrice(product, selectedLanguage)}
          </p>

          <Link
            className="inline-flex items-center rounded-full border border-brand-700 bg-brand-700 px-4 py-2 text-sm font-medium text-contrast shadow-[var(--shadow-card)] transition hover:border-brand-500 hover:bg-brand-500"
            to={`/${selectedLanguage}/product/${product.id}`}
          >
            View detail
          </Link>
        </div>
      </div>
    </article>
  );
}
