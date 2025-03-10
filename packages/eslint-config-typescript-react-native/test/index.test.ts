/**
 * Module dependencies.
 */

const { ESLint } = require('eslint');
const path = require('node:path');

/**
 * Test suite.
 */

describe('@untile/eslint-config-typescript-react-native', () => {
  const linter = new ESLint({
    overrideConfig: require('../src'),
    overrideConfigFile: true
  });

  beforeAll(() => {
    jest.spyOn(console, 'warn').mockImplementation(jest.fn());
  });

  afterAll(() => {
    jest.restoreAllMocks();
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
      'perfectionist/sort-objects',
      'react-native/split-platform-components',
      'react-native/split-platform-components',
      'import/namespace'
    ]);
  });
});
