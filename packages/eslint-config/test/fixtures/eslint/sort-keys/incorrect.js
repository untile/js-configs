// Rule: sort-keys incorrect usage

// Example 1: Object keys not sorted alphabetically
const config = {
  rules: {
    semi: ['error', 'always'],
    'no-debugger': 'warn',
    'no-console': 'error'
  },
  extends: ['standard'],
  env: {
    node: true,
    browser: true
  }
};

noop(config);
