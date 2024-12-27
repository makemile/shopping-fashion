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

interface CardUIProps {
    title: string;
    images: string;
    category: string;
    price: number;
    context: ContextType;
    showProduct: (item: Product) => void;
    item: Product;
    id: number;
  }