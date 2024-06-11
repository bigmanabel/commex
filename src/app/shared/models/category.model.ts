import { Product } from "./product.model";

export interface Category {
  id: number;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  products: Product;
}