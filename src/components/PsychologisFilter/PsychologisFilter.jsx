import { useState, useRef } from "react";
import icons from "../../assets/icons.svg";
const options = [
  { id: 1, label: "A to Z", value: "nameAsc" },
  { id: 2, label: "Z to A", value: "nameDesc" },
  { id: 3, label: "Less than 10$", value: "priceAsc" },
  { id: 4, label: "Greater than 10$", value: "priceDesc" },
  { id: 5, label: "Popular", value: "popular" },
  { id: 6, label: "Not popular", value: "notPopular" },
  { id: 7, label: "Show all", value: "all" },
];

const PsychologistFilter = ({ onFilterChange, sortCriterion }) => {
  const selectedOption =
    options.find((opt) => opt.value === sortCriterion) || options[0];
  const [selected, setSelected] = useState(selectedOption);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleChange = (option) => {
    if (!option.disabled) {
      setSelected(option);
      onFilterChange({ target: { value: option.value } });
      setIsOpen(false);
    }
  };

  return (
    <div className="relative w-64 mb-6">
      <label className="block text-sm mb-2 font-medium text-primary-color-gray leading-[1.28]">
        Filters
      </label>
      <button
        type="button"
        className="w-full flex items-center justify-between py-4 px-4.5 bg-primary-color hover:bg-primary-color-hover rounded-[14px] text-base font-inter font-medium leading-tight text-white focus:outline-none focus:ring-2 focus:ring-primary-color-hover transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected.label}</span>
        <svg
          className={`w-5 h-5 fill-white transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <use href={`${icons}#icon-chevron-down`}></use>
        </svg>
      </button>

      <div
        ref={dropdownRef}
        className={`absolute w-full mt-2 bg-white border border-primary-color rounded-[14px] shadow-filters-card max-h-56 overflow-auto z-10 transition-all duration-300 transform origin-top ${
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <ul>
          {options.map((option) => (
            <li
              key={option.id}
              onClick={() => handleChange(option)}
              className={`cursor-pointer px-4 py-2 text-gray-900 hover:bg-gray-100 flex justify-between items-center transition-colors ${
                option.disabled ? "text-gray-400 cursor-not-allowed" : ""
              }`}
            >
              <p
                className={`text-base font-inter transition-colors duration-300 ${
                  selected.value === option.value
                    ? "text-black"
                    : "text-black/30"
                } font-medium leading-tight`}
              >
                {option.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PsychologistFilter;
