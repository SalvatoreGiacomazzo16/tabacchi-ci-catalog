import { useEffect, useState } from 'react';
import type { LanguageCode } from '../../types/app';
import type { Product, ProductTranslation } from '../../types/product';
import { ProductMedia } from './ProductMedia';

const productIdsWithInfo = new Set([
  'quadretto-di-bartolo-longo-png',
  'statuetta-pulcinella-png',
  'statuetta-pulcinella-2-png',
  'statuetta-pulcinella-3-png',
  'statuetta-toto-artigianale-png',
  'corno-portafortuna-png',
  'corno-portafortuna-2-png',
]);

const modalImageScaleByProductId: Partial<Record<Product['id'], string>> = {
  'quadretto-di-bartolo-longo-png': 'scale-[2]',
  'statuetta-pulcinella-png': 'scale-[2]',
  'statuetta-pulcinella-2-png': 'scale-[2]',
  'statuetta-toto-artigianale-png': 'scale-[2]',
};

type ProductCardProps = {
  product: Product;
  selectedLanguage: LanguageCode;
};

type ProductInfoModalProps = {
  modalId: string;
  product: Product;
  content: ProductTranslation;
  onClose: () => void;
};

function ProductInfoModal({
  modalId,
  product,
  content,
  onClose,
}: ProductInfoModalProps) {
  const hasLongDescription = Boolean(content.longDescription?.length);
  const modalImageScaleClass = modalImageScaleByProductId[product.id];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      aria-labelledby={`${modalId}-title`}
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-2 sm:p-4"
      id={modalId}
      onClick={onClose}
      role="dialog"
    >
      <div
        className="relative grid h-[min(32rem,calc(100vh-1rem))] w-full max-w-6xl grid-cols-[minmax(0,1.15fr)_minmax(9rem,0.85fr)] overflow-hidden rounded-[1.5rem] border border-line bg-surface shadow-[var(--shadow-floating)] sm:h-[min(38rem,calc(100vh-2rem))] sm:grid-cols-[minmax(0,1.15fr)_minmax(12rem,0.85fr)] sm:rounded-[2rem] lg:h-[min(42rem,calc(100vh-3rem))] lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          aria-label="Close product info"
          className="absolute right-2 top-2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-sm font-semibold text-ink transition hover:border-brand-muted sm:right-4 sm:top-4 sm:h-10 sm:w-10 sm:text-lg"
          onClick={onClose}
          type="button"
        >
          X
        </button>

        <div className="flex h-full min-h-0 items-center justify-center overflow-hidden bg-canvas-soft p-3 sm:p-6 lg:p-8">
          {product.image ? (
            <img
              alt={content.title}
              className={
                modalImageScaleClass
                  ? `h-full max-h-full w-full max-w-full origin-center object-contain transform-gpu ${modalImageScaleClass}`
                  : 'h-full max-h-full w-full max-w-full object-contain'
              }
              src={product.image}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-[1.25rem] border border-dashed border-line bg-surface-soft text-center text-sm text-muted sm:rounded-[1.5rem]">
              Image unavailable
            </div>
          )}
        </div>

        <div className="flex h-full min-h-0 flex-col border-l border-line px-3 py-4 sm:px-5 sm:py-6 lg:px-8 lg:py-8">
          <h2
            className="pr-10 text-base font-semibold leading-tight text-ink sm:pr-12 sm:text-xl lg:text-2xl"
            id={`${modalId}-title`}
          >
            {content.title}
          </h2>
          {hasLongDescription ? (
            <div className="mt-3 min-h-0 flex-1 overflow-hidden rounded-[1rem] border border-line bg-canvas-soft sm:mt-4 sm:rounded-[1.5rem]">
              <div className="h-full overflow-y-auto overscroll-contain px-3 py-3 pr-2 sm:px-4 sm:py-4 sm:pr-3 lg:px-5 lg:py-5">
                <div className="space-y-4 sm:space-y-5">
                  {content.longDescription?.map((paragraph, index) => (
                    <p
                      className={
                        index === 0
                          ? 'text-sm font-semibold leading-5 text-ink sm:text-base sm:leading-6'
                          : 'text-xs leading-5 text-black sm:text-sm sm:leading-6 lg:text-[0.95rem] lg:leading-7'
                      }
                      key={paragraph}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-3 min-h-0 flex-1 rounded-[1rem] border border-dashed border-line bg-canvas-soft sm:mt-4 sm:rounded-[1.5rem]" />
          )}
        </div>
      </div>
    </div>
  );
}

export function ProductCard({ product, selectedLanguage }: ProductCardProps) {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const content = product.translations[selectedLanguage];
  const showInfoButton = productIdsWithInfo.has(product.id);
  const modalId = `product-info-modal-${product.id}`;

  return (
    <>
      <article className="flex h-full flex-col gap-4 rounded-[1.75rem] border border-line bg-[#C6C6C6]/75 p-4 shadow-[var(--shadow-card)] transition hover:border-brand-muted hover:shadow-[var(--shadow-floating)]">
        <ProductMedia
          category={content.category}
          className="aspect-[4/3]"
          hidePlaceholderMeta
          size={product.size}
          src={product.image}
          title={content.title}
        />

        <div className="flex flex-1 flex-col gap-3 px-1 pb-1">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-ink">{content.title}</h2>
            <p className="text-sm leading-6 text-black">{content.description}</p>
          </div>

          {showInfoButton ? (
            <div className="mt-auto pt-1">
              <button
                aria-controls={modalId}
                aria-expanded={isInfoOpen}
                aria-haspopup="dialog"
                className="inline-flex min-w-24 items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white shadow-[var(--shadow-card)] transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#06924A]/30 focus:ring-offset-2"
                onClick={() => setIsInfoOpen(true)}
                style={{ backgroundColor: '#06924A' }}
                type="button"
              >
                Info
              </button>
            </div>
          ) : null}
        </div>
      </article>

      {isInfoOpen ? (
        <ProductInfoModal
          content={content}
          modalId={modalId}
          onClose={() => setIsInfoOpen(false)}
          product={product}
        />
      ) : null}
    </>
  );
}
