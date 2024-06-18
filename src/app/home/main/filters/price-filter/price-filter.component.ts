import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrl: './price-filter.component.css'
})
export class PriceFilterComponent implements OnChanges {
  min: string | null = '';
  max: string | null = '';
  @Input() clearAllFilters: boolean = false;
  @Output() onPriceRangeSet = new EventEmitter<{ min: string, max: string }>();

  setPriceRange() {
    if (this.min && this.max && this.min < this.max) {
      this.onPriceRangeSet.emit({ min: this.min, max: this.max });
    }
  }

  clearPriceRange() {
    this.min = '';
    this.max = '';
    this.onPriceRangeSet.emit({ min: this.min, max: this.max });
  }

  ngOnChanges() {
    if (this.clearAllFilters) {
      this.clearPriceRange()
    }
  }
}
