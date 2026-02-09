export interface Product {
  id: string;
  category: string;
  name: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  price: number;
  image: string;
  stock: number;
  brand?: string;
  featured?: boolean;
}


