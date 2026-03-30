import { cn } from '../../lib/cn';

type ProductMediaProps = {
  src: string | null;
  title: string;
  category: string;
  size: string;
  hidePlaceholderMeta?: boolean;
  className?: string;
};

export function ProductMedia({
  src,
  title,
  category,
  size,
  hidePlaceholderMeta = false,
  className,
}: ProductMediaProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[1.75rem] border border-line bg-surface-soft',
        className,
      )}
    >
      {src ? (
        <div className="flex h-full w-full items-center justify-center p-3">
          <img
            alt={title}
            src={src}
            className="max-h-[86%] max-w-[86%] object-contain scale-[1.30]"
          />
        </div>
      ) : (
        <div className="flex h-full min-h-56 flex-col justify-between bg-gradient-to-br from-canvas-soft via-surface to-brand-faint p-5">
          {hidePlaceholderMeta ? null : (
            <>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex rounded-full border border-brand-muted bg-brand-faint px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                  {category}
                </span>
                <span className="inline-flex rounded-full border border-line-strong bg-surface px-3 py-1 text-xs font-medium text-muted">
                  {size}
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-base font-semibold text-ink">{title}</p>
                <p className="text-sm text-muted">Image placeholder</p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
