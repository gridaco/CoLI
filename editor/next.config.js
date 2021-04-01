const typescriptLoader = {
    test: /\.ts$|tsx/,
    loader: ['ts-loader'],
    exclude: /node_modules/,
};

function fixEnums(config) {
    config.module.rules.forEach(({
        use
    }, i) => {
        if (!use) return
        const isBabelLoader = Array.isArray(use) ?
            use.findIndex((item) => item && item.loader && item.loader === 'next-babel-loader') !== -1 :
            use.loader === 'next-babel-loader'
        if (isBabelLoader) {
            delete config.module.rules[i].include
        }
    })
}

module.exports = (phase, {
    defaultConfig
}) => ({
    ...defaultConfig,
    webpack: (config) => {
        config.module.rules.push(typescriptLoader);
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                },
            },
        });

        config.module.rules.map((rule) => {
            if (rule.test !== undefined && rule.test.source.includes('|svg|')) {
                rule.test = new RegExp(rule.test.source.replace('|svg|', '|'));
            }
        });

        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        fixEnums(config); // This is important

        return config;
    },
    env: {
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
        FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
        FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
        FIREBASE_STORAGE_BUKET: process.env.FIREBASE_STORAGE_BUKET,
        FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
        FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
        FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    },
    typescript: {
        ignoreDevErrors: true,
    },
});