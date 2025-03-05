import React, { useState } from 'react';

type Props = {
  initialCount: number;
};

function Counter({ initialCount }: Props) {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className={'counter'}>
      <p>{`Current count: ${count}`}</p>

      <button onClick={handleIncrement} type={'button'}>
        {'Increment'}
      </button>
    </div>
  );
}

export default Counter;
