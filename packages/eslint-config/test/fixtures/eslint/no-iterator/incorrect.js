/* eslint-disable no-underscore-dangle */
// Rule: no-iterator incorrect usage

// Example 1: Using deprecated __iterator__ property to iterate over array
const arr = [1, 2, 3];
const iterator = arr.__iterator__();

while (iterator.hasNext()) {
  noop(iterator.next());
}

