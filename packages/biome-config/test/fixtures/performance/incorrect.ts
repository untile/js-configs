/**
 * Performance violations fixture.
 *
 * Tests the following performance rules:
 * - noAwaitInLoops: await inside loops
 * - noAccumulatingSpread: spread operator in reduce accumulators
 * - useTopLevelRegex: regex defined inside functions
 */

type DataItem = {
  id: string;
  value: number;
};

type KeyValue = {
  key: string;
  value: number;
};

// noAwaitInLoops - await inside for loop
async function fetchDataBadly(urls: string[]) {
  const results = [];

  for (const url of urls) {
    const response = await fetch(url);
    const data = await response.json();

    results.push(data);
  }

  return results;
}

// noAwaitInLoops - await inside while loop
async function processWhileBadly(items: DataItem[]) {
  let index = 0;

  while (index < items.length) {
    await processItem(items[index]);
    index++;
  }
}

async function processItem(item: DataItem): Promise<void> {
  console.log(item);
}

// noAccumulatingSpread - O(n²) complexity
function mergeBadly(items: KeyValue[]) {
  return items.reduce((accumulator, item) => ({
    ...accumulator,
    [item.key]: item.value
  }), {});
}

// noAccumulatingSpread - another example
function combineArraysBadly(arrays: number[][]) {
  return arrays.reduce((accumulator, array) => [
    ...accumulator,
    ...array
  ], []);
}

// useTopLevelRegex - regex inside function
function matchPatternBadly(text: string) {
  const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  return text.match(emailPattern);
}

// useTopLevelRegex - regex in arrow function
const validateUrl = (url: string) => {
  const urlPattern = /^https?:\/\/.+/;

  return urlPattern.test(url);
};

export {
  combineArraysBadly,
  fetchDataBadly,
  matchPatternBadly,
  mergeBadly,
  processWhileBadly,
  validateUrl
};
