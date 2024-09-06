import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (count === 0) {
      setMessage('Click exceeded at 0');
    } else if (count >= 5) {
      setMessage('Click exceeded at 5');
    } else {
      setMessage('');
    }
    console.log(`Count: ${count}`);
  }, [count]);

  return (
    <div className='tutorial mt-3'>
      <h1 className="mb-3">Count: {count}</h1>
      {message && <p>{message}</p>}
      <button
        onClick={() => setCount(count - 1)}
        className="btn btn-outline btn-ghost"
        disabled={count <= 0}
      >
        Decrement
      </button>
      <button
        onClick={() => setCount(count + 1)}
        className="btn btn-outline btn-ghost"
        disabled={count >= 5}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
