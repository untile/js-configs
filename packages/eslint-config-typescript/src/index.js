/* eslint-disable @typescript-eslint/no-require-imports */

/**
 * Export `eslint-config-typescript` shared configuration preset.
 */

const tseslint = require('typescript-eslint');
const eslintConfigPrettier = require('eslint-config-prettier');
const eslintpluginPerfectionist = require('eslint-plugin-perfectionist');
const untileConfig = require('@untile/eslint-config');

module.exports = tseslint.config(
  untileConfig,
  tseslint.configs.recommended,
  {
    files: [ '**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts' ],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        browser: true,
        es6: true,
        jasmine: true,
        jest: true,
        mocha: true,
        node: true
      },
      parser: tseslint.parser,
      sourceType: 'module'
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      perfectionist: eslintpluginPerfectionist
    },
    rules: {
      "@typescript-eslint/array-type": ["error", { default: 'array-simple', readonly: 'array-simple' }],
      "@typescript-eslint/consistent-indexed-object-style": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      '@typescript-eslint/explicit-member-accessibility': 0,
      '@typescript-eslint/explicit-module-boundary-types': 0,
      '@typescript-eslint/indent': 0,
      '@typescript-eslint/no-explicit-any': ['error', {
        fixToUnknown: true,
        ignoreRestArgs: false
      }],
      '@typescript-eslint/no-extra-non-null-assertion': 'error',
      '@typescript-eslint/no-for-in-array': 'error',
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
  },
  eslintConfigPrettier,
);
