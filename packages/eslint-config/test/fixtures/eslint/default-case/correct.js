// Rule: default-case correct usage

// Example 1: Switch statement with default case
switch (Math.floor(Math.random() * 3)) {
  case 0:
    noop('Zero');
    break;
  case 1:
    noop('One');
    break;
  default:
    noop('Other number');
    break;
}

// Example 2: Switch statement with default case and fall-through
const fruit = 'apple';

switch (fruit) {
  case 'banana':
    noop('Yellow fruit');
    break;
  case 'apple':
  case 'cherry':
    noop('Red fruit');
    break;
  default:
    noop('Unknown fruit');
    break;
}

