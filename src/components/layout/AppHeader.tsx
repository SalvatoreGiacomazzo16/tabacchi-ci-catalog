import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { languageOptions, siteTitle } from '../../app/config';
import { cn } from '../../lib/cn';
import type { LanguageCode } from '../../types/app';

type AppHeaderProps = {
  selectedLanguage: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
};

type LanguageOptionsListProps = {
  selectedLanguage: LanguageCode;
  onSelect: (language: LanguageCode) => void;
  className?: string;
  buttonClassName?: string;
};

function LanguageOptionsList({
  selectedLanguage,
  onSelect,
  className,
  buttonClassName,
}: LanguageOptionsListProps) {
  return (
    <div className={className}>
      {languageOptions.map((language) => {
        const isActive = language.code === selectedLanguage;

        return (
          <button
            key={language.code}
            className={cn(
              'flex items-center justify-between gap-3 rounded-2xl border border-line bg-surface px-4 py-3 text-left text-sm font-medium text-ink shadow-[var(--shadow-card)] transition hover:border-brand-muted hover:bg-brand-faint hover:text-brand-700',
              isActive && 'border-brand-500 bg-brand-faint text-brand-700',
              buttonClassName,
            )}
            onClick={() => onSelect(language.code)}
            type="button"
          >
            <span className="flex items-center gap-3">
              <span aria-hidden="true" className="text-base">
                {language.flag}
              </span>
              <span>{language.label}</span>
            </span>
            {isActive ? <span className="text-xs uppercase tracking-[0.2em]">Current</span> : null}
          </button>
        );
      })}
    </div>
  );
}

export function AppHeader({ selectedLanguage, onLanguageChange }: AppHeaderProps) {
  const [mobileLanguageOpen, setMobileLanguageOpen] = useState(false);
  const [desktopLanguageOpen, setDesktopLanguageOpen] = useState(false);
  const location = useLocation();
  const desktopMenuRef = useRef<HTMLDivElement | null>(null);

  const currentLanguage =
    languageOptions.find((language) => language.code === selectedLanguage) ?? languageOptions[0];

  useEffect(() => {
    setMobileLanguageOpen(false);
    setDesktopLanguageOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!desktopMenuRef.current?.contains(event.target as Node)) {
        setDesktopLanguageOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function handleLanguageChange(language: LanguageCode) {
    onLanguageChange(language);
    setMobileLanguageOpen(false);
    setDesktopLanguageOpen(false);
  }

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-surface/90 shadow-[var(--shadow-header)] backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link
            className="flex items-center gap-3 text-brand-700 transition hover:text-brand-500"
            to={`/${selectedLanguage}/catalog`}
          >
            <img
              alt="Tabacchi Cipriano logo"
              className="h-16 w-auto shrink-0 object-contain sm:h-18"
              src="/tabacchi.cipriano.png"
            />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] sm:text-sm">
              {siteTitle}
            </span>
          </Link>

          <div className="hidden md:block">
            <div className="relative" ref={desktopMenuRef}>
              <button
                className="flex items-center gap-3 rounded-full border border-line bg-canvas-soft px-4 py-2.5 text-sm font-medium text-ink transition hover:border-brand-muted hover:bg-brand-faint hover:text-brand-700"
                onClick={() => setDesktopLanguageOpen((open) => !open)}
                type="button"
              >
                <span aria-hidden="true">{currentLanguage.flag}</span>
                <span>{currentLanguage.label}</span>
                <svg
                  aria-hidden="true"
                  className={cn('h-4 w-4 transition', desktopLanguageOpen && 'rotate-180')}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                  />
                </svg>
              </button>

              {desktopLanguageOpen ? (
                <div className="absolute right-0 top-[calc(100%+0.6rem)] w-64 rounded-3xl border border-line bg-surface p-3 shadow-[var(--shadow-floating)]">
                  <LanguageOptionsList
                    buttonClassName="w-full"
                    className="space-y-2"
                    onSelect={handleLanguageChange}
                    selectedLanguage={selectedLanguage}
                  />
                </div>
              ) : null}
            </div>
          </div>

          <button
            className="flex items-center gap-3 rounded-full border border-line bg-canvas-soft px-4 py-2.5 text-sm font-medium text-ink transition hover:border-brand-muted hover:bg-brand-faint hover:text-brand-700 md:hidden"
            onClick={() => setMobileLanguageOpen((open) => !open)}
            type="button"
          >
            <span aria-hidden="true">{currentLanguage.flag}</span>
            <span>{currentLanguage.label}</span>
            <svg
              aria-hidden="true"
              className={cn('h-4 w-4 transition', mobileLanguageOpen && 'rotate-180')}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
              />
            </svg>
          </button>
        </div>

        {mobileLanguageOpen ? (
          <div className="mt-2 rounded-3xl border border-line bg-surface p-3 shadow-[var(--shadow-card)] md:hidden">
            <LanguageOptionsList
              buttonClassName="w-full"
              className="space-y-2"
              onSelect={handleLanguageChange}
              selectedLanguage={selectedLanguage}
            />
          </div>
        ) : null}
      </div>
    </header>
  );
}