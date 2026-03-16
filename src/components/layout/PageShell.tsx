import type { ReactNode } from 'react';
import type { NavItem } from '../../types/app';

type PageShellProps = {
  title: string;
  navItems: NavItem[];
  children: ReactNode;
};

export function PageShell({ title, navItems, children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <a
            className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-950"
            href="#overview"
          >
            {title}
          </a>

          <nav className="hidden items-center gap-6 text-sm text-stone-600 md:flex">
            {navItems.map((item) => (
              <a key={item.href} className="transition hover:text-stone-950" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16">{children}</main>
    </div>
  );
}
