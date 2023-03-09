
/**
 * Module dependencies.
 */

import config from '../src';
import fs from 'fs';
import stylelint from 'stylelint';

/**
 * `@untile/stylelint-config` tests.
 */

describe('@untile/stylelint-config', () => {
  it('correct', async () => {
    const result = await stylelint.lint({
      code: fs.readFileSync('./test/fixtures/correct.js', 'utf-8'), // eslint-disable-line no-sync
      config
    });

    expect(result.errored).toBeFalsy();
    expect(result.results[0].warnings).toHaveLength(0);
  });

  it('incorrect', async () => {
    const result = await stylelint.lint({
      code: fs.readFileSync('./test/fixtures/incorrect.js', 'utf-8'), // eslint-disable-line no-sync
      config
    });

    const warnings = JSON.parse(result?.output)[0].warnings;

    expect(result.errored).toBeTruthy();
    expect(warnings.map(({ rule }) => rule)).toMatchObject([
      'order/properties-order',
      'alpha-value-notation',
      'alpha-value-notation',
      'color-hex-case',
      'color-hex-length',
      'declaration-bang-space-after',
      'declaration-bang-space-before',
      'declaration-block-trailing-semicolon',
      'declaration-colon-space-after',
      'font-family-name-quotes',
      'function-comma-space-after',
      'function-comma-space-before',
      'function-name-case',
      'function-parentheses-newline-inside',
      'function-parentheses-newline-inside',
      'function-parentheses-space-inside',
      'function-parentheses-space-inside',
      'function-parentheses-space-inside',
      'function-parentheses-space-inside',
      'function-url-quotes',
      'function-whitespace-after',
      'length-zero-no-unit',
      'no-extra-semicolons',
      'number-leading-zero',
      'number-no-trailing-zeros',
      'property-case',
      'selector-pseudo-class-case',
      'selector-pseudo-element-case',
      'selector-pseudo-element-colon-notation',
      'shorthand-property-no-redundant-values',
      'string-quotes',
      'unit-case',
      'value-keyword-case',
      'indentation'
    ]);
  });
});
