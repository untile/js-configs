// Rule: capitalized-comments incorrect usage

// Example 1: lowercase comment
const foo = noop();
// this comment starts with a lowercase letter
noop(foo);

/* example 3: Block comment with lowercase
 * this block comment starts lowercase
 * another lowercase line here
 */

// Example 4: Code with lowercase comments
const bar = () => null;

bar(); // this explains the code above

// Example 5: Documentation with lowercase
const baz = () => null;
noop(baz());

/**
 * this documentation comment
 * has lowercase lines
 */
