import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const CloseProductDetail = () => setIsProductDetailOpen(false);
  const [productToShow, setProductToShow] = useState({});
  
  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        CloseProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
