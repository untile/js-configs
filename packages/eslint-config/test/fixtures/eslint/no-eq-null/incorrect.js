// Rule: no-eq-null incorrect usage

// Example 1: Incorrect usage of null comparison with loose equality
const value = null;

if (value == null) {
  noop();
}
