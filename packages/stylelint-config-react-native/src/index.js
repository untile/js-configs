
/**
 * Export configuration preset.
 */

module.exports = {
  extends: ['@untile/stylelint-config-react', 'stylelint-config-prettier'],
  plugins: ['stylelint-react-native'],
  rules: {
    'max-empty-lines': 1,
    'property-no-unknown': null,
    'react-native/css-property-no-unknown': true,
    'react-native/font-weight-no-ignored-values': true
  }
};
