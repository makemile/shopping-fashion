import { createContext, useState, useEffect } from "react";
import { URLAPI } from "../services/Api";
import axios from "axios";


export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const CloseProductDetail = () => setIsProductDetailOpen(false);
  const [productToShow, setProductToShow] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [order, setOrder] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      try {
        const response = await axios.get(URLAPI, {
          mode: "no-cors",
        });
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        console.info("finalizado");
      }
    }
    fetchAPI();
  }, []);

  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const CloseCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        CloseProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        CloseCheckoutSideMenu,
        order,
        setOrder,
        data,
        setData,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
