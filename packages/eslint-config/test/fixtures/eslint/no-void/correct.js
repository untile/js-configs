// Rule: no-void correct usage

// Example 1: Avoid using void to return undefined
const returnUndefined = () => null;

noop(returnUndefined());
