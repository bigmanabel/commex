import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Category } from '../../shared/models/category.model';
import { Product } from '../../shared/models/product.model';
import { Region } from '../../shared/models/region.model';
import { FiltersComponent } from './filters/filters.component';
import { FilterService } from '../../shared/services/filter.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent
  implements OnInit, AfterViewInit, OnDestroy, OnChanges
{
  @Input() loadedCategories!: Category[];
  @Input() loadedProducts!: Product[];
  @Input() loadedRegions!: Region[];
  @ViewChild('filtersRef') filtersComponent!: FiltersComponent;

  private destroy$ = new Subject<void>();

  // Use filtered products from the service
  filteredProducts: Product[] = [];

  constructor(private filterService: FilterService) {}

  selectedRegion!: string;
  selectedCategory!: string;
  selectedPriceRange!: { min: string; max: string };
  sortBy: string = 'name';

  ngOnInit(): void {
    // Subscribe to filtered products
    this.filterService.filteredProducts$
      .pipe(takeUntil(this.destroy$))
      .subscribe((products) => {
        this.filteredProducts = products;
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Update filter service when products change
    if (changes['loadedProducts'] && this.loadedProducts) {
      this.filterService.setProducts(this.loadedProducts);
    }
  }

  ngAfterViewInit(): void {
    // Subscribe to filters changes after view is initialized
    if (this.filtersComponent) {
      this.filtersComponent.filters$
        .pipe(takeUntil(this.destroy$))
        .subscribe((filters) => this.onSetFilters(filters));

      this.filtersComponent.clearFilters$
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => this.onClearFilters());
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get isLoading(): boolean {
    return this.loadedProducts.length === 0;
  }

  onSetFilters(filters: {
    region: string;
    category: string;
    price: { min: string; max: string };
  }) {
    this.selectedRegion = filters.region;
    this.selectedCategory = filters.category;
    this.selectedPriceRange = filters.price;

    // Update the filter service
    this.filterService.updateFilters(filters);
  }

  onClearFilters() {
    this.selectedRegion = '';
    this.selectedCategory = '';
    this.selectedPriceRange = { min: '', max: '' };

    // Clear filters in the service
    this.filterService.clearFilters();
  }

  onSortChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.sortBy = target.value;
    // Implement sorting logic here
    console.log('Sort by:', this.sortBy);
  }
}
