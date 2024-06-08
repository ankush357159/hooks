import React, { useReducer } from "react";
import { counterReducer, initialState } from "../CounterReducer";
import "./CounterComponent.css";

const CounterComponent = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div className="counter-container">
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default CounterComponent;
