import { cn } from '../../lib/cn';

type ProductMediaProps = {
  src: string | null;
  title: string;
  category: string;
  size: string;
  className?: string;
};

export function ProductMedia({ src, title, category, size, className }: ProductMediaProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[1.75rem] border border-line bg-surface-soft',
        className,
      )}
    >
      {src ? (
        <img alt={title} className="h-full w-full object-cover" src={src} />
      ) : (
        <div className="flex h-full min-h-56 flex-col justify-between bg-gradient-to-br from-canvas-soft via-surface to-brand-faint p-5">
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
        </div>
      )}
    </div>
  );
}
