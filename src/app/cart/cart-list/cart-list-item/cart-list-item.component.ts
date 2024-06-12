import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Cart } from '../../../shared/models/cart.model';

@Component({
  selector: 'app-cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrl: './cart-list-item.component.css'
})
export class CartListItemComponent {
  @Input() cartItem!: Cart;

  arrayBufferToBase64(buffer: number[]): string {
    const binary = buffer.map(byte => String.fromCharCode(byte)).join('');
    return 'data:image/jpeg;base64,' + window.btoa(binary);
  }
}
