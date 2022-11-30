import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-http-backend';

export const initLocale = () => {
  i18n
    .use(detector)
    .use(backend)
    .use(initReactI18next)  // passes i18n down to react-i18next
    .init({
      lng: 'fr',
      fallbackLng: 'fr',    // use fr if detected lng is not available
      saveMissing: true,    // send not translated keys to endpoint
      interpolation: {
        escapeValue: false  // react already safes from xss
      },
      react: {
        useSuspense: false  // don't use Suspense
      }
    });

  return i18n;
}
