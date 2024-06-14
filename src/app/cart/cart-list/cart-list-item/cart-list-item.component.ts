import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from '../../../shared/models/cart.model';

@Component({
  selector: 'app-cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrl: './cart-list-item.component.css'
})
export class CartListItemComponent {
  @Input() cartItem!: Cart;
  @Output() addItemToCart = new EventEmitter<void>();
  @Output() deleteItemFromCart = new EventEmitter<void>();
  @Output() increaseItemQuantity = new EventEmitter<void>();
  @Output() decreaseItemQuantity = new EventEmitter<void>();

  constructor() { }

  onDeleteFromCart() {
    this.deleteItemFromCart.emit();
  }

  onAddtoCart() {
    this.addItemToCart.emit();
  }

  onQuantityIncrease() {
    this.increaseItemQuantity.emit();
  }

  onQuantityDecrease() {
    this.decreaseItemQuantity.emit();
  }

  arrayBufferToBase64(buffer: number[]): string {
    const binary = buffer.map(byte => String.fromCharCode(byte)).join('');
    return 'data:image/jpeg;base64,' + window.btoa(binary);
  }
}
