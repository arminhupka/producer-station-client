import { useState } from "react";

interface IReturn {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  onToggle: () => void;
}

const useModalState = (open = false): IReturn => {
  const [isOpen, setIsOpen] = useState(open);

  const onOpen = (): void => {
    setIsOpen(true);
  };
  const onClose = (): void => {
    setIsOpen(false);
  };
  const onToggle = (): void => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    onClose,
    onOpen,
    onToggle,
  };
};

export default useModalState;
