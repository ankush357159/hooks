import React, { useRef } from "react";
import MyInput from "./MyInput";

export const ParentComponent = () => {
  const inputRef = useRef(null);
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.style.backgroundColor = "yellow";
    }
  };
  return (
    <div>
      <div>This is ParentComponent</div>
      <br />
      <div>MyInput is Child Component</div>
      <MyInput ref={inputRef} placeholder="Type something..." />
      <div>Button is Parent Component</div>
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};
