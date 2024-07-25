
// const withImages = require('next-images');
import withImages from 'next-images';

// const { i18n } = require('./next-i18next.config.js');
// import { i18n } from './next-i18next.config.js';
// javascript
const loadConfig = async () => {
    const { i18n } = await import('./next-i18next.config.js');
    
    const config = {
        images: {
            domains: ['api.rashin-web-dev.com'],
        },
        // webpack5: true,
        webpack: (config) => {
            config.resolve.fallback = { fs: false };
    
            return config;
        },
        i18n,
        reactStrictMode: true,
        output: 'standalone',
    };

    return config;
};

export default loadConfig();