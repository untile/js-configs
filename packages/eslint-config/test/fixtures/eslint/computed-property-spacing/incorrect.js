// Rule: computed-property-spacing incorrect usage

// Example 1: Object with computed property with extra spaces
const obj = {
  [ key ]: value
};

// Example 2: Array access with extra spaces inside brackets
const arr = [1, 2, 3];
const item = arr[ 0];

Object.freeze({ arr, item, obj });
