import React, { useState } from "react";
import ChildWithoutMemo from "./ChildWithoutMemo";
import { styles } from "./MemoStyle";

const ParentWithoutMemo = () => {
  const [value, setValue] = useState(0);
  const [text, setText] = useState("");
  const handleClick = () => {
    console.log("Parent component");
    setValue((prev) => prev + 1);
  };

  return (
    <div style={styles.parentContainer}>
      <div style={styles.parentText}>This is from parent component</div>
      <ChildWithoutMemo value={value} />
      <button style={styles.button} onClick={handleClick}>
        Click Me!
      </button>
      <div>
        <input
          style={styles.input}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div style={styles.displayText}>{text}</div>
    </div>
  );
};

export default ParentWithoutMemo;
