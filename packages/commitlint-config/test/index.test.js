/**
 * Module dependencies.
 */

const config = require('../src/index.js');

/**
 * Test suite.
 */

describe('@untile/commitlint-config-untile', () => {
  let linter;

  beforeAll(async () => {
    const { default: lint } = await import('@commitlint/lint');
    const { default: load } = await import('@commitlint/load');

    linter = async message => {
      const preparedConfig = await load(config);

      return lint(message, preparedConfig.rules, {
        parserOpts: preparedConfig.parserPreset?.parserOpts,
        ...preparedConfig
      });
    };
  });

  describe('correct', () => {
    it('should validate correctly if the subject complies with the rules', async () => {
      const result = await linter('Add foobar');

      expect(result.valid).toBe(true);
    });

    it('should ignore commit wip', async () => {
      const result = await linter('wip');

      expect(result.valid).toBe(true);
    });

    it('should ignore git commands', async () => {
      const commands = [
        'fixup! Add new feature',
        'squash! Update dependencies',
        'drop Add old feature',
        'pick Add something',
        'reword Fix typo'
      ];

      for (const command of commands) {
        const result = await linter(command);

        expect(result.valid).toBe(true);
      }
    });

    it('should ignore dependabot commits', async () => {
      const dependabotCommits = [
        'Bump @babel/traverse from 7.22.10 to 7.23.2',
        'Bump @babel/traverse from 7.22.10 to 7.26.9 in the npm_and_yarn group',
        'Bump @babel/traverse from 7.22.10 to 7.26.9 in the dependencies',
        'Bump eslint from 8.43.0 to 8.44.0',
        'Bump @types/react from 18.0.0 to 18.0.1',
        'Bump prettier from 2.8.8 to 3.0.0'
      ];

      for (const commit of dependabotCommits) {
        const result = await linter(commit);

        expect(result.valid).toBe(true);
      }
    });

    it('should validate correctly against a subject with body', async () => {
      const message = `Add foobar
      This commit also adds foobar.
      `;

      const result = await linter(message);

      expect(result.valid).toBe(true);
    });
  });

  describe('incorrect', () => {
    it('should fail when the subject does not start with a whitelisted verb', async () => {
      const result = await linter('Foo bar');

      expect(result.valid).toBe(false);
      expect(result.errors[0].name).toEqual('function-rules/type-enum');
    });

    it('should fail if subject is not sentence case', async () => {
      const result = await linter('add foobar');

      expect(result.valid).toBe(false);
      expect(result.errors[0].name).toEqual('function-rules/type-enum');
    });

    it('should fail if subject exceeds 52 chars', async () => {
      const result = await linter('Add lorem ipsum is simply dummy text of the printing a');

      expect(result.valid).toBe(false);
      expect(result.errors[0].name).toEqual('header-max-length');
    });

    it('should fail if subject has only one word', async () => {
      const result = await linter('Add');

      expect(result.valid).toBe(false);
      expect(result.errors[0].name).toEqual('function-rules/type-enum');
    });

    it('should fail if subject has an whitespace in the end', async () => {
      const result = await linter('Add foo ');

      expect(result.valid).toBe(false);
      expect(result.errors[0].name).toEqual('header-trim');
    });

    it('should fail if subject has more than one whitespace between words', async () => {
      const result = await linter('Add  foo');

      expect(result.valid).toBe(false);
      expect(result.errors[0].name).toEqual('function-rules/type-enum');
    });

    it('should fail if subject has a full-stop', async () => {
      const result = await linter('Add foo.');

      expect(result.valid).toBe(false);
      expect(result.errors[0].name).toEqual('subject-full-stop');
    });

    it('should fail if commit message contains double quotes', async () => {
      const result = await linter('Add "new feature"');

      expect(result.valid).toBe(false);
      expect(result.errors[0].name).toEqual('function-rules/type-enum');
      expect(result.errors[0].message).toEqual('The commit message must not contain quotes or backticks');
    });

    it('should fail if commit message contains single quotes', async () => {
      const result = await linter('Update \'dependencies\'');

      expect(result.valid).toBe(false);
      expect(result.errors[0].name).toEqual('function-rules/type-enum');
      expect(result.errors[0].message).toEqual('The commit message must not contain quotes or backticks');
    });

    it('should fail if commit message contains backticks', async () => {
      const result = await linter('Fix `bug` in component');

      expect(result.valid).toBe(false);
      expect(result.errors[0].name).toEqual('function-rules/type-enum');
      expect(result.errors[0].message).toEqual('The commit message must not contain quotes or backticks');
    });
  });
});
