import React, { useState } from "react";
import CountChild from "./CountChild";

const CounterParent = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    count > 0 && setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <CountChild
        count={count}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
        reset={reset}
      />
    </div>
  );
};

export default CounterParent;
