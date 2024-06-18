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
    return this.http.get<{ statusCode: number, message: string, data: Cart[] }>('https://commex-api.onrender.com/cart')
      .pipe(map(
        response => {
            const responseArray = Array.from(response ? response.data : []);
          return responseArray;
        }
      ))
  }

  addToCart(cartItem: {product: number, quantity: number}) {
    return this.http.post('https://commex-api.onrender.com/cart', cartItem);
  }

  deleteFromCart(cartItem: Cart) {
    return this.http.delete(`https://commex-api.onrender.com/cart/${cartItem.id}`);
  }

  updateCart(cartItem: Cart) {
    return this.http.patch(`https://commex-api.onrender.com/cart/${cartItem.id}`, { quantity: cartItem.quantity });
  }
}
