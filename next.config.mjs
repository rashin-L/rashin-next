/** @type {import('next').NextConfig} */

// const withImages = require('next-images');
import withImages from 'next-images';

// const { i18n } = require('./next-i18next.config.js');
import pkg from './next-i18next.config.js';
const { i18n } = pkg;
// javascript
// const nextConfig = async () => {
    
//     const { i18n } = await import('./next-i18next.config.js');
    
//     const config = {
//         images: {
//             domains: ['api.rashin-web-dev.com'],
//         },
//         // webpack5: true,
//          webpack: (config, { isServer }) => {
//             config.resolve.fallback = { fs: false };
    
//             return config;
//         },
//         i18n,
//         reactStrictMode: true,
//         output: 'standalone',
//     };

//     return config;
// };

const nextConfig = {
    // const { i18n } = await import('./next-i18next.config.js');
    

    swcMinify: true,
    productionBrowserSourceMaps: false,
    devIndicators: {
        buildActivity: false,
    }, experimental: {
         instrumentationHook: true,
        // webpackBuildWorker: true,
        serverSourceMaps: false,
        esmExternals: false
    },
     webpack: (config, { isServer }) => {
            config.resolve.fallback = { fs: false };
    
            return config;
        
    },

     images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.rashin-web-dev.com',
                pathname: '**',
            },
        ],
    },
    i18n,
    reactStrictMode: true,
    env: {
        REACT_APP_STAGE: process.env.REACT_APP_STAGE,
        // REACT_APP_STAGE: "production",

    },
    compiler: {
        removeConsole: {
            exclude: ['error'],
        },
    },

};



export default nextConfig;


