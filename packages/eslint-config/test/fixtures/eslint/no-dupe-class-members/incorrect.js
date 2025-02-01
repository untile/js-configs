// Rule: no-dupe-class-members incorrect usage

// Example 1: Incorrect usage of class members
class MyClass {

  method() {
    noop();
  }

  method() {
    noop();
  }

}

noop(MyClass);
