const path = require('path')
module.exports = {
    i18n: {
        locales: ["en", "ar","ur","fr","tr"],
        defaultLocale: "en",
        // localeDetection: false,
        // domains: [
        //     {
        //         domain: "paymob.com",
        //         defaultLocale: "en",
        //     },
        //     {
        //         domain: "paymob.pk",
        //         defaultLocale: "ur",
        //     },
        //     {
        //         domain: "localhost",
        //         defaultLocale: "ar",
        //     },
        // ],
    },
    // reloadOnPrerender: process.env.NODE_ENV === "development",
    reloadOnPrerender: true,
};
