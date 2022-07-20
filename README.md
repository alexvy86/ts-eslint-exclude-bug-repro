# Bug repro

This repo demonstrates an issue where lint rule issues in a file behave weirdly. Either not being reported at all, or appearing/disappearing depending on a build of the project happening.

## Summary

There's a `src/` folder at the root of the repo, and a `tsconfig.json` file that uses it as its `rootDir`. There's also an inner folder `src/inner` which is supposed to be a separate TS project, and its `tsconfig.json` file references the one at the root of the repo. A file in `src/inner` has 2 lint rule issues.

The two weird scenarios are:

- If the root `tsconfig.json` file has an `exclude` node so that `src/inner` isn't built along with the rest of `src`, linting the file in `src/inner` produces different results before and after building the main project (not the one in `src/inner`, just the one it references in its `tsconfig.json`). Before the build the linter outputs 2 rule issues, but after it only outputs 1.
- If the root `tsconfig.json` does *not* have an `exclude` for `src/inner`, then the second rule issue (the one that disappears after the build in the other scenario) never shows up in the linting output for the file.

## How to reproduce

This repo has several versions of `tsconfig.json` and `.eslintrc.js` files so each test can use the correct ones for the intended scenario.

- Clone this repo.
- Run `npm i` at the root.
- Run `./test-with-exclude.sh` to see the scenario where a linter issue in `src/inner/myOtherModule` disappears after building the main project.
- Run `./test-without-exclude.sh` to see the scenario where the same linter issue does not show up in the output at all.
