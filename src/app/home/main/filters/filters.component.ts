import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Region } from '../../../shared/models/region.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  @Input() loadedRegions!: Region[];
  selectedRegion!: string;
  @Output() regionWasSelected = new EventEmitter<string>();

  onRegionSelected(region: string) {
    this.selectedRegion = region;
    this.regionWasSelected.emit(this.selectedRegion);
  }

}

