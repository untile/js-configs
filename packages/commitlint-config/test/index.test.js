
/**
 * Module dependencies.
 */

const commitlint = require('@commitlint/lint');
const config = require('../src');
const load = require('@commitlint/load');

/**
 * Lint.
 */

const lint = async message => {
  const preparedConfig = await load.default(config);

  return commitlint.default(message, preparedConfig.rules, {
    parserOpts: preparedConfig.parserPreset.parserOpts,
    ...preparedConfig
  });
};

/**
  * `commitlint-config-untile` tests.
  */

describe('commitlint-config-untile', () => {
  describe('correct', () => {
    it('should validate correctly if the subject complies with the rules', () => {
      return lint('Add foobar').then(result => {
        expect(result.valid).toBe(true);
      });
    });

    it('should ignore commit wip', () => {
      return lint('wip').then(result => {
        expect(result.valid).toBe(true);
      });
    });

    it('should ignore interactive rebase', () => {
      const keywords = ['drop', 'fixup', 'pick', 'reword', 'squash'];

      keywords.forEach(keyword => {
        return lint(`${keyword} Add foobar`).then(result => {
          expect(result.valid).toBe(true);
        });
      });
    });

    it('should validate correctly against a subject with body', () => {
      const message = `Add foobar
    This commit also adds foobar.
    `;

      return lint(message).then(result => {
        expect(result.valid).toBe(true);
      });
    });
  });

  describe('incorrect', () => {
    it('should fail when the subject does not start with a whitelisted verb', () => {
      return lint('Foo bar').then(result => {
        expect(result.valid).toBe(false);
        expect(result.errors[0].name).toEqual('function-rules/type-enum');
      });
    });

    it('should fail if subject is not sentence case', () => {
      return lint('add foobar').then(result => {
        expect(result.valid).toBe(false);
        expect(result.errors[0].name).toEqual('function-rules/type-enum');
      });
    });

    it('should fail if subject exceeds 52 chars', () => {
      return lint('Add lorem ipsum is simply dummy text of the printing a').then(result => {
        expect(result.valid).toBe(false);
        expect(result.errors[0].name).toEqual('header-max-length');
      });
    });

    it('should fail if subject has only one word', () => {
      return lint('Add').then(result => {
        expect(result.valid).toBe(false);
        expect(result.errors[0].name).toEqual('function-rules/type-enum');
      });
    });

    it('should fail if subject has an whitespace in the end', () => {
      return lint('Add foo ').then(result => {
        expect(result.valid).toBe(false);
        expect(result.errors[0].name).toEqual('function-rules/type-enum');
      });
    });

    it('should fail if subject has more than one whitespace between words', () => {
      return lint('Add  foo').then(result => {
        expect(result.valid).toBe(false);
        expect(result.errors[0].name).toEqual('function-rules/type-enum');
      });
    });

    it('should fail if subject has a full-stop', () => {
      return lint('Add foo.').then(result => {
        expect(result.valid).toBe(false);
        expect(result.errors[0].name).toEqual('subject-full-stop');
      });
    });
  });
});
