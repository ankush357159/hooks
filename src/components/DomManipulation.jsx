import React, { useState, useEffect, useRef } from "react";

function DomManipulationExample() {
  const [count, setCount] = useState(0);
  const componentRef = useRef(null);

  useEffect(() => {
    const componentElement = componentRef.current;

    if (componentElement) {
      if (count % 2 === 0) {
        componentElement.style.backgroundColor = "lightblue";
      } else {
        componentElement.style.backgroundColor = "lightgreen";
      }
    }

    return () => {
      if (componentElement) {
        componentElement.style.backgroundColor = "";
      }
    };
  }, [count]);

  return (
    <div
      ref={componentRef}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
        marginLeft: "15%",
        marginTop: "5%"
      }}
    >
      <p style={{ marginRight: "10px"}}>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ marginTop: "4px"}}>Increment</button>
    </div>
  );
}

export default DomManipulationExample;
