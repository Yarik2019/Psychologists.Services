import { createContext } from "react";

export const themes = {
  green: "green",
  blue: "blue",
  orange: "orange",
};

export const ThemeContext = createContext({
  theme: themes.green,
  setTheme: () => {},
});
