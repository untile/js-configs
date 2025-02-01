// Rule: no-unexpected-multiline incorrect usage

// Example 1: Not using semicolons to clarify function calls
const func = function() { noop(); }
`hello`;

noop(func);

