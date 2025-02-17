'use strict';

/* eslint-disable @typescript-eslint/no-require-imports */

/**
 * Module dependencies.
 */

const { ESLint } = require('eslint');
const path = require('path');
const config = require('../src');

/**
 * Tests for `@untile/eslint-config-typescript`.
 */

describe('@untile/eslint-config-typescript', () => {
  const linter = new ESLint({
      overrideConfig: config,
      overrideConfigFile: true
    });

  it('should not generate any violation for correct code', async () => {
    const source = path.join(__dirname, 'fixtures', 'correct.ts');
    const results = await linter.lintFiles([source]);

    expect(results[0]?.errorCount).toEqual(0);
  });

  it('should generate violations for incorrect code', async () => {
    const source = path.join(__dirname, 'fixtures', 'incorrect.ts');
    const results = await linter.lintFiles([source]);
    const violations = results[0].messages.map(violation => violation.ruleId);

    expect(violations).toEqual([
      '@typescript-eslint/no-unused-vars',
      '@typescript-eslint/no-use-before-define',
      '@typescript-eslint/no-explicit-any',
      "@typescript-eslint/consistent-type-definitions",
      "perfectionist/sort-interfaces"
    ]);
  });
});
