import React, { useState } from "react";

const ColorPicker = () => {
  const colors = ["red", "green", "blue", "indigo", "purple", "orange"];
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Color Picker</h2>
      <div>
        {colors.map((color, index) => (
          <button
            key={index}
            onClick={() => setSelectedColor(color)}
            style={{
              backgroundColor: color,
              color: "white",
              border: "none",
              padding: "10px",
              margin: "5px",
              cursor: "pointer",
            }}
          >
            {color}
          </button>
        ))}
      </div>
      <div
        style={{
          marginTop: "20px",
          width: "200px",
          height: "200px",
          backgroundColor: selectedColor,
          border: "1px solid #000",
          display: "inline-block",
        }}
      >
        <p style={{ color: "white", padding: "10px" }}>{selectedColor}</p>
      </div>
    </div>
  );
};

export default ColorPicker;