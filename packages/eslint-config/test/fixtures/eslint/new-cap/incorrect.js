// Rule: new-cap incorrect usage

// Example 1: Incorrect usage of new-cap with a non-capitalized constructor
function examplefunction() {
  this.property = 'This is an invalid constructor usage.';
}

noop(new examplefunction());
