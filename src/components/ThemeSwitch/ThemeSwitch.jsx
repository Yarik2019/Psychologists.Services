import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext, themes } from "../../contexts/ThemeContext";
import { animationsThemeSwitch } from "../../utils/animation";
const colors = [themes.green, themes.blue, themes.orange];

const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);

  const handleThemeChange = (color) => {
    setTheme(color);
    setIsVisible(false);
  };

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="fixed z-50 flex w-10 h-10 bottom-2 right-2">
      <motion.button
        onClick={toggleVisibility}
        className="absolute z-50 w-10 h-10 rounded-full focus:outline-none shadow-inner overflow-hidden"
        style={{ backgroundColor: theme, borderColor: "#000" }}
        whileHover={animationsThemeSwitch.button.hover}
        whileTap={animationsThemeSwitch.button.tap}
      ></motion.button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="flex mt-2 gap-2"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={animationsThemeSwitch.menu}
          >
            {colors.map((color) => (
              <motion.button
                key={color}
                className={`w-8 h-8 rounded-full focus:outline-none shadow-xl`}
                style={{ backgroundColor: color }}
                onClick={() => handleThemeChange(color)}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover={animationsThemeSwitch.item.hover}
                variants={animationsThemeSwitch.item}
              ></motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitch;
