/**
 * Module dependencies.
 */

import { spawnSync } from 'child_process';
import path from 'node:path';

/**
 * Run biome lint.
 */

const runBiomeLint = (file: string) => {
  const filePath = path.resolve(__dirname, 'fixtures', file);

  const result = spawnSync(
    'npx',
    [
      '@biomejs/biome',
      'lint',
      '--files-ignore-unknown=true',
      '--error-on-warnings',
      '--verbose',
      filePath
    ],
    {
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe']
    }
  );

  const output = result.stderr || result.stdout || '';

  const errors = output
    .split('\n')
    .filter(line => line.includes('lint/'))
    .map(line => {
      const match = line.match(/lint\/([^/]+\/[^/\s]+)/);

      return match ? `lint/${match[1]}` : '';
    })
    .filter(Boolean);

  return {
    errors: [...new Set(errors)],
    success: errors.length === 0
  };
};

/**
 * Test suite.
 */

describe('biome configuration', () => {
  it('correct.tsx should pass linting', () => {
    const result = runBiomeLint('correct.tsx');

    expect(result.success).toBe(true);
  });

  it('incorrect.tsx should fail with specific lint errors', () => {
    const result = runBiomeLint('incorrect.tsx');

    expect(result.success).toBe(false);
    expect(result.errors).toEqual([
      'lint/complexity/noUselessConstructor',
      'lint/suspicious/noEmptyBlockStatements',
      'lint/suspicious/noDoubleEquals',
      'lint/correctness/noUnusedVariables',
      'lint/suspicious/noConsole',
      'lint/correctness/noChildrenProp'
    ]);
  });
});
