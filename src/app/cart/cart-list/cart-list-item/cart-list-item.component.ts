import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from '../../../shared/models/cart.model';

@Component({
  selector: 'app-cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrl: './cart-list-item.component.css'
})
export class CartListItemComponent {
  @Input() cartItem!: Cart;
  @Output() addItemToCart = new EventEmitter<Cart>();
  @Output() deleteItemFromCart = new EventEmitter<Cart>();
  @Output() changeItemQuantity = new EventEmitter<Cart>();

  constructor() { }

  onDeleteFromCart() {
    this.deleteItemFromCart.emit(this.cartItem);
  }

  onAddtoCart() {
    this.addItemToCart.emit(this.cartItem);
  }

  onQuantityIncrease() {
    this.changeItemQuantity.emit({ ...this.cartItem, quantity: this.cartItem.quantity + 1 });
  }

  onQuantityDecrease() {
    this.changeItemQuantity.emit({ ...this.cartItem, quantity: this.cartItem.quantity - 1 });
  }

  arrayBufferToBase64(buffer: number[]): string {
    const binary = buffer.map(byte => String.fromCharCode(byte)).join('');
    return 'data:image/jpeg;base64,' + window.btoa(binary);
  }
}
