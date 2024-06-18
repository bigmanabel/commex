import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../shared/models/category.model';
import { Product } from '../../shared/models/product.model';
import { Region } from '../../shared/models/region.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  @Input() loadedCategories!: Category[];
  @Input() loadedProducts!: Product[];
  @Input() loadedRegions!: Region[];
  @Output() setFilters = new EventEmitter<{ region: string, category: string, price: { min: string, max: string } }>();
  @Output() clearFilters = new EventEmitter<void>();

  selectedRegion!: string;
  selectedCategory!: string;
  seletedPriceRange!: { min: string, max: string };

  onSetFilters(filters: { region: string, category: string, price: { min: string, max: string } } ) {
    this.selectedRegion = filters.region;
    this.selectedCategory = filters.category;
    this.seletedPriceRange = filters.price;

    this.setFilters.emit({
      region: this.selectedRegion,
      category: this.selectedCategory,
      price: this.seletedPriceRange
    });
  }

  onClearFilters() {
    this.clearFilters.emit();
  }
}
