import { Language } from '../../interfaces';
import { useLanguagesStore } from './store';
import { useEffect, useState } from 'react';
import { findLanguages } from '../../services/languages';

interface UseLanguages {
  languages: Language[];
  loading: boolean;
}

export const useLanguages = (): UseLanguages => {
  const [languages, setLanguages] = useState<Language[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchLanguages(): Promise<void> {
      setLoading(true);
      try {
        const languages = await findLanguages();
        setLanguages(languages);
      } catch {
        // noop.
      } finally {
        setLoading(false);
      }
    }
    fetchLanguages();
  }, []);

  return { languages, loading };
}
