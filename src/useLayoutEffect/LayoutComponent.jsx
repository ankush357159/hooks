import React, { useRef } from "react";
import Tooltip from "./Tooltip";

const LayoutComponent = () => {
  const buttonRef = useRef();
  return (
    <div>
      <button ref={buttonRef}>Hover me!</button>
      <Tooltip text="This is tooltip text" targetRef={buttonRef} />
    </div>
  );
};

export default LayoutComponent;
