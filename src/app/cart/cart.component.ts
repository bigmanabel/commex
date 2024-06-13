import { Component } from '@angular/core';
import { Cart } from '../shared/models/cart.model';
import { HttpClient } from '@angular/common/http';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  loadedCart: Cart[] = [];
  subTotal: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.fetchCart().subscribe(cart => {
      this.loadedCart = cart;
      this.loadedCart.forEach(cartItem => {
        this.subTotal += cartItem.product.price * cartItem.quantity;
      });
    });
  }
}
