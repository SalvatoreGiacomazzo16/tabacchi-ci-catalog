import { primaryNav, siteConfig, starterHighlights } from '../app/site';
import { PageShell } from '../components/layout/PageShell';
import { HeroSection } from '../components/sections/HeroSection';

export function HomePage() {
  return (
    <PageShell title={siteConfig.name} navItems={primaryNav}>
      <HeroSection
        title={siteConfig.name}
        description={siteConfig.description}
        highlights={starterHighlights}
      />
    </PageShell>
  );
}
