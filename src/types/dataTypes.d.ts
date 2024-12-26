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
  images: string[];
};