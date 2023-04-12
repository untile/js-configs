
/**
 * Normalized css properties.
 *
 * Alphabetical order of properties provided by the w3c list of all css
 * properties. https://www.w3.org/Style/CSS/all-properties.en.json
 */

const cssProperties = require('./w3c-css-properties.json');
const w3cList = [...new Set(cssProperties.map(({ property }) => property))];

/**
 * Export configuration preset.
 */

module.exports = {
  customSyntax: 'postcss-styled-syntax',
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components'
  ],
  plugins: ['stylelint-order'],
  rules: {
    'alpha-value-notation': 'number',
    'color-hex-length': 'long',
    'font-family-name-quotes': 'always-where-recommended',
    'function-name-case': 'lower',
    'function-url-quotes': 'always',
    'length-zero-no-unit': true,
    'order/properties-order': w3cList,
    'rule-empty-line-before': [
      'always-multi-line', {
        except: 'first-nested',
        ignore: 'after-comment'
      }
    ],
    'selector-attribute-quotes': 'always',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'selector-type-no-unknown': [true, {
      ignore: ['custom-elements'],
      ignoreTypes: ['/-styled-mixin/', '$dummyValue']
    }],
    'shorthand-property-no-redundant-values': true,
    'value-keyword-case': ['lower', {
      ignoreKeywords: ['dummyValue']
    }]
  }
};
