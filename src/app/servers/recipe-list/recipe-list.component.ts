import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() detailSlect =new EventEmitter<string>();
 abc='';
  recipies: Recipe[]=[
    new Recipe('mango ',' juice','https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg'),
    new Recipe('banana ',' juice','https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe.jpg'),
    new Recipe('other ',' abc ','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnXgQsC3qNTGxWfkk9_CMVmTArW_Lh9ChsEg&usqp=CAU')
  ];

  constructor() { }
  showDetails(some: string){
    this.abc=some;
    this.detailSlect.emit(this.abc);

  }


  ngOnInit(): void {
  }

}
