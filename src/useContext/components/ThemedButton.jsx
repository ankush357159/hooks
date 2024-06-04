import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";

const ThemedButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      style={{
        background: theme === "light" ? "#ff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      Toggle Theme
    </button>
  );
};

export default ThemedButton;
