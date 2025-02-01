// Rule: no-dupe-class-members correct usage

// Example 1: Correct usage of class members
class MyClass {

  method() {
    noop();
  }

  method2() {
    noop();
  }

}

noop(MyClass);
