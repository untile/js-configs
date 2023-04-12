
/**
 * Module dependencies.
 */

import config from '../src';
import stylelint from 'stylelint';

/**
 * `@untile/stylelint-config` tests.
 */

describe('@untile/stylelint-config', () => {
  it('correct', async () => {
    const result = await stylelint.lint({
      config,
      files: './test/fixtures/correct.js'
    });

    expect(result.errored).toBeFalsy();
    expect(result.results[0].warnings).toHaveLength(0);
  });

  it('incorrect', async () => {
    const result = await stylelint.lint({
      config,
      files: './test/fixtures/incorrect.js'
    });

    const warnings = JSON.parse(result?.output)[0].warnings;

    expect(result.errored).toBeTruthy();
    expect(warnings.map(({ rule }) => rule)).toMatchObject([
      'order/properties-order',
      'alpha-value-notation',
      'alpha-value-notation',
      'color-hex-length',
      'font-family-name-quotes',
      'function-name-case',
      'function-url-quotes',
      'length-zero-no-unit',
      'selector-pseudo-element-colon-notation',
      'shorthand-property-no-redundant-values',
      'value-keyword-case'
    ]);
  });
});
