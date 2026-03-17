import { useState } from 'react';
import { useCatalogLayoutContext } from '../app/useCatalogLayoutContext';
import { ProductGridSection } from '../components/sections/ProductGridSection';
import { products } from '../data/products';

export function CatalogPage() {
  const { selectedLanguage } = useCatalogLayoutContext();
  const [searchQuery, setSearchQuery] = useState('');

  const normalizedQuery = searchQuery.trim().toLocaleLowerCase();
  const filteredProducts = normalizedQuery
    ? products.filter((product) => {
        const { title, description } = product.translations[selectedLanguage];
        const searchableText = `${title} ${description}`.toLocaleLowerCase();

        return searchableText.includes(normalizedQuery);
      })
    : products;

  return (
    <ProductGridSection
      emptyState={
        <div className="rounded-[1.75rem] border border-dashed border-line bg-canvas-soft px-6 py-10 text-center shadow-[var(--shadow-card)]">
          <p className="text-lg font-semibold text-ink">No products found</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            Try a different title or description.
          </p>
        </div>
      }
      headerContent={
        <div className="relative w-full sm:w-[22rem]">
          <label className="sr-only" htmlFor="catalog-search">
            Search products
          </label>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-muted"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </svg>
          </span>
          <input
            className="w-full rounded-full border border-line bg-surface py-3 pl-11 pr-4 text-sm text-ink shadow-[var(--shadow-card)] outline-none transition placeholder:text-muted focus:border-brand-muted"
            id="catalog-search"
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search products"
            type="search"
            value={searchQuery}
          />
        </div>
      }
      title="All products"
      products={filteredProducts}
      selectedLanguage={selectedLanguage}
    />
  );
}
