import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart.model';
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
          let responseArray: Cart[] = [];
          if (response) {
            responseArray = Array.from(response.data);
          }
          return responseArray;
        }
    ))
  }

  addToCart(cartItem: Cart) {
    return this.http.post('http://localhost:3000/cart', cartItem);
  }

  deleteFromCart(cartItem: Cart) {
    return this.http.delete(`http://localhost:3000/cart/${cartItem.id}`);
  }

  updateCart(cartItem: Cart) {
    return this.http.patch(`http://localhost:3000/cart/${cartItem.id}`, {quantity: cartItem.quantity});
  }
}
