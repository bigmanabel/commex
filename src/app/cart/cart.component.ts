import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/cart.model';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  loadedCart: Cart[] = [];
  selectedCartItem!: Cart;
  subTotal: number = 0;

  constructor(private http: HttpClient, private cartService: CartService) { }

  ngOnInit() {
    this.onFetchCart();
  }

  onFetchCart() {
    this.cartService.fetchCart().subscribe(cart => {
      this.subTotal = 0;
      this.loadedCart = cart;
      cart.forEach(item => {
        this.subTotal += item.product.price * item.quantity;
      });
    })
  }

  deleteItemFromCart(cartItem: Cart) {
    this.cartService.deleteFromCart(cartItem).subscribe(() => {
      this.onFetchCart();
    })
  }

  updateCart(cartItem: Cart) {
    this.cartService.updateCart(cartItem).subscribe(() => {
      this.onFetchCart();
    })
  }
}
