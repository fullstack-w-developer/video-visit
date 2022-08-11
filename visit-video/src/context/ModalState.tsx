import React, { createContext, useState } from "react";


interface typpeModal {
  isOpen: boolean;
  setIsOpen?: any;
}

export const modalContext = createContext <typpeModal>({
    isOpen: false,
})

 export const ModalStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <modalContext.Provider value={{isOpen,setIsOpen}}>
      {children}
    </modalContext.Provider>
  );
};

