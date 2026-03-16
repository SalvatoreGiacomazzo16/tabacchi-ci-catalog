import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex w-fit items-center rounded-full border border-stone-200 bg-stone-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-stone-600',
        className,
      )}
    >
      {children}
    </span>
  );
}
