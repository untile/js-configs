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

    it('should ignore interactive rebase', async () => {
      const keywords = ['drop', 'fixup', 'pick', 'reword', 'squash'];

      for (const keyword of keywords) {
        const result = await linter(`${keyword} Add foobar`);

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
  });
});
