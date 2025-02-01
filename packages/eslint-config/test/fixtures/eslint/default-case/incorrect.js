
// Rule: default-case incorrect usage

// Example 1: Switch statement without default case
switch (Math.floor(Math.random() * 2)) {
  case 0:
    noop('Zero');
    break;
  case 1:
    noop('One');
    break;
}

// Example 2: Switch statement with multiple cases but missing default
const fruit = 'apple';

switch (fruit) {
  case 'banana':
    noop('Yellow fruit');
    break;
  case 'apple':
  case 'cherry':
    noop('Red fruit');
    break;
}
