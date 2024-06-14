import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  fetchCategories() {
    return this.http.get<{ statusCode: number, message: string, data: Category[] }>('http://localhost:3000/categories')
      .pipe(map(
        response => {
          const responseArray: Category[] = Array.from(response.data);
          return responseArray;
        }
      ));
  }
}
