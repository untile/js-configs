/**
 * Module dependencies.
 */

const eslintConfigUntile = require('@untile/eslint-config');
const eslintPluginPerfectionist = require('eslint-plugin-perfectionist');
const tseslint = require('typescript-eslint');

/**
 * Export `eslint-config-typescript` shared configuration preset.
 */

module.exports = tseslint.config(
  eslintConfigUntile,
  tseslint.configs.recommended,
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      perfectionist: eslintPluginPerfectionist
    },
    rules: {
      '@typescript-eslint/array-type': ['error', { default: 'array-simple', readonly: 'array-simple' }],
      '@typescript-eslint/ban-ts-comment': ['error', {
        'ts-check': true,
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true
      }],
      '@typescript-eslint/consistent-indexed-object-style': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/explicit-member-accessibility': 0,
      '@typescript-eslint/explicit-module-boundary-types': 0,
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
      'no-use-before-define': 0,
      'perfectionist/sort-enums': 'error',
      'perfectionist/sort-interfaces': 'error',
      'perfectionist/sort-object-types': 'error',
      'perfectionist/sort-union-types': 'error'
    }
  }
);
