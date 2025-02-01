// Rule: no-cond-assign correct usage

// Example 1: Using comparison operator instead of assignment in condition
const str = 'hello';
const str2 = 'hello';

if (str === str2) {
  noop(str);
}
