/**
 * Export `eslint-config-typescript-react-native` shared configuration preset.
 */

module.exports = {
  env: {
    node: true,
    'react-native/react-native': true
  },
  extends: ['@untile/eslint-config-typescript-react'],
  globals: {
    JSX: true
  },
  plugins: ['@typescript-eslint', 'react-native'],
  rules: {
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
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
