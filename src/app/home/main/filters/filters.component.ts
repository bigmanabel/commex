import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Region } from '../../../shared/models/region.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  @Input() loadedRegions!: Region[];
  selectedRegion!: number;
  @Output() regionWasSelected = new EventEmitter<number>();

  onRegionSelected(region: number) {
    this.selectedRegion = region;
    this.regionWasSelected.emit(+this.selectedRegion);
  }

}

