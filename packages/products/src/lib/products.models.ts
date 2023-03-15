export interface Category {
  id: number;
  name: string;
  image: string
}

export interface Product {
  id: number;
  title: string;
  price: string;
  category: Category;
  description: string;
  images: string[];
}
