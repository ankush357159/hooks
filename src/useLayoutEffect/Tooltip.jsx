import React, { useRef, useState, useLayoutEffect } from "react";

function Tooltip({ text, targetRef }) {
  console.log(text, targetRef);
  const [tooltipHeight, setTooltipHeight] = useState(0);
  const tooltipRef = useRef(null);
  console.log(tooltipRef);

  useLayoutEffect(() => {
    const { height } = tooltipRef.current.getBoundingClientRect();
    setTooltipHeight(height);
  }, []);

  const styles = {
    top: targetRef.current
      ? targetRef.current.offsetTop + targetRef.current.offsetHeight
      : 0,
    left: targetRef.current ? targetRef.current.offsetLeft : 0,
    transform: `translateY(${tooltipHeight}px)`,
  };
  return (
    <div ref={tooltipRef} style={styles}>
      {text}
    </div>
  );
}
export default Tooltip;
