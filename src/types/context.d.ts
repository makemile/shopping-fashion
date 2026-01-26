import React, { ReactNode } from "react";
import { Product } from "./dataTypes";


interface ProductsContextType {
  products: Product[];
  loading: boolean;
}

export interface ContextType {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setItems: React.Dispatch<React.SetStateAction<Data[]>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  openProductDetail: () => void;
  CloseProductDetail: () => void;
  isProductDetailOpen: boolean;
  productToShow: any; 
  setProductToShow: React.Dispatch<React.SetStateAction<any>>;
  cartProducts: Product[];
  setCartProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  isCheckoutSideMenuOpen: boolean;
  openCheckoutSideMenu: () => void;
  CloseCheckoutSideMenu: () => void;
  order: Product[];
  setOrder: React.Dispatch<React.SetStateAction<any[]>>;
  data: Data[];
  loading: boolean;
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  filterItem: Data[];
  debouncedSearch: string;
  account: any;
  setAccount: React.Dispatch<React.SetStateAction<any>>;
  signOut: boolean;
  setSignOut: React.Dispatch<React.SetStateAction<boolean>>;
  setFilterItem: React.Dispatch<React.SetStateAction<Data[]>>;
}

export interface IconProps {
  fillColor?: string;
  className?: string;
}