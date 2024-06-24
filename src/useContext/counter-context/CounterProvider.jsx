import React, { useState } from "react";
import { CounterContext } from "./counterContext";

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <CounterContext.Provider
      value={{ count, increaseCount, decreaseCount, resetCount }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
