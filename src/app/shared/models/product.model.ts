import { Category } from "./category.model";
import { Region } from "./region.model";

export class Product {
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

  constructor(id: number, name: string, description: string, price: number, stockQuantity: number, category: Category, region: Region, image: { type: string, data: number[]; }, createdAt: Date, updateAt: Date) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.stockQuantity = stockQuantity;
    this.category = category;
    this.region = region;
    this.image = image;
    this.createdAt = createdAt;
    this.updatedAt = updateAt;
  }
}
