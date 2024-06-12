import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
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
          const responseArray: Product[] = Array.from(response.data);
          return responseArray;
        }
      ))
  }
}


