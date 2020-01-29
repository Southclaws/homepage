import { readdirSync } from 'fs';

import filter from 'lodash/fp/filter';
import flow from 'lodash/fp/flow';
import flatten from 'lodash/fp/flatten';
import map from 'lodash/fp/map';
import partition from 'lodash/fp/partition';

// Returns a function that prepends a Dirent filename with `path`.
const fullPath = (path) => (v) => `${path}/${v.name}`;

// Returns a function that strips the input of `initial`.
const stripLeadingPath = (initial) => (v) =>
  v.substr(initial.length + 1, v.length);

// Strips the file extension from a file name, 3 letters (.mdx) by default.
const stripExtension = (v) => v.substr(0, v.length - 4);

// Ignores Next.js files like `_app.jsx` and `index.jsx`.
const ignoreNextFiles = (path) =>
  !path.startsWith('_') && !path.startsWith('index');

// Runs some processing over files:
// - expands their path to include the parent path
// - strips the `./pages` prefix from the path
// - strips the file extension (.mdx)
// - filters out Next.js files
const processFiles = (initialPath, path) =>
  flow(
    map(fullPath(path)),
    map(stripLeadingPath(initialPath)),
    map(stripExtension),
    filter(ignoreNextFiles)
  );

/**
 * Gets a list of all navigable Next.js pages.
 */
export default (initialPath) => {
  const recurse = (path) => {
    const [dirs, files] = partition((ent) => ent.isDirectory())(
      readdirSync(path, { withFileTypes: true })
    );
    return [
      ...processFiles(initialPath, path)(files),
      ...flow(map(fullPath(path)), map(recurse), flatten)(dirs)
    ];
  };
  return recurse(initialPath);
};
