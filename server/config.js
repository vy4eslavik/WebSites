module.exports = {
    staticFolder: 'static',
    defaultPort: 3000,
    cacheTTL: 30000,
    sessionSecret: 'REPLACE_ME_WITH_RANDOM_STRING',
    mongoose: {
        uri: "mongodb://localhost/web-sites"
    }
};
