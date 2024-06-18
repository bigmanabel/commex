import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Region } from '../../../shared/models/region.model';
import { Category } from '../../../shared/models/category.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  @Input() loadedRegions!: Region[];
  @Input() loadedCategories!: Category[];
  @Output() setFilters = new EventEmitter<{ region: string, category: string, price: { min: string, max: string } }>();

  clearAllFilters: boolean = false;
  selectedRegion: string = '';
  selectedCategory: string = '';
  selectedPriceRange: { min: string, max: string } = { min: '', max: '' };

  onSetFilters() {
    this.setFilters.emit({
      region: this.selectedRegion !== undefined ? this.selectedRegion : '',
      category: this.selectedCategory !== undefined ? this.selectedCategory : '',
      price: this.selectedPriceRange !== undefined ? this.selectedPriceRange : { min: '', max: '' }
    })
  }

  onClearFilters() {
    this.clearAllFilters = true;
  }

  isAnyFilterSet(): boolean {
    return this.selectedRegion !== '' ||
      this.selectedCategory !== '' ||
      this.selectedPriceRange.min !== '' ||
      this.selectedPriceRange.max !== '';
  }
}

