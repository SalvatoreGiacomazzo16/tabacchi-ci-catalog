import { Navigate, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { defaultLanguage, footerTranslations, languageOptions } from '../../app/config';
import type { LanguageCode } from '../../types/app';
import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';

export function CatalogLayout() {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const isValidLanguage = languageOptions.some((option) => option.code === lang);

  if (!lang || !isValidLanguage) {
    return <Navigate replace to={`/${defaultLanguage}`} />;
  }

  const selectedLanguage = lang as LanguageCode;

  const setSelectedLanguage = (nextLanguage: LanguageCode) => {
    const segments = location.pathname.split('/').filter(Boolean);

    if (segments.length === 0) {
      navigate(`/${nextLanguage}`, { replace: true });
      return;
    }

    segments[0] = nextLanguage;
    navigate(`/${segments.join('/')}`);
  };

  return (
    <div className="min-h-screen bg-canvas">
      <AppHeader
        onLanguageChange={setSelectedLanguage}
        selectedLanguage={selectedLanguage}
      />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Outlet context={{ selectedLanguage, setSelectedLanguage }} />
      </main>

      <AppFooter contactLabel={footerTranslations[selectedLanguage].contactLabel} />
    </div>
  );
}
