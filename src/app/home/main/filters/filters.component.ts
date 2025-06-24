import { Component, Input, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Region } from '../../../shared/models/region.model';
import { Category } from '../../../shared/models/category.model';

interface FilterCriteria {
  region: string;
  category: string;
  price: { min: string; max: string };
}

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent implements OnDestroy {
  @Input() loadedRegions!: Region[];
  @Input() loadedCategories!: Category[];

  // Subjects for reactive programming
  private filtersSubject = new Subject<FilterCriteria>();
  private clearFiltersSubject = new Subject<void>();
  private destroy$ = new Subject<void>();

  // Public observables for parent components to subscribe to
  filters$ = this.filtersSubject.asObservable();
  clearFilters$ = this.clearFiltersSubject.asObservable();

  clearAllFilters: boolean = false;
  selectedRegion: string = '';
  selectedCategory: string = '';
  selectedPriceRange: { min: string; max: string } | null = null;

  onSetFilters() {
    this.filtersSubject.next({
      region: this.selectedRegion,
      category: this.selectedCategory,
      price: this.selectedPriceRange || { min: '', max: '' },
    });
  }

  onClearFilters() {
    this.clearAllFilters = true;
    this.selectedRegion = '';
    this.selectedCategory = '';
    this.selectedPriceRange = null;
    this.clearFiltersSubject.next();
  }

  isAnyFilterSet(): boolean {
    return (
      this.selectedRegion !== '' ||
      this.selectedCategory !== '' ||
      (this.selectedPriceRange !== null &&
        (this.selectedPriceRange.min !== '' ||
          this.selectedPriceRange.max !== ''))
    );
  }

  hasActiveFilters(): boolean {
    return this.isAnyFilterSet();
  }

  clearPriceFilter(): void {
    this.selectedPriceRange = null;
  }

  clearRegionFilter(): void {
    this.selectedRegion = '';
  }

  clearCategoryFilter(): void {
    this.selectedCategory = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.filtersSubject.complete();
    this.clearFiltersSubject.complete();
  }
}
