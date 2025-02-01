'use strict';

const { ESLint } = require('eslint');
const path = require('path');
const config = require('../src/index.js');

const untestableRules = [
  'import/export',
  'linebreak-style',
  'n/no-extraneous-import',
  'n/no-extraneous-require',
  'n/no-unpublished-bin',
  'n/no-unpublished-import',
  'n/no-unpublished-require',
  'n/no-unsupported-features/node-builtins',
  'n/no-unsupported-features/es-builtins',
  'n/no-unsupported-features/es-syntax',
  'n/process-exit-as-throw',
  'no-octal-escape',
  'no-shadow-restricted-names',
  'no-with',
  'security/detect-bidi-characters',
  'sql-template/no-unsafe-query',
  'wrap-iife'
];

const configAllRules = config.map(conf => {
  const rulesPairs = Object.entries(conf.rules);
  const activeRules = rulesPairs.filter(([rule, state]) => state !== 'off' && !untestableRules.includes(rule));

  return activeRules.map(([rule]) => rule);
});

const flattenedRules = configAllRules.flat().sort();

describe('@untile/eslint-config', () => {
  let linter;

  beforeAll(() => {
    linter = new ESLint({
      overrideConfig: config,
      overrideConfigFile: true
    });
  });

  it('should not generate any violations for all rules', async () => {
    const results = [];

    for (const rule of flattenedRules) {
      let plugin = 'eslint';
      let name = rule;

      if (rule.includes('/')) {
        const [rulePlugin, ruleName] = rule.split('/');
        plugin = rulePlugin;
        name = ruleName;
      }

      const source = path.join(__dirname, 'fixtures', plugin, name, 'correct.js');
      const ruleResults = await linter.lintFiles([source]);

      if (ruleResults[0]?.messages.length > 0) {
        results.push({
          label: rule,
          messages: ruleResults[0].messages
        });
      }
    }

    expect(results).toHaveLength(0);
  });

  it('should generate violations for incorrect code', async () => {
    for (const rule of flattenedRules) {
      let plugin = 'eslint';
      let name = rule;

      if (rule.includes('/')) {
        const [rulePlugin, ruleName] = rule.split('/');
        plugin = rulePlugin;
        name = ruleName;
      }

      const source = path.join(__dirname, 'fixtures', plugin, name, 'incorrect.js');
      const ruleResults = await linter.lintFiles([source]);

      // Verify that only violations for the tested rule are generated
      const violations = ruleResults[0].messages.map(message => message.ruleId);
      expect(violations).toEqual(expect.arrayContaining([rule]));
      expect(violations).toHaveLength(violations.filter(violation => violation === rule).length);
    }
  });
});
