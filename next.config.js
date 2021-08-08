const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const webpack = require("webpack");
const path = require("path");
const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {
  en: 'en',
};

module.exports = withPlugins([[withSass], [withImages], [withCSS]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  serverRuntimeConfig: {
    env: process.env.ENV,
  },
  publicRuntimeConfig: {
    localeSubpaths,
    env: process.env.ENV,
    token: null,
  },
});
