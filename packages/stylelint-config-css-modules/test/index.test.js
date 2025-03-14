/**
 * Module dependencies.
 */

const stylelint = require('stylelint');

/**
 * Test suite.
 */

describe('@untile/stylelint-config-css-modules', () => {
  const config = require('../src/index.js');

  it('should pass correct CSS patterns', async () => {
    const result = await stylelint.lint({
      config,
      files: './test/fixtures/correct.css'
    });

    expect(result.errored).toBeFalsy();
    expect(result.results[0].warnings).toHaveLength(0);
  });

  it('should fail incorrect CSS patterns', async () => {
    const result = await stylelint.lint({
      config,
      files: './test/fixtures/incorrect.css'
    });

    const outputErrors = JSON.parse(result?.output)[0].warnings.sort(
      (firstError, secondError) => firstError.line - secondError.line
    );

    const errorRules = outputErrors.map(({ rule }) => rule);

    expect(result.errored).toBeTruthy();
    expect(errorRules).toMatchObject([
      'alpha-value-notation',
      'alpha-value-notation',
      'declaration-no-important',
      'font-family-name-quotes',
      'font-weight-notation',
      'function-name-case',
      'function-url-quotes',
      'length-zero-no-unit',
      'order/order',
      'order/order',
      'order/order',
      'custom-property-empty-line-before',
      'order/properties-alphabetical-order',
      'declaration-empty-line-before',
      'order/order',
      'custom-property-empty-line-before',
      'order/properties-alphabetical-order',
      'property-no-vendor-prefix',
      'property-no-vendor-prefix',
      'rule-empty-line-before',
      'selector-attribute-quotes',
      'selector-pseudo-element-colon-notation',
      'selector-type-case',
      'shorthand-property-no-redundant-values',
      'shorthand-property-no-redundant-values'
    ]);
  });
});
