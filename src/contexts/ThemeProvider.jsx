import { useState, useEffect } from "react";
import { ThemeContext, themes } from "../contexts/ThemeContext.jsx";

const getTheme = () => {
  const savedTheme = window.localStorage.getItem("theme");
  return Object.values(themes).includes(savedTheme) ? savedTheme : themes.green;
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
