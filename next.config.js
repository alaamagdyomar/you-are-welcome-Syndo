const { i18n } = require('./next-i18next.config');

module.exports = {
    env: {
        customKey: "my-value",
    },
    i18n,
    reactStrictMode: true,
    //webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false };

        return config;
    },
};