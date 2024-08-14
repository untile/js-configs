import { describe, it, expect } from 'vitest';
import { testCases } from './testCases';
import { ESLint } from 'eslint';
import path from 'path';

describe('@untile/eslint-config', () => {
  const linter = new ESLint({
    overrideConfigFile: path.join(__dirname, '..', 'eslint.config.js')
  });

  testCases.forEach(({ correct, incorrect, rule }) => {
    describe(rule, () => {
      correct && correct.forEach((test, index) => {
        it(`should not generate any violation for correct code example ${index + 1}`, async () => {
          const results = await linter.lintText(test);
          const relevantViolations = results[0].messages
            .filter(violation => violation.ruleId === rule)
            .map(violation => violation.ruleId);

          expect(relevantViolations.length).toEqual(0);
        });
      });

      incorrect && incorrect.forEach((test, index) => {
        it(`should generate violations for incorrect code example ${index + 1}`, async () => {
          const results = await linter.lintText(test);
          const foundViolations = results[0].messages.map(violation => violation.ruleId);
          const relevantViolations = foundViolations.filter(ruleId =>
            ruleId === rule
          );

          console.log(results[0].messages);

          expect(relevantViolations.length).toBeGreaterThan(0);
        });
      });
    });
  });
});
