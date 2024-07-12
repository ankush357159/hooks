import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  offsetValue,
  reset,
} from "../slices/counterSlice";

const Counter = () => {
  const [value, setValue] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <div>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => dispatch(offsetValue(Number(value)))}>
          Offset
        </button>
      </div>
    </div>
  );
};

export default Counter;
