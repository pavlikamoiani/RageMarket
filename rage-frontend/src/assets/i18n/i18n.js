import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from './locales/en/translation.json';
import ruTranslation from './locales/ru/translation.json';
import esTranslation from './locales/es/translation.json';

const resources = {
	en: {
		translation: enTranslation,
	},
	ru: {
		translation: ruTranslation,
	},
	es: {
		translation: esTranslation,
	}
};

i18n
	.use(initReactI18next)
	.init({
		resources,
		lng: "en",
		interpolation: {
			escapeValue: false
		}
	});

export default i18n;