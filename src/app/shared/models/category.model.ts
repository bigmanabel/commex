import { Product } from "./product.model";

export class Category {
  id: number;
  name: string;
  image: {
    type: string;
    data: number[];
  };
  createdAt: Date;
  updatedAt: Date;
  products: Product[];

  constructor(id: number, name: string, image: { type: string; data: number[]; }, createdAt: Date, updatedAt: Date, products: Product[]) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.products = products;
  }
}
