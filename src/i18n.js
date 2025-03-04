import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { translationsEn, translationsIt } from './constants/translations';

i18next.use(initReactI18next).init({
   resources: {
      en: { translation: translationsEn },
      it: { translation: translationsIt },
   },
   lng: 'it',
   fallbackLng: 'it',
   interpolation: { escapeValue: false },
});
