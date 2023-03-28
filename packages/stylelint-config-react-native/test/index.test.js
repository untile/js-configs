
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
      'react-native/css-property-no-unknown',
      'react-native/font-weight-no-ignored-values',
      'react-native/font-weight-no-ignored-values'
    ]);
  });
});
