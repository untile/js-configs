/**
 * Module dependencies.
 */

const config = require('../src/index.js');
const stylelint = require('stylelint');

/**
 * `Test suite.
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
      'react-native/css-property-no-unknown',
      'react-native/font-weight-no-ignored-values',
      'react-native/font-weight-no-ignored-values',
      'declaration-block-no-duplicate-properties'
    ]);
  });
});
