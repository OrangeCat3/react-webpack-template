import i18n from 'i18next';
import translationEn from './en/translation.json';
import translationZh from './zh/translation.json';
import { initReactI18next } from 'react-i18next';

export const resources = {
  en: {
    translation: translationEn,
  },
  zh: {
    translation: translationZh
  }
} as const;

i18n.use(initReactI18next).init({
  lng: 'zh',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});
