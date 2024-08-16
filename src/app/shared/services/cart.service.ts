import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../models/cart.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  fetchCart() {
    return this.http.get<{ statusCode: number, message: string, data: Cart[] }>('http://localhost:3000/cart')
      .pipe(map(
        response => {
          const responseArray = Array.from(response ? response.data : []);
          return responseArray;
        }
      ))
  }

  addToCart(cartItem: { product: number, quantity: number }) {
    return this.http.post('http://localhost:3000/cart', cartItem);
  }

  deleteFromCart(cartItem: Cart) {
    return this.http.delete(`http://localhost:3000/cart/${cartItem.id}`);
  }

  updateCart(cartItem: Cart) {
    return this.http.patch(`http://localhost:3000/cart/${cartItem.id}`, { quantity: cartItem.quantity });
  }
}
