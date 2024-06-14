import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../../../shared/models/category.model';

@Component({
  selector: 'app-category-list-item',
  templateUrl: './category-list-item.component.html',
  styleUrl: './category-list-item.component.css'
})
export class CategoryListItemComponent {
  @Input() category!: Category;


}
