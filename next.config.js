/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */

const withPlugins = require('next-compose-plugins');
const withMDX = require('@next/mdx')();
const withImages = require('next-images');

// Note: `./config` is generated at build-time so config code can be transpiled
// from ES6. Therefore, this requires that `npm run build` be run in order to
// work as this will run the Babel process first to generate the necessary code.
const { getPages, generateBranding } = require('./config');

// Generate React components from branding SVG assets.
generateBranding('./public/static', './src/branding');

module.exports = withPlugins([withMDX, withImages], {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  env: {
    ALL_PAGES: getPages('./pages')
  }
});
