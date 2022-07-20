module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: { '@typescript-eslint/indent': ['error', 2] },
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: [ '@typescript-eslint' ],
  root: true
};