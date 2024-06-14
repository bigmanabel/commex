import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../shared/models/category.model';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  @Input() loadedCategories!: Category[];
  @Input() loadedProducts!: Product[];
  @Output() regionWasSelected = new EventEmitter<void>();

  onRegionSelected() {

  }
}
