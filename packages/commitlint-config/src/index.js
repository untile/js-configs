/**
 * Allowed verbs for commit types.
 */

const verbs = [
  'Add',
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

/**
 * Export `@untile/commitlint-config` configuration preset.
 */

module.exports = {
  // Ignore patterns for special commits
  ignores: [
    message => /^fixup! /i.test(message),
    message => /^squash! /i.test(message),
    message => message.toLowerCase().startsWith('wip'),
    message => {
      return ['drop', 'pick', 'reword'].some(keyword =>
        message.toLowerCase().startsWith(keyword)
      );
    },
    // Dependabot check
    message => message.split('\n')[0].startsWith('Bump '),
    // Merge commits
    message => message.startsWith('Merge ')
  ],

  // Use custom parser preset for handling optional issue references
  parserPreset: require.resolve('./parser-preset'),

  // Keep function-rules plugin for custom validations
  plugins: ['commitlint-plugin-function-rules'],

  rules: {
    // Body rules (keep existing)
    'body-case': [2, 'always', 'sentence-case'],
    'body-full-stop': [0],
    'body-leading-blank': [2, 'always'],

    // Footer rules
    'footer-leading-blank': [2, 'always'],

    // Custom validation rule using function-rules plugin
    // Override type-enum to also check for quotes and spacing
    'function-rules/type-enum': [2, 'always', parsed => {
      // Check for quotes and spacing first
      if (/['"`]/.test(parsed.header)) {
        return [false, 'The commit message must not contain quotes or backticks'];
      }

      if (/\s{2,}/.test(parsed.header)) {
        return [false, 'The commit message must have single spaces between words'];
      }

      // Then validate the type enum
      if (!parsed.type) {
        return [false, 'type may not be empty'];
      }

      const allowed = verbs;

      if (!allowed.includes(parsed.type)) {
        return [false, `type must be one of [${allowed.join(', ')}]`];
      }

      return [true];
    }],

    // Header rules
    'header-full-stop': [2, 'never'],
    // Increased to accommodate issue references
    'header-max-length': [2, 'always', 100],
    'header-trim': [2, 'always'],

    // Scope rules (not used)
    'scope-case': [0],
    'scope-empty': [0],
    'scope-enum': [0],

    // Subject rules
    // Disabled - accept any case
    'subject-case': [0],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never'],
    'subject-min-length': [2, 'always', 3],

    // Disabled rules from conventional config
    'trailer-exists': [0],

    // Type rules - using standard commitlint rules with parser preset
    'type-case': [2, 'always', 'pascal-case'],
    'type-empty': [2, 'never'],
    // Disabled - handled by function-rules/type-enum
    'type-enum': [0]
  }
};
