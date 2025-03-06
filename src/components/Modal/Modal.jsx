import ReactDOM from "react-dom";
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
  }, [isOpen, onClose]);

  return ReactDOM.createPortal(
    <div className="backdrop">
      <div className="window" onClick={(e) => e.stopPropagation()}>
        <button className="closeButton" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
