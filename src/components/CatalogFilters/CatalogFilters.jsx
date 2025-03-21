import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import icons from "../../assets/icons.svg";
import { animationsFilter } from "../../utils/animation";
const options = [
  { id: 1, label: "A to Z", value: "nameAsc" },
  { id: 2, label: "Z to A", value: "nameDesc" },
  { id: 3, label: "Less than 10$", value: "priceAsc" },
  { id: 4, label: "Greater than 10$", value: "priceDesc" },
  { id: 5, label: "Popular", value: "popular" },
  { id: 6, label: "Not popular", value: "notPopular" },
  { id: 7, label: "Show all", value: "all" },
];

const CatalogFilters = ({ onFilterChange, sortCriterion }) => {
  const selectedOption =
    options.find((opt) => opt.value === sortCriterion) || options[0];
  const [selected, setSelected] = useState(selectedOption);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleChange = (option) => {
    if (!option.disabled) {
      setSelected(option);
      onFilterChange(option.value);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative w-64 mb-6" ref={dropdownRef}>
      <label className="block text-sm mb-2 font-medium text-primary-color-gray leading-[1.28]">
        Filters
      </label>

      <motion.button
        type="button"
        className="w-full flex items-center justify-between py-4 px-4.5 bg-primary-color hover:bg-primary-color-hover rounded-[14px] text-base font-inter font-medium leading-tight text-white focus:outline-none focus:ring-2 focus:ring-primary-color-hover transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={animationsFilter.button.hover}
        whileTap={animationsFilter.button.tap}
      >
        <span>{selected.label}</span>
        <motion.svg
          className="w-5 h-5 fill-white"
          animate={
            isOpen
              ? animationsFilter.icon.rotateUp
              : animationsFilter.icon.rotateDown
          }
        >
          <use href={`${icons}#icon-chevron-down`}></use>
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute w-full mt-2 bg-white border border-primary-color rounded-[14px] shadow-filters-card max-h-56 overflow-auto z-10"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={animationsFilter.dropdown}
          >
            <ul>
              {options.map((option) => (
                <motion.li
                  key={option.id}
                  onClick={() => handleChange(option)}
                  className={`cursor-pointer px-4 py-2 text-gray-900 flex justify-between items-center ${
                    option.disabled ? "text-gray-400 cursor-not-allowed" : ""
                  }`}
                  initial="hidden"
                  animate="visible"
                  whileHover={animationsFilter.listItem.hover}
                  variants={animationsFilter.listItem}
                >
                  <p
                    className={`text-base font-inter transition-colors duration-300 ${
                      selected.value === option.value
                        ? "text-black font-semibold"
                        : "text-black/30"
                    }`}
                  >
                    {option.label}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CatalogFilters;
