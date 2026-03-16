import type { Dispatch, SetStateAction } from 'react';
import { useOutletContext } from 'react-router-dom';
import type { LanguageCode } from '../types/app';

export type CatalogLayoutContext = {
  selectedLanguage: LanguageCode;
  setSelectedLanguage: Dispatch<SetStateAction<LanguageCode>>;
};

export function useCatalogLayoutContext() {
  return useOutletContext<CatalogLayoutContext>();
}
