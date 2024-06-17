import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Region } from '../../../../shared/models/region.model';

@Component({
  selector: 'app-region-filter',
  templateUrl: './region-filter.component.html',
  styleUrl: './region-filter.component.css'
})
export class RegionFilterComponent implements OnInit {
  @Input() loadedRegions!: Region[];
  @Output() regionSelected = new EventEmitter<string>();

  selectedRegion!: string;

  ngOnInit(): void {
    this.selectedRegion = '';
  }

  onRegionSelected() {
    this.regionSelected.emit(this.selectedRegion);
  }

}
