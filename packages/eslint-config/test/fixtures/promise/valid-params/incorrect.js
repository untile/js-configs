// Rule: promise/valid-params incorrect usage

// Example 1: Using incorrect number of arguments in promise methods
Promise.all([1, 2, 3], 4).catch(noop);
