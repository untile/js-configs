// Exports
const foobar = 'bar';
export default foobar;

// Error handling
throw new Error('This is an error');

// Destructuring and object patterns
const sortedDestructureKeys = {
  age: 30,
  name: 'John',
  role: 'developer'
};

const { age, name, role } = sortedDestructureKeys;
noop(age, name, role);

const sortedDestructureKeysWithScopes = {
  role: 'developer',
  user: 'Jonh',
  'user-location/city': 'New York',
  'user/age': 30
};

noop(sortedDestructureKeysWithScopes);

// Imports ordering
import { bar, foo } from 'eslint';
import { alpha, beta } from 'eslint-plugin-import';
import * as namespace from 'eslint-plugin-promise';
import defaultExport from 'node:path';

noop(foo, bar, alpha, beta, defaultExport, namespace);

// Switch cases
const number = 1;

switch (number) {
  case 1:
    noop(number);
    break;
  default:
    noop(number);
    break;
}

// Padded blocks and classes
class Example {

  constructor() {
    this.value = 42;
  }

  method() {
    return this.value;
  }

}

noop(Example);

// Arrow functions and template literals
const arrowFunc = () => {
  const template = `Template ${number}`;

  return template;
};

noop(arrowFunc);

// Object spacing and shorthand
const obj = { bar, foo };

// Async/await usage
async function asyncExample() {
  const result = await Promise.resolve(42);

  return result;
}

noop(asyncExample);

// Rest/spread usage
const { ...rest } = obj;
const newObj = { ...obj };

noop(rest, newObj);

// No relative imports
import { util } from '@/utils/helper'; // eslint-disable-line

noop(util);
