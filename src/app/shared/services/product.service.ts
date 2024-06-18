import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  fetchProducts() {
    return this.http.get<{ statusCode: number, message: string, data: Product[] }>('http://localhost:3000/products')
      .pipe(map(
        response => {
          const responseArray: Product[] = Array.from(response ? response.data : []);
          return responseArray;
        }
      ))
  }

  filterProducts(filters: { region: string, category: string, price: { min: string, max: string } }) {
    return this.http.get<{ statusCode: number, message: string, data: Product[] }>(`http://localhost:3000/products?region=${filters.region}&category=${filters.category}&min=${filters.price.min}&max=${filters.price.max}`)
      .pipe(map(
        response => {
          const responseArray: Product[] = Array.from(response ? response.data : []);
          return responseArray;
        }
      ))
  }
}
