import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { defaultLanguage } from './config';
import { CatalogLayout } from '../components/layout/CatalogLayout';
import { CatalogPage } from '../pages/CatalogPage';
import { HomePage } from '../pages/HomePage';
import { LinksPage } from '../pages/LinksPage';
import { ProductDetailPage } from '../pages/ProductDetailPage';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to={`/${defaultLanguage}`} />} />
        <Route path="/links" element={<LinksPage />} />

        <Route path="/:lang" element={<CatalogLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="product/:id" element={<ProductDetailPage />} />
        </Route>

        <Route path="*" element={<Navigate replace to={`/${defaultLanguage}`} />} />
      </Routes>
    </BrowserRouter>
  );
}
