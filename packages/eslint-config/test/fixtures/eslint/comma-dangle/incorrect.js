/* eslint-disable n/no-extraneous-import */
// Rule: comma-dangle incorrect usage

// Example 1: Object literal with trailing commas
const obj = {
  boo: 'bar',
  faz: 'qux',
};

// Example 2: Array literal with trailing commas
const arr = [
  1,
  2,
  3,
];

// Example 3: Function parameters with trailing commas
function foo(
  param1,
  param2,
) {
  return param1 + param2;
}

// Example 4: Object destructuring with trailing commas
const destructured = {
  object,
  object2,
};

// Example 5: Multiline import statement with trailing commas
import {
  Component,
  Fragment,
} from 'react';

noop(obj, arr, foo, destructured, Component, Fragment);
