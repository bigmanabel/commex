import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  loadedProducts: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchProducts();
  }

  onFetchProducts() {
    this.fetchProducts();
  }

  private fetchProducts() {
    this.http.get<{ statusCode: number, message: string, data: Product[] }>('http://localhost:3000/products')
      .pipe(map(
        response => {
          const responseArray: Product[] = Array.from(response.data);
          return responseArray;
        }
      ))
      .subscribe(products => {
        this.loadedProducts = products;
      })
  }

}
