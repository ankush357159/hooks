import React, { useContext } from "react";
import { CounterContext } from "./counterContext";

const CounterChild = () => {
  const { count, increaseCount, decreaseCount, resetCount } =
    useContext(CounterContext);
  return (
    <div>
      <button onClick={increaseCount}>Increase</button>
      <button>{count}</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default CounterChild;
