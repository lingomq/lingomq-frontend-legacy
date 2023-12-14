import { Cookies } from "react-cookie"

const cookies = new Cookies;

export const getCurrentLocale = () => {
    let locale;
    let localesArray = Object.keys(LOCALES);

    for (let i = 0; i < localesArray.length; i++) {
        if (localesArray[i] === "ENGLISH") {
            locale = localesArray[i];
            break;
        }
    }

    return locale === undefined ? LOCALES["ENGLISH"] : LOCALES[locale];
}

export const LOCALES = {
    "ENGLISH": 'en-US',
    "RUSSIAN": 'ru-RU',
    "FRENCH": 'fr-FR',
    "GERMAN": 'de-DE',
    "JAPANESE": 'ja-JA'
}