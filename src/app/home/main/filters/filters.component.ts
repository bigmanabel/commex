import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Region } from '../../../shared/models/region.model';
import { RegionService } from '../../../shared/services/region.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent implements OnInit {
  loadedRegions: Region[] = [];
  @Output() regionSelected = new EventEmitter<void>();

  constructor(private regionService: RegionService) { }

  ngOnInit() {
    this.onFetchRegions();
  }

  onRegionSelected() {
    this.regionSelected.emit();
  }

  onFetchRegions() {
    this.regionService.fetchRegions().subscribe(regions => {
      this.loadedRegions = regions;
    });
  }
}
