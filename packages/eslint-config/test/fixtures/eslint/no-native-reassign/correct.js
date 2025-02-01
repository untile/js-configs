// Rule: no-native-reassign correct usage

// Example 1: Using Object.defineProperty to add properties instead of reassigning natives
Object.defineProperty(window, 'newProperty', {
  configurable: true,
  enumerable: true,
  value: 'some value',
  writable: true
});

noop(window.newProperty);
