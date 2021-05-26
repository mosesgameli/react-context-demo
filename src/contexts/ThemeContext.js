import React, { createContext, useState } from "react";

export const ThemContext = createContext();

function ThemContextProvider(props) {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" }
  });

  const toggleTheme = () => {
    setTheme((prevState) => ({
      ...prevState,
      isLightTheme: !theme.isLightTheme
    }));
  };

  return (
    <ThemContext.Provider value={{ ...theme, toggleTheme }}>
      {props.children}
    </ThemContext.Provider>
  );
}

export default ThemContextProvider;
