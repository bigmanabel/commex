import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { Category } from '../shared/models/category.model';
import { Product } from '../shared/models/product.model';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  loadedCategories: Category[] = [];
  loadedProducts: Product[] = [];

  constructor(private productService: ProductService, private categoryService: CategoryService) { }

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
  }
}
