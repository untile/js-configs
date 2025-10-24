import { useEffect, useState } from 'react';

/**
 * React Hooks violations fixture.
 *
 * Tests the following correctness rules (from React domain):
 * - useExhaustiveDependencies: missing dependencies in hooks
 * - useHookAtTopLevel: hooks called conditionally
 */

function ReactHooksViolations() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(2);

  // useExhaustiveDependencies - missing 'count' and 'multiplier' in dependencies
  useEffect(() => {
    const result = count * multiplier;

    console.log(`Result: ${result}`);
  }, []);

  // useExhaustiveDependencies - missing 'count' in dependencies
  useEffect(() => {
    setCount(count + 1);
  }, [setCount]);

  // Correct example for reference
  useEffect(() => {
    const result = count * multiplier;

    console.log(`Result: ${result}`);
  }, [count, multiplier]);

  // useHookAtTopLevel - hook inside conditional
  if (count > 5) {
    const [error, setError] = useState(false);

    useEffect(() => {
      setError(true);
    }, []);
  }

  // useHookAtTopLevel - hook inside loop
  for (let index = 0; index < 3; index++) {
    const [value, setValue] = useState(index);

    console.log(value);
    setValue(index + 1);
  }

  return (
    <div>
      <p>{`Count: ${count}`}</p>

      <button
        onClick={() => setCount(count + 1)}
        type={'button'}
      >
        {'Increment'}
      </button>

      <button
        onClick={() => setMultiplier(multiplier + 1)}
        type={'button'}
      >
        {'Increase Multiplier'}
      </button>
    </div>
  );
}

export default ReactHooksViolations;
