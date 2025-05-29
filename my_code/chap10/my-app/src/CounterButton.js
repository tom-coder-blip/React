import React, { useState } from 'react';

function CounterButton({ label }) {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {label}: {count}
    </button>
  );
}

export default CounterButton;