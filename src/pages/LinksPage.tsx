import { Link } from 'react-router-dom';
import { defaultLanguage } from '../app/config';

const catalogUrl = 'https://tabacchi-ci-catalog.vercel.app/it';
const instagramUrl = 'https://instagram.com/tabacchicatalog';

export function LinksPage() {
  return (
    <div className="grid min-h-screen place-items-center px-4 py-8 sm:px-6">
      <main className="w-full max-w-md">
        <section className="rounded-[2rem] border border-line bg-surface/95 p-6 text-center shadow-[var(--shadow-floating)] backdrop-blur sm:p-8">
          <div className="mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-brand-muted bg-brand-faint shadow-[var(--shadow-card)]">
            <img
              alt="Tabacchi Ci logo"
              className="h-full w-full scale-[1.7] object-contain"
              src="/tabacchi.cipriano.png"
            />
          </div>

          <div className="mt-6 space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Tabacchi Ci</h1>
            <p className="text-sm leading-6 text-muted sm:text-base">
              Scopri il catalogo e seguici su Instagram
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-500 px-5 py-3 text-base font-semibold text-contrast shadow-[var(--shadow-card)] hover:bg-brand-700 hover:-translate-y-0.5"
              href={catalogUrl}
              rel="noreferrer"
              target="_blank"
            >
              Catalogo prodotti
            </a>

            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-canvas-soft px-5 py-3 text-base font-semibold text-ink shadow-[var(--shadow-card)] hover:border-brand-muted hover:bg-brand-faint hover:text-brand-700 hover:-translate-y-0.5"
              href={instagramUrl}
              rel="noreferrer"
              target="_blank"
            >
              Instagram
            </a>
          </div>

          <div className="mt-6">
            <Link
              className="text-sm font-medium text-brand-700 transition hover:text-brand-500"
              to={`/${defaultLanguage}/catalog`}
            >
              Torna al catalogo
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
