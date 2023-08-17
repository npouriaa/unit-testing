import React, { useState } from "react";

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const restet = () => {
    setCount(0);
  };

  const switchSigns = () => {
    setCount((prev) => prev * -1);
  };
  return (
    <div>
      <h1>Counter</h1>
      <h3>
        count : <h1 data-testid="count">{count}</h1>
      </h3>
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
      <button onClick={() => restet()}>reset</button>
      <button onClick={() => switchSigns()}>switch signs</button>
    </div>
  );
};

export default Counter;
