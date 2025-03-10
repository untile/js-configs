/**
 * Module dependencies.
 */

const eslintConfigUntile = require('@untile/eslint-config');
const tseslint = require('typescript-eslint');

/**
 * Export `eslint-config-typescript` shared configuration preset.
 */

module.exports = tseslint.config(
  eslintConfigUntile,
  tseslint.configs.recommended,
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin
    },
    rules: {
      '@typescript-eslint/adjacent-overload-signatures': 'off',
      '@typescript-eslint/array-type': ['error', { default: 'array-simple', readonly: 'array-simple' }],
      '@typescript-eslint/ban-ts-comment': ['error', {
        'ts-check': true,
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true
      }],
      '@typescript-eslint/consistent-indexed-object-style': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': ['error', {
        fixToUnknown: true,
        ignoreRestArgs: false
      }],
      '@typescript-eslint/no-extra-non-null-assertion': 'error',
      '@typescript-eslint/no-for-in-array': 'error',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-use-before-define': 'error',
      'new-cap': ['error', { capIsNewExceptions: ['BigNumber'] }],
      'no-unused-vars': 0,
      'no-use-before-define': 0
    },
    settings: {
      'import/resolver': {
        typescript: true
      }
    }
  }
);
