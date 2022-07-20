import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translations.json'
import cn from './locales/cn/translations.json'

i18n
//   .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    ns: "translations",
    defaultNS: "translations",
    resources: {
        en: { translations: en },
        cn: { translations: cn },
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
