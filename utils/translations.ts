
export const LANGUAGE_NAMES = {
    en: { name: 'English', flag: '🇬🇧' },
    uk: { name: 'Українська', flag: '🇺🇦' },
    ru: { name: 'Русский', flag: '🇷🇺' }
};

export const translations = {
    en: { 'btn.send': 'Send', 'nav.home': 'Home' },
    uk: { 'btn.send': 'Надіслати', 'nav.home': 'Головна' },
    ru: { 'btn.send': 'Отправить', 'nav.home': 'Главная' }
};

export const useTranslation = (lang) => ({
    t: (key) => translations[lang]?.[key] || key
});