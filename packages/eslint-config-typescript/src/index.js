/**
 * Export `eslint-config-typescript` shared configuration preset.
 */

module.exports = {
  extends: [
    '@untile/eslint-config',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'sort-class-members',
    'sort-imports-es6-autofix',
    'typescript-sort-keys'
  ],
  rules: {
    '@typescript-eslint/comma-dangle': ['error'],
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/no-explicit-any': ['error', {
      fixToUnknown: true,
      ignoreRestArgs: false
    }],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': ['error'],
    'comma-dangle': 0,
    'new-cap': ['error', { capIsNewExceptions: ['BigNumber'] }],
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'sort-imports-es6-autofix/sort-imports-es6': [2, {
      ignoreCase: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
    }],
    'typescript-sort-keys/interface': 'error'
  }
};
