/**
 * Module dependencies.
 */

const { spawnSync } = require('child_process');
const path = require('path');

/**
 * Get errors from oxlint output.
 */

function getOxlintErrors(response: string) {
  const errors: string[] = [];

  for (const line of response.split('\n')) {
    if (line.trim().match(/^[x×]/)) {
      const errorMatch = line.match(
        /(?:eslint|typescript-eslint|eslint-plugin-react)\([^)]+\)/
      );

      if (errorMatch) {
        errors.push(errorMatch[0]);
      }
    }
  }

  return errors;
}

/**
 * Linter.
 */

function runOxlint(file: string) {
  const filePath = path.resolve(__dirname, 'fixtures', file);
  const configPath = path.resolve(__dirname, '../.oxlintrc.json');

  const result = spawnSync(
    'npx',
    ['oxlint', filePath, '--config', configPath],
    { encoding: 'utf8' }
  );

  const errors = getOxlintErrors(result.stdout);

  return {
    errors,
    success: errors?.length === 0,
  };
}

/**
 * Test suite.
 */

describe('oxlint configuration', () => {
  test('correct.ts should pass oxlint validation', () => {
    const result = runOxlint('correct.tsx');

    expect(result.success).toBe(true);
  });

  test('incorrect.ts should fail oxlint validation', () => {
    const result = runOxlint('incorrect.tsx');

    expect(result.success).toBe(false);
    expect(result.errors).toEqual(
      expect.arrayContaining([
        'eslint(eqeqeq)',
        'eslint(max-params)',
        'eslint(no-nested-ternary)',
        'eslint(no-alert)',
        'eslint(no-console)',
        'eslint(no-else-return)',
        'eslint(no-eq-null)',
        'eslint(no-var)',
        'eslint(sort-imports)',
        'eslint-plugin-react(jsx-curly-brace-presence)',
        'eslint-plugin-react(no-danger)',
        'eslint-plugin-react(no-unknown-property)',
        'typescript-eslint(no-explicit-any)',
      ])
    );
  });
});
