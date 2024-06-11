import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Category } from '../../../shared/models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
  loadedCategories: Category[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchCategories();
  }

  onFetchCategories() {
    this.fetchCategories();
  }

  private fetchCategories() {
    this.http.get<{statusCode: number, message: string, data: Category[]}>('http://localhost:3000/categories')
      .pipe(map(
        response => {
          const responseArray: Category[] = Array.from(response.data);
          return responseArray;
        }
      ))
      .subscribe(categories => {
        this.loadedCategories = categories;
    })
  }
}
