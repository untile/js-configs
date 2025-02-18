// Anonymous default export
export default function() {
  return 'bar';
}

// Error throwing
throw Error('This is an error');

// Unordered destructuring
const sortedDestructureKeys = {
  age: 30,
  name: 'John',
  role: 'developer'
};

const { name, age, role } = sortedDestructureKeys;
noop(name, age, role);

// Unordered imports
import { bar, foo } from 'eslint';
import { alpha, beta } from 'eslint-plugin-import';
import '@youre/eslint-plugin-sort-imports-es6-autofix';
import * as namespace from 'eslint-plugin-promise';
import defaultExport from 'path';

noop(foo, bar, alpha, beta, defaultExport, namespace);

// Incorrect switch case usage
switch (number) {
  case 1: {
    noop(number);
    break;
  }

  default: {
    noop(number);
    break;
  }
}

// Incorrect padded blocks
class BadExample {
  constructor() {
    this.value = 42;
  }
  method() {
    return this.value;
  }
}

// Incorrect template literal usage
const bad = "concatenation" + variable + "strings";

// Incorrect object spacing
const obj = {foo,bar};

// Missing await
async function badAsync() {
  const result = Promise.resolve(42);
  return result;
}

// Incorrect relative imports
import { util } from '../utils/helper';

// Incorrect console usage
console.log('debug');

// Variables issues
let x = 1;
x = 2;

// Incorrect spacing and formatting
function test(){return true;}

// Lodash incorrect import
import _ from 'lodash';

// Incorrect quotes
const str = "should use single quotes";

// Incorrect error handling
try {
  something();
} catch(e) {
  throw 'error string';
}

// Incorrect multiline
const multiline = true
  ? 'yes'
  : 'no'

// Incorrect array spacing
const arr = [ 1,2,3 ];