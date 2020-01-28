/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */

const withPlugins = require('next-compose-plugins');
const withMDX = require('@next/mdx')();
const withImages = require('next-images');

const fs = require('fs');
const filter = require('lodash/fp/filter');
const flow = require('lodash/fp/flow');
const flatten = require('lodash/fp/flatten');
const map = require('lodash/fp/map');
const partition = require('lodash/fp/partition');
const { Linter } = require('eslint');
const prettier = require('prettier');
const babelEsLint = require('babel-eslint');
const svgr = require('@svgr/core').default;
const { pascalCase } = require('change-case');

const { eslintConfig } = require('./package.json');

const linter = new Linter();
linter.defineParser('babel-eslint', babelEsLint);
const DIR_STATIC = './public/static';
const DIR_OUTPUT = './src/branding';

const formatOptions = {
  ...prettier.resolveConfig.sync('./package.json'),
  parser: 'babel'
};

const finish = (data) =>
  prettier.format(
    linter.verifyAndFix(data, eslintConfig).output,
    formatOptions
  );

// Reads the SVG files from Adobe Illustrator and converts them all to React
// components in the src directory!
const brandComponents = fs
  .readdirSync(DIR_STATIC)
  .filter((v) => v.endsWith('.svg'))
  .filter((v) => v.startsWith('southclaws'))
  .map((v) => {
    const componentName = pascalCase(v).slice(0, -3);
    const input = `${DIR_STATIC}/${v}`;
    const output = `${DIR_OUTPUT}/${componentName}.jsx`;
    const code = fs.readFileSync(input);
    console.log('Generating SVG asset', componentName, '...');
    svgr(code, { icon: true }, { componentName }).then((jsx) => {
      fs.writeFileSync(output, finish(jsx));
    });
    return componentName;
  });

// I have no idea why prettier.js formatted this like this but it's awful.
console.log('Generating index.js exports for brand SVGs...');
fs.writeFileSync(
  `${DIR_OUTPUT}/index.js`,
  finish(
    `// Generated at build time.
${brandComponents
  .map((name) => `import ${name} from './${name}';`)
  .reduce((acc, line) => `${acc}\n${line}`)}

export {
  ${brandComponents
    .map((name) => `${name},`)
    .reduce((acc, line) => `${acc}\n${line}`)}
};`
  )
);

const fullPath = (path) => (v) => `${path}/${v.name}`;
const stripLeadingPath = (initial) => (v) =>
  v.substr(initial.length + 1, v.length);
const stripExtension = (v) => v.substr(0, v.length - 4);
const ignoreNextFiles = (path) =>
  !path.startsWith('_') && !path.startsWith('index');
const getPages = (initialPath) => {
  const recurse = (path) => {
    const [dirs, files] = partition((ent) => ent.isDirectory())(
      fs.readdirSync(path, { withFileTypes: true })
    );
    return [
      ...flow(
        map(fullPath(path)),
        map(stripLeadingPath(initialPath)),
        map(stripExtension),
        filter(ignoreNextFiles)
      )(files),
      ...flow(map(fullPath(path)), map(recurse), flatten)(dirs)
    ];
  };
  return recurse(initialPath);
};

module.exports = withPlugins([withMDX, withImages], {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  env: {
    ALL_PAGES: getPages('./pages')
  }
});
