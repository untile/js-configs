// Rule: sort-keys correct usage

// Example 1: Object keys sorted alphabetically
const config = {
  env: {
    browser: true,
    node: true
  },
  extends: ['standard'],
  rules: {
    'no-console': 'error',
    'no-debugger': 'warn',
    semi: ['error', 'always']
  }
};

noop(config);

