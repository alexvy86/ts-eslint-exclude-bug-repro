module.exports = {
  extends: [
    "./.eslintrc.base.js",
  ],
  parserOptions: {
    project: [ './tsconfig.json', './src/inner/tsconfig.json' ],
  }
};