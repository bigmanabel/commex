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
          const responseArray: Cart[] = Array.from(response.data);
          return responseArray;
        }
    ))
  }

  addToCart(cart: Cart) {
    this.http.post('http://localhost:3000/cart', cart).subscribe();
  }

  deleteCart(cart: Cart) {
    this.http.delete('http://localhost:3000/cart/' + cart.id).subscribe({
      next: () => {
        this.fetchCart();
      }
    });
  }
}
