import React, { useRef } from "react";

const HoverComponent = () => {
  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus();
    console.log(focusInput)
  };
  return (
    <div>
      <input type="text" placeholder="Enter your name" ref={inputRef} />
      <button onFocus={focusInput}>Focus Input</button>
    </div>
  );
};

export default HoverComponent;
