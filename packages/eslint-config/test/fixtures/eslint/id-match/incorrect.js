// Rule: id-match incorrect usage

// Example 1: Using invalid camelCase identifier with underscore in middle
const invalid_identifier = 'invalid_identifier';
Object.freeze({ invalid_identifier });

// Example 2: Using invalid identifier with mixed casing pattern
const userNAME = 'userNAME';
Object.freeze({ userNAME });

// Example 3: Using invalid identifier with symbols
const $symbol = '$symbol';
Object.freeze({ $symbol });
