// Rule: no-native-reassign incorrect usage

// Example 1: Reassigning native global objects
Object = 'foo';
window = {};

noop(Object, window);
