import api from './api';

interface FindRepositoriesParams {
  lang?: string;
}

export const findRepositories = async (params: FindRepositoriesParams = {}): Promise<any[]> => {
  try {
    const { data: repositories } = await api.get('/repositories', {
      params: { lang: params.lang },
    });
    return repositories;
  } catch {
    return [];
  }
}