import { useEffect, useState } from 'react';
import shallow from 'zustand/shallow';

import { Repository } from '../../interfaces';
import { useRepositoriesStore } from './store';
import { useAppContext } from '../../context';
import { findRepositories } from '../../services/repositories';

interface UseRepositories {
  repositories: Repository[];
  loading: boolean;
}

export const useRepositories = (): UseRepositories => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(false);

  const { selectedLanguage } = useAppContext();

  useEffect(() => {
    async function fetchRepositories(): Promise<void> {
      setLoading(true);
      try {
        const allRepositories = await findRepositories({
          lang: selectedLanguage,
        });
        setRepositories(allRepositories);
      } catch {
        // noop.
      } finally {
        setLoading(false);
      }
    }
    fetchRepositories();
  }, [selectedLanguage]);

  return { repositories, loading };
}
