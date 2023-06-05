/**
 * Export `eslint-config-typescript-react` shared configuration preset.
 */

module.exports = {
  extends: [
    '@untile/eslint-config-react',
    '@untile/eslint-config-typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
};