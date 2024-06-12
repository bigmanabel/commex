import { Product } from "./product.model";

export interface Cart {
  id: number;
  quantity: number;
  product: Product;
}
