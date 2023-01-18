export default {
    resources: {
        en: {
            translation: {
                'pageHome': 'Home',
                'pageFinance': 'Finance',
            },
        },
        pl: {
            translation: {
                'pageHome': 'Strona główna',
                'pageFinance': 'Finanse',
            },
        },
    },
    lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',
    interpolation: { // react already safes from xss
        escapeValue: false, // https://www.i18next.com/translation-function/interpolation#unescape
    },
};
