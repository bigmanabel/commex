import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../../shared/models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  @Input() loadedCategories!: Category[];
}
