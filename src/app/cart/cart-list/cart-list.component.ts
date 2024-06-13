import { Component, OnInit } from '@angular/core';
import { Cart } from '../../shared/models/cart.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css'
})
export class CartListComponent implements OnInit {
  loadedCart: Cart[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.onFetchCart();
  }

  onFetchCart() {
    this.cartService.fetchCart().subscribe(cart => {
      this.loadedCart = cart;
    });
  }

  onCartItemDeleted(cartItem: Cart) {
    this.cartService.deleteFromCart(cartItem).subscribe(() => {
      this.onFetchCart();
    })
  }

  onCartItemAdded(cartItem: Cart) {
    this.cartService.addToCart(cartItem).subscribe(() => {
      this.onFetchCart();
    });
  }

  onUpdateQuantity(cartItem: Cart) {
    this.cartService.updateCart(cartItem).subscribe(() => {
      this.onFetchCart();
    });
  }
}
