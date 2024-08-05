import { createContext } from "react";

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    const value = "my context value"
  return (
    <ShoppingCartContext.Provider value={value}>{children}</ShoppingCartContext.Provider>
  );
};
