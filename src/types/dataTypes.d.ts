import { ContextType } from "./context";

export interface Data {
  category: {
    id: number;
    image: string;
    name: string;
  };
  id: number;
  description: string;
  price: number;
  title: string;
};

export interface Product {
  id: number;
  title: string;
  price: number;
  images: string;
  category: {
    id: number;
    image: string;
    name: string;
  };
};

interface CardUIProps extends ContextType {
    title: string;
    images: string;
    category: string;
    price: number;
    showProduct: (item: Product) => void;
    item: Product;
    id: number;
  }

  export interface OrdersCardProps {
  count: number;
  price: number | string;
}

export interface Sekeleton {
  
}
