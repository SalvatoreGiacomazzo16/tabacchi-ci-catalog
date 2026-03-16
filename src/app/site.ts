import type { NavItem, SiteConfig } from '../types/app';

export const siteConfig: SiteConfig = {
  name: 'Tabacchi CI Catalog',
  description:
    'A minimal React, TypeScript, and Tailwind foundation prepared for real frontend work.',
};

export const primaryNav: NavItem[] = [
  { label: 'Overview', href: '#overview' },
  { label: 'Structure', href: '#structure' },
  { label: 'Next', href: '#next' },
];

export const starterHighlights = [
  'Organized app, page, UI, and section folders',
  'Tailwind CSS wired through the current Vite plugin integration',
  'No template counters, logos, or demo marketing content',
];
