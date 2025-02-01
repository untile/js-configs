// Rule: padded-blocks incorrect usage

// Example 1: Block statement should not have padding
if (Math.random() > 0.5) {

  noop('hello');

}

// Example 2: Class declaration should have padding
class MyClass {
  static myMethod() {
    noop('hello');
  }
}

noop(MyClass);
