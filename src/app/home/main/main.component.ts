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
  @Output() regionWasSelected = new EventEmitter<string>();

  selectedRegion!: string;

  onRegionWasSelected(region: string) {
    this.selectedRegion = region;
    this.regionWasSelected.emit(this.selectedRegion);
  }
}
