const withPlugins = require('next-compose-plugins');
const withMDX = require('@next/mdx')();
const withImages = require('next-images');

const prettier = require('prettier');
const svgr = require('@svgr/core').default;
const { pascalCase } = require('change-case');
const fs = require('fs');

const DIR_STATIC = './public/static/';
const DIR_OUTPUT = './src/branding/';

// Reads the SVG files from Adobe Illustrator and converts them all to React
// components in the src directory!
const brandComponents = fs
  .readdirSync(DIR_STATIC)
  .filter((v) => v.endsWith('.svg'))
  .filter((v) => v.startsWith('southclaws'))
  .map((v) => {
    const componentName = pascalCase(v).slice(0, -3);
    const input = DIR_STATIC + v;
    const output = DIR_OUTPUT + componentName + '.jsx';
    const code = fs.readFileSync(input);
    console.log('Generating SVG asset', componentName, '...');
    svgr(code, { icon: true }, { componentName }).then((jsx) => {
      fs.writeFileSync(output, prettier.format(jsx, { parser: 'babel' }));
    });
    return componentName;
  });

// I have no idea why prettier.js formatted this like this but it's awful.
console.log('Generating index.js exports for brand SVGs...');
fs.writeFileSync(
  DIR_OUTPUT + 'index.js',
  prettier.format(
    `// Generated at build time.
${brandComponents
  .map((name) => `import ${name} from './${name}';`)
  .reduce((acc, line) => acc + '\n' + line)}

export {
  ${brandComponents
    .map((name) => `${name},`)
    .reduce((acc, line) => acc + '\n  ' + line)}
};`,
    { parser: 'babel' }
  )
);

module.exports = withPlugins([withMDX, withImages], {
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
});
