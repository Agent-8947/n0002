
import { create } from 'zustand';
import { produce } from 'immer';

export const useStore = create((set, get) => ({
    currentLanguage: 'en',
    globalSettings: {},
    contentBlocks: [],
    uiTheme: {},
    
    setCurrentLanguage: (lang) => set({ currentLanguage: lang }),
    
    importProjectData: (json) => {
        try {
            const data = JSON.parse(json);
            set({
                globalSettings: data.globalSettings || {},
                contentBlocks: data.pages?.home || [],
                uiTheme: data.uiTheme || {},
                currentLanguage: data.currentLanguage || 'en'
            });
        } catch (e) {
            console.error("Import failed", e);
        }
    },

    toggleSiteTheme: () => {
        set(produce((state) => {
            const current = state.globalSettings['GL10']?.params[6]?.value;
            const next = current === 'Light' ? 'Dark' : 'Light';
            state.globalSettings['GL10'].params[6].value = next;
        }));
    }
}));