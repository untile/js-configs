'use strict';

/**
 * Module dependencies.
 */

const { ESLint } = require('eslint');
const path = require('path');

/**
 * Tests for `@untile/eslint-config`.
 */

describe('@untile/eslint-config', () => {
  const linter = new ESLint({
    overrideConfigFile: path.join(__dirname, '..', 'src', 'index.js')
  });

  it('should not generate any violation for correct code', async () => {
    const source = path.join(__dirname, 'fixtures', 'correct.js');
    const results = await linter.lintFiles([source]);

    expect(results[0]?.errorCount).toEqual(0);
  });

  it('should generate violations for incorrect code', async () => {
    const source = path.join(__dirname, 'fixtures', 'incorrect.js');
    const results = await linter.lintFiles([source]);
    const violations = results[0].messages.map(violation => violation.ruleId);

    expect(violations).toEqual([
      'consistent-this',
      'id-match',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-focused-tests',
      'mocha/no-exclusive-tests',
      'jest/no-focused-tests',
      'mocha/no-exclusive-tests',
      'jest/no-focused-tests',
      'mocha/no-exclusive-tests',
      'jest/no-focused-tests',
      'jest/no-focused-tests',
      'jest/no-identical-title',
      'no-new',
      'new-cap',
      'no-class-assign',
      'no-console',
      'no-const-assign',
      'no-constant-condition',
      'no-dupe-class-members',
      'no-empty',
      'no-labels',
      'no-labels',
      'no-multi-str',
      'no-this-before-super',
      'no-undef',
      'no-underscore-dangle',
      'no-unused-vars',
      'no-restricted-imports',
      'sort-imports-es6/sort-imports-es6',
      'sort-keys',
      'sql-template/no-unsafe-query'
    ]);
  });
});
