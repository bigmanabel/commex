import { Product } from "./product.model";

export class Cart {
  public id: number;
  public quantity: number;
  public product: Product;

  constructor(id: number, quantity: number, product: Product) {
    this.id = id;
    this.quantity = quantity;
    this.product = product;
  }
}
