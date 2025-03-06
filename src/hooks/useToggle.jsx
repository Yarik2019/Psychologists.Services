import { useState } from "react";

export const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModel = () => setIsOpen(true);
  const closeModel = () => setIsOpen(false);
  return { isOpen, openModel, closeModel };
};
