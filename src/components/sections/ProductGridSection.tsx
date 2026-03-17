import type { ReactNode } from 'react';
import type { LanguageCode } from '../../types/app';
import type { Product } from '../../types/product';
import { ProductCard } from '../ui/ProductCard';

type ProductGridSectionProps = {
  title: string;
  products: Product[];
  selectedLanguage: LanguageCode;
  headerContent?: ReactNode;
  emptyState?: ReactNode;
};

export function ProductGridSection({
  title,
  products,
  selectedLanguage,
  headerContent,
  emptyState,
}: ProductGridSectionProps) {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 border-b border-line-strong pb-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h1>
          <p className="text-sm font-medium text-brand-500">{products.length} products</p>
        </div>

        {headerContent}
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              selectedLanguage={selectedLanguage}
            />
          ))}
        </div>
      ) : (
        emptyState ?? null
      )}
    </section>
  );
}
