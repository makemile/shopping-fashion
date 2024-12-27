import { ReactNode } from "react";
import { Product } from "./dataTypes";

interface ShoppingCartProviderProps {
  children: ReactNode;
};

interface ProductsContextType{
    products: Product[];
    loading: boolean;
};

export interface ContextType{
  count:number;
  cartProducts: Product[];
  setCount: (newCount:number) => avoid;
  setCardProducts: (newProducts:Product[]) => avoid;
  };

  
