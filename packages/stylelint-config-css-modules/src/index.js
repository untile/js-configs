/**
 * Export `@untile/stylelint-config-react` configuration preset.
 */

module.exports = {
  customSyntax: 'postcss-scss',
  extends: ['stylelint-config-standard', 'stylelint-config-css-modules'],
  plugins: ['stylelint-order'],
  rules: {
    'alpha-value-notation': 'number',
    'declaration-no-important': true,
    'font-family-name-quotes': 'always-where-recommended',
    'font-weight-notation': 'numeric',
    'function-name-case': 'lower',
    'function-url-quotes': 'always',
    'length-zero-no-unit': true,
    'no-descending-specificity': true,
    'order/order': ['custom-properties', 'declarations', 'rules', 'at-rules'],
    'order/properties-alphabetical-order': true,
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment']
      }
    ],
    'selector-attribute-quotes': 'always',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'shorthand-property-no-redundant-values': true,
    'value-no-vendor-prefix': true
  }
};
