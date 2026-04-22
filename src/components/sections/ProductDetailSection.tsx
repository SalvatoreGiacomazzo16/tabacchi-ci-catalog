import { Link } from 'react-router-dom';
import { formatProductPrice } from '../../lib/catalog';
import type { LanguageCode } from '../../types/app';
import type { Product } from '../../types/product';
import { ProductMedia } from '../ui/ProductMedia';

type ProductDetailSectionProps = {
  product: Product | undefined;
  selectedLanguage: LanguageCode;
};

export function ProductDetailSection({
  product,
  selectedLanguage,
}: ProductDetailSectionProps) {
  if (!product) {
    return (
      <section className="rounded-[2rem] border border-dashed border-line-strong bg-surface px-6 py-12 text-center shadow-[var(--shadow-card)] sm:px-10">
        <div className="mx-auto max-w-md space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-500">
            Product detail
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-ink">Product not found</h1>
          <p className="text-sm leading-6 text-muted">
            The requested catalog item does not exist in the local placeholder dataset.
          </p>
          <Link
            className="inline-flex items-center rounded-full border border-brand-700 bg-brand-700 px-5 py-3 text-sm font-medium text-contrast shadow-[var(--shadow-card)] transition hover:border-brand-500 hover:bg-brand-500"
            to={`/${selectedLanguage}/catalog`}
          >
            Back to catalog
          </Link>
        </div>
      </section>
    );
  }

  const content = product.translations[selectedLanguage];

  return (
    <section className="space-y-6">
      <Link
        className="inline-flex items-center text-sm font-medium text-brand-700 transition hover:text-brand-500"
        to={`/${selectedLanguage}/catalog`}
      >
        Back to catalog
      </Link>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <ProductMedia
          category={content.category}
          className="min-h-[20rem] lg:min-h-[32rem]"
          size={product.size}
          src={product.image}
          title={content.title}
        />

        <div className="flex flex-col gap-6 rounded-[2rem] border border-line bg-surface p-6 shadow-[var(--shadow-card)] sm:p-8">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-500">
              {content.category}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {content.title}
            </h1>
            {content.description ? (
              <p className="text-base leading-7 text-muted">{content.description}</p>
            ) : null}
          </div>

          <div className="grid gap-4 rounded-[1.5rem] border border-line bg-canvas-soft p-5 sm:grid-cols-3">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Category
              </p>
              <p className="text-base font-medium text-ink">{content.category}</p>
            </div>

            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Size</p>
              <p className="text-base font-medium text-ink">{product.size}</p>
            </div>

            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Price</p>
              <p className="text-base font-semibold text-brand-700">
                {formatProductPrice(product, selectedLanguage)}
              </p>
            </div>
          </div>

          <div className="mt-auto">
            <Link
              className="inline-flex items-center rounded-full border border-brand-700 bg-brand-700 px-5 py-3 text-sm font-medium text-contrast shadow-[var(--shadow-card)] transition hover:border-brand-500 hover:bg-brand-500"
              to={`/${selectedLanguage}/catalog`}
            >
              Continue browsing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
