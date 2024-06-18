import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Category } from '../../../../shared/models/category.model';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.css'
})
export class CategoryFilterComponent implements OnChanges{
  @Input() loadedCategories!: Category[];
  @Input() clearAllFilters: boolean = false;
  @Output() categorySelected = new EventEmitter<string>();

  selectedCategory: string | null = null;

  onCategorySelected() {
    this.categorySelected.emit(this.selectedCategory!);
  }

  clearSelectedCategory() {
    this.selectedCategory = null;
    this.categorySelected.emit('');
  }

  ngOnChanges() {
    if (this.clearAllFilters) {
      this.clearSelectedCategory()
    }
  }
}
