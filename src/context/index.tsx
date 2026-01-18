import React, { useState, useEffect, ReactNode } from "react";
import { useDebounce } from "../hooks";
import { initializeLocalStorage } from "../utils/localStorageUtils";
import { ContextType } from "../types/context";
import { fetchProducts } from "../components/service/apiService";
import { Data, Product } from "../types/dataTypes";

export const ShoppingCartContext = React.createContext<ContextType | undefined>(
  undefined,
);

initializeLocalStorage();
export const ShoppingCartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [count, setCount] = useState<number>(0);

  const [account, setAccount] = useState({});
  const [signOut, setSignOut] = useState(false);

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [productToShow, setProductToShow] = useState({});
  const [order, setOrder] = useState<any>([]);
  const [data, setData] = useState<Data[]>([]);
  console.log(data);
  const [loading, setLoading] = useState<boolean>(false);
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filterItem, setFilterItem] = useState<Data[]>([]);
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearch?.length > 0) {
      setFilterItem(
        data?.filter((item) =>
          item.category.name
            .toLowerCase()
            .includes(debouncedSearch.toLowerCase()),
        ),
      );
    } else {
      setFilterItem(data);
    }
  }, [data, debouncedSearch]);

  useEffect(() => {
    async function fetchAPI() {
      setLoading(true);
      try {
        const response = await fetchProducts();
        setData(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        console.info("finally");
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
        setSignOut,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
