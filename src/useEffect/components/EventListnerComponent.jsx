import React, { useCallback, useEffect, useState } from "react";

const EventListenerComponent = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const handleClick = useCallback(() => {
    const newCount = count + 1;
    setCount(newCount);
    setMessage(`You clicked ${newCount} times`);
  }, [count]);

  useEffect(() => {
    const button = document.getElementById("myButton");
    if (button) {
      button.addEventListener("click", handleClick);
    }
    return () => {
      if (button) {
        button.removeEventListener("click", handleClick);
      }
    };
  }, [handleClick]); 

  return (
    <div
      style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "5%" }}
    >
      <div style={{ maxWidth: "70%", textAlign: "center" }}>
        <p>This is a demo for event listener in useEffect hook</p>
        <button id="myButton" style={{ backgroundColor: "#a0bbbd", cursor: "pointer" }}>
          Click me
        </button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default EventListenerComponent;
