/**
 * Verbs.
 */

const verbs = [
  'Add',
  'Bump',
  'Disable',
  'Enable',
  'Fix',
  'Improve',
  'Migrate',
  'Move',
  'Release',
  'Remove',
  'Replace',
  'Revert',
  'Update'
];

const verbsList = verbs.join('|');

/**
 * Regexes.
 */

const regexes = {
  atleastTwoWords: /(\w.+\s).+/,
  base: new RegExp(`^(${verbsList}) \\S+(?: \\S+)*$`),
  dependabot: /^Bump .+? from \S+ to \S+(?:\s+in the .+)?$/,
  noQuotes: /^[^'"`]+$/,
  startWith: new RegExp(`^(${verbsList}) .+$`),
  whitespace: /^\S+(?: \S+)*$/
};

/**
 * Export `@untile/commitlint-config` configuration preset.
 */

module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [
    message => /^fixup! /i.test(message),
    message => /^squash! /i.test(message),
    message => message.toLowerCase().startsWith('wip'),
    message => {
      return ['drop', 'pick', 'reword'].some(keyword =>
        message.toLowerCase().startsWith(keyword)
      );
    },
    message => regexes.dependabot.test(message)
  ],
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'body-case': [2, 'always', 'sentence-case'],
    'body-full-stop': [0],
    'function-rules/type-enum': [2, 'always', parsed => {
      if (!parsed.header.match(regexes.startWith)) {
        return [false, `The commit must start with: ${verbsList}`];
      }

      if (!parsed.header.match(regexes.atleastTwoWords)) {
        return [false, 'The commit must have at least two words'];
      }

      if (!parsed.header.match(regexes.whitespace)) {
        return [false, 'The commit must have a single whitespace between words'];
      }

      if (!parsed.header.match(regexes.noQuotes)) {
        return [false, 'The commit message must not contain quotes or backticks'];
      }

      if (parsed.header.match(regexes.base)) {
        return [true];
      }

      return [false, `The commit not match: ${regexes.base}`];
    }],
    'header-full-stop': [2, 'never'],
    'header-max-length': [2, 'always', 52],
    'scope-empty': [0],
    'subject-empty': [0],
    'trailer-exists': [0],
    'type-case': [0],
    'type-empty': [0],
    'type-enum': [0]
  }
};
