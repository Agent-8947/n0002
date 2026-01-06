
import { create } from 'zustand';

interface AppState {
  currentLanguage: string;
  setCurrentLanguage: (lang: string) => void;
}

export const useStore = create<AppState>()((set) => ({
  currentLanguage: 'en',
  setCurrentLanguage: (lang: string) => set({ currentLanguage: lang }),
}));
