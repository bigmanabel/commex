import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  @Input() loadedProducts!: Product[];
  @Output() clearFilters = new EventEmitter<void>();

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }

  onClearFilters(): void {
    this.clearFilters.emit();
  }
}
