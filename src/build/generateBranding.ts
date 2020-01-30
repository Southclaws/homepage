import fs from 'fs';

import svgr from '@svgr/core';
import babelEsLint from 'babel-eslint';
import { pascalCase } from 'change-case';
import { Linter } from 'eslint';
import prettier from 'prettier';
import readPkgUp from 'read-pkg-up';

const getLintConfig = () => {
  const pkg = readPkgUp.sync();
  if (pkg === undefined) {
    throw new Error('Could not find package.json');
  }
  return pkg.packageJson['eslintConfig'];
};

const linter = new Linter();
linter.defineParser('babel-eslint', babelEsLint);

// formats and fixes generated code according to prettier+eslint.
const format = (data: string) =>
  prettier.format(linter.verifyAndFix(data, getLintConfig()).output, {
    ...prettier.resolveConfig.sync('./package.json'),
    parser: 'babel'
  });

// Reads the SVG files from Adobe Illustrator and converts them all to React
// components in the src directory!
const brandComponents = (staticDir: string, outputDir: string) =>
  fs
    .readdirSync(staticDir)
    .filter((v) => v.endsWith('.svg'))
    .filter((v) => v.startsWith('southclaws'))
    .map((v) => {
      const componentName = pascalCase(v).slice(0, -3);
      const inputPath = `${staticDir}/${v}`;
      const outputPath = `${outputDir}/${componentName}.jsx`;
      const code = fs.readFileSync(inputPath);
      console.log('Generating SVG asset', componentName, '...');
      svgr(code, { icon: true }, { componentName }).then((jsx: string) => {
        fs.writeFileSync(outputPath, format(jsx));
      });
      return componentName;
    });

export default (staticDir: string, outputDir: string) => {
  console.log('Generating index.js exports for brand SVGs...');

  const components = brandComponents(staticDir, outputDir);

  fs.writeFileSync(
    `${outputDir}/index.js`,
    format(
      `// Generated at build time.
${components
  .map((name) => `import ${name} from './${name}';`)
  .reduce((acc, line) => `${acc}\n${line}`)}

export {
  ${components
    .map((name) => `${name},`)
    .reduce((acc, line) => `${acc}\n${line}`)}
};`
    )
  );
};
