import { useContext, useState } from "react";
import { ThemeContext, themes } from "../../contexts/ThemeContext";

const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);

  const handleThemeChange = (color) => {
    setTheme(color);
  };

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const colors = [themes.green, themes.blue, themes.orange];

  return (
    <div className="fixed flex w-10 h-10  bottom-2 right-2">
      <button
        onClick={toggleVisibility}
        className={`absolute z-10 w-10 h-10 rounded-full focus:outline-none shadow-inner overflow-hidden ${
          isVisible ? "scale-110" : ""
        }`}
        style={{ backgroundColor: theme, borderColor: "#000" }}
      ></button>
      <div
        className={`flex mt-2 gap-2 transition-all duration-300 ${
          isVisible
            ? "opacity-100 -translate-x-[120px]"
            : "opacity-0 -translate-x-[100px]"
        }`}
      >
        {colors.map((color) => (
          <button
            key={color}
            className={`w-8 h-8 rounded-full focus:outline-none shadow-xl transition-all duration-200 ${
              theme === color ? "scale-110" : ""
            }`}
            style={{ backgroundColor: color }}
            onClick={() => handleThemeChange(color)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitch;
