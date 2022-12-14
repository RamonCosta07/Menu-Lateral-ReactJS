import React, { useState, createContext, useContext } from "react";

// Interfaces
type MainContext = {
  showMenu: boolean;
  handleOpen: () => void;
};

type MainContextProvider = {
  children: React.ReactNode;
};

export const MainContext = createContext({} as MainContext);

export const MainContextProvider = ({ children }: MainContextProvider) => {
  const [showMenu, setShowMenu] = useState(false);

  function handleOpen() {
    setShowMenu(!showMenu);
  }

  return (
    <MainContext.Provider
      value={{
        handleOpen,
        showMenu,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMenu = () => useContext(MainContext);