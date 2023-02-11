// Libraries
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Assets
import { translationsEn, translationsIt } from './assets/config/translations';

i18next.use(initReactI18next).init({
   resources: {
      en: { translation: translationsEn },
      it: { translation: translationsIt },
   },
   lng: 'it',
   fallbackLng: 'it',
   interpolation: { escapeValue: false },
});
