import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { EN, ES } from './resource'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    debug: true,
    compatibilityJSON: 'v3',
    supportedLngs: ['en', 'es'],
    resources: {
      en: { translation: EN },
      es: { translation: ES },
    },
  })

export default i18n
