/**
 * TypeScript issues fixture.
 *
 * Tests the following rules:
 * - noEvolvingTypes (suspicious): type evolves over time
 * - noExplicitAny (suspicious): explicit any usage
 * - noBannedTypes (complexity): String, Number, Boolean, etc.
 */

// noEvolvingTypes - value type evolves
let evolvingValue = null;

evolvingValue = 'string';
evolvingValue = 123;
evolvingValue = true;

// noEvolvingTypes - another example
let anotherValue;

anotherValue = 'initial';
anotherValue = [1, 2, 3];
anotherValue = { key: 'value' };

// noExplicitAny - function parameter with any
function processDataBadly(data: any) {
  return data.someProperty;
}

// noExplicitAny - function return type with any
function getDataBadly(): any {
  return { value: 123 };
}

// noExplicitAny - variable with any
const anyVariable: any = 'something';

// noExplicitAny - array with any
const anyArray: any[] = [1, 'two', true];

// noBannedTypes - String instead of string
function processStringBadly(value: String): String {
  return value;
}

// noBannedTypes - Number instead of number
function processNumberBadly(value: Number): Number {
  return value;
}

// noBannedTypes - Boolean instead of boolean
function processBooleanBadly(value: Boolean): Boolean {
  return value;
}

// noBannedTypes - Object instead of object or Record
function processObjectBadly(value: Object): Object {
  return value;
}

// Correct alternatives for reference
function processStringGood(value: string): string {
  return value;
}

function processNumberGood(value: number): number {
  return value;
}

function processBooleanGood(value: boolean): boolean {
  return value;
}

function processObjectGood(value: Record<string, unknown>): Record<string, unknown> {
  return value;
}

export {
  anyArray,
  anyVariable,
  anotherValue,
  evolvingValue,
  getDataBadly,
  processBooleanBadly,
  processBooleanGood,
  processDataBadly,
  processNumberBadly,
  processNumberGood,
  processObjectBadly,
  processObjectGood,
  processStringBadly,
  processStringGood
};
