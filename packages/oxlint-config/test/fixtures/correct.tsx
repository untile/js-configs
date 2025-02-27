import React, { useState } from 'react';

type UserData = {
  id: number;
  name: string;
};

function ExampleComponent({ initialCount }: { initialCount: number }) {
  const [count, setCount] = useState(initialCount);

  async function handleFetch() {
    try {
      const response = await fetch('https://api.example.com');
      const data = await response.json();
      return data;
    } catch (error) {
      // Proper error handling.
      return null;
    }
  }

  function calculateTotal(a: number, b: number, c: number): number {
    return a + b + c;
  }

  const users: UserData[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];

  return (
    <div className={'example'}>
      <button onClick={() => setCount(count + 1)} type={'button'}>
        Count: {count}
      </button>
      {users.length === 0 && <p>{'No users found'}</p>}
    </div>
  );
}

export default ExampleComponent;
