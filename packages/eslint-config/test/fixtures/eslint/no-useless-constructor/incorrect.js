// Rule: no-useless-constructor incorrect usage

// Example 1: Class with constructor that only calls super
class Child extends Parent {

  constructor(name) {
    super(name);
  }

}

const child = new Child('John');

noop(child);
