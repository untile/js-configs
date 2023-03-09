
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
  customSyntax: '@stylelint/postcss-css-in-js',
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
    'stylelint-config-prettier'
  ],
  plugins: ['stylelint-order'],
  rules: {
    'alpha-value-notation': 'number',
    'color-hex-case': 'lower',
    'color-hex-length': 'long',
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-space-after': 'always',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-after': 'always-single-line',
    'font-family-name-quotes': 'always-where-recommended',
    'function-comma-space-after': 'always',
    'function-comma-space-before': 'never',
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'never-multi-line',
    'function-parentheses-space-inside': 'never',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',
    indentation: 2,
    'length-zero-no-unit': true,
    'max-empty-lines': 1,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,
    'order/properties-order': w3cList,
    'property-case': 'lower',
    'rule-empty-line-before': [
      'always-multi-line', {
        except: 'first-nested',
        ignore: 'after-comment'
      }
    ],
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'selector-type-no-unknown': [true, {
      ignore: ['custom-elements'],
      ignoreTypes: ['/-styled-mixin/', '$dummyValue']
    }],
    'shorthand-property-no-redundant-values': true,
    'string-quotes': 'single',
    'unit-case': 'lower',
    'value-keyword-case': ['lower', {
      ignoreKeywords: ['dummyValue']
    }]
  }
};
