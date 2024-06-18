import { Product } from "./product.model";

export class Cart {
  public id?: number;
  public quantity: number;
  public product: Product;

  constructor(quantity: number, product: Product, id?: number,) {
    this.id = id;
    this.quantity = quantity;
    this.product = product;
  }
}
