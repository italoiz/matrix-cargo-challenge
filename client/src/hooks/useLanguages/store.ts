import { Language } from '../../interfaces';
import create from 'zustand';

type LanguagesStore = {
  languages: Language[];
  setLanguages: (lang: Language[]) => void;
}

export const useLanguagesStore = create<LanguagesStore>(set => ({
  languages: [],
  setLanguages: () => set(languages => languages),
}));
