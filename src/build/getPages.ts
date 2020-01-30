import { readdirSync, Dirent } from 'fs';

import filter from 'lodash/fp/filter';
import flow from 'lodash/fp/flow';
import flatten from 'lodash/fp/flatten';
import map from 'lodash/fp/map';
import partition from 'lodash/fp/partition';

// Returns a function that prepends a Dirent filename with `path`.
const fullPath = (path: string) => (v: Dirent) => `${path}/${v.name}`;

// Returns a function that strips the input of `initial`.
const stripLeadingPath = (initial: string) => (v: string) =>
  v.substr(initial.length + 1, v.length);

// Strips the file extension from a file name, 3 letters (.mdx) by default.
const stripExtension = (v: string) => v.substr(0, v.length - 4);

// Ignores Next.js files like `_app.jsx` and `index.jsx`.
const ignoreNextFiles = (path: string) =>
  !path.startsWith('_') && !path.startsWith('index');

// Runs some processing over files:
// - expands their path to include the parent path
// - strips the `./pages` prefix from the path
// - strips the file extension (.mdx)
// - filters out Next.js files
const processFiles = (initialPath: string, path: string) =>
  flow(
    map(fullPath(path)),
    map(stripLeadingPath(initialPath)),
    map(stripExtension),
    filter(ignoreNextFiles)
  );

/**
 * Gets a list of all navigable Next.js pages.
 */
export default (initialPath: string) => {
  const recurse = (path: string): Array<string> => {
    const [dirs, files] = partition((ent: Dirent) => ent.isDirectory())(
      readdirSync(path, { withFileTypes: true })
    );
    return [
      ...processFiles(initialPath, path)(files),
      ...flow(map(fullPath(path)), map(recurse), flatten)(dirs)
    ];
  };
  return recurse(initialPath);
};
