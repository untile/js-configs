/**
 * Module dependencies.
 */

const { fixupPluginRules } = require('@eslint/compat');
const eslintConfigTypescriptReact = require('@untile/eslint-config-typescript-react');
const eslintPluginReactNative = require('eslint-plugin-react-native');
const tseslint = require('typescript-eslint');

/**
 * Export `eslint-config-typescript-react-native` configuration preset.
 */

module.exports = tseslint.config(
  eslintConfigTypescriptReact,
  {
    languageOptions: {
      globals: {
        JSX: true,
        'react-native/react-native': true
      }
    },
    plugins: {
      'react-native': fixupPluginRules({
        rules: eslintPluginReactNative.rules,
      })
    },
    rules: {
      ...eslintPluginReactNative.configs.all.rules,
      'no-restricted-imports': [
        'error', {
          message: 'Please use \'styled-components/native\' instead.',
          name: 'styled-components'
        }
      ],
      'react/jsx-no-undef': 0,
      'react/react-in-jsx-scope': 0,
      'react-native/no-raw-text': 'off',
      'react-native/no-unused-styles': 'error',
      'react-native/split-platform-components': 'error'
    }
  }
);
