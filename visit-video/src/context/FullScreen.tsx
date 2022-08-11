import React, { createContext, useState } from "react";


interface typpeModal {
  fullScreen: boolean;
  setFullScreen?: any;
}

export const fullScreenContext = createContext <typpeModal>({
    fullScreen: false,
})

 export const FullScreenProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [fullScreen, setFullScreen] = useState(false);
  return (
    <fullScreenContext.Provider value={{fullScreen,setFullScreen}}>
      {children}
    </fullScreenContext.Provider>
  );
};

