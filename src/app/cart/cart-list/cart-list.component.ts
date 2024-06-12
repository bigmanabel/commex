import { Component, OnInit } from '@angular/core';
import { Cart } from '../../shared/models/cart.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
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
    this.cartService.fetchCart().subscribe(cart => {
      this.loadedCart = cart;
    });
  }

  onFetchCart() {
    this.cartService.fetchCart();
  }

  onAddToCart(cart: Cart) {
    this.cartService.addToCart(cart);
  }

  

}
