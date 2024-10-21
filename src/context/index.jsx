import { createContext, useState, useEffect } from "react";
import { URLAPI } from "../utils/Api";
import axios from "axios";
import { useDebounce } from "../hooks";
import { initializeLocalStorage } from "../utils/localStorageUtils";

export const ShoppingCartContext = createContext();
initializeLocalStorage();
export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const [account, setAccount] = useState({});
  const [signOut, setSignOut] = useState(false);

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [productToShow, setProductToShow] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [order, setOrder] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filterItem, setFilterItem] = useState(null);
  const debouncedSearch = useDebounce(search, 500);
 
 
  

  useEffect(() => {
    if (debouncedSearch.length > 0) {
      setFilterItem(
        data?.filter((item) =>
          item.category.name
            .toLowerCase()
            .includes(debouncedSearch.toLowerCase())
        )
      );
    } else {
      setFilterItem(data);
    }
  }, [data, debouncedSearch]);

  useEffect(() => {
    async function fetchAPI() {
      setLoading(true);
      try {
        const response = await axios.get(URLAPI);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        console.info("finally")
      }
    }
    fetchAPI();
  }, []);

  const openProductDetail = () => setIsProductDetailOpen(true);
  const CloseProductDetail = () => setIsProductDetailOpen(false);
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
        loading,
        setData,
        search,
        setSearch,
        filterItem,
        debouncedSearch,
        account, 
        setAccount,
        signOut, 
        setSignOut
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
