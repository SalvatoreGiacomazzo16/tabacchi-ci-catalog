import { useCatalogLayoutContext } from '../app/useCatalogLayoutContext';
import { ProductGridSection } from '../components/sections/ProductGridSection';
import { products } from '../data/products';

export function CatalogPage() {
  const { selectedLanguage } = useCatalogLayoutContext();

  return (
    <ProductGridSection
      title="All products"
      products={products}
      selectedLanguage={selectedLanguage}
    />
  );
}
