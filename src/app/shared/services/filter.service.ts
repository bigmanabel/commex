import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { Product } from '../models/product.model';

export interface FilterCriteria {
  region: string;
  category: string;
  price: { min: string; max: string };
}

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private allProductsSubject = new BehaviorSubject<Product[]>([]);
  private filtersSubject = new BehaviorSubject<FilterCriteria>({
    region: '',
    category: '',
    price: { min: '', max: '' },
  });

  // Public observables
  allProducts$ = this.allProductsSubject.asObservable();
  filters$ = this.filtersSubject.asObservable();

  // Filtered products observable
  filteredProducts$: Observable<Product[]> = combineLatest([
    this.allProducts$,
    this.filters$,
  ]).pipe(map(([products, filters]) => this.applyFilters(products, filters)));

  constructor() {}

  // Set all products
  setProducts(products: Product[]): void {
    this.allProductsSubject.next(products);
  }

  // Update filters
  updateFilters(filters: FilterCriteria): void {
    this.filtersSubject.next(filters);
  }

  // Clear all filters
  clearFilters(): void {
    this.filtersSubject.next({
      region: '',
      category: '',
      price: { min: '', max: '' },
    });
  }

  // Get current filter values
  getCurrentFilters(): FilterCriteria {
    return this.filtersSubject.value;
  }

  // Private method to apply filters
  private applyFilters(
    products: Product[],
    filters: FilterCriteria
  ): Product[] {
    return products.filter((product) => {
      // Region filter
      if (filters.region && product.region.name !== filters.region) {
        return false;
      }

      // Category filter
      if (filters.category && product.category.name !== filters.category) {
        return false;
      }

      // Price filter
      if (filters.price.min || filters.price.max) {
        const price = product.price;
        const minPrice = filters.price.min ? parseFloat(filters.price.min) : 0;
        const maxPrice = filters.price.max
          ? parseFloat(filters.price.max)
          : Infinity;

        if (price < minPrice || price > maxPrice) {
          return false;
        }
      }

      return true;
    });
  }
}
