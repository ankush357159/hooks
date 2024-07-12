import React, { useRef } from "react";
import "./CounterRefEx.css";

const CounterRefEx = () => {
  const count = useRef(0);

  const handleClick = () => {
    count.current = count.current + 1;
  };
  return (
    <div>
      <p>Count: {count.current}</p>
      <button onClick={handleClick} className="button-ref">
        Increment
      </button>
    </div>
  );
};

export default CounterRefEx;
