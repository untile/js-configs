/**
 * Module dependencies.
 */

const { ESLint } = require('eslint');
const path = require('node:path');

/**
 * Test suite.
 */

describe('@untile/eslint-config', () => {
  let linter;

  beforeAll(() => {
    linter = new ESLint({
      overrideConfig: require('../src/index.js'),
      overrideConfigFile: true
    });
  });

  it('should not generate any violations for all rules', async () => {
    const source = path.join(__dirname, 'fixtures', 'correct.js');
    const results = await linter.lintFiles([source]);

    expect(results[0]?.errorCount).toEqual(0);
  });

  it('should generate violations for incorrect code', async () => {
    const source = path.join(__dirname, 'fixtures', 'incorrect.js');
    const results = await linter.lintFiles([source]);
    const violations = results[0].messages.map(violation => violation.ruleId);

    expect(violations).toEqual([
      'import/no-anonymous-default-export',
      'new-with-error/new-with-error',
      'perfectionist/sort-objects',
      'perfectionist/sort-objects',
      'perfectionist/sort-objects',
      'perfectionist/sort-objects',
      'import/no-unresolved',
      'switch-case/no-case-curly',
      'switch-case/newline-between-switch-case',
      'switch-case/no-case-curly',
      'no-unused-vars',
      'padded-blocks',
      'padded-blocks',
      'no-unused-vars',
      'prefer-template',
      'quotes',
      'quotes',
      'no-unused-vars',
      'object-curly-spacing',
      'comma-spacing',
      'perfectionist/sort-objects',
      'object-curly-spacing',
      'require-await',
      'no-unused-vars',
      'newline-before-return',
      'no-relative-import-paths/no-relative-import-paths',
      'no-unused-vars',
      'import/no-unresolved',
      'no-console',
      'no-unused-vars',
      'no-unused-vars',
      'space-before-blocks',
      'no-restricted-imports',
      'no-unused-vars',
      'import/no-unresolved',
      'no-unused-vars',
      'quotes',
      'keyword-spacing',
      'no-unused-vars',
      'no-throw-literal',
      'no-unused-vars',
      'no-constant-condition',
      'semi',
      'no-unused-vars',
      'array-bracket-spacing',
      'comma-spacing',
      'comma-spacing',
      'array-bracket-spacing',
      'eol-last'
    ]);
  });
});
