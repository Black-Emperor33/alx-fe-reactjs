import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Counter</h2>
      <p>Current Count: {count}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ margin: '0 10px' }}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;