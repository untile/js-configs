'use strict';

/**
 * Module dependencies.
 */

const { ESLint } = require('eslint');
const path = require('path');

/**
 * Tests for `@untile/eslint-config-react`.
 */

describe('@untile/eslint-config-react', () => {
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
      'react-hooks/exhaustive-deps',
      'react-hooks/exhaustive-deps',
      'react-hooks/exhaustive-deps',
      'react-hooks/exhaustive-deps',
      'react-hooks/exhaustive-deps',
      'react-hooks/rules-of-hooks',
      'react-hooks/rules-of-hooks',
      'react-hooks/rules-of-hooks',
      'react-hooks/rules-of-hooks',
      'react/no-unknown-property',
      'react/no-unknown-property',
      'react/jsx-closing-bracket-location',
      'react/no-unknown-property',
      'react/jsx-curly-brace-presence',
      'react/jsx-newline',
      'react/jsx-no-literals',
      'react/jsx-first-prop-new-line',
      'react/no-unknown-property',
      'react/no-unknown-property',
      'react/jsx-tag-spacing',
      'react/jsx-tag-spacing',
      'react/jsx-tag-spacing',
      'react/jsx-tag-spacing',
      'react/jsx-tag-spacing',
      'react/prefer-stateless-function'
    ]);
  });
});
