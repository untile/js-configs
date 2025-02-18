/**
 * Export `@untile/stylelint-config-react-native` configuration preset.
 */

module.exports = {
  extends: ['@untile/stylelint-config-react'],
  plugins: ['stylelint-react-native'],
  rules: {
    'property-no-unknown': null,
    'react-native/css-property-no-unknown': true,
    'react-native/font-weight-no-ignored-values': true
  }
};
