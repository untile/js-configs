/**
 * Module dependencies.
 */

const eslintConfigUntile = require('@untile/eslint-config');
const eslintReactPlugin = require('eslint-plugin-react');
const eslintReactHooksPlugin = require('eslint-plugin-react-hooks');

/**
 * Export `@untile/eslint-config-react` configuration preset.
 */

module.exports = [
  ...eslintConfigUntile,
  eslintReactPlugin.configs.flat.recommended,
  eslintReactPlugin.configs.flat['jsx-runtime'],
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,cts,mts}'],
    languageOptions: {
      parser: require('@babel/eslint-parser'),
      parserOptions: {
        babelOptions: {
          presets: ['@babel/preset-react']
        },
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      'react-hooks': eslintReactHooksPlugin
    },
    rules: {
      'jsx-quotes': ['error', 'prefer-single'],
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react/jsx-boolean-value': 'error',
      'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
      'react/jsx-curly-brace-presence': ['error', {
        children: 'ignore',
        props: 'always'
      }],
      'react/jsx-curly-spacing': 'error',
      'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-max-props-per-line': 'error',
      'react/jsx-newline': ['error', { prevent: false }],
      'react/jsx-no-literals': 'error',
      'react/jsx-sort-props': 0,
      'react/jsx-tag-spacing': ['error', {
        afterOpening: 'never',
        beforeClosing: 'never',
        beforeSelfClosing: 'always',
        closingSlash: 'never'
      }],
      'react/jsx-wrap-multilines': 'error',
      'react/no-danger': 'error',
      'react/prefer-es6-class': 'error',
      'react/prefer-stateless-function': 'error',
      'react/prop-types': 0,
      'react/self-closing-comp': 'error',
      'react/sort-prop-types': 'error'
    },
    settings: {
      react: {
        pragma: 'React',
        version: 'detect'
      }
    }
  }
];
