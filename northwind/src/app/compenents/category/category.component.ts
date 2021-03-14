import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  dataLoaded = false;

  currentCategory: number = 0;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories() {
    console.log('api çağırılıyor');

    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
      console.log('api çağırıldı');
      this.dataLoaded = true;
    });
  }
  setCurrentCategory(categoryId:number){
    console.log(categoryId)
    this.currentCategory = categoryId;
  }
  getCurrentCategoryClass(categoryId:number){
    if(categoryId == this.currentCategory){
      return "list-group-item active"
    }    
    else
    return "list-group-item"
  }
}
