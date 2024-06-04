import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [data, setData] = useState("");

  const updatedData = (value) => {
    setData(value);
  };

  return (
    <ThemeContext.Provider value={{ data, updatedData }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
