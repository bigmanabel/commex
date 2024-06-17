import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrl: './price-filter.component.css'
})
export class PriceFilterComponent {
  min!: number;
  max!: number;
  @Output() onPriceRangeSet = new EventEmitter<{min: number, max: number}>();

  setPriceRange() {
    if (this.min && this.max && this.min < this.max) {
      console.log('Price range set');
      this.onPriceRangeSet.emit({min: this.min, max: this.max});
    } else
    console.log('Error')
  }
}
