/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

/**
 * Module dependencies.
 */

const { ESLint } = require('eslint');
const path = require('path');

/**
 * Tests for `@untile/eslint-config-typescript-react-native`.
 */

describe('@untile/eslint-config-typescript-react-native', () => {
  const linter = new ESLint({
    overrideConfigFile: path.join(__dirname, '..', 'src', 'index.js')
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
      'no-restricted-imports',
      'react/jsx-no-literals',
      'react-native/no-unused-styles',
      'sort-keys',
      'react-native/split-platform-components',
      'react-native/split-platform-components'
    ]);
  });
});
