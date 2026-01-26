import { ContextType } from "./context";

export interface Data {
  category: {
    title: any;
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
  count: number;
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
  title: string
}

export interface Sekeleton {
  
}
