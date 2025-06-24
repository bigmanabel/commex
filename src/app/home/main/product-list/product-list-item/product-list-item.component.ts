import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../shared/models/product.model';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.css',
})
export class ProductListItemComponent {
  @Input() product!: Product;
  @Output() productAddedToCart = new EventEmitter<Product>();

  arrayBufferToBase64(buffer: number[]): string {
    const binary = buffer.map((byte) => String.fromCharCode(byte)).join('');
    return 'data:image/jpeg;base64,' + window.btoa(binary);
  }

  addToCart(product: Product): void {
    if (product.stockQuantity > 0) {
      this.productAddedToCart.emit(product);
      // You can add a toast notification here
      console.log(`Added ${product.name} to cart`);
    }
  }

  isOutOfStock(): boolean {
    return this.product.stockQuantity === 0;
  }

  getStockBadgeClass(): string {
    if (this.product.stockQuantity > 10) {
      return 'bg-success';
    } else if (this.product.stockQuantity > 0) {
      return 'bg-warning';
    } else {
      return 'bg-danger';
    }
  }

  getStockText(): string {
    if (this.product.stockQuantity > 10) {
      return 'In Stock';
    } else if (this.product.stockQuantity > 0) {
      return `${this.product.stockQuantity} left`;
    } else {
      return 'Out of Stock';
    }
  }
}
