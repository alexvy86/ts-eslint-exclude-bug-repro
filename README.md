# Bug repro

This repo demonstrates an issue where lint rule issues in a file behave weirdly. Either not being reported at all, or appearing/disappearing depending on a build of the project happening.

## Summary

There's a `src/` folder at the root of the repo, and a `tsconfig.json` file that uses it as its `rootDir`. There's also a sibling folder `sibling/` which is supposed to be a separate TS project, and its `tsconfig.json` file references the one at the root of the repo. A file in `sibling/` has 2 lint rule issues.

The issues is that when linting the file under `sibling/` before building anything, two issues are reported; but if the "main" project is built, linting this same file, which still has the same issues, only one issue is reported.

## How to reproduce

- Clone this repo and checkout branch `sibling-project-same-issue`
- Run `npm i` at the root.
- Run `./test.sh`.

The output before building the main TS project will show two issues, and after it will show only one.

