/**
 * Module dependencies.
 */

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

/**
 * Types.
 */

type Diagnostic = {
  category: string;
  location: { path: string };
};

type Report = {
  diagnostics: Diagnostic[];
  summary: { changed: number; unchanged: number };
};

/**
 * Constants.
 *
 * Fixtures live in `test/fixtures`, but the config relaxes rules for anything
 * under a `test/` folder. They are copied to `.fixtures-run` (outside `test/`)
 * so Biome evaluates them with the full rule set.
 */

const packageDir = path.resolve(__dirname, '..');
const fixturesDir = path.join(__dirname, 'fixtures');
const runDir = path.join(packageDir, '.fixtures-run');
const biomeBin = require.resolve('@biomejs/biome/bin/biome', { paths: [packageDir] });

/**
 * Run Biome and return the parsed JSON report.
 */

function runBiome(args: string[]): { report: Report; status: number | null } {
  const result = spawnSync(process.execPath, [biomeBin, ...args, '--reporter=json', '--max-diagnostics=none'], {
    cwd: packageDir,
    encoding: 'utf8'
  });

  return { report: JSON.parse(result.stdout) as Report, status: result.status };
}

/**
 * Group diagnostics by file, as a sorted list of unique categories.
 */

function categoriesByFile(diagnostics: Diagnostic[]): Record<string, string[]> {
  const files: Record<string, string[]> = {};

  for (const { category, location } of diagnostics) {
    files[location.path] = [...new Set([...(files[location.path] ?? []), category])].sort();
  }

  return files;
}

/**
 * Test suite.
 */

describe('@untile/biome-config', () => {
  beforeAll(() => {
    fs.rmSync(runDir, { force: true, recursive: true });
    fs.cpSync(fixturesDir, runDir, { recursive: true });
  });

  afterAll(() => {
    fs.rmSync(runDir, { force: true, recursive: true });
  });

  it('loads on the pinned Biome version without errors or deprecations', () => {
    const { report, status } = runBiome(['check', 'biome.json']);

    expect(report.diagnostics).toEqual([]);
    expect(status).toBe(0);
  });

  it('declares a peer range limited to the installed Biome minor', () => {
    const { peerDependencies } = JSON.parse(fs.readFileSync(path.join(packageDir, 'package.json'), 'utf8'));
    const biomePackage = require.resolve('@biomejs/biome/package.json', { paths: [packageDir] });
    const { version } = JSON.parse(fs.readFileSync(biomePackage, 'utf8')) as { version: string };
    const [major, minor, patch] = version.split('.').map(Number);
    const [, lower = '', upper = ''] =
      /^>=(\d+\.\d+\.\d+) <(\d+\.\d+\.\d+)$/.exec(peerDependencies['@biomejs/biome']) ?? [];
    const [lowerMajor, lowerMinor, lowerPatch] = lower.split('.').map(Number);

    expect(upper).toBe(`${major}.${minor + 1}.0`);
    expect([lowerMajor, lowerMinor]).toEqual([major, minor]);
    expect(lowerPatch).toBeLessThanOrEqual(patch);
  });

  it('accepts idiomatic code (lint, format and assists)', () => {
    const { report, status } = runBiome(['check', '.fixtures-run/valid']);

    expect(report.diagnostics).toEqual([]);
    expect(status).toBe(0);
  });

  it('reports exactly the expected rules on invalid code', () => {
    const { report } = runBiome(['lint', '.fixtures-run/invalid']);

    expect(categoriesByFile(report.diagnostics)).toEqual({
      '.fixtures-run/invalid/BadFileName.ts': ['lint/style/useFilenamingConvention'],
      '.fixtures-run/invalid/bug-detectors.ts': [
        'lint/correctness/noUnsafeFinally',
        'lint/correctness/noUnusedInstantiation',
        'lint/nursery/noFloatingPromises',
        'lint/nursery/noImpliedEval',
        'lint/nursery/noMissingThrow',
        'lint/nursery/noMisusedPromises',
        'lint/nursery/noObjectLiteralComparison',
        'lint/nursery/noXorAsExponentiation',
        'lint/security/noSecrets',
        'lint/suspicious/noBitwiseOperators',
        'lint/suspicious/noConstantBinaryExpressions',
        'lint/suspicious/noEmptyBlockStatements'
      ],
      '.fixtures-run/invalid/duplicates.css': ['lint/suspicious/noDuplicateSelectors'],
      '.fixtures-run/invalid/eslint-parity.ts': [
        'lint/complexity/useMaxParams',
        'lint/correctness/noUnusedVariables',
        'lint/style/noNegationElse',
        'lint/style/noParameterAssign',
        'lint/style/noUselessElse',
        'lint/style/useConsistentArrayType',
        'lint/style/useShorthandAssign',
        'lint/style/useTemplate',
        'lint/style/useThrowOnlyError',
        'lint/suspicious/noAlert',
        'lint/suspicious/noShadow',
        'lint/suspicious/noVar'
      ],
      '.fixtures-run/invalid/lodash-import.ts': ['plugin'],
      '.fixtures-run/invalid/performance.ts': [
        'lint/performance/noAccumulatingSpread',
        'lint/performance/noAwaitInLoops',
        'lint/performance/useTopLevelRegex',
        'lint/suspicious/noConsole'
      ],
      '.fixtures-run/invalid/react-rules.tsx': [
        'lint/correctness/noComponentHookFactories',
        'lint/correctness/noNestedComponentDefinitions',
        'lint/correctness/useExhaustiveDependencies',
        'lint/correctness/useHookAtTopLevel',
        'lint/security/noDangerouslySetInnerHtml',
        'lint/style/noImplicitBoolean',
        'lint/style/noJsxLiterals',
        'lint/style/useSelfClosingElements'
      ],
      '.fixtures-run/invalid/tailwind-order.tsx': ['lint/nursery/useTailwindSortedClasses']
    });
  });

  it('relaxes rules in tests, scripts, migrations and shadcn components', () => {
    const { report } = runBiome(['lint', '.fixtures-run/overrides']);

    expect(report.summary.unchanged + report.summary.changed).toBe(4);
    expect(report.diagnostics).toEqual([]);
  });

  it('enables the sorting assist actions', () => {
    const { report } = runBiome([
      'check',
      '--linter-enabled=false',
      '--formatter-enabled=false',
      '.fixtures-run/assist'
    ]);

    expect(categoriesByFile(report.diagnostics)).toEqual({
      '.fixtures-run/assist/manifest/package.json': ['assist/source/useSortedPackageJson'],
      '.fixtures-run/assist/unorganized-imports.ts': ['assist/source/organizeImports'],
      '.fixtures-run/assist/unsorted-attributes.tsx': ['assist/source/useSortedAttributes'],
      '.fixtures-run/assist/unsorted-interface.ts': ['assist/source/useSortedInterfaceMembers'],
      '.fixtures-run/assist/unsorted-keys.ts': ['assist/source/useSortedKeys'],
      '.fixtures-run/assist/unsorted-properties.css': ['assist/source/useSortedProperties']
    });
  });

  it('formats code with the Untile style', () => {
    const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'untile-biome-'));
    const file = path.join(directory, 'unformatted.ts');

    fs.copyFileSync(path.join(fixturesDir, 'format/unformatted.ts'), file);
    spawnSync(process.execPath, [biomeBin, 'format', '--write', `--config-path=${packageDir}`, file], {
      cwd: packageDir
    });

    expect(fs.readFileSync(file, 'utf8')).toBe(fs.readFileSync(path.join(fixturesDir, 'format/formatted.ts'), 'utf8'));
    fs.rmSync(directory, { force: true, recursive: true });
  });
});
