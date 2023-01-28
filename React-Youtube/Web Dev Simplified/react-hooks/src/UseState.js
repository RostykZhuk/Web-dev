import React, { useState } from 'react';

function countInitial() {
  console.log('run function');
  return 4;
}

function UseState() {
  const [count, setCount] = useState(() => countInitial());
  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default UseState;
