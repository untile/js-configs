var legacy = 1;

export function compute(a: number, b: number, c: number, d: number, e: number) {
  return a + b + c + d + e + legacy;
}

export function shadow(items: string[]) {
  const value = 'outer';

  return items.map(value => value.length);
}

export function negated(flag: boolean) {
  if (!flag) {
    return 'no';
  } else {
    return 'yes';
  }
}

export function fail() {
  throw 'boom';
}

export const list: Array<string> = [];

export function mutate(input: number) {
  input = input + 1;

  return input;
}

export const label = 'Total: ' + list.length;

export function notify() {
  alert('done');
}
