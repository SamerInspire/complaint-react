
import Common_ar from "./ar/Common.json"
import Common_en from "./en/Common.json"
import i18next from "i18next"

const lang = localStorage.getItem("lang")|| 'en'
i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: lang,                              // language to use
    resources: {
        en: {
            common: Common_en               // 'common' is our custom namespace
        },
        ar: {
            common: Common_ar
        },
    },
})

export const i18nextInit = i18next
