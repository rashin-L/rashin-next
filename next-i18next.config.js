// const path = require('path');

// module.exports = {
//     i18n: {
//         locales: ["en", "fa"],
//         defaultLocale: "en",
//         // localePath: path.resolve("./public/locales"),
//         // otherLanguages: ["en-US", "fa"],
//         // defaultLanguage: "en-US",
//         // fallbackLng: ["en-US"],
//         // useTranslation,
//     },
//     // react: { useSuspense: false },//this line
// };

// ReferenceError: require is not defined in ES module scope, you can use import instead

// next-i18next.config.js
module.exports = {
    distDir: "_next",
    // https://www.i18next.com/overview/configuration-options#logging
    // debug: process.env.NODE_ENV === 'development',
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'fa'],
    },
    /** To avoid issues when deploying to some paas (vercel...) */
    localePath:
        typeof window === 'undefined'
            ? require('path').resolve('./public/locales')
            : '/locales',

    // reloadOnPrerender: process.env.NODE_ENV === 'development',

    // saveMissing: false,
    // strictMode: true,
    // serializeConfig: false,
    // react: { useSuspense: false }
}