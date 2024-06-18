import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { Category } from '../shared/models/category.model';
import { Product } from '../shared/models/product.model';
import { CategoryService } from '../shared/services/category.service';
import { Region } from '../shared/models/region.model';
import { RegionService } from '../shared/services/region.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  loadedCategories: Category[] = [];
  loadedProducts: Product[] = [];
  loadedRegions: Region[] = [];

  constructor(private productService: ProductService, private categoryService: CategoryService, private regionService: RegionService) { }

  ngOnInit() {
    this.onFetch();
  }

  onFetch() {
    this.categoryService.fetchCategories().subscribe(categories => {
      this.loadedCategories = categories;
    });

    this.productService.fetchProducts().subscribe(products => {
      this.loadedProducts = products;
    });

    this.regionService.fetchRegions().subscribe(regions => {
      this.loadedRegions = regions;
    });
  }

  filterProducts(filters: { region: string, category: string, price: { min: string, max: string } }) {
    this.productService.filterProducts(filters).subscribe(products => {
      this.loadedProducts = products;
    });
  }
}
