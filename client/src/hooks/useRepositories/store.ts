import { Repository } from '#/interfaces';
import create from 'zustand';

type RepositoriesStore = {
  repositories: Repository[];
  setRepositories: (repo: Repository[]) => void;
  loading: boolean;
}

export const useRepositoriesStore = create<RepositoriesStore>(set => ({
  repositories: [],
  setRepositories: repositories => set(() => ({ repositories })),
  loading: false,
  toggleLoading: () => set(({ loading }) => ({ loading: !loading }))
}));
