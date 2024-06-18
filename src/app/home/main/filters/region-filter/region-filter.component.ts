import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Region } from '../../../../shared/models/region.model';

@Component({
  selector: 'app-region-filter',
  templateUrl: './region-filter.component.html',
  styleUrl: './region-filter.component.css'
})
export class RegionFilterComponent implements OnChanges {
  @Input() loadedRegions!: Region[];
  @Input() clearAllFilters: boolean = false;
  @Output() regionSelected = new EventEmitter<string>();

  selectedRegion: string | null = null;


  onRegionSelected() {
    this.regionSelected.emit(this.selectedRegion!);
  }

  clearSelectedRegion() {
    this.selectedRegion = null;
    this.regionSelected.emit('');
  }

  ngOnChanges() {
    if (this.clearAllFilters) {
      this.clearSelectedRegion()
    }
  }
}
