import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from '../../shared/models/cart.model';
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css'
})
export class CartListComponent {
  @Input() loadedCart!: Cart[];
  @Output() itemWasDeletedFromCart = new EventEmitter<Cart>();
  @Output() cartWasUpdated = new EventEmitter<Cart>();

  onCartItemDeleted(cartItem: Cart) {
    this.itemWasDeletedFromCart.emit(cartItem);
  }

  onItemQuantityIncreased(cartItem: Cart) {
    this.cartWasUpdated.emit({ ...cartItem, quantity: cartItem.quantity + 1 });
  }

  onItemQuantityDecreased(cartItem: Cart) {
    this.cartWasUpdated.emit({ ...cartItem, quantity: cartItem.quantity - 1 });
  }
}
