import type React from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';

/**
 * React Hooks correct examples.
 *
 * Demonstrates proper React hooks usage patterns that should pass all hooks rules.
 */

/**
 * ✅ Correct: useEffect with exhaustive dependencies.
 */

function CounterWithEffect() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(2);

  useEffect(() => {
    // Effect runs when count or multiplier changes
    document.title = `Count: ${count * multiplier}`;
  }, [count, multiplier]); // ✅ All dependencies included

  return (
    <div>
      <p>Count: {count}</p>
      <p>Multiplier: {multiplier}</p>
      <button onClick={() => setCount(count + 1)} type={'button'}>Increment</button>
      <button onClick={() => setMultiplier(multiplier + 1)} type={'button'}>Increase Multiplier</button>
    </div>
  );
}

/**
 * ✅ Correct: Hooks only at top level.
 */

function ConditionalRendering() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  // ✅ All hooks at top level
  useEffect(() => {
    if (isVisible) {
      setMessage('Component is visible');
    }
  }, [isVisible]);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)} type={'button'}>Toggle</button>
      {isVisible && <p>{message}</p>}
    </div>
  );
}

/**
 * ✅ Correct: useCallback with proper dependencies.
 */

function MemoizedCallback() {
  const [count, setCount] = useState(0);
  const [multiplier] = useState(2);

  const calculate = useCallback(() => {
    return count * multiplier;
  }, [count, multiplier]); // ✅ All dependencies included

  return (
    <div>
      <p>Result: {calculate()}</p>
      <button onClick={() => setCount(count + 1)} type={'button'}>Increment</button>
    </div>
  );
}

/**
 * ✅ Correct: useMemo with proper dependencies.
 */

const NUMBERS = [1, 2, 3, 4, 5];

function ExpensiveCalculation() {
  const [multiplier, setMultiplier] = useState(1);

  const sum = useMemo(() => {
    return NUMBERS.reduce((acc, num) => acc + num * multiplier, 0);
  }, [multiplier]); // ✅ All dependencies included

  return (
    <div>
      <p>Sum: {sum}</p>
      <button onClick={() => setMultiplier(multiplier + 1)} type={'button'}>Increase Multiplier</button>
    </div>
  );
}

/**
 * ✅ Correct: Custom hooks at top level.
 */

function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []); // ✅ Empty deps array is correct here

  return size;
}

function ComponentUsingCustomHook() {
  const { width, height } = useWindowSize(); // ✅ Hook at top level

  return (
    <div>
      Window size: {width} x {height}
    </div>
  );
}

/**
 * ✅ Correct: No children prop, use composition instead.
 */

function Container({ content }: { content: React.ReactNode }) {
  return <div className={'container'}>{content}</div>;
}

function ParentComponent() {
  return (
    <Container
      content={
        <div>
          <h1>Title</h1>
          <p>Content</p>
        </div>
      }
    />
  );
}

export {
  ComponentUsingCustomHook,
  ConditionalRendering,
  CounterWithEffect,
  ExpensiveCalculation,
  MemoizedCallback,
  ParentComponent
};
