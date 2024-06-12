import { Component, Input } from '@angular/core';
import { Product } from '../../../../shared/models/product.model';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.css'
})
export class ProductListItemComponent {
  @Input() product!: Product;

  arrayBufferToBase64(buffer: number[]): string {
    const binary = buffer.map(byte => String.fromCharCode(byte)).join('');
    return 'data:image/jpeg;base64,' + window.btoa(binary);
  }
}
