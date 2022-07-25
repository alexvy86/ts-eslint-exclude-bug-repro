module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  ignorePatterns: ["dist/**/*", "**/.eslintrc.js"],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: { '@typescript-eslint/indent': ['error', 2] },
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: [ './tsconfig.json', './sibling/tsconfig.json' ]
  },
  plugins: [ '@typescript-eslint' ],
  
  root: true
};