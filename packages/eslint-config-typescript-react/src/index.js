/**
 * Export `eslint-config-typescript-react` shared configuration preset.
 */

module.exports = {
  extends: [
    '@untile/eslint-config-react',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint', 'typescript-sort-keys'],
  rules: {
    '@typescript-eslint/comma-dangle': ['error'],
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': ['error'],
    'comma-dangle': 0,
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'typescript-sort-keys/interface': 'error'
  }
};

