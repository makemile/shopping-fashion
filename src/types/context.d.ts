import { ReactNode } from "react";
import { Product } from "./dataTypes";

interface ShoppingCartProviderProps {
  children: ReactNode;
};

interface ProductsContextType{
    products: Product[];
    loading: boolean;
};
