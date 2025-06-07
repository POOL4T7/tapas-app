const dictionaries: any = {
  en: () => import('./dictionaries/en.json').then(r => r.default),
  es: () => import('./dictionaries/es.json').then(r => r.default),
  de: () => import('./dictionaries/de.json').then(r => r.default)
};

export const getDictionary = async (lang: string) => {
  const loadDictionary = dictionaries[lang];
  if (loadDictionary) {
    return loadDictionary();
  }
  throw new Error(`No dictionary found for language: ${lang}`);
};