import api from './api';

export const findLanguages = async (): Promise<any[]> => {
  try {
    const { data: languages } = await api.get('/languages');
    return languages;
  } catch {
    return [];
  }
}