import { Component, OnInit } from '@angular/core';
import {loginfservice } from '../../loginf.service'
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  
})
export class ShoppingEditComponent implements OnInit  {
  theName='';
  theamount=0;

  constructor(private printingNum:loginfservice) { }

  ngOnInit(): void {
  }
  addInList(abc:string,num:number){
   
    this.printingNum.addIngredient(abc,num);

  }
  

  
}
