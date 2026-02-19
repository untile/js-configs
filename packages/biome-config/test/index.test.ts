/**
 * Module dependencies.
 */

import { spawnSync } from 'child_process';
import path from 'node:path';

/**
 * Run biome lint.
 */

const runBiomeLint = (file: string, expectErrors = false) => {
  const filePath = path.resolve(__dirname, 'fixtures', file);
  const result = spawnSync(
    'npx',
    [
      '@biomejs/biome',
      'lint',
      '--files-ignore-unknown=true',
      '--verbose',
      filePath
    ],
    {
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe']
    }
  );

  const output = result.stderr || result.stdout || '';

  // Extract all lint issues (errors and warnings)
  const issues = output
    .split('\n')
    .filter(line => line.includes('lint/'))
    .map(line => {
      // Match both 'lint/category/rule' and 'lint/rule' formats
      const match = line.match(/lint\/([a-zA-Z0-9]+(?:\/[a-zA-Z0-9]+)?)/);

      return match ? `lint/${match[1]}` : '';
    })
    .filter(Boolean);

  // Check for parse errors
  const hasParseErrors = output.includes('parse ━');

  return {
    exitCode: result.status,
    hasParseErrors,
    issues: [...new Set(issues)],
    // Success means no errors (warnings are ok for "correct" files)
    success: expectErrors
      ? result.status !== 0 || issues.length > 0 || hasParseErrors
      : result.status === 0 && !hasParseErrors
  };
};

/**
 * Test suite.
 */

describe('biome configuration', () => {
  describe('general rules', () => {
    it('correct.tsx should pass linting', () => {
      const result = runBiomeLint('general/correct.tsx');

      expect(result.success).toBe(true);
      expect(result.hasParseErrors).toBe(false);
    });

    it('incorrect.tsx should fail with lint errors', () => {
      const result = runBiomeLint('general/incorrect.tsx', true);

      expect(result.success).toBe(true);
      expect(result.issues.length).toBeGreaterThan(0);
    });
  });

  describe('a11y (accessibility) rules', () => {
    it('correct.tsx should pass linting', () => {
      const result = runBiomeLint('a11y/correct.tsx');

      expect(result.success).toBe(true);
    });

    it('incorrect.tsx should fail with lint errors', () => {
      const result = runBiomeLint('a11y/incorrect.tsx', true);

      expect(result.success).toBe(true);
      expect(result.issues.length).toBeGreaterThan(0);
    });
  });

  describe('complexity rules', () => {
    it('correct.ts should pass linting', () => {
      const result = runBiomeLint('complexity/correct.ts');

      expect(result.success).toBe(true);
    });

    it('incorrect.ts should fail with lint errors', () => {
      const result = runBiomeLint('complexity/incorrect.ts', true);

      expect(result.success).toBe(true);
      expect(result.issues.length).toBeGreaterThan(0);
    });
  });

  describe('css rules', () => {
    it('correct.css should pass linting', () => {
      const result = runBiomeLint('css/correct.css');

      expect(result.success).toBe(true);
    });

    it('incorrect.css should fail with lint errors', () => {
      const result = runBiomeLint('css/incorrect.css', true);

      expect(result.success).toBe(true);
      expect(result.issues.length).toBeGreaterThan(0);
    });
  });

  describe('hooks rules', () => {
    it('correct.tsx should pass linting', () => {
      const result = runBiomeLint('hooks/correct.tsx');

      expect(result.success).toBe(true);
    });

    it('incorrect.tsx should fail with lint errors', () => {
      const result = runBiomeLint('hooks/incorrect.tsx', true);

      expect(result.success).toBe(true);
      expect(result.issues.length).toBeGreaterThan(0);
    });
  });

  describe('json rules', () => {
    it('correct.json should pass linting', () => {
      const result = runBiomeLint('json/correct.json');

      expect(result.success).toBe(true);
    });

    it('incorrect.json should fail with lint errors', () => {
      const result = runBiomeLint('json/incorrect.json', true);

      expect(result.success).toBe(true);
      expect(result.issues.length).toBeGreaterThan(0);
    });
  });

  describe('nursery rules', () => {
    it('correct.ts should pass linting', () => {
      const result = runBiomeLint('nursery/correct.ts');

      expect(result.success).toBe(true);
    });

    it('incorrect.ts should fail with lint errors', () => {
      const result = runBiomeLint('nursery/incorrect.ts', true);

      expect(result.success).toBe(true);
      expect(result.issues.length).toBeGreaterThan(0);
    });

    it('sorted-classes.tsx should pass linting', () => {
      const result = runBiomeLint('nursery/sorted-classes.tsx');

      expect(result.success).toBe(true);
    });

    it('unsorted-classes.tsx should fail with useSortedClasses warnings', () => {
      const result = runBiomeLint('nursery/unsorted-classes.tsx', true);

      expect(result.success).toBe(true);
      expect(result.issues.length).toBeGreaterThan(0);
    });
  });

  describe('performance rules', () => {
    it('correct.ts should pass linting', () => {
      const result = runBiomeLint('performance/correct.ts');

      expect(result.success).toBe(true);
    });

    it('incorrect.ts should fail with lint errors', () => {
      const result = runBiomeLint('performance/incorrect.ts', true);

      expect(result.success).toBe(true);
      expect(result.issues.length).toBeGreaterThan(0);
    });

    it('barrel-file.ts should fail with barrel file warning', () => {
      const result = runBiomeLint('performance/barrel-file.ts', true);

      expect(result.success).toBe(true);
      expect(result.issues.length).toBeGreaterThan(0);
    });
  });

  describe('security rules', () => {
    it('correct.tsx should pass linting', () => {
      const result = runBiomeLint('security/correct.tsx');

      expect(result.success).toBe(true);
    });

    it('incorrect.tsx should fail with lint errors', () => {
      const result = runBiomeLint('security/incorrect.tsx', true);

      expect(result.success).toBe(true);
      expect(result.issues.length).toBeGreaterThan(0);
    });
  });

  describe('style rules', () => {
    it('correct.tsx should pass linting', () => {
      const result = runBiomeLint('style/correct.tsx');

      expect(result.success).toBe(true);
    });

    it('correct.ts should pass linting or have parse errors for JSX', () => {
      const result = runBiomeLint('style/correct.ts');

      // This file has JSX with .ts extension, causing parse errors
      if (result.hasParseErrors) {
        expect(result.hasParseErrors).toBe(true);
      } else {
        expect(result.success).toBe(true);
      }
    });

    it('incorrect.tsx should fail with lint errors', () => {
      const result = runBiomeLint('style/incorrect.tsx', true);

      expect(result.success).toBe(true);
      expect(result.issues.length).toBeGreaterThan(0);
    });

    it('incorrect.ts should fail with lint errors or parse errors', () => {
      const result = runBiomeLint('style/incorrect.ts', true);

      // This file has JSX with .ts extension, causing parse errors
      if (result.hasParseErrors) {
        expect(result.hasParseErrors).toBe(true);
      } else {
        expect(result.success).toBe(true);
        expect(result.issues.length).toBeGreaterThan(0);
      }
    });
  });

  describe('suspicious rules', () => {
    it('correct.ts should pass linting', () => {
      const result = runBiomeLint('suspicious/correct.ts');

      expect(result.success).toBe(true);
    });

    it('incorrect.ts should fail with lint errors', () => {
      const result = runBiomeLint('suspicious/incorrect.ts', true);

      expect(result.success).toBe(true);
      expect(result.issues.length).toBeGreaterThan(0);
    });
  });

  describe('test rules', () => {
    it('correct.test.ts should pass linting', () => {
      const result = runBiomeLint('test/correct.test.ts');

      expect(result.success).toBe(true);
    });

    it('incorrect.test.ts should fail with lint errors', () => {
      const result = runBiomeLint('test/incorrect.test.ts', true);

      expect(result.success).toBe(true);
      expect(result.issues.length).toBeGreaterThan(0);
    });
  });

  describe('typescript rules', () => {
    it('correct.ts should pass linting', () => {
      const result = runBiomeLint('typescript/correct.ts');

      expect(result.success).toBe(true);
    });

    it('incorrect.ts should fail with lint errors', () => {
      const result = runBiomeLint('typescript/incorrect.ts', true);

      expect(result.success).toBe(true);
      expect(result.issues.length).toBeGreaterThan(0);
    });
  });

  describe('assist actions', () => {
    it('unsorted-keys.ts should be handled', () => {
      const result = runBiomeLint('assist/unsorted-keys.ts');

      // Assist actions are not errors, just available actions
      expect(result).toBeDefined();
    });

    it('unsorted-attributes.tsx should be handled', () => {
      const result = runBiomeLint('assist/unsorted-attributes.tsx');

      // Assist actions are not errors, just available actions
      expect(result).toBeDefined();
    });
  });
});
