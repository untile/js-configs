'use strict';

/**
 * Module dependencies.
 */

const { ESLint } = require('eslint');
const config = require('../src');
const path = require('path');

/**
 * Test suite.
 */

describe('@untile/eslint-config-typescript-react-native', () => {
  const linter = new ESLint({
    overrideConfig: config,
    overrideConfigFile: true
  });

  it('should not generate any violation for correct code', async () => {
    const source = path.join(__dirname, 'fixtures', 'correct.tsx');
    const results = await linter.lintFiles([source]);

    expect(results[0]?.errorCount).toEqual(0);
  });

  it('should generate violations for incorrect code', async () => {
    const source = path.join(__dirname, 'fixtures', 'incorrect.tsx');
    const results = await linter.lintFiles([source]);
    const violations = results[0].messages.map(violation => violation.ruleId);

    expect(violations).toEqual([
      'react/jsx-no-literals',
      'react-native/no-unused-styles',
      'react-native/sort-styles',
      'sort-keys',
      'react-native/split-platform-components',
      'react-native/split-platform-components',
      'import/no-unresolved',
      'n/no-missing-import'
    ]);
  });
});
