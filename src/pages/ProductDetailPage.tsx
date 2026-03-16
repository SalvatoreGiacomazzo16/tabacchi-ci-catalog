import { useParams } from 'react-router-dom';
import { useCatalogLayoutContext } from '../app/useCatalogLayoutContext';
import { ProductDetailSection } from '../components/sections/ProductDetailSection';
import { products } from '../data/products';

export function ProductDetailPage() {
  const { id } = useParams();
  const { selectedLanguage } = useCatalogLayoutContext();
  const product = products.find((item) => item.id === id);

  return <ProductDetailSection product={product} selectedLanguage={selectedLanguage} />;
}
