const withPlugins = require('next-compose-plugins');
const withMDX = require('@next/mdx')();

// Note: `./config` is generated at build-time so config code can be transpiled
// from ES6. Therefore, this requires that `npm run build` be run in order to
// work as this will run the Babel process first to generate the necessary code.
const { generateBranding } = require('./config');

// Generate React components from branding SVG assets.
generateBranding('./public/static', './src/branding');

module.exports = withPlugins([withMDX], {
  pageExtensions: ['tsx', 'mdx'],
  env: {},
});
