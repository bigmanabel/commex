import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { map } from 'rxjs';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  loadedProducts: Product[] = [];

  constructor(private http: HttpClient, private productService: ProductService) {}

  ngOnInit() {
    this.productService.fetchProducts().subscribe(products => {
      this.loadedProducts = products;
    });
  }

  onFetchProducts() {
    this.productService.fetchProducts();
  }
}
