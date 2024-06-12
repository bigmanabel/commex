import { Category } from "./category.model";
import { Region } from "./region.model";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  category: Category;
  region: Region;
  image: {
    type: string;
    data: number[];
  };
  createdAt: Date;
  updatedAt: Date;
}
