import { Component, Input } from '@angular/core';
import { Region } from '../../../../shared/models/region.model';

@Component({
  selector: 'app-region-filter',
  templateUrl: './region-filter.component.html',
  styleUrl: './region-filter.component.css'
})
export class RegionFilterComponent {
  @Input() loadedRegions!: Region[];

  onRegionSelected() {
    console.log('changed')
  }
}
