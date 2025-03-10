// import ReactDOM from "react-dom";
import { useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.classList.add("noScroll");
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("noScroll");
    };
  }, [isOpen, onClose]); // Ensure no unnecessary re-renders

  if (!isOpen) return null; // If modal is not open, return null to prevent rendering
  return (
    <div className="backdrop" onClick={onClose}>
      <div className="window" onClick={(e) => e.stopPropagation()}>
        <button className="closeButton" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;
