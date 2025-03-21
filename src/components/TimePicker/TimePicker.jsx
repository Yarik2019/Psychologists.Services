import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import icons from "../../assets/icons.svg";

const timeSlots = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30"];

const TimePicker = ({ selectedTime, onTimeSelect, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        className={`w-full flex justify-between items-center py-4 px-4.5 text-black font-inter font-normal leading-tight border-1 border-solid rounded-xl focus:outline-none focus:ring-2 transition-all ${
          selectedTime
            ? "border-primary-color focus:ring-primary-color"
            : "border-gray-300 focus:ring-blue-300"
        } ${className}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{selectedTime || "00:00"}</span>
        <svg width="18" height="18" className="fill-current text-gray-600">
          <use href={`${icons}#icon-clock`} />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-[151px] h-[180px] bg-white shadow-lg rounded-xl p-4 z-10 overflow-y-scroll"
          >
            <p className="text-base font-medium text-black mb-4 leading-normal">
              Meeting time
            </p>
            <ul className="space-y-2">
              {timeSlots.map((time) => (
                <li
                  key={time}
                  className={`py-2 text-center text-base font-inter cursor-pointer rounded-lg leading-tight transition-all hover:text-black ${
                    selectedTime === time ? "text-black" : "text-black/30"
                  }`}
                  onClick={() => {
                    onTimeSelect(time);
                    setIsOpen(false);
                  }}
                >
                  {time}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

TimePicker.propTypes = {
  selectedTime: PropTypes.string,
  onTimeSelect: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default TimePicker;
