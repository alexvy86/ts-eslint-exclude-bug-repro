module.exports = {
  extends: [
    "./.eslintrc.base.js",
  ],
  parserOptions: {
    project: [ './tsconfig.withExclude.json', './src/inner/tsconfig.json' ],
  }
};